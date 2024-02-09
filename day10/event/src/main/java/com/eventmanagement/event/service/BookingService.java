package com.eventmanagement.event.service;

import com.eventmanagement.event.dto.request.BookingReq;
// import com.eventmanagement.event.repository.BookingRepo;
import com.eventmanagement.event.response.BasicResponse;
import com.eventmanagement.event.response.BookingResponse;

public interface BookingService {
    BasicResponse<BookingResponse> getAllBookings();
     BasicResponse<BookingResponse> createBooking(BookingReq bookingRequest);
     BasicResponse<BookingResponse>deletebooking(String bookingId);
     BasicResponse<BookingResponse> updateBooking(String bookingId, BookingReq request);
    //  BasicResponse<BookingsResponse> createBooking(BookingRequest bookingRequest);
}