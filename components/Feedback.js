import { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function FeedbackForm() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    review: "",
    rating: 0,
    image: null,
  });

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const res = await fetch("/api/getFeedbacks");
      const data = await res.json();
      if (res.ok) {
        setFeedbacks(data.feedbacks || []);
      } else {
        console.error("Failed to fetch feedbacks:", data.error);
      }
    } catch (error) {
      console.error("Fetch feedbacks error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? parseFloat(value) : value,
    }));
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadingImage(true);

    const formDataToUpload = new FormData();
    formDataToUpload.append("image", file);

    try {
      const res = await fetch("/api/uploadImage", {
        method: "POST",
        body: formDataToUpload,
      });

      const data = await res.json();
      if (res.ok) {
        setFormData((prev) => ({
          ...prev,
          image: data.url, // Save the uploaded Cloudinary URL
        }));
        setImagePreview(data.url); // Show preview from Cloudinary
      } else {
        console.error("Error uploading image:", data.error);
      }
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.image) {
      alert("Please wait for the image to finish uploading!");
      return;
    }

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          designation: formData.designation,
          review: formData.review,
          rating: formData.rating,
          imageUrl: formData.image,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setFeedbacks((prev) => [data.feedback, ...prev]);
        setFormData({ name: "", designation: "", review: "", rating: 0, image: null });
        setImagePreview(null);
      } else {
        console.error("Error submitting feedback:", data.error);
      }
    } catch (error) {
      console.error("Submit failed:", error);
    }
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) stars.push(<FaStar key={i} />);
    if (halfStar) stars.push(<FaStarHalfAlt key="half" />);
    while (stars.length < 5) stars.push(<FaRegStar key={`empty-${stars.length}`} />);
    return stars;
  };

  return (
    <div className="px-4 py-8 flex flex-col md:flex-row gap-8 bg-sky-50">
      {/* Feedback Cards */}
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">What People Say</h2>
        <div className="max-h-[360px] overflow-y-auto space-y-6 pr-2 scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-transparent">
          {feedbacks?.map((feedback, index) => (
            feedback && (
              <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 flex items-center gap-6">
                {feedback.imageUrl ? (
                  <img
                    src={feedback.imageUrl}
                    alt={feedback.name || "Feedback image"}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-16 w-16 rounded-full bg-gray-300 flex items-center justify-center">
                    <span>No Image</span>
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{feedback.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">{feedback.designation}</p>
                  <p className="mt-2 text-gray-700 dark:text-gray-200 relative">
                    <span className="text-yellow-400 text-3xl absolute -left-4 -top-2">“</span>
                    {feedback.review}
                    <span className="text-yellow-400 text-3xl absolute -bottom-2">”</span>
                  </p>
                  <div className="flex items-center text-yellow-400 mt-1">
                    {renderStars(feedback.rating)}
                  </div>
                </div>
              </div>
            )
          ))}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{feedback.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">{feedback.designation}</p>
                 <p className="mt-2 text-gray-700 dark:text-gray-200 relative">
                  <span className="text-yellow-400 text-3xl absolute -left-4 -top-2">“</span>
                  {feedback.review}
                  <span className="text-yellow-400 text-3xl absolute -bottom-2">”</span>
                </p>
                <div className="flex items-center text-yellow-400 mt-1">
                  {renderStars(feedback.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feedback Form */}
      <div className="md:w-1/2">
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Submit Your Feedback</h2>

          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
            onChange={handleChange}
            value={formData.name}
            required
          />
          <input
            type="text"
            name="designation"
            placeholder="Designation"
            className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
            onChange={handleChange}
            value={formData.designation}
            required
          />

          <input
            type="file"
            name="image"
            accept="image/*"
            className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
            onChange={handleImageChange}
            required
          />

          {uploadingImage && <p className="text-sm text-blue-500">Uploading image...</p>}
          {imagePreview && (
            <div className="mt-2">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-md border"
              />
            </div>
          )}

          <textarea
            name="review"
            placeholder="Write your feedback..."
            rows="4"
            className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
            onChange={handleChange}
            value={formData.review}
            required
          />

          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <button
                key={i}
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, rating: i }))}
                className={`text-xl ${i <= formData.rating ? "text-yellow-400" : "text-gray-300"}`}
              >
                <FaStar />
              </button>
            ))}
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-orange-400 text-white rounded-lg"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}
