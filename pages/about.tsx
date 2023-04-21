

import { Inter } from 'next/font/google'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (

    <>
      
      <h1>About Page</h1>
      <h1 className={'title'}>
        Ir a <Link href="/">Home</Link>
      </h1>
      <p className={'code'}>
        Get started by editing {''}
        <code className={'code'}>pages/about.jsx</code>
      </p>
      
      </>
  )
}

About.getLayout=function getLayout(page:JSX.Element){
  return(
    <MainLayout>
      <DarkLayout>
    {page}
      </DarkLayout>
    </MainLayout>
  )
}