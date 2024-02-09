package com.eventmanagement.event.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PaymentReq {
    private long paymentId;
    private String paymentType;
    private long bookingId;
    private double amount;
}