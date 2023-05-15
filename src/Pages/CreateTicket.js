
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { FormControl, FormLabel } from '@chakra-ui/react';


const REACT_BACKEND = process.env.REACT_APP_ENDPOINT;


function CreateTicket(props){


  const navigate = useNavigate();
  


  const initialState = {
    title: '',
    description: '',
    relatedTicketIds: '',
    assignedToUserId: '',
    status: 'incomplete',
    createdAt:  Date.now,
    createdById:  props._id,
    lastModified: Date.now,
    lastUpdatedById: props._id,
}

  const [formData, setFormData] = useState(initialState)
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] =useState([]);

  useEffect(() => {
    axios
    .get(REACT_BACKEND+ "/all")
    .then(res => {
      setTickets(res.data.tickets);
    })
    .catch(err =>{
      console.log('Error from ShowTicketList');
    })

    axios
    .get(REACT_BACKEND+ "/users/all")
    .then(res => {
      setUsers(res.data.users);
    })
    .catch(err =>{
      console.log('Error from ShowTicketList');
    })
    console.log(users);
  }, [])
  
  const handleOnChange = e => {
    const {name, value} = e.target;

    //update the form data on change 
    setFormData({
      ...formData, [name]:value
    })
    
  }

  const onSubmit = e => {
    e.preventDefault();

    //pass formData to post
    axios
      .post(REACT_BACKEND + '/create-one', formData)
      .then(res => {
        setFormData(initialState);
        navigate('/');
  
      })
      .catch(err => {
        console.log("Error in CreateBlog!");
      })
  }
  console.log(tickets);


  return (
  <form noValidate onSubmit={onSubmit}>
    <FormControl className='form-group'>
      <FormLabel htmlFor="formText">Title</FormLabel>
        <input
          type='text'
          placeholder='Title of the Ticket'
          name='title'
          className='form-control'
          value={formData.title}
          onChange={handleOnChange}
        />
      </FormControl>

      <FormControl className='form-group'>
      <FormLabel htmlFor="formDescription">Description</FormLabel>
    <textarea 
        placeholder='Description'
        name='description'
        className='form-control'
        value={formData.description}
        onChange={handleOnChange}
        class="form-control" 
        aria-label="With textarea"></textarea>
    </FormControl>

    <FormControl className='form-group'>
    <FormLabel htmlFor="formText">Asssigned to User ID</FormLabel>
    <select 
        placeholder='Assigned To User ID'
        name='assignedToUserId'
        className='form-control'
        value={formData.assignedToUserId}
        onChange={handleOnChange}
        
        >
      {users.map((assignedToUserId) =>{

          return (
          <option key={assignedToUserId._id} value ={assignedToUserId._id}>
            {assignedToUserId._id}
          </option>
        )
        })}
    </select>
    </FormControl>

    <FormControl className='form-group'>
    <FormLabel htmlFor="formText">Related Ticket ID's</FormLabel>
    <select 
        placeholder='related to Ticket ID'
        name='title'
        className='form-control'
        value={formData.relatedTicketIds}
        onChange={handleOnChange}
        >
      {tickets.map((relatedTicketId) =>{
      return (
      <option >
      {relatedTicketId._id}
      </option>
      )
      })}

    </select>
    </FormControl>

    <FormControl className='form-group'>
    <FormLabel htmlFor="formText">Status: </FormLabel>
    <select 
        placeholder='Status'
        name='status'
        className='form-control'
        value={formData.status}
        onChange={handleOnChange}
        >
          <option key="incomplete" value ="incomplete">
            incomplete
          </option>
          <option key="complete" value ="complete">
            complete
          </option>
          <option key="deferred" value ="deferred">
            deferred
          </option>
        
    </select>
    </FormControl>

    <FormControl className='form-group'>
    <FormLabel htmlFor="formText">Created Date</FormLabel>
        <input
          type='date'
          placeholder='CreatedAtDate'
          name='createdAt'
          className='form-control'
          value={formData.createdAt}
          onChange={handleOnChange}
        />
      </FormControl>

      <FormControl className='form-group'>
    <FormLabel htmlFor="formText">Created By ID</FormLabel>
    <select 
        placeholder='Created By ID'
        name='createdById'
        className='form-control'
        value={formData.createdById}
        onChange={handleOnChange}
        >
      {users.map((assignedToUserId) =>{

          return (
          <option >
            {assignedToUserId._id}
          </option>
        )
        })}
    </select>
    </FormControl>

    

    <FormControl className='form-group'>
    <FormLabel htmlFor="formText">Last Modified</FormLabel>
        <input
          type='date'
          placeholder='Last Modified'
          name='lastModified'
          className='form-control'
          value={formData.lastModified}
          onChange={handleOnChange}
        />
      </FormControl>

    <FormControl className='form-group'>
    <FormLabel htmlFor="formText">Last Updated By </FormLabel>
    <select 
        placeholder='Last Updated By'
        name='lastUpdatedById'
        className='form-control'
        value={formData.lastUpdatedById}
        onChange={handleOnChange}
        >
      {users.map((assignedToUserId) =>{
          return (
          <option >
            {assignedToUserId._id}
          </option>
        )
        })}
    </select>
    </FormControl>

      <input
          type="submit"
          className="btn btn-outline-warning btn-block mt-4"
      />
    </form>
  
  );

}

export default CreateTicket;
