import { AiFillYoutube } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import { MdOutlineCopyright } from 'react-icons/md';
import { SiVivaldi } from 'react-icons/si';

export const YoutubeIcon = () => <AiFillYoutube className="footer__icon" />;
export const FacebookIcon = () => <BsFacebook className="footer__icon" />;
export const IglIcon = () => <GrInstagram className="footer__icon" />;
export const VivaIcon = () => <SiVivaldi className="footer__icon" />;
export const CopyIcon = () => <MdOutlineCopyright className="text-[20px]" />;

export {
  AiFillYoutube,
  BsFacebook,
  GrInstagram,
  SiVivaldi,
  MdOutlineCopyright,
};
