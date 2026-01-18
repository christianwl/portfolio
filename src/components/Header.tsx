import logoC from '../assets/logoC.svg'

import './Header.css';

export default function Header() {
  return (
    <header>
        <img className='header__logo' src={logoC} alt="Logo" />
    </header>
  )
}
