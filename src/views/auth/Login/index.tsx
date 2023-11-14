import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

const LoginView = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const {push, query} = useRouter();

  const callbackUrl: any = query.callbackUrl || '/'
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl
      }); 
      
      if(!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError("Email atau Password nya salah");
      }
    } catch (error: any) {
      setIsLoading(false);
      setError("Email atau Password nya salah");
    }
    const data = {
      email: event.target.email.value,
      password: event.target.password.value
    };
  }   

    return (
        <div className='flex justify-center flex-col align-middle  text-center h-screen w-screen '>
            <h1 className="text-2xl font-bold  ">Login</h1>
            {error && <p className="text-red-500">{error}</p>}
            <div className="w-1/2 mb-5 shadow-md rounded-lg  mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col text-left px-4 mt-5 mb-5">
                <label htmlFor="email" className="font-bold" >Email</label>
                  <input 
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="border border-gray-300 rounded-lg p-2 w-full  focus:outline-none"
                  />
                </div>
                
                <div className="flex flex-col text-left px-4 mt-5 mb-5">
                <label htmlFor="password" className="font-bold" >Password</label>
                  <input 
                  type="password"
                  id="password"
                  name="password"
                  placeholder="*********"
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none"
                  />
                </div>
                <div className="mx-4">
                  <button type="submit" 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full mb-2 mt-5" 
                  disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Login'}
                  </button>
                </div>
              </form>
               <div className="mx-4">
                <button onClick={() => signIn('google', { 
                    callbackUrl,
                    redirect: false
                   })} 
                   className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg w-full mt-2">
                  Sign in with Google
                </button>
              </div>

              <p className="mb-5 mt-5">
                Belum Punya Akun? <Link href={'/auth/register'} className="underline text-blue-500 ">Daftar</Link>
              </p>
              <div className="mb-5">
                <Link href={'/'} className="text-sm text-blue-500 ">Pharmadent</Link>
              </div>
            </div>
            
        </div>
    )
}


export default LoginView