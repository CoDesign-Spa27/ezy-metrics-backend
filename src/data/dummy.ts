import Campaign from "../models/Campaign";
import Lead from "../models/Lead";
 
export const fetchCRMLeads = async () => {
  const dummyLeads = [
    { name: 'Sandeep Singh', email: 'sandee@gmail.com', campaign: 'Ai Campaign' },
    { name: 'Ram Prakash', email: 'ram@gmail.com', campaign: 'Digital Marketing Campaign' },
  ];

  const newLeads=[];
  for(const lead of dummyLeads){
    const existingData=await Lead.findOne({email:lead.email})
    if(!existingData){
      newLeads.push(lead);
    }
  }

  if(newLeads.length > 0){
    const insertedLeads = await Lead.insertMany(newLeads);
    return insertedLeads;
  }
  return { message: 'No new leads to insert' };
 
};


export const fetchMarketingCampaigns = async () => {
  const dummyCampaigns = [
    { name: 'Ai Campaign', platform: 'AiClip', leads: ['sandee@gmail.com'] ,successRate:30},
    { name: 'Digital Marketing Campaign', platform: 'DigitalLab', leads: ['ram@gmail.com'], successRate: 44 },
  ];

  const campaign= await Campaign.insertMany(dummyCampaigns);
  return campaign;
 
};

