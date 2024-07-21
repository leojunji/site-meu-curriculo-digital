import "./Avatar.css";

const Avatar = () => {
  return (
    <section className="avatar">
      <div className="avatar-crowned">
        <img src="/img/crown.svg" alt="crown" className="crown" />
        <img className="o-img" src="/img/profileImage.jpeg" />
      </div>
    </section>
  );
};

export default Avatar;
