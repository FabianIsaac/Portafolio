import React from 'react';
import { Parallax } from "react-parallax";
import CountUp from "react-countup";
import AOS from 'aos';
AOS.init();

const image1 = "./img/background/street.webp";

const Mblockquote = () => {

    const calcularHorasTrabajadas = (inicio, fin, horasPorSemana) => {
        const semanasTotales = (fin.year - inicio.year) * 52 + (fin.month - inicio.month);
        const horasTotales = semanasTotales * horasPorSemana;
        return horasTotales;
    }

    const currentDate = new Date();
    const fechaInicio = { year: 2013, month: 7 };
    const fechaFin = {
        year: currentDate.getFullYear(),
        month: currentDate.getMonth() + 1
    };
    const horasPorSemana = 45;
    const resultado = calcularHorasTrabajadas(fechaInicio, fechaFin, horasPorSemana);

    const resultadoCoffee = (resultado / 9) * 1;

    return (
        <div className="section bg-top bg-bottom py-0 d-none d-sm-block">
            <Parallax className="py-5" bgImage={image1} strength={350} >
                <div className="py-5 position-relative">
                    <div className="container counter">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="de_count text-center">
                                    <h3 className="timer"
                                        data-aos="fade"
                                        data-aos-delay="0"
                                        data-aos-duration="1000"
                                        data-aos-easing="ease"
                                        data-aos-once="true"
                                    >
                                        <CountUp
                                            start={0}
                                            end={resultado}
                                            duration={10}
                                            useEasing={true}
                                            separator="."
                                        />
                                    </h3>
                                    <span className='contactLink'>Horas trabajadas</span>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="de_count text-center">
                                    <h3 className="timer"
                                        data-aos="fade"
                                        data-aos-delay="200"
                                        data-aos-duration="1000"
                                        data-aos-easing="ease"
                                        data-aos-once="true"
                                    ><CountUp
                                            start={0}
                                            end={57}
                                            duration={5}
                                            useEasing={true}
                                            separator=","
                                        /></h3>
                                    <span className='contactLink'>Proyectos terminados</span>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="de_count text-center">
                                    <h3 className="timer"
                                        data-aos="fade"
                                        data-aos-delay="400"
                                        data-aos-duration="1000"
                                        data-aos-easing="ease"
                                        data-aos-once="true"
                                    ><CountUp
                                            start={0}
                                            end={resultadoCoffee}
                                            duration={7}
                                            useEasing={true}
                                            separator="."
                                        /></h3>
                                    <span className='contactLink'>Tazas de café</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
}

export default Mblockquote;