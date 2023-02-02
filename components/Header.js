import {
  HiOutlineLightningBolt,
  HiHome,
  HiBadgeCheck,
  HiCollection,
  HiSearch,
  HiUser,
} from "react-icons/hi";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HiHome} />
        <HeaderItem title="TRENDING" Icon={HiOutlineLightningBolt} />
        <HeaderItem title="VERIFIED" Icon={HiBadgeCheck} />
        <HeaderItem title="COLLECTIONS" Icon={HiCollection} />
        <HeaderItem title="SEARCH" Icon={HiSearch} />
        <HeaderItem title="ACCOUNT" Icon={HiUser} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt=""
      />
    </header>
  );
}

export default Header;
