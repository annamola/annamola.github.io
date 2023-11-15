import Header from './Header/Header'
import Footer from './Footer/Footer'
import HeaderOffset from './Header/HeaderOffset'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <HeaderOffset />
            <main>{children}</main>
            <Footer />
        </>
    )
}
