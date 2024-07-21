import "./Footer.css";

const Footer = () => {
  const email = "leojunji@outlook.com";

  const text = "Desenvolvido".split("");

  return (
    <footer className="footer">
      <p>
        <a href="/pages/noPage" className="brokenLink">
          Desenvolvido
        </a>{" "}
        por {email}
      </p>
    </footer>
  );
};

export default Footer;
