import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer__links">
        <ul>
          <li>
            <Link href="/">Malerier</Link>
          </li>
          <li>
            <Link href="/">Faq</Link>
          </li>
          <li>
            <Link href="/">Kontakt meg</Link>
          </li>
          <li>
            <Link href="/">Link</Link>
          </li>
          <li>
            <Link href="/">Links</Link>
          </li>
        </ul>
      </div>
      <div>Copyright &copy; Morten Tomter | {new Date().getFullYear()}</div>
    </footer>
  );
}
