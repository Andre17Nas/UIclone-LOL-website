import Head from 'next/head'
import HeaderVideo from '../components/headervideo';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <div>
       <Navbar/> 
       <HeaderVideo/>
    </div>
  )
}
