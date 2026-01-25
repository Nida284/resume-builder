import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

function ResumePreview({ resumeData }) {
  const resumeRef = useRef();

  const downloadPDF = () => {
    const element = resumeRef.current;
    const opt = {
      margin: 10,
      filename: `${resumeData.personal.fullName || 'resume'}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
    };

    html2pdf().set(opt).from(element).save();
  };

  const downloadDocx = () => {
    // Creating a simple DOCX-like document using HTML
    const htmlContent = resumeRef.current.innerHTML;
    const blob = new Blob([`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; }
          ${document.querySelector('style')?.textContent || ''}
        </style>
      </head>
      <body>
        ${htmlContent}
      </body>
      </html>
    `], { type: 'application/msword' });

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${resumeData.personal.fullName || 'resume'}.doc`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="preview-section">
      <div className="preview-title">Resume Preview</div>

      <div className="resume-preview" ref={resumeRef}>
        {/* Header */}
        <div className="resume-header">
          <div className="resume-name">
            {resumeData.personal.fullName || 'Your Full Name'}
          </div>
          <div className="resume-contact">
            {resumeData.personal.email && <span>{resumeData.personal.email}</span>}
            {resumeData.personal.phone && <span>|</span>}
            {resumeData.personal.phone && <span>{resumeData.personal.phone}</span>}
            {resumeData.personal.location && <span>|</span>}
            {resumeData.personal.location && <span>{resumeData.personal.location}</span>}
          </div>
        </div>

        {/* Professional Summary */}
        {resumeData.personal.summary && (
          <div className="resume-section">
            <div className="resume-section-title">Professional Summary</div>
            <div className="resume-item-description">{resumeData.personal.summary}</div>
          </div>
        )}

        {/* Education */}
        {resumeData.education.length > 0 && (
          <div className="resume-section">
            <div className="resume-section-title">Education</div>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <div className="resume-item-title">{edu.degree || 'Degree'}</div>
                    <div className="resume-item-subtitle">{edu.school || 'School'}</div>
                  </div>
                  <div className="resume-item-date">
                    {edu.startYear} {edu.endYear && `- ${edu.endYear}`}
                  </div>
                </div>
                {edu.field && <div className="resume-item-subtitle">{edu.field}</div>}
                {edu.details && <div className="resume-item-description">{edu.details}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Experience */}
        {resumeData.experience.length > 0 && (
          <div className="resume-section">
            <div className="resume-section-title">Professional Experience</div>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <div className="resume-item-title">{exp.position || 'Position'}</div>
                    <div className="resume-item-subtitle">{exp.company || 'Company'}</div>
                  </div>
                  <div className="resume-item-date">
                    {exp.startDate} {exp.endDate && `- ${exp.endDate}`}
                  </div>
                </div>
                {exp.description && (
                  <div className="resume-item-description">{exp.description}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {resumeData.skills.length > 0 && (
          <div className="resume-section">
            <div className="resume-section-title">Skills</div>
            <div className="skills-list">
              {resumeData.skills.map((skill, index) => (
                skill && <span key={index} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Download Section */}
      <div className="download-section">
        <button className="download-btn" onClick={downloadPDF}>
          📥 Download as PDF
        </button>
        <button className="download-btn" onClick={downloadDocx}>
          📄 Download as Word
        </button>
      </div>
    </div>
  );
}

export default ResumePreview;
