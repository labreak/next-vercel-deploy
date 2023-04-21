import styles from './Navbar.module.css'
import { ActiveLink } from "./ActiveLink"

export const Navbar = () => {
  const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

  return (

    <nav className={styles['menu-container']}>
      {
        menuItems.map(item=>{
          return (  <ActiveLink key={item.text} text={item.text}  href={item.href}></ActiveLink>)
        })
      }
    
  </nav>


  )
}
