function Link({ url, text, isExternal }) {
  return (
    <a
      href={url}
      {...(isExternal
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : undefined)}
    >
      {text}
    </a>
  );
}

export default Link;
