function Nav() {
  const links = [
    { section: 'About Me', path: '#about-me' },
    { section: 'Projects', path: '#projects' },
    { section: 'Skills', path: '#skills' },
    { section: 'Experience', path: '#experience' },
  ];

  return (
    <nav id="main-nav">
      <ul>
        {links.map((link) => (
          <li key={link.path}>
            <a href={link.path}>{link.section}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
