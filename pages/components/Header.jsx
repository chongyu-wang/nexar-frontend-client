import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Header({setShowSignup}) {
    const router = useRouter();

    function route(event) {
      router.push("/Chat");
      event.preventDefault();
    }
  return (
    <header class="top-0 left-0 w-full px-20 py-3 bg-gray-900 flex justify-between items-center">
        <h2 class="text-3xl text-white font-bold">Nexar</h2>
        <nav class="relative text-white relative text ml-40 font-medium">
        <Link href="/" class="mx-10">Home</Link>
        <Link href="/About" class="mx-10 hover:underline-offset-2">About</Link>
        <Link href="/Services" class="mx-10">Services</Link>
        <Link href="/Contact" class="mx-10">Contact</Link>
        <button class="mx-10 w-32 h-12 border-2 border-white rounded-md cursor-pointer hover:bg-white hover:text-black"
        onClick={()=> setShowSignup(true)}>
            Login
        </button>
        </nav>
    </header>
  )
}
