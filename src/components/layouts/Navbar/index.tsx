import { signIn, useSession, signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

function Navbar() {
  const { data }: any = useSession()
    return (
        <div className=' w-full h-30 bg-blue-500  p-2 text-white '>
            <div className="flex justify-between items-center mx-5 ">
                <Link href={'/'}>                    
                <div className="font-bold my-auto text-2xl text-slate-100" id="title">
                    <Script id="script-title" strategy="lazyOnload">
                      {`document.getElementById("title").innerHTML = 'Pharmadent';`}
                    </Script>
                </div>
                </Link>
            <div className="flex justify-between items-center mx-2 gap-3">
                <Link href={'/profile'}>
                {data && data.user.image && (
                    <Image 
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
                        {data && data.user.fullname}{" "}
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