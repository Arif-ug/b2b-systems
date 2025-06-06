// import mongoose from 'mongoose';

// const ContactSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   subject: {
//     type: String,
//     required: false,
//   },
//   message: {
//     type: String,
//     required: true,
//   },
// }, { timestamps: true });

// export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

import mongoose from 'mongoose';
const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
