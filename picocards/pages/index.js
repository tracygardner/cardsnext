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
        <link rel="manifest" href="manifest.json" />
         <link href="mc-style.css" rel="stylesheet" type="text/css" />
         <link href="maker-card.css" rel="stylesheet" type="text/css" />
      </Head>

      <Header heading="Raspberry Pi Pico: Maker Cards" desc="Explore these maker cards to build your own creations with the Raspberry Pi Pico" />
      <CardIndex>

          <CardsSection title="Set up your Pico" icon="construction" />
          <CardMinis>
            <CardMini href="pico-setup.html" title="Set up your Pico" src="images/pico-top-plug.png" alt="The onboard LED is on." />
            <CardMini href="pico-test.html" title="Test your Pico" src="images/led-on.png" alt="The onboard LED is on." />
          </CardMinis>

          <CardsSection title="Things to make" icon="tips_and_updates" />
          <CardMinis>
            <CardMini href="mood-indicator.html" title="Mood indicator" src="images/mood-lamp.gif" alt="The onboard LED is on." />
            <CardMini href="sound-board.html" title="Sound machine" src="images/wicked.png" alt="The onboard LED is on." />
            <CardMini href="sensory-gadget.html" title="Sensory gadget" src="images/bee.PNG" alt="The onboard LED is on." />
          </CardMinis>
        </CardIndex>
    </div>
  )
}
