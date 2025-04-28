import mongoose from "mongoose";

// Define the Feedback schema
const feedbackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    imageUrl: {
      type: String, // This will store the Cloudinary image URL
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create a Feedback model from the schema
const Feedback = mongoose.models.Feedback || mongoose.model("Feedback", feedbackSchema);

export default Feedback;
