import { useState } from 'react';

const ReactFormMultiple = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    date: '',
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', inputs);
  };
  return (
    <div>
      <h2>React Form Multiple</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="isname">
          Enter your name:
          <input type="text" name="name" id="isname" onChange={handleChange} value={inputs.name} />
        </label>
        <label htmlFor="isemail">
          Enter your email:
          <input type="email" name="email" id="isemail" onChange={handleChange} value={inputs.email} />
        </label>
        <label htmlFor="ispassword">
          Enter your password:
          <input type="password" name="password" id="ispassword" onChange={handleChange} value={inputs.password} />
        </label>
        <label htmlFor="isdate">
          Enter your date:
          <input type="date" name="date" id="isdate" onChange={handleChange} value={inputs.date} />
        </label>
        <button type="submit">Submit</button>
      </form>

      <div>
        <p>
          My name: {inputs.name}
          <br />
          Email: {inputs.email}
          <br />
          Password: {inputs.password}
          <br />
          Date: {inputs.date}
        </p>
      </div>
    </div>
  );
};

export default ReactFormMultiple;
