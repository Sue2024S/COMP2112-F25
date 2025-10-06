import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar() {
    //get current url
    const pathname = usePathname();

    //set link class depending if it matches the current url or not (active/inactive)
    const getlinkClass = (href: string) => {
        //pathname === href || pathname.startsWith (href + '/')? 'activeLink' : 'inactiveLink'
        if (pathname === href) || pathname.startsWith(href + '/')) {
            return 'activeLink';
        } else {
            return 'inactiveLink';
        }
    }
    return (
        <nav>
{/* related to STEP 2, WE added link to home page */}
           <h1 className="brand">
            <Link href="/">
                COMP2112 App
            </Link>
            </h1>

           <ul className="flex flex-col md:flex-row md:space-x-4">
               <li><Link href="/about" className={getLinkClass('/about')}>About</Link></li>
               <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
               <li><Link href="/blog" className="hover:text-gray-300">Blog</Link></li>
           </ul>
       </nav>
    );
}