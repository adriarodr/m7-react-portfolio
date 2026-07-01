import Nav from './Nav';

function Header() {
  const links = [
    { text: 'About Me', url: '#about-me' },
    { text: 'Projects', url: '#projects' },
    { text: 'Skills', url: '#skills' },
    { text: 'Experience', url: '#experience' },
  ];

  return (
    <header>
      {/* name and professional title */}
      <h1>Adrian Rodriguez</h1>
      <p>Web Development Student</p>

      {/* simple navigation */}
      <Nav id="main-nav" links={links} isExternal={false} />
    </header>
  );
}

export default Header;
