import React, { useState } from 'react';

function SeatSelection({ screenId }) {
  const [seats, setSeats] = useState([]); // Fetch seat map from backend
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    if (!seat.isBooked) {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div>
    <h1>SeatSelection</h1>
      {seats.map((seat) => (
        <button
          key={seat.id}
          disabled={seat.isBooked}
          onClick={() => handleSeatClick(seat)}
        >
          {seat.number}
        </button>
      ))}
    </div>
  );
}

export default SeatSelection;