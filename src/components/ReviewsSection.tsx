import { useEffect, useState } from "react";

interface Review {
  Name: string;
  Platform: string;
  Rating: string;
  Review: string;
  Date: string;
}

const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbxmez3MBANABWcUIilEA8jgQE2wKEhGcqXpSJUjNz327TJIVMLYKCcLYW6_4mQuFtyS/exec";

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
        What Our Clients Say
      </h2>
      <div className="max-w-6xl mx-auto grid gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.length > 0 ? (
          reviews.map((review, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-2xl shadow-md border border-orange-100 hover:shadow-lg transition"
            >
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold text-orange-600">
                  {review.Name}
                </h3>
                <span className="text-sm text-gray-500">
                  ⭐ {review.Rating}/5
                </span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                {review.Review}
              </p>
              <div className="text-xs text-gray-400">
                {review.Platform} • {review.Date}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 w-full">Loading reviews...</p>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;
