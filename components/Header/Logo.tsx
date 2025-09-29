import { cn } from '@/lib/utils';
import Link from 'next/link'
import React from 'react'

const Logo = ({className}:{className?:string}) => {
  return (
    <Link href={'/'}>
      <h2
        className={cn(
          'text-2xl text-shop-dark-green font-black tracking-wider uppercase hover:text-shop_light_green hoverEffect group font-sans',
          className
        )}
      >
        Modern-
        <span className="text-shop_light_green group-hover:text-shop-dark-green hoverEffect">
          Shop
        </span>
      </h2>
    </Link>
  );
}

export default Logo