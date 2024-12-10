import React, { useState } from 'react';
    import './index.css';

    function App() {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [company, setCompany] = useState('');
      const [projectType, setProjectType] = useState('');
      const [timeline, setTimeline] = useState('');
      const [budget, setBudget] = useState('');
      const [description, setDescription] = useState('');

      const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log({
          name,
          email,
          company,
          projectType,
          timeline,
          budget,
          description,
        });
      };

      return (
        <div className="app">
          <h1>Hello! Welcome to Can-E's Creative Studio.</h1>
          <p>
            I'm here to help you explore our creative services and discuss your
            project needs. How may I assist you today?
          </p>
          <div className="quick-actions">
            <button>Ask a Question</button>
            <button>Start a Project</button>
            <button>View Portfolio</button>
            <button>Contact Us</button>
          </div>
          <form onSubmit={handleFormSubmit}>
            <label>
              Full Name:
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>
            <label>
              Email Address:
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <label>
              Company Name (Optional):
              <input
                type="text"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
              />
            </label>
            <label>
              Project Type:
              <select
                value={projectType}
                onChange={(event) => setProjectType(event.target.value)}
              >
                <option value="">Select a project type</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Motion Graphics">Motion Graphics</option>
                <option value="Video Editing">Video Editing</option>
                <option value="Journalism">Journalism</option>
                <option value="Poetry">Poetry</option>
              </select>
            </label>
            <label>
              Project Timeline:
              <select
                value={timeline}
                onChange={(event) => setTimeline(event.target.value)}
              >
                <option value="">Select a timeline</option>
                <option value="Urgent">Urgent</option>
                <option value="1-2 weeks">1-2 weeks</option>
                <option value="1 month">1 month</option>
              </select>
            </label>
            <label>
              Budget Range:
              <select
                value={budget}
                onChange={(event) => setBudget(event.target.value)}
              >
                <option value="">Select a budget range</option>
                <option value="<$500"><$500</option>
                <option value="$500-$1000">$500-$1000</option>
                <option value="$1000+">$1000+</option>
              </select>
            </label>
            <label>
              Project Description:
              <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }

    export default App;
