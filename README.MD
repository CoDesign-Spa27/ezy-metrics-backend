# EzyMetrics Backend

EzyMetrics is a backend service designed for data integrations and reporting. This application simulates fetching leads and marketing campaign data from dummy sources, processes the data, calculates meaningful metrics, and provides alert notifications when certain conditions are met.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [API Usage](#api-usage)
- [Fetch Leads](#fetch-leads)
- [Fetch Campaigns](#fetch-campaigns)
- [Calculate Metrics](#calculate-metrics)
- [Download Report](#download-report)
- [Email Service](#email-service)

## Features

- Integrates with dummy CRM and marketing platforms.
- Simulates fetching lead and campaign data.
- Stores data in MongoDB.
- Calculates key metrics from the data.
- Sends email alerts based on metric thresholds.
- Generates reports in CSV format.

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend.
- **Express**: Web framework for building the API.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: ODM for MongoDB.
- **Nodemailer**: For sending email notifications.
- **jsonexport**: For generating CSV reports.

## Setup Instructions

```bash
git clone https://github.com/your-username/ezy-metrics-backend.git
cd ezy-metrics-backend.
```
#### Install Dependencies
```bash
npm install
```

#### Create Enviroment Variables
```bash
//create .env file and add there Variables.
EMAIL_ADDRESS= 
EMAIL_PASS=
MONGO_URI= 
```

#### Start server
http://localhost:3000
```bash
npm run start 
```

# API Usage
### Fetch Leads or insert dummy data first.

- ENDPOINT `GET /api/lead`
- Description:`Fetches dummy CRM leads.`
- Response: 
```bash
{
    "leads": [
        {
            "name": "Sandeep Singh",
            "email": "sandee@gmail.com",
            "campaign": "Ai Campaign",
            "_id": "6717e7a7a7a16d4c112a33af",
            "createdAt": "2024-10-22T17:57:59.158Z",
            "__v": 0
        },
        {
            "name": "Ram Prakash",
            "email": "ram@gmail.com",
            "campaign": "Digital Marketing Campaign",
            "_id": "6717e7a7a7a16d4c112a33b0",
            "createdAt": "2024-10-22T17:57:59.159Z",
            "__v": 0
        }
    ]
}
```

### Fetch Campaigns or insert dummy data first.

- ENDPOINT `GET /api/campaigns`
- Description:`Fetches dummy CRM Campaigns.`
- Response: 
```bash
{
    "campaigns": [
        {
            "name": "Ai Campaign",
            "platform": "AiClip",
            "leads": [
                "sandee@gmail.com"
            ],
            "successRate": 30,
            "_id": "6717e7f7a7a16d4c112a33b2",
            "createdAt": "2024-10-22T17:59:19.110Z",
            "__v": 0
        },
        {
            "name": "Digital Marketing Campaign",
            "platform": "DigitalLab",
            "leads": [
                "ram@gmail.com"
            ],
            "successRate": 44,
            "_id": "6717e7f7a7a16d4c112a33b3",
            "createdAt": "2024-10-22T17:59:19.111Z",
            "__v": 0
        }
    ]
}
```

### Download Report for Leads.

- ENDPOINT `GET /api/report?format=csv`
- Description:`To get csv data and csv report file.`
- Response: 
```bash
name,email,compaign
Sandeep Singh,sandee@gmail.com,Ai Campaign
Ram Prakash,ram@gmail.com,Digital Marketing Campaign
```
Hit this endpoint on browser and it will download a CSV Report File.

### Calculate Metrics
- ENDPOINT `GET /api/metrics`
- Description:`Calculates and returns metrics based on the stored leads and campaigns. It also sends alerts if certain conditions are met.`
- Response: 
```bash
{
    "totalLeads": 2,
    "activeCampaignPercentage": 0
}
```
If the active campaign percentage is below a threshold, an alert will be sent to the specified email.

### Email Service 
- Route src/utils/email.ts
```bash
import nodemailer from "nodemailer";
import dotenv from 'dotenv'

dotenv.config();
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendAlert = async (message:string) => {
  const mailOptions = {
    from: 'example@gmail.com',// use your desired email
    to: 'example@gmail.com',//use your desired email
    subject: 'Alert Notification',
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Alert sent:', message);
  } catch (error) {
    console.error('Error sending alert:', error);
  }
};
```







