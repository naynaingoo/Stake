import React from 'react';
import style from './Footer.module.css';
import { GrTwitter } from 'react-icons/gr';
import { SiDiscord } from 'react-icons/si';
import { RiNewspaperLine } from 'react-icons/ri';

function Footer() {
  return (
    <div className={style.SocialLink}>
      <a href="https://twitter.com/THESSCIENTISTS" target="_blank" rel="noreferrer" className={style.i}><i ><GrTwitter /></i></a>
      <a href="https://discord.gg/tvnr85Rj" target="_blank" rel="noreferrer" className={style.i}><i><SiDiscord /></i></a>
      <a href="https://discord.com/channels/964000918569910312/998244047871283220/998250345455177798" target="_blank" rel="noreferrer" className={style.i}><i><RiNewspaperLine /></i></a>
    </div>
  )
}

export default Footer

