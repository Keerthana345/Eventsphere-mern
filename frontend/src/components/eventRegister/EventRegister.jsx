import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import './EventRegister.css';

function EventRegister() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { state } = useLocation(); 
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [showModal, setShowModal] = useState(false);
  const isTeamEvent = state.event.teamSize;

  async function onSubmit(data) {
    const submissionData = { ...data, eventId: state.event._id };
    
    try {
        const res = await fetch('http://localhost:4000/user-api/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionData),
        });
        const result = await res.json();
  
        if (result.message === "User registered") {
          setShowModal(true);
        }
    } catch (err) {
      setErr(err.message);
    }
  };
  
  function closeModal() {
    setShowModal(false);
  }

  function eventlisitng() {
    closeModal();
    navigate('/eventListing', { state: { date: state.event.date } });
  }

  function renderTeamFields(){
    const teamFields = [];
    for (let i = 1; i <= Number(state.event.teamSize) - 1; i++) {
      teamFields.push(
        <div key={i} className='form-group'>
          <label htmlFor={`fullname_${i}`} className='form-label mt-3'>Full Name (Team Member {i})</label>
          <input type="text" id={`fullname_${i}`} className='form-control' {...register(`fullname_${i}`, { required: true })} />
          {errors[`fullname_${i}`] && <p className="text-danger fs-6">*Full Name is required</p>}
          
          <label htmlFor={`rollno_${i}`} className='form-label mt-3'>Roll Number (Team Member {i})</label>
          <input type="text" id={`rollno_${i}`} className='form-control' {...register(`rollno_${i}`, { required: true })} />
          {errors[`rollno_${i}`] && <p className="text-danger fs-6">*Roll Number is required</p>}
        </div>
      );
    }
    return teamFields;
  };

  return (
    <div className='register-page'>
        <div className='fs-2 ms-4 mt-2 back' onClick={eventlisitng}>
        <IoArrowBackCircleSharp />
        </div>
      <div className='register-container'>
        <div className='register-info'>
          <h1 className='register-title'>Register for <span>"{state.event.title}"</span></h1> 
          <h2>Provide your details below to complete your registration.</h2>
        </div>
        <div className='register-form-container mt-2'>
          {err.length !== 0 && <p className='text-danger fs-2'>*{err}</p>}
          <form className='register-form mt-4 p-4 mb-3' onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="fullname" className='form-label mt-3'>Full Name {isTeamEvent ? "(Team Leader)" : ""}</label>
              <input type="text" id="fullname" className='form-control' {...register("fullname", { required: true })} />
              {errors.fullname && <p className="text-danger fs-6">*Full Name is required</p>}
            </div>

            <div className="form-group">
              <label htmlFor="rollno" className='form-label mt-3'>Roll Number {isTeamEvent ? "(Team Leader)" : ""}</label>
              <input type="text" id="rollno" className='form-control' {...register("rollno", { required: true })} />
              {errors.rollno && <p className="text-danger fs-6">*Roll Number is required</p>}
            </div>

            {isTeamEvent && renderTeamFields()}

            <div className="form-group">
              <label htmlFor="email" className='form-label mt-3'>Email {isTeamEvent ? "(Team Leader)" : ""}</label>
              <input type="email" id="email" className='form-control' {...register("email", { required: true })} />
              {errors.email && <p className="text-danger fs-6">*Email is required</p>}
            </div>

            <div className="form-group">
              <label htmlFor="branch" className='form-label mt-3'>Branch</label>
              <input type="text" id="branch" className='form-control' {...register("branch", { required: true })} />
              {errors.branch && <p className="text-danger fs-6">*Branch is required</p>}
            </div>

            <div className="form-group">
              <label htmlFor="sec" className='form-label mt-3'>Section</label>
              <input type="text" id="sec" className='form-control' {...register("sec", { required: true })} />
              {errors.sec && <p className="text-danger fs-6">*Section is required</p>}
            </div>

            <div className="form-group">
              <label htmlFor="phone" className='form-label mt-3'>Phone Number</label>
              <input type="tel" id="phone" className='form-control' {...register("phone", { required: true })} />
              {errors.phone && <p className="text-danger fs-6">*Phone Number is required</p>}
            </div>

            <div className='button'>
              <button className="btn btn-secondary mt-4">Register Now</button>
            </div>
          </form>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay m5">
          <div className="modal-dialog">
            <div className="modal-content">
              <h5>You've successfully registered for the event!</h5>
              <button className='btn btn-secondary mt-3' onClick={eventlisitng}>
                Back to Event Listing
              </button>
              <button className="btn btn-primary mt-3" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventRegister;
