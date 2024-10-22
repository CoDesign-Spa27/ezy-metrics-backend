"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const leadSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    campaign: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const Lead = (0, mongoose_1.model)('Lead', leadSchema);
exports.default = Lead;
