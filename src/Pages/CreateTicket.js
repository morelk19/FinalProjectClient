import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';


const REACT_BACKEND = process.env.REACT_APP_ENDPOINT;


function CreateTicket(props){
  const auth = localStorage.getItem(process.env.REACT_APP_TOKEN_HEADER_KEY)
  console.log(auth);

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
    <div className="CreateTicket">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-outline-warning float-left">
                Show Ticket List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add </h1>
            <p className="lead text-center">
                Create New Ticket
            </p>

            <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor="formText">Title</label>
                <input
                  type='text'
                  placeholder='Title of the Ticket'
                  name='title'
                  className='form-control'
                  value={formData.title}
                  onChange={handleOnChange}
                />
              </div>

            <div className='form-group'>
            <div>
            <label htmlFor="description">Description: </label>
            </div>
            <textarea 
                placeholder='Description'
                name='description'
                className='form-control'
                value={formData.description}
                onChange={handleOnChange}
                class="form-control" 
                aria-label="With textarea"></textarea>
            </div>

            <div>
            <label htmlFor="assignedToUserId">Asssigned to User ID</label>
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
            </div>

            <div>
            <label htmlFor="relatedTicketIds">Related Ticket ID's</label>
            <select 
                placeholder='related to Ticket ID'
                name='title'
                className='form-control'
                value={formData.relatedTicketIds}
                onChange={handleOnChange}
               >
              {tickets.map((relatedTicketId) =>{
              return (
              <option key={relatedTicketId._id} value ={relatedTicketId._id}>
              {relatedTicketId._id}
              </option>
              )
              })}

            </select>
            </div>

            <div>
            <label htmlFor="status">Status: </label>
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
            </div>

            <div className='form-group'>
              <label htmlFor="createdAt">Created Date</label>
                <input
                  type='date'
                  placeholder='CreatedAtDate'
                  name='createdAt'
                  className='form-control'
                  value={formData.createdAt}
                  onChange={handleOnChange}
                />
              </div>

              <div>
            <label htmlFor="createdById">Created By ID</label>
            <select 
                placeholder='Created By ID'
                name='createdById'
                className='form-control'
                value={formData.createdById}
                onChange={handleOnChange}
               >
                <option key={auth.userId} value ={auth._id}>
                    {auth._id}
                  </option>
              {users.map((assignedToUserId) =>{

                  return (
                  <option key={assignedToUserId._id} value ={assignedToUserId._id}>
                    {assignedToUserId._id}
                  </option>
                )
                })}
            </select>
            </div>

            
            <div className='form-group'>
              <label htmlFor="lastModified">Last Modified</label>
                <input
                  type='date'
                  placeholder='Last Modified'
                  name='lastModified'
                  className='form-control'
                  value={formData.lastModified}
                  onChange={handleOnChange}
                />
              </div>

            <div>
            <label htmlFor="lastUpdatedById">Last Updated By </label>
            <select 
                placeholder='Last Updated By'
                name='lastUpdatedById'
                className='form-control'
                value={formData.lastUpdatedById}
                onChange={handleOnChange}
               >
                <option key={auth.userId} value ={auth._id}>
                    {auth._id}
                  </option>
              {users.map((assignedToUserId) =>{

                  return (
                  <option key={assignedToUserId._id} value ={assignedToUserId._id}>
                    {assignedToUserId._id}
                  </option>
                )
                })}
            </select>
            </div>

              <input
                  type="submit"
                  className="btn btn-outline-warning btn-block mt-4"
              />
            </form>
        </div>
        </div>
      </div>
    </div>

  );

}

export default CreateTicket;
