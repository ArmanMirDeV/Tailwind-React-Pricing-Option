import React, { useState } from 'react';
import Link from './link';
import { Menu, X } from 'lucide-react';

const navbarItems = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "About", path: "/about" },
    { id: 3, label: "Services", path: "/services" },
    { id: 4, label: "Blog", path: "/blog" },
    { id: 5, label: "Contact", path: "/contact" }
];


const Navbar = () => {

    const [open, setOpen] = useState(false)

    const links = navbarItems.map(route => <Link key={route.id} route={route} ></Link>);


    return (



        <nav className='flex justify-between mx-10 mt-4 ' >

            <span className='flex gap-4' onClick={() => setOpen(!open)} >
                {
                    open ?
                        <X className=' md:hidden'></X> :
                        <Menu className=' md:hidden' ></Menu>
                }
                <ul className={
                    `md:hidden text-black absolute duration-1000
                     ${open?'top-8':'-top-40'}
                     bg-pink-300`
                } >

                    {
                        links
                    }

                </ul>

                <h3>My Navbar</h3>
            </span>

            <ul className='md:flex gap-3  justify-center hidden' >
                {
                    links
                }
            </ul>

            <button>Sign In</button>
        </nav>

        //    {/* <nav>
        //     <ul className='flex gap-3' >
        //        {
        //         navbarItems.map(route =><li><a href={route.path}>{route.label}</a></li> )
        //        }
        //     </ul>
        //    </nav> */}





        /*  <div>
             <ul className='flex gap-3' >
                 <li><a href="/">Home</a></li>
                 <li><a href="/blog">Blog</a></li>
                 <li><a href="/info">Info</a></li>
             </ul>
         </div> */
    );
};

export default Navbar;