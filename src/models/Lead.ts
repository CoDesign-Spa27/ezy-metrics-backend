import { Schema, model } from 'mongoose';

const leadSchema = new Schema({
  name: String,
  email: String,
  campaign: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Lead = model('Lead', leadSchema);
export default Lead;
