import { signIn, useSession, signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

function Navbar() {
  const { data }: any = useSession()
  console.log(data)
    return (
        <div className=' w-full h-30 bg-blue-500  p-2 text-white '>
            <div className="flex justify-between align-middle  mx-5">
                <div className="font-bold  my-auto">
                <Link href={'/'}>
                    Navbar
                </Link>
                </div>
            <div className="flex justify-between items-center mx-2 gap-3">
                <Link href={'/profile'}>
                {data && data.user.image && (
                    <img 
                      src={data.user.image} 
                      width={40} 
                      height={40}
                      alt={data.user.fullname} 
                      className=" rounded-full"
                    />
                )}
                </Link>                
                <div className="animate-none">
                    <Link href={'/profile'}>
                        {data && data.user.name}{" "}
                    </Link>
                </div>               
            
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