import React from "react"

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <nav>Navbar </nav>
            {children}
        </div>
    )
}

