"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./route/route"));
require("./config/database");
const database_1 = __importDefault(require("./config/database"));
(0, database_1.default)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', route_1.default);
app.listen(3000, () => {
    console.log("Server started");
});
