import styled from "styled-components";

const Section = styled.section`
// Screen to light mobile
@media (max-width: 390px) {
  #content {
      .title-apresentation {
        color: var(--primary-color);
        font-size: 2rem;
        font-weight: 600;
        font-family: "Playfair Display", serif;
      }

      .title-name {
        color: var(--black-light-color);
        font-size: 2rem !important;
        font-weight: 800;
      }

      .image-none{
        display:none;
      }
    }
}
  //Screen to mobile size
  @media (max-width: 500px) {
    max-width: 380px;
    margin: auto;

    nav {
      .btn-menu {
        margin-right: 0;
        svg{
          background-color: var(--black-light-color);
          color: var(--white-color);
          height: 27px;
        }
      }
      .btn-portifolio {
        margin-left: 0;
        background-color: var(--black-light-color);
        color: var(--white-color);
        padding: 0 20px;
        align-items: center;
      }
    }

    #content {
      .title-apresentation {
        color: var(--primary-color);
        font-size: 2rem;
        font-weight: 800;
        font-family: "Playfair Display", serif;
      }

      .title-name {
        color: var(--black-light-color);
        font-size: 2rem;
        font-weight: 800;
      }

      .image-none{
        display:none;
      }
    }

    #logo {
      position: absolute;
      bottom: 0%;
      right: 0%;

      .logo-whats:hover {
        svg {
          transform: scale(1.4);
          transition: all 0.3s ease-in-out;
        }
      }

      .logo-linkedin:hover {
        svg {
          transform: scale(1.4);
          transition: all 0.3s ease-in-out;
        }
      }
      .logo-instagran:hover {
        svg {
          transform: scale(1.4);
          transition: all 0.3s ease-in-out;
        }
      }
    }
  }

  @media (max-width: 701px) {
    .image{
     display:none ;
    }
  }
  //Screen to tablet size
  @media (max-width: 900px) {
    nav {
      .btn-menu {
        margin-right: 0;
        svg{
          background-color: var(--black-light-color);
          color: var(--white-color);
          height: 27px;
        }
      }
      .btn-portifolio {
        margin-left: 15px;
        background-color: var(--black-light-color);
        color: var(--white-color);
        padding: 0 20px;
        align-items: center;
      }
    }

    #content {
      .title-apresentation {
        color: var(--primary-color);
        font-size: 2.5rem;
        font-weight: 800;
        font-family: "Playfair Display", serif;
      }

      .title-name {
        color: var(--black-light-color);
        font-size: 2.5rem;
        font-weight: 800;
      }
    }

    #logo{
      position: absolute;
      bottom: 2%;
      right: 2%;

      .logo-whats:hover {
        svg {
          transform: scale(1.4);
          transition: all 0.3s ease-in-out;
        }
      }

      .logo-linkedin:hover {
        svg {
          transform: scale(1.4);
          transition: all 0.3s ease-in-out;
        }
      }
      .logo-instagran:hover {
        svg {
          transform: scale(1.4);
          transition: all 0.3s ease-in-out;
        }
      }
    }
    .container{
      height: 100vh;
    }
    .image > img{
      height: 100vh;
      width: 900px;
    }
  }
  //Screen to desktop size
  @media (min-width: 900px) {
    height: 100vh;

    .container{
      height: 100vh;
    }
    .image > img{
      height: 100vh;
      width: 900px;
    }

    nav {
      .btn-menu {
        margin-right: 50px;
        svg{
          background-color: var(--black-light-color);
          color: var(--white-color);
          height: 27px;
        }
      }
      .btn-portifolio {
        margin-left: 15px;
        background-color: var(--black-light-color);
        color: var(--white-color);
        padding: 0 20px;
        align-items: center;
      }
    }

    #content {
      .title-apresentation {
        color: var(--primary-color);
        font-size: 2.5rem;
        font-weight: 800;
        font-family: "Playfair Display", serif;
      }

      .title-name {
        color: var(--black-light-color);
        font-size: 2.5rem;
        font-weight: 800;
      }

      .about-me{
        font-size: 1.3rem;
      }
    }

    #logo{
      position: absolute;
      bottom: 2%;
      right: 2%;

      .logo-whats:hover {
        svg {
          transform: scale(1.4);
          transition: all 0.3s ease-in-out;
        }
      }

      .logo-linkedin:hover {
        svg {
          transform: scale(1.4);
          transition: all 0.3s ease-in-out;
        }
      }
      .logo-instagran:hover {
        svg {
          transform: scale(1.4);
          transition: all 0.3s ease-in-out;
        }
      }
    }
  }
`;

export default Section;
