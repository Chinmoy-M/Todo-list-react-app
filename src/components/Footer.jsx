import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Chinmoy Malakar</p>
    </footer>
  );
}

export default Footer;