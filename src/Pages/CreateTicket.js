
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import { Dropdown } from "bootstrap";
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
    assignedToUserId: '',
    status: 'incomplete',
    createdAt:  Date.now,
    createdById:  props._id,
    lastModified: Date.now,
    lastUpdatedById: props._id,

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
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            <div>
            <label htmlFor="relatedTickedId">Related Ticket ID's</label>
            <select 
                placeholder='Title of the Ticket'
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
              {tickets.map((relatedTicketId) =>{
                  return (
                  <option key={relatedTicketId._id} value ={relatedTicketId._id}>
                    {relatedTicketId._id}
                  </option>
                )
                })}
            </select>
            </div>

            

            
            <div className='form-group'>
            <label htmlFor="year">Year</label>
              <input
                type='number'
                min = '1800'
                max='2023'
                placeholder='Year of the Blog'
                name='year'
                className='form-control'
                value={formData.year}
                onChange={handleOnChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="categories">Categories</label>
              <input
                type='text'
                placeholder='Categories of Blog'
                name='categories'
                className='form-control'
                value={formData.categories}
                onChange={handleOnChange}
              />
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
