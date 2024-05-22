import { Button } from "@mantine/core";
import React, { useState } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([
    { id: 1, text: "This is Review one.", updated: "21st May 2024" },
    { id: 2, text: "This can be the second review.", updated: "21st May 2024" },
    {
      id: 3,
      text: "This can be third review and many review can be added.",
      updated: "21st May 2024",
    },
  ]);
  const [newReview, setNewReview] = useState("");

  const handleInputChange = (event) => {
    setNewReview(event.target.value);
  };

  const handleSubmit = () => {
    const nextId = reviews.length + 1;
    const newEntry = {
      id: nextId,
      text: newReview,
      updated: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };
    setReviews([...reviews, newEntry]);
    setNewReview("");
  };

  return (
    <div className="mx-auto p-4 space-y-4 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white shadow p-4 rounded-lg">
            <p className="text-gray-800">{review.text}</p>
            <p className="text-gray-400 text-sm">{`Updated: ${review.updated}`}</p>
          </div>
        ))}
      </div>
      <textarea
        value={newReview}
        onChange={handleInputChange}
        placeholder="Write a review"
        className="mt-4 w-full p-2 border rounded-lg"
      />
      <Button
        onClick={handleSubmit}
        variant="filled"
        className="mt-2 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700"
        fullWidth
      >
        Submit Review
      </Button>
    </div>
  );
}

export default Reviews;
