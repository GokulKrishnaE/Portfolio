import React from 'react'

export default function Contact() {
  return (
    <div className="section" id='contact'>
        <h2 className="section-title">Contact Me</h2>
        <div className="row">
            <div className="col-lg-6">
            <div className='contact-form'>
                <div className="form-group mb-3">
                    <label htmlFor="name" className='mb-2'>Name</label>
                    <input type="text" className="form-control" id='name' />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email" className='mb-2'>Email</label>
                    <input type="text" className="form-control" id='email' />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="message" className='mb-2'>Message</label>
                    <textarea name="" className='form-control' rows={5} id="message"></textarea>
                </div>
                <div className="d-md-flex align-items-center justify-content-between">
                    <button className="btn btn-primary">Send</button>
                    <div className='contact-icons mt-3 mt-sm-0'>
                        <a href='tel:9961683998'><i className="fa-solid fa-phone"></i></a>
                        <a href="mailto:gokul44krishna@gmail.com"><i className="fa-regular fa-envelope"></i></a>
                        <a href="https://wa.me/919961683998" target='_blank'><i className="fa-brands fa-whatsapp"></i></a>
                        <a href="https://in.linkedin.com/in/gokul-krishna-e" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                        <a href=""><i className="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
