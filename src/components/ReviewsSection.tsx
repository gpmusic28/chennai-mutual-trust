import { useEffect, useState } from "react";

interface Review {
  Name: string;
  Platform: string;
  Rating: string;
  Review: string;
  Date: string;
}

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbxmez3MBANABWcUIilEA8jgQE2wKEhGcqXpSJUjNz327TJIVMLYKCcLYW6_4mQuFtyS/exec")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  return (
    <section className="bg-white py-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        What Our Clients Say
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-gray-50 border border-orange-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-lg text-gray-800">
                {r.Name}
              </h3>
              <span className="text-sm text-gray-500">{r.Platform}</span>
            </div>
            <p className="text-yellow-500 mb-3">
              {"⭐".repeat(Number(r.Rating))}
            </p>
            <p className="text-gray-700 line-clamp-4 hover:line-clamp-none transition-all duration-300 cursor-pointer">
              {r.Review}
            </p>
            <p className="text-xs text-gray-400 mt-3">{r.Date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
