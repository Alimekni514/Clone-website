function MenuItem({ text, link }) {
    return (
      <li style={{ padding: "20px 35px" }}>
        <a style={{ color: "gray", textDecoration: "none" }} href={link}>
          {text.toUpperCase()}
        </a>
      </li>
    );
  }
  export default MenuItem