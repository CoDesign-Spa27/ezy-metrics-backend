import { Schema, model } from 'mongoose';

const campaignSchema = new Schema({
  name: String,
  platform: String,
  leads: [String],
  successRate:Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Campaign = model('Campaign', campaignSchema);
export default Campaign;
