import dbConnect from '../../lib/dbConnect'; // if you have DB connection helper
import Feedback from '../../models/Feedback'; // your Feedback model

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  try {
    await dbConnect();
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });

    res.status(200).json({ feedbacks });
  } catch (error) {
    console.error('Failed to fetch feedbacks:', error);
    res.status(500).json({ error: 'Server error' });
  }
}
