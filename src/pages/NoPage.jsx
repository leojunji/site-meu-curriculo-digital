const NoPage = () => {
  return (
    <main
      style={{
        color: "crimson",
        fontSize: "10rem",
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
