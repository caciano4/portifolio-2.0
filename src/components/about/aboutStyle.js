import styled from "styled-components";

const Section = styled.section`
  // Global styles
  height: 100vh;
  background-color: var(--black-color);

  //screen mobile size
  @media (max-width: 375px) {
    #content-about {
      width: 250px;
      margin: auto;
      
      .img-about > img {
        width: 250px;
      }

      .title-about {
        color: var(--white-color);
        font-size: 1.8rem;
        align-self: center;
      }

      .title-about:after {
        content: "";
        position: absolute;
        left: 35%;
        transform: translateX(-50%);
        transform: translateY(55px);
        bottom: -10px;
        width: 100px;
        height: 3px;
        background: var(--white-color);
      }

      .p-content-about{
        color: var(--gray-color);
      }
    }
  }

  @media (min-width: 375px) and (max-width: 500px) {
    #content-about {
      width: 340px;
      margin: auto;
      
      .img-about{
          margin-top: 50px !important;
       & > img {
        width: 330px;
      }

      } 
      .title-about {
        color: var(--white-color);
        font-size: 1.8rem;
        align-self: center;
      }

      .title-about:after {
        content: "";
        position: absolute;
        left: 39%;
        transform: translateX(-50%);
        transform: translateY(55px);
        bottom: -10px;
        width: 100px;
        height: 3px;
        background: var(--white-color);
      }

      .p-content-about{
        color: var(--gray-color);
      }
    }
  }

  @media (min-width: 500px) and (max-width: 900px) {
    #content-about {
      width: 650px;
      margin: auto;
      
      .img-about{
        margin-top: 20px;
       & > img {
        width: 400px;
      }

      } 
      .title-about {
        color: var(--white-color);
        font-size: 2rem;
        align-self: center;
      }

      .title-about:after {
        content: "";
        position: absolute;
        left: 43%;
        transform: translateX(-50%);
        transform: translateY(65px);
        bottom: -10px;
        width: 100px;
        height: 3px;
        background: var(--white-color);
      }

      .p-content-about{
        color: var(--gray-color);
        font-size: 1.3rem;
      }
    }
  }

  @media (min-width: 900px) and (max-width: 1224px) {
    #content-about {
      width: 650px;
      margin: auto;
      
      .img-about{
        margin-top: 20px;
       & > img {
        width: 400px;
      }

      } 
      .title-about {
        color: var(--white-color);
        font-size: 2rem;
        align-self: center;
      }

      .title-about:after {
        content: "";
        position: absolute;
        left: 43%;
        transform: translateX(-50%);
        transform: translateY(65px);
        bottom: -10px;
        width: 100px;
        height: 3px;
        background: var(--white-color);
      }

      .p-content-about{
        color: var(--gray-color);
        font-size: 1.3rem;
      }
    }
  }
`;
export default Section;
