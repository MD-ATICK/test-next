"use client"
import x from '@/app/assets/bg.jpg'
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export const Navbar = () => {

    const pathName = usePathname()
    const router = useRouter()

    return (
        <div className=" m-5 flex flex-col items-center gap-3">
            <Link href={'/'} scroll={false}>Home</Link>
            <Link href={'/'} scroll={false}>About</Link>
            <Link href={'/'} scroll={false}>Contact</Link>
            <button onClick={() => router.push('/')} className=" py-3 bg-white text-black px-5 rounded-lg text-sm font-medium">Click</button>

            <Image src={x} alt="j"  placeholder='blur' className='' />
        </div>
    )
}

