import Link from 'next/link'
import Menu from './Menu'
import Logo from './Logo'
import Auth from './Auth'

const Navbar = () => (
  <div className='sticky top-0 flex w-full max-w-full min-h-[4rem] z-[101] justify-center'>
    <header className='flex items-center px-6 m-auto w-[1248px]'>
      <Link className='flex-1' href='/'>
        <Logo />
      </Link>
      <div className='flex items-center flex-1'>
        <Menu />
      </div>
      <div className="flex items-center flex-1">
        <Auth />
      </div>
    </header>
  </div>
)

export default Navbar