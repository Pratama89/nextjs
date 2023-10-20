import { useRouter } from "next/router"
import Navbar from "../Navbar"


type AppSheelProps = {
    children: React.ReactNode
}

const disableNavbar = ["/auth/login", "/auth/register"]
const AppShell = (props: AppSheelProps) => {
    const { children } = props
    const { pathname } = useRouter()
    return (
        <main>
            {!disableNavbar.includes(pathname) && <Navbar />}
            {children}
        </main>
    )
}

export default AppShell