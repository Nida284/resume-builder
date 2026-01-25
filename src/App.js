import React, { useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import './App.css';

function App() {
  const [resumeData, setResumeData] = useState({
    personal: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      summary: ''
    },
    education: [],
    experience: [],
    skills: []
  });

  const updateResumeData = (newData) => {
    setResumeData(newData);
  };

  const resetForm = () => {
    setResumeData({
      personal: {
        fullName: '',
        email: '',
        phone: '',
        location: '',
        summary: ''
      },
      education: [],
      experience: [],
      skills: []
    });
  };

  return (
    <div className="container">
      <ResumeForm resumeData={resumeData} updateResumeData={updateResumeData} resetForm={resetForm} />
      <ResumePreview resumeData={resumeData} />
    </div>
  );
}

export default App;
