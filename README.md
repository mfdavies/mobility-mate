# NOTE: This repository is deprecated. 
## Please vist: https://github.com/mfdavies/mobility-mate-backend and https://github.com/mfdavies/mobility-mate-frontend for updates.

# MobilityMate

A platform for saving time for physiotherapists at the office and helping senior patients track their exercise routine progress.

### Winner of the Diversity in Engineering Prize at HackED 2024 🎉

For building a project that contributes to EDI (equity, diversity, and inclusion) and accessibility. See our [Devpost](https://devpost.com/software/mobility-mate-9fyp8v) here.

## Demo Video

## Key Features

- Senior patients are able to easily see their assigned exercises and speak to an AI assistant to report on their progress and discuss any concerns.
- Therapists have access to a dashboard of patients and can assign them exercise routines.
- Therapists can view summaries of patient's conversations with the MobilityMate AI to quickly appraise themselves of the patients condition before their next appointment.

## Installation

```bash
git clone git@github.com:mfdavies/mobility-mate.git
```

### Frontend (React/Vite)

```bash
cd mobility-mate/frontend
npm install
npm run dev
```

Open your browser and navigate to http://localhost:5173

### Backend (Flask)

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r server/requirements.txt
python3 server/src/main.py
```

Open your browser and navigate to http://localhost:5000 to verify that the backend is running.
