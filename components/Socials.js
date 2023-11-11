import Link from "next/link";
import {RiLinkedinBoxLine, RiInstagramLine, RiTwitterLine, RiDribbbleLine, RiFacebookLine, RiBehanceLine, RiPinterestLine, RiGithubLine } from 'react-icons/ri'


const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiGithubLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiLinkedinBoxLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiTwitterLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiBehanceLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiDribbbleLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiInstagramLine />
    </Link>
    </div>
  );
};

export default Socials;
