# Setup Instructions for Resume Builder

## Prerequisites

Before running the application, make sure you have the following installed:

### 1. Node.js and npm

Download and install Node.js from https://nodejs.org/
- Choose the LTS (Long Term Support) version
- This will automatically install npm (Node Package Manager)

To verify installation:
```bash
node --version
npm --version
```

## Installation & Running

### Step 1: Navigate to Project Directory
```bash
cd c:\Users\Nida Umair\Documents\app\resume_builder
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install all required packages:
- React 18.2.0
- React DOM 18.2.0
- React Scripts 5.0.1
- html2pdf.js 0.10.1

### Step 3: Start Development Server
```bash
npm start
```

The application will automatically open at `http://localhost:3000`

## Features

✅ **Professional Resume Builder**
- Fill in personal information (name, email, phone, location, summary)
- Add multiple education entries
- Add multiple work experience entries
- Add professional skills
- Live resume preview
- Download as PDF
- Download as Word document

## Project Structure

```
resume_builder/
├── public/
│   ├── index.html          - HTML entry point
│   └── styles.css          - Global CSS styles
├── src/
│   ├── components/
│   │   ├── ResumeForm.js   - Form component for input
│   │   └── ResumePreview.js - Resume preview & download
│   ├── App.js              - Main app component
│   ├── App.css             - App styles
│   ├── index.js            - React entry point
│   └── index.css           - Base styles
├── package.json            - Project dependencies
└── README.md               - Project documentation
```

## Troubleshooting

### npm command not found
- Make sure Node.js is installed and added to PATH
- Restart your terminal/command prompt after installing Node.js

### Port 3000 already in use
```bash
npm start -- --port 3001
```

### Clear cache and reinstall
```bash
rm -r node_modules
npm install
npm start
```

## Technologies Used

- **React 18** - UI framework
- **CSS3** - Styling with gradients and animations
- **html2pdf.js** - PDF generation
- **HTML5** - Semantic markup

## Tips for Best Results

1. **Fill personal info first** - This appears at the top of the resume
2. **Use clear job titles** - Makes your resume easy to scan
3. **Describe responsibilities** - Include key achievements and skills in job descriptions
4. **Organize skills** - Group similar skills together
5. **Check preview** - The preview updates in real-time as you type
6. **Download before closing** - Save your resume file before closing the application

Enjoy building your professional resume! 🚀
