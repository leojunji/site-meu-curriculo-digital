const NoPage = () => {
  return (
    <main
      style={{
        fontFamily: "Melted",
        color: "crimson",
        fontSize: "13rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url('/img/death.svg')",
        backgroundSize: "33%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className=" o-main noPage"
    >
      <h1>ERROR: 404</h1>
    </main>
  );
};

export default NoPage;
