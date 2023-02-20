import Link from 'next/link';
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="bg-[#032541] w-100">
      <div className="container mx-auto  flex justify-between max-w-7xl text-white">
        <h4>Logo</h4>

        <nav>
          <Link href="/home" >
            Home
          </Link>
          <Link href="/home" >
            TV Shows
          </Link>
          <Link href="/home" >
            People
          </Link>
          <Link href="/home" >
            More
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header