import React, { useEffect, useState } from "react";

interface Review {
  name: string;
  rating: number;
  comment: string;
}

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbxmez3MBANABWcUIilEA8jgQE2wKEhGcqXpSJUjNz327TJIVMLYKCcLYW6_4mQuFtyS/exec"
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading reviews:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10 text-orange-600">
        What Our Clients Say
      </h2>

      {loading ? (
        <p className="text-gray-500">Loading reviews...</p>
      ) : reviews.length === 0 ? (
        <p className="text-gray-500">No reviews yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-20">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100"
            >
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {r.name}
              </h3>
              <p className="text-yellow-500 mb-2">
                {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
              </p>
              <p className="text-gray-600 italic leading-relaxed">
                “{r.comment}”
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ReviewsSection;
