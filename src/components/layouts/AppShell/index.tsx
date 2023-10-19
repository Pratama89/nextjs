import Navbar from "../Navbar"


type AppSheelProps = {
    children: React.ReactNode
}
const AppShell = (props: AppSheelProps) => {
    const { children } = props
    return (
        <main>
            <Navbar />
            {children}
        </main>
    )
}

export default AppShell