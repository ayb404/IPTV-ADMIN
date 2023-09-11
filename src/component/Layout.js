import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Layout = () => {


    
  // const [records, setRecords] = useState([]);
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  // });

  // useEffect(() => {
  //   axios.get('/api/records')
  //     .then(response => setRecords(response.data))
  //     .catch(error => console.log(error));
  // }, []);

  // const handleInputChange = event => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleFormSubmit = event => {
  //   event.preventDefault();
  //   axios.post('/api/records', formData)
  //     .then(response => setRecords([...records, response.data]))
  //     .catch(error => console.log(error));
  // };

  // const handleRecordUpdate = (id, data) => {
  //   axios.put(`/api/records/${id}`, data)
  //     .then(response => {
  //       const updatedRecords = records.map(record => {
  //         if (record.id === response.data.id) {
  //           return response.data;
  //         }
  //         return record;
  //       });
  //       setRecords(updatedRecords);
  //     })
  //     .catch(error => console.log(error));
  // };

  // const handleRecordDelete = id => {
  //   axios.delete(`/api/records/${id}`)
  //     .then(() => setRecords(records.filter(record => record.id !== id)))
  //     .catch(error => console.log(error));
  // };


  return (
    <>
    {/* <div>
      <h1>Records</h1>
      <div>
      <ul>
        {records.map(record => (
          <li key={record.id}>
            <p>{record.name}</p>
            <p>{record.email}</p>
            <p>{record.phone}</p>
            <button onClick={() => handleRecordDelete(record.id)}>Delete</button>
            <button onClick={() => handleRecordUpdate(record.id, { name: 'John Doe' })}>Update</button>
          </li>
        ))}
      </ul>
      </div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleInputChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
        <input type="tel" name="phone" placeholder="Phone" onChange={handleInputChange} />
        <button type="submit">Create</button>
      </form>
    </div> */}

    </>
  )
}

export default Layout