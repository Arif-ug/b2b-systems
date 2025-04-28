import dbConnect from '../../../lib/dbConnect.js';
import Contact from '../../../models/Contact.js';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const contacts = await Contact.find().sort({ createdAt: -1 });
      res.status(200).json({ success: true, data: contacts });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
