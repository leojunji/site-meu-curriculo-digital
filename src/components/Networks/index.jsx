import "./Networks.css";
import ButtonNetwork from "../ButtonNetwork";

const Networks = () => {
  function orderListByPosition(list) {
    const size = list.length;
    list.sort(
      (a, b) =>
        (a.position === null ? size : a.position) -
        (b.position === null ? size : b.position)
    );
    return list;
  }

  let networks = [
    {
      id: 0,
      name: "GitHub",
      logo: "github.svg",
      link: "https://github.com/leojunji",
      position: 2,
      backGroundColor: null,
      fontColor: null,
    },
    {
      id: 1,
      name: "Linkedin",
      logo: "linkedin.svg",
      link: "https://www.linkedin.com/in/leonardo-junji-494a43180",
      position: 1,
      backGroundColor: null,
      fontColor: null,
    },
    {
      id: 2,
      name: "WhatsApp",
      logo: "whatsapp.svg",
      link: "https://api.whatsapp.com/send?phone=41991645103",
      position: 4,
      backGroundColor: null,
      fontColor: null,
    },
    {
      id: 3,
      name: "E-mail",
      logo: "envelope.svg",
      link: "mailto:leonjunji@outlook.com",
      position: 3,
      backGroundColor: null,
      fontColor: null,
    },
  ];

  networks = orderListByPosition(networks);

  return (
    <section className="networks">
      <h2 className="networks-tittle">Minhas redes:</h2>

      {networks.map((item) => {
        return (
          <ButtonNetwork
            key={item.id}
            name={item.name}
            logo={item.logo}
            link={item.link}
            backgroundColor={item.backGroundColor}
            fontColor={item.fontColor}
          />
        );
      })}
    </section>
  );
};

export default Networks;
