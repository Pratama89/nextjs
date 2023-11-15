import { useRouter } from "next/router"
import { Roboto } from 'next/font/google'
import dynamic from "next/dynamic"

const Navbar = dynamic(() => import("../Navbar"));
const Menu = dynamic(() => import("../Menu"));


type AppSheelProps = {
    children: React.ReactNode
}

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'],
})

const disableNavbar = ["/auth/login", "/auth/register", "/404"]
const AppShell = (props: AppSheelProps) => {
    const { children } = props
    const { pathname } = useRouter()
    console.log(pathname)
    return (
        <main className={roboto.className}>
            {!disableNavbar.includes(pathname) && <Navbar />}
            <Menu />
            {children}
        </main>
    )
}

export default AppShell