import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const JobApplicationPublic = () => {
  const navigate = useNavigate(); // <--- ADD THIS

  const [jobs, setJobs] = useState([]);
  const [formData, setFormData] = useState({
    recruitment_id: "",
    name: "",
    email: "",
    cover_letter: "",
    resume_link: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Fetch open jobs on mount
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/job-recruitments");
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage("");

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/job-applications/public",
        {
          recruitment_id: formData.recruitment_id,
          applicant_name: formData.name,
          applicant_email: formData.email,
          resume_link: formData.resume_link,
          cover_letter: formData.cover_letter,
          applicant_phone: "0000000000",
        }
      );

      setSuccessMessage("Application submitted successfully!");

      // Clear form
      setFormData({
        recruitment_id: "",
        name: "",
        email: "",
        cover_letter: "",
        resume_link: "",
      });

      // ⭐ redirect to /register after 1 second
      setTimeout(() => {
        navigate("/register");
      }, 1000);

    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      } else {
        console.error("Submission error:", error);
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2>Apply for a Job (Public)</h2>
      {successMessage && <Alert variant="success">{successMessage}</Alert>}

      <Form onSubmit={handleSubmit}>
        {/* Job Selection */}
        <Form.Group className="mb-3">
          <Form.Label>Select Job</Form.Label>
          <Form.Select
            name="recruitment_id"
            value={formData.recruitment_id}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Job --</option>
            {jobs.map((job) => (
              <option key={job.id} value={job.id}>
                {job.position} ({job.department.name})
              </option>
            ))}
          </Form.Select>
          {errors.recruitment_id && (
            <div className="text-danger">{errors.recruitment_id[0]}</div>
          )}
        </Form.Group>

        {/* Name */}
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.applicant_name && (
            <div className="text-danger">{errors.applicant_name[0]}</div>
          )}
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.applicant_email && (
            <div className="text-danger">{errors.applicant_email[0]}</div>
          )}
        </Form.Group>

        {/* Cover Letter */}
        <Form.Group className="mb-3">
          <Form.Label>Cover Letter</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="cover_letter"
            value={formData.cover_letter}
            onChange={handleChange}
          />
          {errors.cover_letter && (
            <div className="text-danger">{errors.cover_letter[0]}</div>
          )}
        </Form.Group>

        {/* Resume Link */}
        <Form.Group className="mb-3">
          <Form.Label>Resume Link</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your resume link"
            name="resume_link"
            value={formData.resume_link}
            onChange={handleChange}
            required
          />
          {errors.resume_link && (
            <div className="text-danger">{errors.resume_link[0]}</div>
          )}
        </Form.Group>

        <Button type="submit" variant="primary">
          Submit Application
        </Button>
      </Form>
    </div>
  );
};

export default JobApplicationPublic;


// import React, { useState, useEffect } from "react";
// import { Form, Button, Alert } from "react-bootstrap";
// import axios from "axios";

// const JobApplicationPublic = () => {
//   const [jobs, setJobs] = useState([]);
//   const [formData, setFormData] = useState({
//     recruitment_id: "",
//     name: "",
//     email: "",
//     cover_letter: "",
//     resume_link: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [successMessage, setSuccessMessage] = useState("");

//   // Fetch open jobs on mount
//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const response = await axios.get("http://127.0.0.1:8000/api/job-recruitments");
//         setJobs(response.data);
//       } catch (error) {
//         console.error("Error fetching jobs:", error);
//       }
//     };
//     fetchJobs();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrors({});
//     setSuccessMessage("");

//     try {
//       const response = await axios.post(
//         "http://127.0.0.1:8000/api/job-applications/public",
//         {
//           recruitment_id: formData.recruitment_id,
//           applicant_name: formData.name,
//           applicant_email: formData.email,
//           resume_link: formData.resume_link,
//           cover_letter: formData.cover_letter,
//           applicant_phone: "0000000000", // optional placeholder if backend requires phone
//         }
//       );

//       setSuccessMessage("Application submitted successfully!");
//       setFormData({
//         recruitment_id: "",
//         name: "",
//         email: "",
//         cover_letter: "",
//         resume_link: "",
//       });
//     } catch (error) {
//       if (error.response && error.response.status === 422) {
//         setErrors(error.response.data.errors);
//       } else {
//         console.error("Submission error:", error);
//       }
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Apply for a Job (Public)</h2>
//       {successMessage && <Alert variant="success">{successMessage}</Alert>}

//       <Form onSubmit={handleSubmit}>
//         {/* Job Selection */}
//         <Form.Group className="mb-3">
//           <Form.Label>Select Job</Form.Label>
//           <Form.Select
//             name="recruitment_id"
//             value={formData.recruitment_id}
//             onChange={handleChange}
//             required
//           >
//             <option value="">-- Select Job --</option>
//             {jobs.map((job) => (
//               <option key={job.id} value={job.id}>
//                 {job.position} ({job.department.name})
//               </option>
//             ))}
//           </Form.Select>
//           {errors.recruitment_id && <div className="text-danger">{errors.recruitment_id[0]}</div>}
//         </Form.Group>

//         {/* Name */}
//         <Form.Group className="mb-3">
//           <Form.Label>Your Name</Form.Label>
//           <Form.Control
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           {errors.applicant_name && <div className="text-danger">{errors.applicant_name[0]}</div>}
//         </Form.Group>

//         {/* Email */}
//         <Form.Group className="mb-3">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           {errors.applicant_email && <div className="text-danger">{errors.applicant_email[0]}</div>}
//         </Form.Group>

//         {/* Cover Letter */}
//         <Form.Group className="mb-3">
//           <Form.Label>Cover Letter</Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={4}
//             name="cover_letter"
//             value={formData.cover_letter}
//             onChange={handleChange}
//           />
//           {errors.cover_letter && <div className="text-danger">{errors.cover_letter[0]}</div>}
//         </Form.Group>

//         {/* Resume Link */}
//         <Form.Group className="mb-3">
//           <Form.Label>Resume Link</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter your resume link"
//             name="resume_link"
//             value={formData.resume_link}
//             onChange={handleChange}
//             required
//           />
//           {errors.resume_link && <div className="text-danger">{errors.resume_link[0]}</div>}
//         </Form.Group>

//         <Button type="submit" variant="primary">
//           Submit Application
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default JobApplicationPublic;
