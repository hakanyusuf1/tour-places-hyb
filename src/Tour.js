import React, { useState } from "react";

const Tour = ({ tour, removeTour }) => {
  const { id, image, info, name, price } = tour;
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} title={name} />

      <footer>
        <div className="tour-info">
          <h2>{name}</h2>
          <h4 className="tour-price"> {price}</h4>
        </div>
        <p className="">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show less " : "Show more"}
          </button>
        </p>

        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
