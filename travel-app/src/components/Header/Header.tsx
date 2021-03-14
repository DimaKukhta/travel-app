import { Select, Input, Button } from 'semantic-ui-react'
import { languages } from '../../types/types'
import logo from '../../assets/logo.png';
import './Header.css'

export default function Header() {
  // const logo = 

  return (
    <div className='header'>
      <a href='/'>
        <img className='header_logo' src={logo} alt='logo'></img>
      </a>      
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


// import React from 'react'
// import { Input } from 'semantic-ui-react'

// const InputExampleIconProps = () => (
//   <Input
//     icon={{ name: 'search', circular: true, link: true }}
//     placeholder='Search...'
//   />
// )

// export default InputExampleIconProps

// const ButtonExampleEmphasis = () => (
//   <div>
//     <Button primary>Primary</Button>
//     <Button secondary>Secondary</Button>
//   </div>
// )

// export default ButtonExampleEmphasis