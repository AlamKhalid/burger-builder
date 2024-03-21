import logo from '../../assets/burger-logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo-div'>
        <img src={logo} alt='logo' className='logo' />
      </div>
      <div className='nav-links'>
        <div className='nav-link active-link'>Burger Builder</div>
        <div className='nav-link'>Login</div>
      </div>
    </nav>
   );
}

export default Navbar;
