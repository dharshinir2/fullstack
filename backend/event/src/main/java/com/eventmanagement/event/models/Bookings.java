package com.eventmanagement.event.models;


import com.eventmanagement.event.response.BookingResponse.BookingResponseBuilder;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name = "bookings")
public class Bookings {

    @Id
    @GeneratedValue(strategy=GenerationType.UUID)
    @Column(nullable = false)
    private String bookingId;

    @Column(nullable = false)
    private String bookingName;

  
    @Column
    private String eventType;
    @Column
    private String Venue;
    @Column
    private String Food;
    @Column
    private String OtherVenue;
    @Column
    private String Budget;
    @Column
    private String Theme;
    @Column
    private String Date;
    @Column
    private String Time;
    @Column
    private String OtherSpecifications;
 
}