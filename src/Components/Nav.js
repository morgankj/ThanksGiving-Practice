import { Link } from 'react-router-dom';
import logo from '../Images/favicon.ico';
import styled from 'styled-components';


export default function Navbar() {
  return (
      <StyledNav className="navbar">
        <nav>
          <a href='/' id='navLogo'>
            <img src={logo} alt='cute turkey' id='navLogoImg'/>
            <p>TBirds</p>
          </a>
          <div id='navLinks'>
            <Link to='/'>HOME</Link>
            <Link to='/about'>ABOUT</Link>
            <Link to='/birds'>BIRDS</Link>
          </div>
        </nav>
      </StyledNav>
  );
}

const StyledNav = styled.div`
  nav {
    display: flex;
    background-color: orange;
    align-items: center;
    justify-content: space-between;
    padding: .5rem;
    & p {
      font-size: 2.2rem;
      font-weight: bold;
    }
  }
  #navLogo {
    display: flex;
    align-items: center;
  }
  #navLogoImg {
    width: 3rem;
  }
  #navLogo p, #navLinks a {
    text-shadow: 2px 2px red;
    &:hover {
      font-weight: bold;
      text-shadow: 5px 5px red;
    }
  }
  #navLinks {
    padding-right: .5rem;
    & a {
      margin: .8rem;
    }
  }
  img:hover {
  animation: shake 0.3s;
  animation-iteration-count: infinite;
}

@keyframes shake {
   0% { transform: translate(1px, 1px) rotate(5deg); }
   20% { transform: translate(-3px, 0px) rotate(10deg); }
   30% { transform: translate(3px, 2px) rotate(-10deg); }
   50% { transform: translate(-1px, 2px) rotate(-20deg); }
   70% { transform: translate(3px, 1px) rotate(-25deg); }
   90% { transform: translate(1px, 2px) rotate(10deg); }
   100% { transform: translate(1px, -2px) rotate(-10deg); }
}
`