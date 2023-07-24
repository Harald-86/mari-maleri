import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer__header">
        <Link href="https://www.instagram.com/mari_maleri/">
          <i className="fa fa-instagram some" />
          mari<span>m</span>aleri
        </Link>
      </div>
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
            <Link href="/">Galleri</Link>
          </li>
          <li>
            <Link href="/">Om meg</Link>
          </li>
        </ul>
      </div>
      <div> &copy; {new Date().getFullYear()} | Morten Tomter</div>
    </footer>
  );
}
