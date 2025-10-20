import {  ShoppingCartIcon } from '@heroicons/react/16/solid'
import React from 'react'
import Cartbtn from '../CartBtn/Cartbtn'
import Link from 'next/link'

export default function () {
  return (
      <header className="bg-gradient-to-b from-sky-200 to-sky-50 border shadow p-8 flex">
      <Link className="text-sky-600" href={"/"}>
        Home
      </Link>
      <Link className="ml-auto mr-4" href={"/cart"}>
        <Cartbtn />
      </Link>
    </header>
  )
}
