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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateReport = void 0;
const csvReport_1 = require("../utils/csvReport");
const Lead_1 = __importDefault(require("../models/Lead"));
const generateReport = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let leads;
    try {
        leads = yield Lead_1.default.find();
    }
    catch (error) {
        console.error('Error fetching leads:', error);
        return res.status(500).json({ error: 'Failed to fetch leads' });
    }
    const format = req.query.format;
    if (!format || (format !== 'pdf' && format !== 'csv')) {
        return res.status(400).json({ error: 'Invalid format parameter' });
    }
    try {
        if (format === 'csv') {
            const csvData = (0, csvReport_1.generateCSV)(leads);
            res.setHeader('Content-Type', 'text/csv');
            res.setHeader('Content-Disposition', 'attachment; filename="report.csv"');
            return res.send(csvData);
        }
    }
    catch (error) {
        console.error('Error generating report:', error);
        return res.status(500).json({ error: 'Failed to generate report' });
    }
});
exports.generateReport = generateReport;
