import Link from "next/link"
import { useRouter } from "next/router"

const LoginPage = () => {
    const {push, query} = useRouter()
    const handlerLogin = () => {
        push('/product')
    }

    return (
        <div className='text-2xl font-bold text-center mt-5'>
            <h1>Selamat Datang Di Login</h1>
            <p>
            Belum Punya Akun? <Link href={'/auth/register'}className="underline text-blue-500">Daftar</Link>
            </p>
            <button onClick={() => handlerLogin()}>Login</button>
        </div>
    )
}

export default LoginPage