# Resume Builder - Local Setup

## 🎯 Quick Start

This Resume Builder runs entirely **locally on your computer** at `http://localhost:3000`. No internet URL or domain setup needed!

## ✅ Prerequisites

Make sure you have **Node.js** installed:
- Download from: https://nodejs.org/
- Choose the LTS (Long Term Support) version
- Verify installation:
  ```bash
  node --version
  npm --version
  ```

## 🚀 Running the Application

### Option 1: Using Batch File (Easiest for Windows)

Simply **double-click**: `start_app.bat`

This will:
1. Install dependencies (first time only)
2. Start the React development server
3. Automatically open your app at `http://localhost:3000`

### Option 2: Manual Command Line

```bash
cd c:\Users\Nida Umair\Documents\app\resume_builder
npm install   # Only needed first time
npm start     # Runs on http://localhost:3000
```

## 📝 Features

✅ **Personal Information** - Name, email, phone, location, summary
✅ **Education** - Add multiple education entries
✅ **Work Experience** - Add multiple job entries
✅ **Skills** - Add professional skills as badges
✅ **Live Preview** - See updates in real-time
✅ **PDF Download** - Export resume as PDF
✅ **Word Download** - Export resume as Word document
✅ **Responsive Design** - Works on desktop, tablet, mobile

## 📂 Project Structure

```
resume_builder/
├── public/
│   ├── index.html          # HTML entry point
│   └── styles.css          # Global styles
├── src/
│   ├── components/
│   │   ├── ResumeForm.js   # Input form component
│   │   └── ResumePreview.js # Preview & download
│   ├── App.js              # Main application
│   ├── App.css             # App styles
│   ├── index.js            # React entry point
│   └── index.css           # Base styles
├── package.json            # Dependencies
└── README.md               # Full documentation
```

## 🔧 Troubleshooting

### Port 3000 Already in Use
```bash
npm start -- --port 3001
```

### Clear Cache and Reinstall
```bash
rm -r node_modules
npm install
npm start
```

### Node/npm Not Found
- Restart your terminal/command prompt after installing Node.js
- Make sure Node.js is added to your system PATH

## 📚 Technologies Used

- **React 18** - UI framework
- **CSS3** - Styling with gradients and animations
- **html2pdf.js** - PDF generation
- **HTML5** - Semantic markup

## 🛑 Stopping the Server

Press `Ctrl+C` in the terminal to stop the development server.

---

**That's it!** Your Resume Builder is now running locally. No internet configuration needed! 🎉
