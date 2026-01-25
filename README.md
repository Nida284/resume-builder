# Resume Builder

A professional web application for creating and downloading resumes in PDF and Word format using React.

## Features

- **Personal Information Section**: Add your name, email, phone, location, and professional summary
- **Education Management**: Add multiple education entries with school, degree, field of study, years, and details
- **Experience Management**: Add multiple work experience entries with company, position, dates, and descriptions
- **Skills Section**: Add multiple skills as badges
- **Live Resume Preview**: See your resume update in real-time as you type
- **PDF Download**: Download your resume as a professional PDF file
- **Word Download**: Download your resume in Word document format
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Professional Styling**: Modern gradient design with smooth animations

## Project Structure

```
resume_builder/
├── public/
│   ├── index.html
│   └── styles.css
├── src/
│   ├── components/
│   │   ├── ResumeForm.js
│   │   └── ResumePreview.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── .gitignore
```

## Installation

1. Navigate to the project directory:
   ```bash
   cd resume_builder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## Usage

1. Fill in your personal information (name, email, phone, location, summary)
2. Click "+ Add Education" to add your educational background
3. Click "+ Add Experience" to add your work experience
4. Click "+ Add Skill" to add your professional skills
5. View the resume preview on the right side in real-time
6. Click "Download as PDF" or "Download as Word" to export your resume
7. Use "Save Resume" to finalize changes or "Reset" to clear all fields

## Technologies Used

- **React 18**: Frontend framework
- **CSS3**: Styling and animations
- **html2pdf.js**: PDF generation
- **React Scripts**: Build tool and development server

## Browser Compatibility

Works on all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.
