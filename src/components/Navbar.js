import { Yellowtail } from "next/font/google";
const font = Yellowtail({
  subsets: ["latin"],
  weight: "400",
});

import { IoPersonAdd, IoAdd, IoPerson, IoLogOut } from "react-icons/io5";
import Link from "next/link";
import { useContext } from "react";
import { IsAdminContext } from "@/pages/_app";

function NavItem(props) {
  return (
    <li>
      <Link href={props.link}>
        <button
          className={`text-black text-[15px] h-16 md:px-4 items-center px-4 active:opacity-50 ${
            props.first && "bg-helper2 md:bg-transparent"
          } `}
        >
          <span className="hidden md:flex hover:opacity-80 active:opacity-50">
            {props.name}
          </span>
          <props.icon
            style={{ color: "gray" }}
            className="w-[27px] h-[27px] md:hidden flex"
          />
        </button>
      </Link>
    </li>
  );
}

function Navbar() {
  const isAdminContext = useContext(IsAdminContext);
  return (
    <>
      <nav className="shadow-sm bg-white h-16">
        <div className="container mx-auto h-full flex items-center md:gap-10 md:px-0 justify-between md:justify-start">
          <Link
            href="/"
            className={
              font.className +
              " font-medium text-primary text-[25px] md:text-[33px] whitespace-nowrap pl-8 md:pl-0"
            }
          >
            My Shop
          </Link>

          {isAdminContext.isAdmin ? (
            <ul className="flex justify-end md:gap-4 h-full items-center">
              <NavItem name="Ausloggen" link="/auth/logout" icon={IoLogOut} />
              <NavItem name="Benutzer" link="/users" icon={IoPerson} />
              <NavItem
                name="Benutzer hinzufügen"
                link="/add/user"
                icon={IoPersonAdd}
              />
              <NavItem
                name="Produkt hinzufügen"
                link="/add/product"
                icon={IoAdd}
                first={true}
              />
            </ul>
          ) : (
            <ul className="flex justify-end md:gap-4 h-full items-center">
              <NavItem name="Ausloggen" link="/auth/logout" icon={IoLogOut} />
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
