package com.eventmanagement.event.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.eventmanagement.event.dto.request.BookingReq;

import com.eventmanagement.event.models.Bookings;
import com.eventmanagement.event.models.Payments;
import com.eventmanagement.event.repository.BookingRepo;
import com.eventmanagement.event.response.BasicResponse;
import com.eventmanagement.event.response.BookingResponse;
// import com.eventmanagement.event.service.BookingService;
import com.eventmanagement.event.response.PaymentResponse;

// import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.var;

@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements BookingService {

    private final BookingRepo bookingRepository;

     @Override
    public BasicResponse<BookingResponse> getAllBookings(){
         List<Bookings> bookings = bookingRepository.findAll();
          List<BookingResponse> bookingResponses = bookings.stream().map(booking-> BookingResponse.builder()
            .bookingId(booking.getBookingId())
            .eventType(booking.getEventType())
            .Venue(booking.getVenue())
            .Food(booking.getFood())
            .OtherVenue(booking.getOtherVenue())
            .Budget(booking.getBudget())
            .Theme(booking.getTheme())
            .Date(booking.getDate())
            .Time(booking.getTime())
            .OtherSpecifications(booking.getOtherSpecifications())
            .bookingName(booking.getBookingName())
            .build())
            .collect(Collectors.toList());
        return BasicResponse.<BookingResponse>builder()
            .message("Data fetched!!!")
            .data(bookingResponses)
            .build();
        }

        private final BookingRepo bookingRepo;
        @Override
        public BasicResponse<BookingResponse>createBooking(BookingReq request){
            var book = Bookings.builder()
            .bookingId(request.getBookingId())
            .bookingName(request.getBookingName())
            .eventType(request.getEventType())
            .Venue(request.getVenue())
            .Food(request.getFood())
            .OtherVenue(request.getOtherVenue())
            .Budget(request.getBudget())
            .Theme(request.getTheme())
            .Date(request.getDate())
            .Time(request.getTime())
            .OtherSpecifications(request.getOtherSpecifications())
            
            
            .build();
            bookingRepo.save(book);
            return BasicResponse.<BookingResponse>builder()
            .message("Completed")
            .build();
        }

  
   
        


        @Override
        public BasicResponse<BookingResponse> deletebooking(String bookingId) {
            // TODO Auto-generated method stub
            if (bookingRepo.existsById(bookingId)) {
                bookingRepo.deleteById(bookingId);
                return BasicResponse.<BookingResponse>builder()
                    .message("Booking deleted successfully")
                    .build();
            } else {
                return BasicResponse.<BookingResponse>builder()
                    .message("Booking not found with ID: " + bookingId)
                    .build();
            }
        }

        @Override
        public BasicResponse<BookingResponse> updateBooking(String bookingId, BookingReq request) {
            // Retrieve the existing booking from the repository
            Bookings existingBooking = bookingRepo.findById(bookingId)
                    .orElseThrow(() -> new RuntimeException("Booking not found with id: " + bookingId));
        
            // Update the booking details
            existingBooking.setBookingName(request.getBookingName());
            
        
            // Save the updated booking to the repository
            bookingRepo.save(existingBooking);
        
            // Construct and return the response
            BookingResponse updatedBookingResponse = mapToBookingResponse(existingBooking);
            return BasicResponse.<BookingResponse>builder()
                    .message("Booking updated successfully")
                    .data(List.of(updatedBookingResponse)) // Pass a list containing a single updated booking response
                    .build();
        }




       private BookingResponse mapToBookingResponse(Bookings payment) {
    return BookingResponse.builder()
    .bookingId(payment.getBookingId())
    .bookingName(payment.getBookingName())
  
            .build();
}


        // @Override
        // public BasicResponse<BookingResponse> createBooking(BookingRepo BookingRequest) {
        //     // TODO Auto-generated method stub
        //     throw new UnsupportedOperationException("Unimplemented method 'createBooking'");
        // }
}