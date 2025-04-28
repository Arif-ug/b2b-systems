import dbConnect from '../../lib/dbConnect';
import Contact from '../../models/Contact';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const { name, email, subject, message } = req.body;

      // Check required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      // Create a new contact entry
      const contact = await Contact.create({
        name,
        email,
        subject,
        message,
      });

      res.status(201).json({ success: true, data: contact });
    } catch (error) {
      console.error('Error saving contact:', error);
      res.status(500).json({ error: 'Server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
