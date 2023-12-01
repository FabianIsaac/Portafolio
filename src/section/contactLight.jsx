import React from 'react';
import emailjs from 'emailjs-com';
import { Parallax } from "react-parallax";
import AOS from 'aos';
AOS.init();

const image1 = "./img/background/l4.jpg";
const contact = () => {

    function sendEmail(e) {

        const success = document.getElementById("success");
        const button = document.getElementById("send_message");
        const failed = document.getElementById("failed");

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const message = document.getElementById("message");


        e.preventDefault();

        emailjs.sendForm('service_dkjigyf', 'template_4gjqibh', e.target, 'TfupYjncsyR_spn7q')
            .then(() => {

                name.value = "";
                email.value = "";
                phone.value = "";
                message.value = "";

                success.classList.add('show');
                button.classList.add('show');
                failed.classList.remove('show');

                setTimeout(function () {
                    success.classList.remove('show');
                    button.classList.remove('show');
                }, 10000);

            }, () => {
                // console.log(error.text);
                failed.classList.add('show');
            });
    }

    return (
        <div className="section bg-top bg-bottom py-0">
            <Parallax className="py-5" bgImage={image1} strength={300}>
                <div className="py-5 position-relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center"
                                data-aos="fade-up"
                                data-aos-once="true"
                                data-aos-delay="0"
                                data-aos-duration="1000"
                                data-aos-easing="ease"
                            >
                                <h2>Contactame</h2>
                                <div className="space-border"></div>
                            </div>
                        </div>
                        <div className="col-lg-8 offset-lg-2"
                            data-aos="fade-up"
                            data-aos-once="true"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                        >
                            <div className="contact_form_wrapper">
                                <form name="contactForm" id="contact_form" className="form-border" onSubmit={sendEmail}>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="field-set">
                                                <input type="text" name="name" id="name" className="form-control" placeholder="Nombre" required />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="field-set">
                                                <input type="text" name="email" id="email" className="form-control" placeholder="Correo" required />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="field-set">
                                                <input type="text" name="phone" id="phone" className="form-control" placeholder="Teléfono" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="field-set">
                                            <textarea name="message" id="message" className="form-control" placeholder="Mensaje..." required></textarea>
                                        </div>
                                        <div id='success' className='hide'>Mensaje enviado, pronto me pondré en contacto.</div>
                                        <div id='failed' className='hide'>Mensaje no enviado...</div>
                                        <div id='submit' className="mt30">
                                            <button type='submit' id='send_message' className="btn-main">
                                                Enviar mensaje
                                            </button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                            <div className="spacer-double"></div>
                            <div className="row text-center">
                                <div className="offset-md-2 col-md-4"
                                    data-aos="fade-up"
                                    data-aos-once="true"
                                    data-aos-delay="0"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease"
                                >
                                    <div className="wm-1"></div>
                                    <h6>Escríbeme</h6>
                                    <a href="mailto:fabian.quintanilla03@gmail.com" className='contactLink'>
                                        <p>fabian.quintanilla03@gmail.com</p>
                                    </a>
                                </div>
                                <div className="col-md-4"
                                    data-aos="fade-up"
                                    data-aos-once="true"
                                    data-aos-delay="200"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease"
                                >
                                    <div className="wm-1"></div>
                                    <h6>Llamame</h6>
                                    <a href="tel:+56996175361" className='contactLink'>
                                        <p>+56 9 96175361</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
}

export default contact;