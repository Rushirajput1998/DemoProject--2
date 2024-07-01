
import React, { useState } from 'react';
import SeatSelection from '../SeatSelection/SeatSelection';

function TicketReservation() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [paymentInfo, setPaymentInfo] = useState({});

  const handlePayment = () => {
    // Send selectedSeats and paymentInfo to backend for processing
  };

  return (
    <div>
      <SeatSelection onSeatsSelected={setSelectedSeats} />
      {/* Payment Form */}
      <button onClick={handlePayment}>Proceed to Payment</button>
    </div>
  );
}

export default TicketReservation;
