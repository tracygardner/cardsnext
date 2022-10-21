

/*const Headline = (props) => {
  return <p><strong>{props.text}</strong> {props.text2}</p>
};*/

export const Header = (props) => {
  return <header className="border-bottom secondary">
    <section className="wrap">
      <img className="logo narrow" src="images/RPF.png" alt="Raspberry Pi logo" />
      <h1>{props.heading}</h1>
      <p>{props.desc}</p>
    </section>
  </header>
};

export const CardMini = (props) => {
  return <a href={props.href} target="_blank" rel="noreferrer">
    <div className="secondary tile rounded xcenter">
      <img className="rounded" style={{ height: "9rem", width: "11rem" }} src={props.src} alt={props.alt} />
      <br />
      {props.title}
    </div>
  </a>
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
          <img
            className="logo narrow"
            src="../images/RPF.png"
            alt="Raspberry Pi logo"
          />
          <div className="wide">
            <h2>{props.head1}</h2>
          </div>
        </section>
      </div>
      <div className="column">

        <section className="widest wrap">
          <img
            className="logo narrow"
            src="../images/RPF.png"
            alt="Raspberry Pi logo"
          />
          <div className="wide">
            <h2>{props.head2}</h2>
          </div>
        </section>
      </div>
    </div>
  </header>
};

export const CardMain = (props) => {
  return <main className="page main-page">
    <div className="row ycenter">
      {props.children}
    </div>
  </main>
};

export const CardSide = (props) => {
  return <div className="column side solid-border rounded ycenter">
    {props.children}
  </div>
};

export const PythonSection = (props) => {
  return <section className="code">
    <br />
    <h3>
      <span className="material-symbols-outlined">
        sort
      </span>
      Code
    </h3>
    <br />
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
      <div className="column">

        <section>
          <div className="wider">
            Use your Raspberry Pi Pico with:
            <br /><strong
            ><a href="https://rpf.io/led-firefly"
            >rpf.io/led-firefly</a
              ></strong
            >
          </div>
        </section>
      </div>
    </div>
  </footer>
};
