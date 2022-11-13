import { SiDiscord, SiTwitter, SiGithub } from 'react-icons/si';
import createWindowandRedirect from '../_func/redirect';

export default function Footer() {
  return (
    <div className="components-container footer flex">
      <p>find me in:</p>
      <ul className="flex">
        <li
          className="flex twitter"
          style={{
            borderRight: '2px solid #1b2c3d',
          }}
          onClick={() => createWindowandRedirect('https://twitter.com/gsopow')}
        >
          <SiTwitter />
        </li>
        <li
          className="flex github"
          onClick={() =>
            createWindowandRedirect('https://www.github.com/Sopow')
          }
        >
          @sopow
          <SiGithub />
        </li>
      </ul>
    </div>
  );
}
