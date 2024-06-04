import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function Contact() {

const { register, handleSubmit, formState: { errors }, reset } = useForm();
const [showSuccess,setShowSuccess] = useState(false)

const onSubmit = (data) => {
    reset()
    setShowSuccess(true)
    setTimeout(() => {
        setShowSuccess(false)
    }, 5000);
};


return (
    <div className="section contact-us-section" id='contact'>
        <div className="container">
            <h2 className="section-title">Contact Me</h2>
            <div className="row">
                <div className="col-lg-6">
                    <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-3">
                            <label htmlFor="name" className='mb-2'>Name</label>
                            <input 
                            type="text" 
                            className={errors.name ? 'form-control error' : 'form-control'}
                            id='name' 
                            {...register('name', {
                                required: true})}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="email" className='mb-2'>Email</label>
                            <input 
                            type="text" 
                            className={errors.email ? 'form-control error' : 'form-control'}
                            id='email' 
                            {...register('email', {
                                required: true,
                                pattern: {
                                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: 'Invalid email address',
                                },
                              })}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="message" className='mb-2'>Message</label>
                            <textarea 
                            name="" 
                            className={errors.message ? 'form-control error' : 'form-control'}
                            rows={5} id="message"
                            {...register('message', {
                                required: true})}
                            ></textarea>
                        </div>
                        {errors.email && <p className='errorMsg'>{errors.email.message}</p>}
                        {Object.keys(errors).length > 0 && <p className='errorMsg'>Please fill all the fields</p>}
                        <div className="d-md-flex align-items-center justify-content-between">
                            <button type='submit' className="btn btn-primary"><span>Send</span><i className="fas fa-paper-plane"></i></button>
                            <div className='contact-icons mt-3 mt-sm-0'>
                                {/* <a href='tel:9961683998'><i className="fa-solid fa-phone"></i></a> */}
                                <a href="mailto:gokul44krishna@gmail.com"><i className="fa-regular fa-envelope"></i></a>
                                {/* <a href="https://wa.me/919961683998" target='_blank'><i className="fa-brands fa-whatsapp"></i></a> */}
                                <a href="https://in.linkedin.com/in/gokul-krishna-e" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                                <a href="https://github.com/gokulkrishnae" target='_blank'><i className="fa-brands fa-github"></i></a>
                                {/* <a href=""><i className="fa-brands fa-instagram"></i></a> */}
                            </div>
                        </div>
                        {showSuccess && <p className='successMsg'>Thanks for sending the message!</p>}
                    </form>
                </div>
                <div className="col-lg-6">
                    <div className="background-icon">
                        <i className="fas fa-paper-plane"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
