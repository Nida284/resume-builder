import React, { useState } from 'react';

function ResumeForm({ resumeData, updateResumeData, resetForm }) {
  const [formData, setFormData] = useState(resumeData);

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    const updatedData = {
      ...formData,
      personal: {
        ...formData.personal,
        [name]: value
      }
    };
    setFormData(updatedData);
    updateResumeData(updatedData);
  };

  const addEducation = () => {
    const updatedData = {
      ...formData,
      education: [
        ...formData.education,
        { school: '', degree: '', field: '', startYear: '', endYear: '', details: '' }
      ]
    };
    setFormData(updatedData);
    updateResumeData(updatedData);
  };

  const updateEducation = (index, field, value) => {
    const updatedEducation = [...formData.education];
    updatedEducation[index][field] = value;
    const updatedData = { ...formData, education: updatedEducation };
    setFormData(updatedData);
    updateResumeData(updatedData);
  };

  const removeEducation = (index) => {
    const updatedEducation = formData.education.filter((_, i) => i !== index);
    const updatedData = { ...formData, education: updatedEducation };
    setFormData(updatedData);
    updateResumeData(updatedData);
  };

  const addExperience = () => {
    const updatedData = {
      ...formData,
      experience: [
        ...formData.experience,
        { company: '', position: '', startDate: '', endDate: '', description: '' }
      ]
    };
    setFormData(updatedData);
    updateResumeData(updatedData);
  };

  const updateExperience = (index, field, value) => {
    const updatedExperience = [...formData.experience];
    updatedExperience[index][field] = value;
    const updatedData = { ...formData, experience: updatedExperience };
    setFormData(updatedData);
    updateResumeData(updatedData);
  };

  const removeExperience = (index) => {
    const updatedExperience = formData.experience.filter((_, i) => i !== index);
    const updatedData = { ...formData, experience: updatedExperience };
    setFormData(updatedData);
    updateResumeData(updatedData);
  };

  const addSkill = () => {
    const updatedData = {
      ...formData,
      skills: [...formData.skills, '']
    };
    setFormData(updatedData);
    updateResumeData(updatedData);
  };

  const updateSkill = (index, value) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[index] = value;
    const updatedData = { ...formData, skills: updatedSkills };
    setFormData(updatedData);
    updateResumeData(updatedData);
  };

  const removeSkill = (index) => {
    const updatedSkills = formData.skills.filter((_, i) => i !== index);
    const updatedData = { ...formData, skills: updatedSkills };
    setFormData(updatedData);
    updateResumeData(updatedData);
  };

  return (
    <div className="app">
      <h1>Resume Builder</h1>

      {/* Personal Information */}
      <div className="form-section">
        <div className="section-title">Personal Information</div>

        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.personal.fullName}
            onChange={handlePersonalChange}
            placeholder="Your Full Name"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.personal.email}
            onChange={handlePersonalChange}
            placeholder="your.email@example.com"
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.personal.phone}
            onChange={handlePersonalChange}
            placeholder="(123) 456-7890"
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formData.personal.location}
            onChange={handlePersonalChange}
            placeholder="City, Country"
          />
        </div>

        <div className="form-group">
          <label>Professional Summary</label>
          <textarea
            name="summary"
            value={formData.personal.summary}
            onChange={handlePersonalChange}
            placeholder="Brief overview of your professional background..."
          />
        </div>
      </div>

      {/* Education */}
      <div className="form-section">
        <div className="section-title">
          Education
          <button className="add-btn" onClick={addEducation}>+ Add Education</button>
        </div>

        {formData.education.map((edu, index) => (
          <div key={index} className="entry-container education">
            <div className="entry-header">
              <span className="entry-title">{edu.school || 'Education Entry'}</span>
              <button className="remove-btn" onClick={() => removeEducation(index)}>Remove</button>
            </div>

            <div className="form-group">
              <label>School/University</label>
              <input
                type="text"
                value={edu.school}
                onChange={(e) => updateEducation(index, 'school', e.target.value)}
                placeholder="School or University name"
              />
            </div>

            <div className="form-group">
              <label>Degree</label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                placeholder="e.g., Bachelor of Science"
              />
            </div>

            <div className="form-group">
              <label>Field of Study</label>
              <input
                type="text"
                value={edu.field}
                onChange={(e) => updateEducation(index, 'field', e.target.value)}
                placeholder="e.g., Computer Science"
              />
            </div>

            <div className="form-group">
              <label>Start Year</label>
              <input
                type="text"
                value={edu.startYear}
                onChange={(e) => updateEducation(index, 'startYear', e.target.value)}
                placeholder="2018"
              />
            </div>

            <div className="form-group">
              <label>End Year</label>
              <input
                type="text"
                value={edu.endYear}
                onChange={(e) => updateEducation(index, 'endYear', e.target.value)}
                placeholder="2022"
              />
            </div>

            <div className="form-group">
              <label>Additional Details</label>
              <textarea
                value={edu.details}
                onChange={(e) => updateEducation(index, 'details', e.target.value)}
                placeholder="GPA, honors, relevant coursework..."
              />
            </div>
          </div>
        ))}
      </div>

      {/* Experience */}
      <div className="form-section">
        <div className="section-title">
          Experience
          <button className="add-btn" onClick={addExperience}>+ Add Experience</button>
        </div>

        {formData.experience.map((exp, index) => (
          <div key={index} className="entry-container experience">
            <div className="entry-header">
              <span className="entry-title">{exp.position || 'Experience Entry'}</span>
              <button className="remove-btn" onClick={() => removeExperience(index)}>Remove</button>
            </div>

            <div className="form-group">
              <label>Company</label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => updateExperience(index, 'company', e.target.value)}
                placeholder="Company name"
              />
            </div>

            <div className="form-group">
              <label>Job Title/Position</label>
              <input
                type="text"
                value={exp.position}
                onChange={(e) => updateExperience(index, 'position', e.target.value)}
                placeholder="Your job title"
              />
            </div>

            <div className="form-group">
              <label>Start Date</label>
              <input
                type="text"
                value={exp.startDate}
                onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
                placeholder="Jan 2020"
              />
            </div>

            <div className="form-group">
              <label>End Date</label>
              <input
                type="text"
                value={exp.endDate}
                onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                placeholder="Dec 2022"
              />
            </div>

            <div className="form-group">
              <label>Job Description</label>
              <textarea
                value={exp.description}
                onChange={(e) => updateExperience(index, 'description', e.target.value)}
                placeholder="Describe your responsibilities and achievements..."
              />
            </div>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="form-section">
        <div className="section-title">
          Skills
          <button className="add-btn" onClick={addSkill}>+ Add Skill</button>
        </div>

        {formData.skills.map((skill, index) => (
          <div key={index} className="entry-container skill">
            <div className="entry-header">
              <span className="entry-title">{skill || 'Skill'}</span>
              <button className="remove-btn" onClick={() => removeSkill(index)}>Remove</button>
            </div>

            <div className="form-group">
              <label>Skill</label>
              <input
                type="text"
                value={skill}
                onChange={(e) => updateSkill(index, e.target.value)}
                placeholder="e.g., React, Python, Leadership"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="button-group">
        <button className="btn btn-primary" onClick={() => updateResumeData(formData)}>
          Save Resume
        </button>
        <button className="btn btn-reset" onClick={resetForm}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default ResumeForm;
