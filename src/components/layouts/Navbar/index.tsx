import { signIn } from "next-auth/react"

function Navbar() {
    return (
        <div className=' w-full h-30 bg-blue-500  p-2 text-white'>
            <div className="flex justify-between mx-5">
            <div className=" ">Navbar</div>
            <button onClick={() => signIn()} className=""> Daftar</button>
            </div>
        </div>
    )
}

export default Navbar