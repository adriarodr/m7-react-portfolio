import Link from './Link';

function Nav({ id, links, isExternal }) {
  return (
    <nav id={id}>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link url={link.url} text={link.text} isExternal={isExternal} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
