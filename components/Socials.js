import Link from "next/link";
import {RiLinkedinBoxLine, RiInstagramLine, RiTwitterLine, RiDribbbleLine, RiFacebookLine, RiBehanceLine, RiPinterestLine, RiGithubLine } from 'react-icons/ri'


const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
    <Link href={''} className="hover:text-accent transition-all duration-300 text-black">
      <RiGithubLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300 text-black">
      <RiLinkedinBoxLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300 text-black">
      <RiTwitterLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300 text-black">
      <RiBehanceLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300 text-black">
      <RiDribbbleLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300 text-black">
      <RiInstagramLine />
    </Link>
    </div>
  );
};

export default Socials;
