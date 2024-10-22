import { NextFunction, Request, Response } from 'express';
import Lead from '../models/Lead';
import jsonexport from "jsonexport"

export const generateReport = async (req:Request,res:Response) => {
  try {
    const leads = await Lead.find(); 

 
    const simplifiedLeads = leads.map(lead => {
      return {
        name: lead.name,
        email: lead.email,
        compaign: lead.campaign,
    
      };
    });

    const format = req.query.format; 
    if (format === 'csv') {
      jsonexport(simplifiedLeads, (err, csv) => {
        if (err) {
          console.error('Error generating CSV:', err);
          return res.status(500).json({ error: 'Error generating CSV' });
        }
 
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename="report.csv"');
        return res.send(csv);   
      });
    } else {
      return res.status(400).json({ error: 'Invalid format, only CSV is supported' });
    }
  } catch (error) {
    console.error('Error fetching leads:', error);
    return res.status(500).json({ error: 'Failed to fetch leads' });
  }
};
