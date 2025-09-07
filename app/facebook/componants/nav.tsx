'use client';

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation";

const links = [
    {
        name: 'Home', href:'/facebook'
    },
    {
        name:'profile', href:'/facebook/profile'
    }
]
export default function Nav() {

  const pathname = usePathname();
return(

    <div className="flex items-center justify-center p-10">
{links.map((link)=>(
    <Link
    key={link.name}
    href={link.href}
   className={clsx('flex  justify-center px-6 py-2',
    {
        "bg-blue-100 text-blue-600 ": pathname === link.href,
       
    },
   )} >
        <p>{link.name}</p>
    </Link>
))}
    </div>

)
}