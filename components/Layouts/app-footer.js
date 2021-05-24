import Image from 'next/image';
import Facebook from '../icons/facebook';
import Twitter from '../icons/twitter';
import Youtube from '../icons/youtube';
import Linkedin from '../icons/linkedin';
import Medium from '../icons/medium';

const AppFooter = ({ theme }) => (
  <div className="flex items-center justify-between md:visible invisible">
    <p className={`${theme === 'light' ? 'text-white' : 'text-dark2'} text-xs`}>
      ©2021 CasperLabs.io
    </p>
    <div className="flex space-x-6">
      <button type="button" className="flex bottom-0">
        <Facebook
          width={8}
          height={16}
          fill={theme === 'light' ? '#fff' : '#FF473E'}
        />
      </button>
      <button type="button" className="flex bottom-0">
        <Twitter
          width={20}
          height={16}
          fill={theme === 'light' ? '#fff' : '#FF473E'}
        />
      </button>
      <button type="button" className="flex bottom-0">
        <Youtube
          width={22}
          height={16}
          fill={theme === 'light' ? '#fff' : '#FF473E'}
        />
      </button>
      <button type="button" className="flex bottom-0">
        <Linkedin
          width={16}
          height={16}
          fill={theme === 'light' ? '#fff' : '#FF473E'}
        />
      </button>
      <button type="button" className="flex bottom-0">
        <Medium
          width={20}
          height={16}
          fill={theme === 'light' ? '#fff' : '#FF473E'}
        />
      </button>
    </div>
  </div>
);

export default AppFooter;
