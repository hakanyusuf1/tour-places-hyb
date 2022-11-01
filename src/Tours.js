import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  console.log(tours);

  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="underline"></div>
      </div>
      {tours.map((tour) => {
        return <Tour key={tour.id} tour={tour} removeTour={removeTour} />;
      })}
    </section>
  );
};

export default Tours;
