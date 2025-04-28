import jwt from 'jsonwebtoken';

const ADMIN_EMAIL = 'simantdutta10@gmail.com';
const ADMIN_PASSWORD = 'B2bss@2025';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } else {
    res.status(405).end();
  }
}
