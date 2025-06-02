// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// // import { BiSolidShow } from "react-icons/bi";
// const Sign_Up = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//   };
//   return (
//     <>
//       <div className="container-fluid">
//         <div className="Sign_Up container-fluid min-vh-100">
//           <div className="row w-100">
//             <div className="col-md-6 offset-md-3">
//               <div className="shadow-lg p-4">
//                 <h3 className="text-center mb-4">Sign Up</h3>
//                 <form onSubmit={(e) => handleSubmit(e)}>
//                   <div className="mb-4">
//                     <label htmlFor="FirstName" className="form-label">
//                       First Name
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="FirstName"
//                       name="FirstName"
//                       value={formData.FirstName}
//                       onChange={(e) => handleChange(e)}
//                       placeholder="Enter your first name"
//                       required
//                     />
//                     <label htmlFor="LastName" className="form-label">
//                       Last Name
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="LastName"
//                       name="LastName"
//                       value={formData.LastName}
//                       onChange={(e) => handleChange(e)}
//                       placeholder="Enter your last name"
//                       required
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label htmlFor="email" className="form-label">
//                       Email / address
//                     </label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={(e) => handleChange(e)}
//                       placeholder="Enter your email"
//                       required
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label htmlFor="">Gender:-</label> <br />
//                     <input type="radio" id="chk" name="gender" value={"Male"} required /> Male
//                     <input type="radio" id="chk" name="gender" value={"Female"} required /> Female
//                   </div>
//                   <div className="mb-4">
//                     <label htmlFor="checkbox">Hobbies</label> <br />
//                     <input type="checkbox" id="chk" value={"Travlling"} required /> Travlling
//                     <input type="checkbox" id="chk" value={"Writing"} required /> Writing
//                     <input type="checkbox" id="chk" value={"Reading"} required /> Reading
//                   </div>

//                   <div className="mb-4">
//                     <label htmlFor="password" className="form-label">
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       id="password"
//                       name="password"
//                       pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
//                       title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
//                       value={formData.password}
//                       onChange={(e) => handleChange(e)}
//                       placeholder="Enter Your Password"
//                       required
//                     />
//                     {/* <BiSolidShow /> */}
//                   </div>

//                   <div className="mb-4">
//                     <label htmlFor="confirmPassword" className="form-label">
//                       Confirm Password
//                     </label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       id="confirmPassword"
//                       name="confirmPassword"
//                       value={formData.confirmPassword}
//                       onChange={(e) => handleChange(e)}
//                       placeholder="Enter Your Confirm Password"
//                       required
//                     />
//                   </div>
//                   <Link to={"/home"}>
//                     <button type="submit" className="btn btn-primary w-100">
//                       Sign Up
//                     </button>
//                   </Link>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sign_Up;


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    gender: 'Female',
    classLevel: 'Class 1',
    regCode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your submission logic here
  };

  return (
    <div className="container mt-5 p-4 shadow rounded" style={{ maxWidth: '600px', backgroundColor: '#fff' }}>
      <h3 className="mb-4">Registration Info</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="row mb-3">
          <div className="col">
            <input
              type="date"
              className="form-control"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col">
            <select
              className="form-select"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <select
            className="form-select"
            name="classLevel"
            value={formData.classLevel}
            onChange={handleChange}
          >
            <option>Class 1</option>
            <option>Class 2</option>
            <option>Class 3</option>
          </select>
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Registration code"
            name="regCode"
            value={formData.regCode}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-success w-100">SUBMIT</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
