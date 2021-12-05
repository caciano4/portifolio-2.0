import { BrowserRouter as Route, Link } from "react-router-dom";
import Section from "../about/aboutStyle";

function About() {
  return (
    <Section>
      <Route>
        <article
          id="content-about"
          className="d-flex justify-content-center flex-column flex-wrap align-self-center"
        >
          <h1 className="title-about mt-3">Sobre Nós</h1>
          <p className="mt-5 font-playfair p-content-about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            voluptatum et expedita nam dolorem sapiente repudiandae eveniet
            consequatur aut dolorum veritatis inventore rerum praesentium velit
            possimus animi nihil dignissimos magnam nisi ipsam, libero
            perferendis delectus laudantium voluptate! Enim, velit natus fugiat
            iure qu perferendis delectus laudantium voluptate! Enim, velit natus
            fugiat iure qu
          </p>
          <div className="m-auto img-about">
            <img src="/assets/teste.jpeg" alt="programando" />
          </div>
        </article>
      </Route>
    </Section>
  );
}

export default About;
