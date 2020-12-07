import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

export default function Navbar(){
    return(
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                    to="/" 
                    exact
                    activeClassName="text-white"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                        Home
                    </NavLink>
                    <NavLink to="/post" className="infline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                    activeClassName="text-red-100 bg-red-700">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project" className="infline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                    activeClassName="text-red-100 bg-red-700">
                        My Projects
                    </NavLink>
                    <NavLink to="/about" className="infline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                    activeClassName="text-red-100 bg-red-700">
                        About me
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6 mx-6">
                    <SocialIcon url="https://github.com/bonbonsiregar" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width:35}}/>
                    <SocialIcon url="https://www.linkedin.com/in/baginda-siregar" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width:35}}/>
                    <SocialIcon url="https://www.youtube.com/user/bagindov" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width:35}}/>
                </div>
            </div>
        </header>
    )
}
