/* eslint-disable react/no-unescaped-entities */
import "./Bio.css";

const Bio = () => {
  const user = {
    id: 0,
    name: "Leonardo Mukuno",
    course: "Engenharia de software",
    biography:
      "No momento estou buscando um estágio na área de desenvolvimento com o objetivo de aprimorar meus conhecimentos nesse campo.",
  };

  return (
    <section className="bio">
      <p>
        "Olá, meu nome é <strong>{user.name}</strong>, e estou cursando{" "}
        {user.course}!
      </p>
      <p>{user.biography}"</p>
    </section>
  );
};

export default Bio;
