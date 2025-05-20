import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <>
            <nav className="fixed top-0 left-0 h-[3rem] w-full flex items-center gap-4 p-2 bg-gray-200">
                <Link href="/" >Home</Link>
                <Link href="/about" >About</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </>
    )
}

export default Header