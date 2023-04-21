import { NextPage } from 'next'
import '../styles/globals.css'
import { ReactElement, ReactNode } from 'react'
import { AppProps } from 'next/app';


type NextPageWithLayout=NextPage & {
  getLayout?:(page:ReactElement)=>ReactNode;
}

type AppsPropsWithLayout=AppProps & {
  Component:NextPageWithLayout
}


export default function App({ Component, pageProps }:AppsPropsWithLayout) {

const getLayout=Component.getLayout || ((page)=>page)


  // return <Component {...pageProps} />
  return getLayout(<Component {...pageProps} />)
}
