import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  let name = 'momo'
  
  return (
    <main>
      <h1 className="title">Programming Log</h1>
      <p className="title-sub">by dev {name}</p>
    </main>
  )
}
