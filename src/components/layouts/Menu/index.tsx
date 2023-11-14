import Link from "next/link"

const MenuBar = () => {
    return (
        <div className="flex justify-start bg-slate-50 border-b border-slate-300  ">
            <div className="font-bold text-lg  container mx-auto  p-2 text-slate-600 "><Link href="/product">Product</Link></div>
        </div>
    )
}

export default MenuBar