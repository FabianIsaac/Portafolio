import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Navbar from '../layout/Navbar';
import Hero from '../section/heroLight';
import About from '../section/about';
import Blockquote from '../section/blockquoteLight';
import Whatido from '../section/whatido';
import Resume from '../section/resume';
import Counter from '../section/counterLight';
import Contact from '../section/contactLight';
import Footer from '../section/footer';
import Preloader from "../layout/Preloader";
import ScrollToTopBtn from '../layout/ScrollToTop';
// import Gallery from '../section/gallery';
// import Blog from '../section/blog';
import { GlobalStyles } from './style/light';

const image1 = "./img/background/bgl.jpeg";

function home() {
  return (
    <>
      <GlobalStyles />
      <Preloader />
      <div className="home">

        <header id="header-wrap">
          <Navbar />
        </header>

        {/* HERO */}
        <section id="hero-area" className="bg-bottom py-0">
          <Parallax bgImage={image1} strength={300}>
            <Hero />
            <Link smooth spy to="about">
              <span className="mouse transition" id="fly">
                <span className="scroll"></span>
              </span>
            </Link>
          </Parallax>
        </section>

        {/* ABOUT */}
        <section id="about" className="pb-0">
          <About />
          <Blockquote />
        </section>

        {/* What I DO */}
        <section id="whatido">
          <Whatido />
        </section>

        {/* Gallery */}
        {/* <section id="gallery">
          <Gallery />
        </section> */}

        {/* Gallery */}
        <section id="resume">
          <Resume />
          <Counter className="pb-0 d-none d-sm-block"/>
        </section>

        {/* Gallery */}
        {/* <section id="blog" className="pb-0">
          <Blog />
        </section> */}

        {/* contact */}
        <section id="contact" className="pb-0">
          <Contact />
          <Footer />
        </section>




        <div className="float-text">
          <div className="de_social-icons">
            <span className="buton">
              <a href="https://github.com/FabianIsaac" target="_blank" className="contactLink" rel="noreferrer"><i className="fa fa-github"></i></a>
            </span>
            <span className="buton">
              <a href="https://www.instagram.com/verdeavocado.q" target="_blank" className="contactLink" rel="noreferrer"><i className="fa fa-instagram"></i></a>
            </span>
            <span className="buton">
              <a href="https://www.linkedin.com/in/fquintanillah" target="_blank" className="contactLink" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
            </span>
          </div>
          <span>Sígueme</span>
        </div>

      </div>
      <ScrollToTopBtn />
    </>
  );
}

export default home;
