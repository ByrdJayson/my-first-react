import React, { useState } from 'react'
import formSchema from './validation/formSchema';
import './App.css';
import Form from './components/Form';
import * as yup from 'yup';
import axios from 'axios';

const initialFormValues = {
    username: '',
    password: '',
    email: '',
    tos: false
  }

  const initialFormErrors = {
    username: '',
    password: '',
    email: '',
    tos: ''
  }

  
function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);
  const change = (name, value) => {
    
    setFormValues( { ...formValues, [name]: value } );
  }

  const submit = () => {
    axios.post('https://reqres.in/api/users', formValues)
    .then(res => {
      setUsers([...users, res.data]);
    })
    .catch(err => {
      console.error(err);
    })
    .finally(setFormValues(initialFormValues));
  }

    const validate = (value, name) => {
      yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors( {...formErrors, [name]: ''} )
      .catch(err => {
        setFormErrors( {...formErrors, [name]: err.errors[0]} )
      })
      })
    }
  return (
    <div className="App">
      <Form values={formValues} change={change} errors={formErrors} submit={submit}/>

      {users.map(user => (
        <div key={user.id}>
        <p>{user.createdAt}</p>
        <p>{user.email}</p>
        
      </div>
      ))}
    </div>
  );
}

export default App;
