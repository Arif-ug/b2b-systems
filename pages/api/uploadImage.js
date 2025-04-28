// pages/api/uploadImage.js

import { v2 as cloudinary } from 'cloudinary';
import formidable from 'formidable';

// Setup Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Your Cloudinary Cloud Name
  api_key: process.env.CLOUDINARY_API_KEY,        // Your Cloudinary API Key
  api_secret: process.env.CLOUDINARY_API_SECRET,  // Your Cloudinary API Secret
});

// Disable Next.js's default body parsing (important for file uploads)
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Form parsing error:', err);
      return res.status(500).json({ error: 'Form parsing failed' });
    }

    const file = files.image?.[0];
    if (!file) {
      return res.status(400).json({ error: 'No image file uploaded' });
    }

    try {
      const result = await cloudinary.uploader.upload(file.filepath, {
        folder: 'feedback_images',  // Cloudinary folder name (it will create automatically if not exists)
        resource_type: 'image',
      });

      return res.status(200).json({ url: result.secure_url });
    } catch (error) {
      console.error('Cloudinary upload error:', error);
      return res.status(500).json({ error: 'Failed to upload image to Cloudinary' });
    }
  });
}
