import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {CardHead, CardHeader, CardMain, CardPage, CardSide, PythonSection, Debug, DebugFull, DebugContent, DebugTitle, Instructions, InstructionsFull, InstructionsContent, InstructionsTitle, CardFooter} from '../components/_cards';

export default function Card() {

    return (
      <div>
      <CardHead/>
      <CardPage>
        
        <CardMain>

          <CardSide>

            <CardHeader head="Plug in your Raspberry Pi Pico"/>

            <section className="narrow">
              <h3>
                Plug in your Raspberry Pi Pico
              </h3>

              <div className="xcenter">
                  <img
                    className="rounded"
                    style={{height: '9rem'}}
                    src="images/pico-top-plug.png"
                    alt="Pico from above connected to USB cable."
                  />
                  <br />
                  <img
                    className="rounded"
                    style={{height: '10rem'}}
                    src="images/plug-in-pico.png"
                    alt="USB cable connected to computer."
                  />
                </div>
            
            </section>
            <section className="wrap">
            <InstructionsFull>
            <InstructionsTitle>Open Thonny and switch to MicroPython</InstructionsTitle>
            <InstructionsContent><ol>
                        <li>
                          Open the Thonny editor
                        </li>
                        <li>
                          Look at the bottom right-hand corner
                        </li>
                        <li>
                          Check it says &apos;MicroPython (Raspberry Pi Pico)&apos;
                        </li>
                        <li>
                          If it doesn&apos;t then select &apos;MicroPython (Raspberry Pi
                          Pico)&apos;
                        </li>
                        <li>
                          You might get prompted to install the firmware
                        </li>
                      </ol></InstructionsContent>
            </InstructionsFull>
            </section>
          </CardSide>

          <CardSide>

            <CardHeader head="Install picozero" />
            
            <section className="narrow">
                <br />
                <h3>
                  Install the picozero library
                </h3>
                <br />
                <div className="xcenter">
                  <img
                    className="rounded"
                    style={{height: '12rem'}}
                    src="images/tools-manage-packages.png"
                    alt="A screenshot of a user clicking tools, then manage packages."
                  />
                  <img
                    className="rounded"
                    style={{height: '14rem'}}
                    src="images/search-picozero.PNG"
                    alt="A screenshot of picozero being searched for."
                  />
                </div>         
               </section>
               <section className="wrap">
<InstructionsFull>
            <InstructionsTitle> Install the picozero library</InstructionsTitle>
            <InstructionsContent><ol>
                <li>
                          Go to Tools &gt; Manage packages
                        </li>
                        <li>
                          Type &apos;picozero&apos; into the search bar
                        </li>
                        <li>
                          Click &apos;Search on PyPI&apos;
                        </li>
                        <li>
                          Click on picozero in the search results
                        </li>
                        <li>
                          Click on install
                        </li>
                      </ol></InstructionsContent>
            </InstructionsFull>
              <DebugFull>
              <DebugTitle>Firmware or picozero not installing</DebugTitle>
              <DebugContent>
                Go to the readme in 
                        <Link
                          href="https://rpf.io/pico-firmware" target="_blank">rpf.io/pico-firmware</Link>
              </DebugContent>
               </DebugFull>
            </section>
          </CardSide>

        </CardMain>

        <CardFooter />
      </CardPage>
        </div>
    );
  }
