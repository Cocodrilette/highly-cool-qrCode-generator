import Link from "next/link";
import { IoAdd, IoAppsSharp, IoHomeSharp } from "react-icons/io5";

import { useLicence } from "../context/licenceContext";

export default function Navbar() {
  return (
    <nav>
      <div>
        <Link href="/">
          <IoHomeSharp />
        </Link>
      </div>
      <div>
        <Link href="/create">
          <IoAdd />
        </Link>
      </div>
      <div>
        <Link href="/manage">
          <IoAppsSharp />
        </Link>
      </div>
    </nav>
  );
}
