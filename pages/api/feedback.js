import Feedback from "../../models/Feedback"; // Adjust path if necessary

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, designation, review, rating, imageUrl } = req.body;

      // Create a new feedback document
      const newFeedback = new Feedback({
        name,
        designation,
        review,
        rating,
        imageUrl,
      });

      // Save the new feedback to the database
      await newFeedback.save();

      // Respond with the saved feedback
      res.status(201).json(newFeedback);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to submit feedback" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
