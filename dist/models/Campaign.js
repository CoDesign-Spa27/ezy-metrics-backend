"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const campaignSchema = new mongoose_1.Schema({
    name: String,
    platform: String,
    leads: [String],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const Campaign = (0, mongoose_1.model)('Campaign', campaignSchema);
exports.default = Campaign;
