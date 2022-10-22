import Head from 'next/head'
import Image from 'next/image'
import {Header, CardIndex, CardsSection, CardMinis, CardMini} from '../components/_cards';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pico Maker Cards</title>
        <meta name="description" content="Maker Cards to help you get started with the Raspberry Pi Pico." />
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="/cardsnext/manifest.json" />
         <link href="/cardsnext/mc-style.css" rel="stylesheet" type="text/css" />
         <link href="/cardsnext/maker-card.css" rel="stylesheet" type="text/css" />
      </Head>

      <Header heading="Raspberry Pi Pico: Maker Cards 2" desc="Explore these maker cards to build your own creations with the Raspberry Pi Pico" />
      <CardIndex>

          <CardsSection title="Set up your Pico" icon="construction" />
          <CardMinis>
            <CardMini href="pico-setup" title="Set up your Pico" src="/cardsnext/images/pico-top-plug.png" alt="The onboard LED is on." />
            <CardMini href="pico-test" title="Test your Pico" src="/cardsnext/images/led-on.png" alt="The onboard LED is on." />
          </CardMinis>

          <CardsSection title="Things to make" icon="tips_and_updates" />
          <CardMinis>
            <CardMini href="mood-indicator.html" title="Mood indicator" src="/cardsnext/images/mood-lamp.gif" alt="The onboard LED is on." />
            <CardMini href="sound-board.html" title="Sound machine" src="/cardsnext/images/wicked.png" alt="The onboard LED is on." />
            <CardMini href="sensory-gadget.html" title="Sensory gadget" src="/cardsnext/images/bee.PNG" alt="The onboard LED is on." />
          </CardMinis>
        </CardIndex>
    </div>
  )
}
