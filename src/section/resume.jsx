import React from 'react';
import AOS from 'aos';
AOS.init();



const hero = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>EXPERIENCIA PROFESIONAL</h2>
                    <div className="space-border"></div>
                </div>
            </div>
            <div className="row gh-5">

                <div className="col-lg-12"
                    data-aos="fade-up"
                    data-aos-once="true"
                >
                    <div className="p-4">
                        <ul className="d_timeline">

                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">Diciembre 2022 - Diciembre 2023</h3>
                                <p className="d_timeline-text">
                                    <span className="d_title">Desarrollador Front-End Senior / UX</span>
                                    <span className="d_company">API-UX</span>
                                    Encabecé la migración del sistema de Expediente Electrónico del Servicio de Impuestos Internos hacia una arquitectura más moderna, adoptando Vue3. Esta iniciativa resalta mi experiencia en la actualización y mejora de sistemas críticos mediante tecnologías de vanguardia.
                                </p>
                            </li>

                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">Marzo 2022 - Agosto 2022</h3>
                                <p className="d_timeline-text">
                                    <span className="d_title">Desarrollador Senior</span>
                                    <span className="d_company">Ecomsur</span>
                                    Conduje el desarrollo de una biblioteca en ReactJS diseñada para su implementación en microfrontends. Este proyecto reflejó mi capacidad para crear soluciones modulares y escalables, contribuyendo a la eficiencia y la coherencia en entornos de desarrollo distribuido.
                                </p>
                            </li>

                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">Octubre 2018 - Mayo 2021</h3>
                                <p className="d_timeline-text">
                                    <span className="d_title">Desarrollador Senior</span>
                                    <span className="d_company">TechRules LATAM</span>
                                    Conduje el desarrollo e integración de servicios REST para el sector bancario en España, empleando tecnologías de vanguardia como .NET y SQL Server. Este proyecto subraya mi habilidad para ofrecer soluciones innovadoras en el ámbito financiero mediante tecnologías sólidas y eficientes.
                                </p>
                            </li>

                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">Septiembre 2016 - Septiembre 2018</h3>
                                <p className="d_timeline-text">
                                    <span className="d_title">Desarrollador / Analista de calidad</span>
                                    <span className="d_company">Desis</span>
                                    Mi compromiso con los entregables internos y mi experiencia en patrones de diseño me condujeron a asumir el liderazgo en el proyecto de facturación en Perú. En este rol, tuve la responsabilidad de capacitar y dirigir un equipo reducido.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">Junio 2015 - Septiembre 2016</h3>
                                <p className="d_timeline-text">
                                    <span className="d_title">Desarrollador Front-End / UX</span>
                                    <span className="d_company">Sociedad de tecnología e informática Smart Payments SpA</span>
                                    Como responsable de la experiencia del usuario, lideré el desarrollo e integración del frontend, empleando AngularJS y MaterializeCSS. Este rol resalta mi compromiso con la excelencia en la usabilidad y la aplicación de tecnologías líderes en el diseño de interfaces.
                                </p>
                            </li>

                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">Octubre 2014 - Junio 2015</h3>
                                <p className="d_timeline-text">
                                    <span className="d_title">Desarrollador Full-Stack</span>
                                    <span className="d_company">WebMachine</span>
                                    Dirigí la creación de soluciones de Tecnologías de la Información para instituciones gubernamentales, centrándome principalmente en el empleo estratégico de CakePHP, Laravel y Symfony. Este enfoque selectivo subraya mi capacidad para implementar soluciones tecnológicas avanzadas y eficientes en contextos gubernamentales críticos.
                                </p>
                            </li>

                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">Febrero 2014 - Agosto 2014</h3>
                                <p className="d_timeline-text">
                                    <span className="d_title">Desarrollador Full-Stack</span>
                                    <span className="d_company">Puga Ortiz Abogados</span>
                                    Implementé una solución integral mediante el desarrollo de una intranet con robustas herramientas de administración, haciendo uso de la versatilidad y potencial de WordPress. Este proyecto destacó por su enfoque meticuloso en la eficiencia y la experiencia del usuario, reflejando mi compromiso con estándares profesionales y soluciones tecnológicas avanzadas.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* <div className="col-lg-6"
                    data-aos="fade-up"
                    data-aos-once="true"
                >
                    <div className="p-4">
                        <h3 className="s_border">Education</h3>
                        <ul className="d_timeline">
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2004 - 2008</h3>
                                <p className="d_timeline-text">
                                    <span className="d_title">Master in Design</span>
                                    <span className="d_company">New York University</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2004 - 2008</h3>
                                <p className="d_timeline-text">
                                    <span className="d_title">Bachelor of Arts</span>
                                    <span className="d_company">University of London</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2006 - 2004</h3>
                                <p className="d_timeline-text">
                                    <span className="d_title">Artist of College</span>
                                    <span className="d_company">University of Sydney</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div> */}
                <div className="spacer-double"></div>
            </div>
        </div>
    );
}

export default hero;