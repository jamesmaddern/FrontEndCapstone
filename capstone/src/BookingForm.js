import { useEffect, useState } from "react";

export default function BookingForm({ availableTimes, setAvailableTimes }) {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
  };

  return (
    <form
      style={{
        gridColumn: "2/8",
        display: "grid",
        maxWidth: "200px",
        gap: "20px",
      }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        onChange={(e) => {
          setDate(e.target.value);
          setAvailableTimes(e.target.value);
        }}
      />

      <label htmlFor="res-time">Choose Time</label>

      <select
        id="res-time"
        onChange={(e) => {
          setTime(e.target.value);
        }}
      >
        {availableTimes.map((e) => {
          return <option>{e}</option>;
        })}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="enter a guest"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => {
          setGuests(e.target.value);
        }}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        onChange={(e) => {
          setOccasion(e.target.value);
        }}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}
