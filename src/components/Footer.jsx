import Nav from './Nav';

function Footer() {
  const footer_links = [
    { id: 0, text: 'GitHub', url: 'https://github.com/adriarodr' },
    { id: 1, text: 'Linkedin', url: 'https://www.linkedin.com/in/adriarodr/' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Nav id="footer-nav" links={footer_links} isExternal={true} />
      <p>&copy; {currentYear} Adrian Rodriguez. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
