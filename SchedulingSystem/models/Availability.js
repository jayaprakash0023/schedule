const mongoose = require('mongoose');

const availabilitySchema = new mongoose.Schema({
  user: { type: String, required: true },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  duration: { type: Number, required: true },
  attendees: [{ name: String, email: String }],
  scheduledSlots: [
    {
      start: { type: Date, required: true },
      end: { type: Date, required: true },
    }
  ],
}, { timestamps: true });

const Availability = mongoose.model('Availability', availabilitySchema);
module.exports = Availability;
