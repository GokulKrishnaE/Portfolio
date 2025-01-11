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
    <section class="section contact-section" id='contact-section'>
    <div class="container">
        <h2 class="section-title">Contact Me</h2>
        <div class="max-80 text-center">
            <p class="mt-40">Feel free to connect with me through my social handles below!</p>
            <ul class="socialLinks">
                <li class="whatsapp"><a href="https://wa.me/9497243998"> <i class="fa-brands fa-whatsapp"></i> <span class="sr-only text-black">chat on whatsapp</span></a></li>
                <li class="whatsapp"><a href="mailto:gokul44krishna@gmail.com"> <i class="fa-solid fa-envelope"></i> <span class="sr-only text-black">email me</span></a></li>
                <li class="whatsapp"><a href="https://www.linkedin.com/in/gokul-krishna-e" target="_blank"> <i class="fa-brands fa-linkedin"></i> <span class="sr-only text-black">go to my linkedin profile</span></a></li>
                <li class="whatsapp"><a href="https://www.github.com/gokulkrishnae" target="_blank"> <i class="fa-brands fa-github"></i> <span class="sr-only text-black">go to my github profile</span></a></li>
            </ul>
        </div>
    </div>
</section>

  )
}
