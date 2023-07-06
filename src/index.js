import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { StarRating } from "./StarRating";
// import "./index.css";
// import App from "./App";
const Test = () => {
  const [rating, setRating] = useState(0);
  return (
    <>
      <StarRating
        maxRating={5}
        color="gold"
        className="test"
        onSetRating={setRating}
      />
      <p> the movie was rated {rating} stars</p>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={"5"}
      messages={["Terrible", "Bad", "Okay", "Good", "Awesome"]}
      defaultRating={3}
    />
    <StarRating maxRating={5} size={24} color="green" className="test" />
    <Test />
  </React.StrictMode>
);
