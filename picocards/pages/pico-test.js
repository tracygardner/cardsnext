import Head from 'next/head'
import Image from 'next/image'
import {CardHead, CardHeader, CardMain, CardPage, CardSide, PythonSection, Debug, DebugContent, DebugTitle, CardFooter} from '../components/_cards';

export default function Card() {

    return (
      <div>
      <CardHead/>
      <CardPage>
        <CardHeader head1="Test your Raspberry Pi Pico" head2="Test your Raspberry Pi Pico" />

        <CardMain>

          <CardSide>

            <section className="narrow">
              <h3>
                Switch the on board LED on and off
              </h3>

              <div className="xcenter">
                <img
                  className="rounded photo-right"
                  src="images/led-on.png"
                  alt="The onboard LED is on."
                />
                <br />
                <img
                  className="rounded photo-left"
                  src="images/led-off.png"
                  alt="The onboard LED is off."
                />
              </div>
            </section>

          </CardSide>

          <CardSide>
            <PythonSection>{`from picozero import pico_led
from time import sleep

pico_led.on()
sleep(1)
pico_led.off()`}</PythonSection>
            <br />
            <section className="wrap">

              <Debug>
                <DebugTitle>The LED doesn&apos;t light</DebugTitle>
                <DebugContent>
                  <p>
                    Check your code matches the example.<br /><br />
                    Make sure you are using a <strong>data</strong> USB cable.
                  </p>
                </DebugContent>
              </Debug>

              <Debug>
                <DebugTitle>
                  I don&apos;t see <span className="material-symbols-outlined">play_circle</span> play
                </DebugTitle>
                <DebugContent>
                  <p>
                    1. Click
                    <span className="material-symbols-outlined">
                      stop_circle
                    </span>
                    <br />
                    2. Click <strong>MicroPython (Raspberry Pi Pico)</strong>.
                    <br />
                    3. Unplug then reconnect your USB cable.
                  </p>
                </DebugContent>
              </Debug>
            </section>
          </CardSide>

        </CardMain>

        <CardFooter />
      </CardPage>
        </div>
    );
  }

  