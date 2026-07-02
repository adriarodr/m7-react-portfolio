import Nav from './Nav';

function Header() {
  const links = [
    { id: 0, text: 'About Me', url: '#about-me' },
    { id: 1, text: 'Projects', url: '#projects' },
    { id: 2, text: 'Skills', url: '#skills' },
    { id: 3, text: 'Experience', url: '#experience' },
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
