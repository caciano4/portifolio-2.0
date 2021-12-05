import Section from "./homeStyle.js";
import {
  Menu,
  LogoLinkedin,
  LogoInstagram,
  LogoWhatsapp,
} from "react-ionicons";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Home() {
  return (
    <Section>
      <Router>
        <div className="">
          <article className="d-flex">
            {/* Section to Image */}
            <div>
              <div className="image">
                <img
                  className="img-fluid"
                  src="/assets/walter.jpeg"
                  alt="Desenvolvedor Walter caciano"
                />
              </div>
            </div>

            {/* Description about me */}
            <div className="container" id="content">
              {/* navbar of home */}
              <nav className="navbar navbar-light">
                <Link
                  className="navbar-brand btn-portifolio font-playfair"
                  to="#"
                >
                  Portifolio
                </Link>
                <Link className="navbar-brand btn-menu" to="#">
                  <Menu
                    color={"#00045"}
                    height="50px"
                    width="30px"
                    onClick={() => alert("Hi!")}
                  />
                </Link>
              </nav>
              <div className="content-about-me">
                <div className="d-flex mt-5">
                  <div>
                    <h3 className="mt-4 mb-0 font-playfair">
                      <span className="title-apresentation font-playfair">
                        Ola
                      </span>
                      , Me chamo
                    </h3>
                    <h1 className="title-name">Walter Caciano</h1>
                    <h3 className="font-playfair">Desenvolvedor Fullstack</h3>
                  </div>
                </div>
                <p className="mt-4 about-me font-playfair">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Numquam obcaecati eos nemo fugit mollitia modi officiis iusto
                  autem laboriosam neque nam quisquam id quae quis molestias
                  consequuntur, blanditiis eum vero facilis fugiat facere,
                  quibusdam aut, quas aliquam? Quisquam facilis corporis quaerat
                  nobis, delectus veniam iusto! Facere nostrum hic
                  exercitationem animi
                </p>
              </div>

              <button className="btn-home mt-3">sobre mim</button>

              <div id="logo">
                <Link className="navbar-brand logo-linkedin" to="#">
                  <LogoLinkedin
                    color={"#00045"}
                    height="50px"
                    width="30px"
                    onClick={() => alert("Hi!")}
                  />
                </Link>
                <Link className="navbar-brand logo-instagran" to="#">
                  <LogoInstagram
                    color={"#00045"}
                    height="50px"
                    width="30px"
                    onClick={() => alert("Hi!")}
                  />
                </Link>
                <Link className="navbar-brand" to="#">
                  <LogoWhatsapp
                    className="logo-whats"
                    color={"#00045"}
                    height="50px"
                    width="30px"
                    onClick={() => alert("Hi!")}
                  />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </Router>
    </Section>
  );
}

export default Home;
