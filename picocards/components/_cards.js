import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/future/image'
import { useEffect } from 'react'
import logo from '../public/images/RPF.png'
import Prism from 'prismjs';
import pythonPrism from 'prismjs/components/prism-python'

export const CardHead = (props) => {
  return <Head>
   <link href="/cardsnext/print.css" rel="stylesheet" type="text/css" />
  <link href="/cardsnext/turquoise.css" rel="stylesheet" type="text/css" />
  <link href="/cardsnext/style.css" rel="stylesheet" type="text/css" />
  </Head>
};

/*const Headline = (props) => {
  return <p><strong>{props.text}</strong> {props.text2}</p>
};*/


export const Logo = (props) => {
  return  <Image className="logo narrow" src={logo} alt="Raspberry Pi logo" />
};

export const Header = (props) => {
  return <header className="border-bottom secondary">
    <section className="wrap">
      <Logo/>
      <h1>{props.heading}</h1>
      <p>{props.desc}</p>
    </section>
  </header>
};

export const CardMini = (props) => {
  return <Link href={props.href}>
    <div className="secondary tile rounded xcenter">
      <img className="rounded" style={{ height: "9rem", width: "11rem" }} src={props.src} alt={props.alt} />
      <br />
      {props.title}
    </div>
  </Link>
};

export const CardMinis = (props) => {
  return <section className="wrap">
    {props.children}
  </section>
};

export const CardsSection = (props) => {
  return <section className="primary">
    <h2>{props.title} <span className="material-symbols-outlined">
      {props.icon}
    </span></h2>
  </section>
  
};

export const CardIndex = (props) => {
  return <main className="secondary">
    {props.children}
  </main>
};

export const CardPage = (props) => {
  return <div className="outer-page">
    <div className="sub-page">
      {props.children}
    </div>
  </div>
};

export const CardHeader = (props) => {
  return <header className="primary wrap">
    <div className="full row ycenter">
      <div className="column">
        <section className="widest wrap">
         <Logo/>
          <div className="wide">
            <h2>{props.head}</h2>
          </div>
        </section>
      </div>
    </div>
  </header>
};

export const CardMain = (props) => {
  return <main className="page main-page">
    <div className="column ycenter xcenter">
      {props.children}
    </div>
  </main>
};

export const CardSide = (props) => {
  return <div className="column side solid-border rounded xcenter">
    {props.children}
  </div>
};

export const PythonSection = (props) => {
   useEffect(() => {
      Prism.highlightAll();
    }, []);
 
  return <section className="code">
    <div className="wrap">
      <div className="code-container">
        <div className="code-top">
          <span
            className="material-symbols-outlined code-icons"
            style={{ color: "green" }}
          >
            play_circle
          </span>
          <span className="material-symbols-outlined code-icons">
            stop_circle    
          </span>
        </div>

        <div className="code-content rounded">
          <div>
            <pre
              style={{ margin: "0rem" }}
            ><code className="lang-python rounded" style={{ margin: "0rem", padding: "0rem" }}>{props.children}</code></pre>
          </div>
         
        </div>
      </div>
    </div>
  </section>
};

export const DebugFull = (props) => {
  return <div className="debug-container">
    {props.children}
  </div>
};

export const Debug = (props) => {
  return <div className="debug-container sidebyside">
    {props.children}
  </div>
};

export const DebugTitle = (props) => {
  return <div className="debug-top">
    <p>
      <span
        className="material-symbols-outlined"
        style={{ color: "white" }}
      >
        bug_report
      </span>
      <strong>{props.children}</strong>
    </p>
  </div>
};

export const DebugContent = (props) => {
  return <div className="debug-content">
    {props.children}
  </div>
};

export const InstructionsFull = (props) => {
  return <div className="instructions-container">
    {props.children}
  </div>
};

export const Instructions = (props) => {
  return <div className="instructions-container sidebyside">
    {props.children}
  </div>
};

export const InstructionsTitle = (props) => {
  return <div className="instructions-top">
    <p>
      <span
        className="material-symbols-outlined"
        style={{ color: "white" }}
      >
        construction
      </span>
      <strong>{props.children}</strong>
    </p>
  </div>
};

export const InstructionsContent = (props) => {
  return <div className="instructions-content">
    {props.children}
  </div>
};

export const CardFooter = (props) => {
  return <footer className="primary">
    <div className="row ycenter">
      <div className="column">
        <section>
          <div className="wider">
            Find out more about your Raspberry Pi Pico:
            <strong
            ><a href="https://rpf.io/pico-guide"
            >rpf.io/pico-guide</a
              ></strong
            >
            <br />
            What next?
            <strong
            ><a href="https://rpf.io/pico-intro"
            >rpf.io/pico-intro</a
              ></strong
            >
          </div>
        </section>
      </div>
    </div>
  </footer>
};
