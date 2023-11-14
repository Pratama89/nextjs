import { useRouter } from "next/router"
import Navbar from "../Navbar"
import Menu from "../Menu"


type AppSheelProps = {
    children: React.ReactNode
}

const disableNavbar = ["/auth/login", "/auth/register", "/404"]
const AppShell = (props: AppSheelProps) => {
    const { children } = props
    const { pathname } = useRouter()
    console.log(pathname)
    return (
        <main>
            {!disableNavbar.includes(pathname) && <Navbar />}
            <Menu />
            {children}
        </main>
    )
}

export default AppShell