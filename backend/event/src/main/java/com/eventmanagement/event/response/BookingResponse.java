package com.eventmanagement.event.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookingResponse {
    private String bookingId;
    
    private String bookingName;

    private String eventType;
  
    private String Venue;
    
    private String Food;
   
    private String OtherVenue;
 
    private String Budget;
 
    private String Theme;
 
    private String Date;
   
    private String Time;
   
    private String OtherSpecifications;
    
   
}