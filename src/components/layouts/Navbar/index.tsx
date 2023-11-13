import { signIn, useSession, signOut } from "next-auth/react"
import Link from "next/link"

function Navbar() {
  const { data }: any = useSession()
  console.log(data)
    return (
        <div className=' w-full h-30 bg-blue-500  p-2 text-white'>
            <div className="flex justify-between mx-5">
            <div className="font-bold">
            <Link href={'/'}>
                Navbar
            </Link>
            </div>
            <div className="flex justify-between items-center mx-2">
              <div className="mr-3 animate-pulse">
                <Link href={'/profile'}>
                    {data && data.user.fullname}
                </Link></div>
              {data ? (
                  <button onClick={() => signOut()} className="font-bold">Logout</button>
              ) : (
                  <button onClick={() => signIn()} className="font-bold">Login</button>
              )}
            </div>
            </div>
        </div>
    )
}

export default Navbar