import styled, { css } from "styled-components";
import logo from "../assets/document.png";
import Button from "../Components/Button";
import { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import { Link } from "react-router-dom";

const StyledNavbar = styled.nav`
  position: fixed;
  width: 100%;
  background-color: #fff;
  box-shadow: ${(props) =>
    props.scrolled ? "1px 3px 79px -30px rgba(0, 0, 0, 0.75)" : `0`};

  aside {
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;

    h3 {
      font-size: 3.6rem;
      font-weight: 600;
    }

    a {
      color: black;
      font-size: var(--font-base);
      font-weight: 400;
      transition: all 0.3s;

      span {
        display: block;
        height: 2px;
        width: 0;
        background-color: var(--color-base);
        transition: all 0.3s;
      }
      &:hover {
        color: var(--color-base);
        span {
          width: 100%;
        }
      }
    }
  }
`;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    animateScroll.scrollToTop();
  }
  return (
    <StyledNavbar scrolled={scrolled}>
      <aside>
        <Link to={"/"}>
          <div className="flex items-center" onClick={scrollToTop}>
            <img src={logo} alt="" className="w-16 h-16" />
            <h3>Docs</h3>
          </div>
        </Link>

        <div className="flex gap-4">
          <a
            href="https://beezboard.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex flex-col items-start"
          >
            Beezboard
            <span className="absolute -bottom-2"></span>
          </a>
          <a
            href="https://github.com/Levi9111/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex flex-col items-start"
          >
            GitHub
            <span className="absolute -bottom-2"></span>
          </a>
        </div>

        <Button>Contact</Button>
      </aside>
    </StyledNavbar>
  );
}

export default Navbar;
