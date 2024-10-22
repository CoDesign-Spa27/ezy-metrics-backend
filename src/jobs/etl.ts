// utils/metrics.js
import Lead from '../models/Lead';
import Campaign from '../models/Campaign';

export const calculateMetrics = async () => {
  const totalLeads = await Lead.countDocuments();
  const totalCampaigns = await Campaign.countDocuments();
  const activeCampaigns = await Campaign.countDocuments({ status: 'active' });

  const activeCampaignPercentage = (activeCampaigns / totalCampaigns) * 100;

  return {
    totalLeads,
    activeCampaignPercentage,
  };
};
