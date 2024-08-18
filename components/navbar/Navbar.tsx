import Link from "next/link"
import { Home } from '@geist-ui/icons';
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' },
]

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-500 bg-opacity-25 p-3 m-3 rounded">

      <Link href={'/'}>
        <Home />
      </Link>

      <div className="flex flex-1"></div>

      {
        navItems.map(navItem => (
          <ActiveLink key={navItem.path} {...navItem} />
        ))
      }
    </nav>
  )
}
