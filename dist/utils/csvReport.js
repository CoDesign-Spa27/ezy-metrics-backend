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
exports.generateCSV = void 0;
const fs_1 = __importDefault(require("fs"));
const export_to_csv_1 = require("export-to-csv");
const csvConfig = (0, export_to_csv_1.mkConfig)({ useKeysAsHeaders: true });
const generateCSV = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const csv = (0, export_to_csv_1.generateCsv)(csvConfig)(data);
        const filename = `${csvConfig.filename}.csv`;
        const csvString = (0, export_to_csv_1.asString)(csv);
        fs_1.default.writeFile(filename, csvString, (err) => {
            if (err)
                throw err;
            console.log("File saved: ", filename);
        });
        return csv;
    }
    catch (error) {
        console.error('Error generating CSV:', error);
        throw new Error('Failed to generate CSV');
    }
});
exports.generateCSV = generateCSV;
