// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>  
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Codystar:wght@300&family=Creepster&family=Eater&family=Faster+One&family=Finger+Paint&family=Flavors&family=Freckle+Face&family=Fredericka+the+Great&family=Gorditas&family=Hanalei+Fill&family=Lobster&family=Luckiest+Guy&family=Miltonian&family=Monoton&family=Ranchers&family=Rubik+Moonrocks&family=Shrikhand&family=Spirax&family=Titan+One&Bebas+Neue&Cairo&display=swap&family=Roboto+Flex:opsz,wght@8..144,500;8..144,800&display=swap"
    rel="stylesheet" />

  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.5.0/themes/prism.min.css" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}