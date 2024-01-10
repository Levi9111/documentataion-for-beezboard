import styled from "styled-components";
import { BtnSecondary } from "../Components/Button";

const StyledBanner = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  padding: 160px 0;

  aside {
    h2 {
      color: #000;
      font-weight: 700;
      font-size: 5rem;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 20px;
      font-weight: 400;
      color: #555;
      line-height: 26px;
    }
  }
`;

function Banner() {
  return (
    <StyledBanner>
      <aside>
        <h2>Documentation Theme Created For Beezbord</h2>
        <p className="mb-[1.5rem]">
          The Beezboard front-end is meticulously crafted with JavaScript,
          utilizing powerful technologies such as React, React Router Dom,
          Styled-components, and Tailwind CSS.
        </p>

        <p className="mb-[1.5rem]">
          It incorporates a touch of HTML and CSS to ensure a seamless and
          engaging user experience.
        </p>
        <BtnSecondary>Get Started</BtnSecondary>
      </aside>

      <aside className="w-full flex items-center justify-center">
        <img
          src="https://demo.gethugothemes.com/godocs/site/style-1/images/banner_hu5a797fae0707814d8a70dee3017d6ae3_113805_346x352_resize_q90_h2_box.webp"
          alt=""
        />
      </aside>
    </StyledBanner>
  );
}

export default Banner;
