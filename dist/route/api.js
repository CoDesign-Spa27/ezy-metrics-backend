"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const report_1 = require("../controller/report");
const router = (0, express_1.Router)();
router.get('/report', report_1.getReport);
exports.default = router;
