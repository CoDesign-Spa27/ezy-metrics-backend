"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dummy_1 = require("../data/dummy");
const report_1 = require("../controller/report");
const router = (0, express_1.Router)();
router.get("/lead", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const leads = yield (0, dummy_1.fetchCRMLeads)();
        res.json({ leads });
    }
    catch (err) {
        res.status(404).json({
            message: err,
        });
    }
}));
router.get("/campaigns", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const compaigns = yield (0, dummy_1.fetchMarketingCampaigns)();
        res.json({ compaigns });
    }
    catch (err) {
        res.status(404).json({
            message: err,
        });
    }
}));
router.get('/report', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Call generateReport directly, it will handle sending the response
        yield (0, report_1.generateReport)(req, res);
    }
    catch (err) {
        // If an error occurs, send a 500 error response
        res.status(500).json({
            message: err.message + " Error in route",
        });
    }
}));
exports.default = router;
