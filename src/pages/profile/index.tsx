import { useSession } from "next-auth/react"

const ProfilPage = () => {
    const { data }: any = useSession();

    return (
      <div>

        <div className="text-2xl font-bold text-center mt-3">Profil Page</div>
        <h2 className="text-2xl font-bold text-center">{data && data.user.fullname}</h2>

      </div>
    )
}

export default ProfilPage