import Nav from './Nav';

function Header() {
  const links = [
    { id: 0, text: 'About Me', url: '#about-me', isExternal: false },
    { id: 1, text: 'Projects', url: '#projects', isExternal: false },
    { id: 2, text: 'Skills', url: '#skills', isExternal: false },
    { id: 3, text: 'Experience', url: '#experience', isExternal: false },
  ];

  return (
    <header>
      <div>
        {/* name and professional title */}
        <h1>Adrian Rodriguez</h1>
        <p>Web Development Student</p>
      </div>

      {/* simple navigation */}
      <Nav id="main-nav" links={links} />
    </header>
  );
}

export default Header;
