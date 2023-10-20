import Head from "next/head"
import Link from "next/link"

const RegisterPage = () => {
    return (
        <div className='text-2xl font-bold text-center flex flex-col justify-center h-screen'>
            <Head>Register</Head>
            <div>Selamat Datang Di Register</div>
            <p>
            Sudah Punya Akun? <Link href={'/auth/login'} className="underline text-blue-500">Masuk</Link>
            </p>
        </div>
    )
}

export default RegisterPage