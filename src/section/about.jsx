import React from 'react';
import "react-circular-progressbar/dist/styles.css";
import AOS from 'aos';
AOS.init();

const js = "./img/tech/js.webp";
const html = "./img/tech/html5.webp";
const css = "./img/tech/css.webp";
const php = "./img/tech/php.webp";
const net = "./img/tech/net.webp";
const dart = "./img/tech/dart.webp";
const angular = "./img/tech/angular.webp";
const react = "./img/tech/reactjs.webp";
const flutter = "./img/tech/flutter.webp";
const vue = "./img/tech/vue3.webp";
const sass = "./img/tech/sass.webp";
const vitejs = "./img/tech/vitejs.webp";



const hero = () => {
	return (
		<div className="v-center">
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<h2 data-aos="fade-up"
							data-aos-delay="0"
							data-aos-duration="1000"
							data-aos-easing="ease"
							data-aos-once="true">¿Quién soy?</h2>
						<div className="space-border"
							data-aos="fade-up"
							data-aos-delay="20"
							data-aos-duration="1000"
							data-aos-easing="ease"
							data-aos-once="true"
						></div>
					</div>
					<div className="col-md-9 text-center m-auto"
						data-aos="fade-up"
						data-aos-delay="60"
						data-aos-duration="1000"
						data-aos-easing="ease"
						data-aos-once="true"
					>
						<p>
							Soy un apasionado desarrollador de software full-stack especializado en front-end con más de 6 años de experiencia en el mundo de la tecnología.
							Mi enfoque se ha centrado en proporcionar soluciones de TI innovadoras para organizaciones públicas y privadas, utilizando un variado conjunto de tecnologías y diversos frameworks de vanguardia.
						</p>
					</div>
				</div>

				<div className="row align-items-center justify-content-center mt-5 mb-5">
					<div className="col-4 col-sm-3 col-md-2 col-lg-1 text-center"
						data-aos="fade"
						data-aos-delay="100"
						data-aos-duration="1000"
						data-aos-easing="ease"
						data-aos-once="true"
					>
						<img src={html} alt="HTML" className="img-fluid img-tech" />
						<h6 className="mt-2">HTML</h6>
					</div>
					<div className="col-4 col-sm-3 col-md-2 col-lg-1 text-center"
						data-aos="fade"
						data-aos-delay="200"
						data-aos-duration="1000"
						data-aos-easing="ease"
						data-aos-once="true"
					>
						<img src={css} alt="CSS" className="img-fluid img-tech" />
						<h6 className="mt-2">CSS</h6>
					</div>
					<div className="col-4 col-sm-3 col-md-2 col-lg-1 text-center"
						data-aos="fade"
						data-aos-delay="300"
						data-aos-duration="1000"
						data-aos-easing="ease"
						data-aos-once="true"
					>
						<img src={js} alt="Javascript" className="img-fluid img-tech" />
						<h6 className="mt-2">Javascript</h6>


					</div>
					<div className="col-4 col-sm-3 col-md-2 col-lg-1 text-center"
						data-aos="fade"
						data-aos-delay="400"
						data-aos-duration="1000"
						data-aos-easing="ease"
						data-aos-once="true"
					>
						<img src={php} alt="PHP" className="img-fluid img-tech" />
						<h6 className="mt-2">PHP</h6>
					</div>

					<div className="col-4 col-sm-3 col-md-2 col-lg-1 text-center"
						data-aos="fade"
						data-aos-delay="500"
						data-aos-duration="1000"
						data-aos-easing="ease"
						data-aos-once="true"
					>
						<img src={net} alt=".NET" className="img-fluid img-tech" />
						<h6 className="mt-2">.NET</h6>
					</div>

					<div className="col-4 col-sm-3 col-md-2 col-lg-1 text-center"
						data-aos="fade"
						data-aos-delay="600"
						data-aos-duration="1000"
						data-aos-easing="ease"
						data-aos-once="true"
					>
						<img src={dart} alt="Dart" className="img-fluid img-tech" />
						<h6 className="mt-2">Dart</h6>
					</div>

					<div className="col-4 col-sm-3 col-md-2 col-lg-1 text-center"
						data-aos="fade"
						data-aos-delay="700"
						data-aos-duration="1000"
						data-aos-easing="ease"
						data-aos-once="true"
					>
						<img src={vue} alt="Vue" className="img-fluid img-tech" />
						<h6 className="mt-2">Vue</h6>
					</div>



					<div className="col-4 col-sm-3 col-md-2 col-lg-1 text-center"
						data-aos="fade"
						data-aos-delay="800"
						data-aos-duration="1000"
						data-aos-easing="ease"
						data-aos-once="true"
					>
						<img src={react} alt="ReactJS" className="img-fluid img-tech" />

						<h6 className="mt-2">ReactJs</h6>
					</div>

					<div className="col-4 col-sm-3 col-md-2 col-lg-1 text-center"
						data-aos="fade"
						data-aos-delay="900"
						data-aos-duration="1000"
						data-aos-easing="ease"
						data-aos-once="true"
					>
						<img src={angular} alt="Angular" className="img-fluid img-tech" />

						<h6 className="mt-2">Angular</h6>
					</div>

					<div className="col-4 col-sm-3 col-md-2 col-lg-1 text-center"
						data-aos="fade"
						data-aos-delay="1000"
						data-aos-duration="1000"
						data-aos-easing="ease"
						data-aos-once="true"
					>
						<img src={flutter} alt="Flutter" className="img-fluid img-tech" />

						<h6 className="mt-2">Flutter</h6>
					</div>

					<div className="col-4 col-sm-3 col-md-2 col-lg-1 text-center"
						data-aos="fade"
						data-aos-delay="1100"
						data-aos-duration="1000"
						data-aos-easing="ease"
						data-aos-once="true"
					>
						<img src={sass} alt="Sass" className="img-fluid img-tech" />

						<h6 className="mt-2">Sass</h6>
					</div>

					<div className="col-4 col-sm-3 col-md-2 col-lg-1 text-center"
						data-aos="fade"
						data-aos-delay="1200"
						data-aos-duration="1000"
						data-aos-easing="ease"
						data-aos-once="true"
					>
						<img src={vitejs} alt="Sass" className="img-fluid img-tech" />

						<h6 className="mt-2">Vite</h6>
					</div>

				</div>
			</div>
		</div>
	);
}

export default hero;