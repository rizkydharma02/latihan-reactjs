import { useState } from 'react';

const ReactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isDate, setIsDate] = useState('');
  const [gender, setGender] = useState('male');
  const [message, setMessage] = useState('');
  const [hobby, setHobby] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Date:', isDate);
    console.log('Gender:', gender);
    console.log('Message:', message);
    console.log('Hobby:', hobby);
  };

  const handleInputName = (e) => {
    setName(e.target.value);
  };

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleInputDate = (e) => {
    setIsDate(e.target.value);
  };

  const handleInputGender = (e) => {
    setGender(e.target.value);
  };

  const handleInputMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleInputHobby = (e) => {
    setHobby((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  return (
    <>
      <h2>React Form</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Enter your name :
          <input type="text" onChange={handleInputName} value={name} name="name" id="name" />
        </label>
        <label htmlFor="email">
          Enter your email :
          <input type="email" onChange={handleInputEmail} value={email} name="email" id="email" />
        </label>
        <label htmlFor="date">
          Enter your date :
          <input type="date" onChange={handleInputDate} value={isDate} name="date" id="date" />
        </label>
        <label htmlFor="gender">
          Select your gender :
          <select value={gender} onChange={handleInputGender} name="gender" id="gender">
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </label>
        <label htmlFor="message">
          Enter your message : <textarea onChange={handleInputMessage} name="message" id="message" />
        </label>
        <label htmlFor="hobby">
          Select your hobby :
          <input type="checkbox" onChange={handleInputHobby} name="reading" id="reading" checked={hobby.reading || false} />
          Reading
          <input type="checkbox" onChange={handleInputHobby} name="watching" id="watching" checked={hobby.watching || false} />
          Watching
          <input type="checkbox" onChange={handleInputHobby} name="coding" id="coding" checked={hobby.coding || false} /> Coding
        </label>
        <button type="submit">Submit</button>
      </form>

      <div>
        <p>name value : {name}</p>
        <p>email value : {email}</p>
        <p>date value : {isDate}</p>
        <p>gender value : {gender}</p>
        <p>message value : {message}</p>
        <p>
          hobby value : {hobby.reading ? 'reading,' : ''}
          {hobby.watching ? 'watching,' : ''}
          {hobby.coding ? 'coding' : ''}
        </p>
      </div>
    </>
  );
};

export default ReactForm;
