import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <>
            <nav className="flex gap-4 p-2">
                <Link href="/" >Home</Link>
                <Link href="/about" >About</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </>
    )
}

export default Header