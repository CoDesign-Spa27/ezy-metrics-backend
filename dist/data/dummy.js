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
exports.fetchMarketingCampaigns = exports.fetchCRMLeads = void 0;
const Campaign_1 = __importDefault(require("../models/Campaign"));
const Lead_1 = __importDefault(require("../models/Lead"));
const fetchCRMLeads = () => __awaiter(void 0, void 0, void 0, function* () {
    const dummyLeads = [
        { name: 'John Doe', email: 'john@example.com', campaign: 'Email Campaign' },
        { name: 'Jane Smith', email: 'jane@example.com', campaign: 'Google Ads' },
    ];
    const leads = yield Lead_1.default.insertMany(dummyLeads);
    return leads;
});
exports.fetchCRMLeads = fetchCRMLeads;
const fetchMarketingCampaigns = () => __awaiter(void 0, void 0, void 0, function* () {
    const dummyCampaigns = [
        { name: 'Email Campaign', platform: 'Mailchimp', leads: ['john@example.com'] },
        { name: 'Google Ads', platform: 'Google', leads: ['jane@example.com'] },
    ];
    const campaign = yield Campaign_1.default.insertMany(dummyCampaigns);
    return campaign;
});
exports.fetchMarketingCampaigns = fetchMarketingCampaigns;
