import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const initState = {
  userName: "",
  email: "",
  password: "",
  country: "",
  maritalStatus: false
};

function App() {
  const [formData, setFormData] = useState(initState);
  const [user, setUser] = useState([]);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData((prewFormData) => ({
      ...prewFormData,
      [name]: inputValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser([...user, formData]);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Form</h1>
        <label> userName :
          <input name="userName" type="text" value={formData.userName} onChange={handleChange} />
        </label>
        <br />
        <br />

        <label> email :
          <input name="email" type="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <br />

        <label> password :
          <input name="password" type="password" value={formData.password} onChange={handleChange} />
        </label>
        <br />
        <br />

        <label> country :
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="india" >INDIA</option>
            <option value="chaina" >CHAINA</option>
            <option value="usa" >USA</option>
            <option value="uae" >UAE</option>
            <option value="nepal">NEPAL</option>
          </select>
        </label>
        <br />
        <br />

        <label> Marital Status :
          <input name="maritalStatus" type="checkbox" value={formData.maritalStatus} onChange={handleChange} />
        </label>
        <br />
        <br />
        <input type="submit"/>
      </form>

    </div>
  );
}

export default App;
