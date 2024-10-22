import { query, Router } from "express";
import { fetchCRMLeads, fetchMarketingCampaigns } from "../data/dummy";
import { generateReport } from "../controller/report";
import { calculateMetrics } from "../jobs/etl";
import { sendAlert } from "../utils/email";

const router = Router();

router.get("/lead", async (req, res) => {
  try {
    const leads = await fetchCRMLeads();
    res.json({ leads });
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
});

router.get("/campaigns", async (req, res) => {
  try {
    const campaigns = await fetchMarketingCampaigns();
    res.json({ campaigns });
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
});

 
router.get('/report', async (req, res) => {
  try {
    // Call generateReport directly, it will handle sending the response
    await generateReport(req, res);
  } catch (err) {
    // If an error occurs, send a 500 error response
    res.status(500).json({
      message: (err as Error).message + " Error in route",
    });
  }
});



router.get('/metrics', async (req, res) => {
  try {
   
    await fetchCRMLeads();
    await fetchMarketingCampaigns();

    
    const metrics = await calculateMetrics();
    res.json(metrics);
 
    if (metrics.activeCampaignPercentage < 50) {
      await sendAlert(`Alert: Active Campaign Percentage is below 50%. Current: ${metrics.activeCampaignPercentage}%`);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error calculating metrics', error });
  }
});


export default router;
 