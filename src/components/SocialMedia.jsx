import React from 'react';
import { BsTwitter, BsGithub} from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/alaaelbouhdidi">
      <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/alaa-el-bouhdidi-5a773080/">
      <FaLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/AlaaElbouhdidi">
      <BsGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
