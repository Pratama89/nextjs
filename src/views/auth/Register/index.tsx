import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

const RegisterView = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const {push} = useRouter();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError('');
    setIsLoading(true);
    const data = {
      email: event.target.email.value,
      fullname: event.target.fullname.value,
      password: event.target.password.value
    };
    const result = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if(result.status === 200) {
      event.target.reset();
      setIsLoading(false);
      push('/auth/login');
    } else {
      setIsLoading(false);
      setError(result.status === 400 ? 'Email already exists' : 'Something went wrong');
    }
  }

    return (
        <div className='flex justify-center flex-col align-middle  text-center h-screen w-screen '>
            <h1 className="text-2xl font-bold  ">Register</h1>
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
                <label htmlFor="fullname" className="font-bold" >Fullname</label>
                  <input 
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Full Name"
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none"
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
                    {isLoading ? 'Loading...' : 'Register'}
                  </button>
                </div>
              </form>
              <p className="mb-5">
                Sudah Punya Akun? <Link href={'/auth/login'} className="underline text-blue-500 ">Masuk</Link>
              </p>
            </div>
        </div>
    )
}

export default RegisterView