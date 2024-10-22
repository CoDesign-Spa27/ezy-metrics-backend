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
exports.getReport = void 0;
const generateReport_1 = require("../../services/generateReport");
const getReport = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { format } = req.query;
    try {
        yield (0, generateReport_1.generateReport)(format);
        res.status(200).send(`${format} report generated.`);
    }
    catch (error) {
        res.status(500).send("Error generating report.");
    }
});
exports.getReport = getReport;
