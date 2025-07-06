import "./Header.css"

export default function Header() {
  return (
    <header>
      <div className="banner"></div>
      <section>
        <img src="/src/assets/r_tiodopave.jpg" alt="Ícone do subreddit r/tiodopave"/>
        <h1>Melhores piadas do <a href="https://www.reddit.com/r/tiodopave/" rel="external" target="_blank">r/tiodopave</a></h1>
      </section>
    </header>
  );
}