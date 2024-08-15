import BookingForm from "../BookingForm";

function BookingPage({ availableTimes,setAvailableTimes }) {
  return (
    <div
      style={{
        backgroundColor: "green",
        display: "grid",
        gridTemplateColumns: "repeat(12,1fr)",
        gridTemplateRows: "repeat(30,20px)",
        gap: "20px",
      }}
    >
      <div
        style={{
          gridColumn: "3/11",
          gridRow: "4/14",
          backgroundColor: "white",
          display: "grid",
          gridTemplateColumns: "repeat(8,1fr)",
          gap: "20px",
        }}
      >
        <BookingForm
          availableTimes={availableTimes}
          setAvailableTimes={setAvailableTimes}
        />
      </div>
    </div>
  );
}
export default BookingPage;
