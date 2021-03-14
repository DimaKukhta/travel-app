import { Select, Input, Button } from 'semantic-ui-react'
import { languages } from '../../types/types'
import logo from '../../assets/images/logo.png';
import './Header.css'
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      <NavLink to='/'>
        <img className='header_logo' src={logo} alt='logo'></img>
      </NavLink>
      <Select className='header_lang' placeholder='Select language' options={languages} />
      <Input
        className='header_search'
        icon={{ name: 'search', circular: true, link: true }}
        placeholder='Search...'
      />
      <div>
        <Button color='blue'>Sign in</Button>
        <Button color='yellow'>Registration</Button>
      </div>
    </div>
  );
}