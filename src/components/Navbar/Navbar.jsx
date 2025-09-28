import React from 'react';
import Link from './link';

const navbarItems = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "About", path: "/about" },
    { id: 3, label: "Services", path: "/services" },
    { id: 4, label: "Blog", path: "/blog" },
    { id: 5, label: "Contact", path: "/contact" }
];


const Navbar = () => {



    return (

        <nav>
            <ul className='flex gap-3  justify-center' >
                {
                    navbarItems.map(route => <Link key={route.id} route={route} ></Link>)
                }
            </ul>
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