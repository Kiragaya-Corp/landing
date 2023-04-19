import Head from 'next/head'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Header = ({ children }: Props) => {
  return (
    <Head>
      <title>{children}</title>
    </Head>
  )
}

export default Header