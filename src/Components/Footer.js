import React from "react";
import facebook from "../Assets/svg/Facebook.svg";
import instagram from "../Assets/svg/Instagram.svg";
import twitter from "../Assets/svg/Twitter.svg";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <section>
        <p style={styles.title}>Portal de Empleo y Prácticas Profesionales</p>
        <p style={styles.subtitle}>Centro de Desarrollo 2022</p>
      </section>
      <section>
        <a href="#" style={styles.link}>Contacto</a>
      </section>
      <section style={styles.social}>
        <p>Siguenos en:</p>
        <a href="">
          <span style={styles.facebook}></span>
        </a>
        <a href="">
          <span style={styles.instagram}></span>
        </a>
        <a href="">
          <span style={styles.twitter}></span>
        </a>
      </section>
    </footer>
  )
}

export default Footer;

const styles = {
  footer: {
    display: 'flex',
    width: '100%',
    height: '12vh',
    bottom: '0',
    color: 'white',
    fontSize: '1.4rem',
    justifyContent: 'space-around',
    alignItems: 'center',
    background: 'var(--dark-purple)',
  },
  title: {
    fontWeight: '400',
    marginBottom: '4px',
  },
  subtitle: {
    fontWeight: '200',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  social: {
    display: 'flex',
    alignItems: 'center',
  },
  facebook: {
    display: 'inline-block',
    width: '30px',
    height: '30px',
    margin: '0 8px 0 16px',
    backgroundImage: `url(${facebook})`,
  },
  instagram: {
    display: 'inline-block',
    width: '30px',
    height: '30px',
    margin: '0 8px',
    backgroundImage: `url(${instagram})`,
  },
  twitter: {
    display: 'inline-block',
    width: '30px',
    height: '30px',
    margin: '0 8px',
    backgroundImage: `url(${twitter})`,
  }
}