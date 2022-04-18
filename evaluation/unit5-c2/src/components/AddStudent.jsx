// import axios from "axios"
import { useState } from "react";
export const AddStudent = () => {

const [form_dat, set_form_dat] = useState ({})

const handleChange= (el) => {
   const {name, value} = el.target ;
   set_form_dat({
     ...form_dat,
     [name] : value
   }

   )
}

const handleSubmit= (el) => {
  el.preventDefault();
  form_dat.first_name == null ||
  form_dat.last_name == null ||
  form_dat.email == null ||
  form_dat.age > 50 ||
  form_dat.tenth_score > 100 ||
  form_dat.twelth_score > 100
  ? alert("Error...! Invalid Value...!")


  : fetch("http://localhost:8080/students", {
    method: "POST",
    
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(form_dat),
  });
};


  return (
    <form className="addstudent" onSubmit={handleSubmit} >
      <div>
        Firstname:{" "}
        <input
          type="text"
          name="first_name"
          className="first_name"
          placeholder="enter first name"
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        Last Name:
        <input
          type="text"
          name="last_name"
          className="last_name"
          placeholder="enter last name"
          value={form_dat.last_name}
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        Email:
        <input
          type="email"
          name="email"
          className="email"
          placeholder="enter email"
          value={form_dat.email}
          onChange={handleChange}
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
            name="gender"
            className="male"
            type="radio"
            value={"male"}
            onChange={handleChange}
          />{" "}
          Female{" "}
          <input
            name="gender"
            className="female"
            type="radio"
            value={"female"}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        Age{" "}
        <input
          type="number"
          name="age"
          className="age"
          placeholder="enter age"
          value={form_dat.age}
          onChange={handleChange}
        />
      </div>
      <div>
        Tenth Score:{" "}
        <input
          type="number"
          name="tenth_score"
          className="tenth_score"
          placeholder="enter 10th score"
          value={form_dat.tenth_score}
          onChange={handleChange}
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input
          type="number"
          name="twelth_score"
          className="twelth_score"
          placeholder="enter 12th score"
          value={form_dat.twelth_score}
          onChange={handleChange}
        />{" "}
      </div>
      <div>
        <select
          value={formData.preferred_branch} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
          onChange={handleChange}
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>

      <input className="submit" type="submit" value="Submit" />
      {
        // <div className="error"></div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};
