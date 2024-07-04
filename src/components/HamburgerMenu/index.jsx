/* eslint-disable react/prop-types */

import "./ButtonClose.css";

const HamburgerMenu = ({ onToggle, checked }) => {
  return (
    <label className={`hamburger-menu`} onChange={onToggle}>
      <input id="menu-toggle" type="checkbox" checked={checked} readOnly />
    </label>
  );
};

export default HamburgerMenu;
