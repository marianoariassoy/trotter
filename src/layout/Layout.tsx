import Header from './Header'
import Footer from './Footer'
import MenuMobile from './MenuMobile'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <MenuMobile />
      <main className='w-full overflow-hidden'>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
