import Link from 'next/link'

const data = [
  {
    name: 'Problems',
    href: '/page1'
  },
  {
    name: 'Submissions',
    href: '/page2'
  },
  {
    name: 'Contests',
    href: '/page3'
  },
  {
    name: 'Users',
    href: '/page4'
  },
  {
    name: 'About',
    href: '/page5'
  },
]

const Menu = () => (
  <nav className='relative flex items-center justify-center w-full'>
    <ul className='flex items-center gap-2'>
      {data.map((item) => (
        <li className='px-3 py-2 text-gray-600' key={item.name}>
          <Link href={item.href}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Menu