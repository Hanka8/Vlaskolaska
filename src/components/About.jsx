import React, { useState, useEffect } from 'react'

import SwipeableTemporaryDrawer from './SwipableTemporaryDrawer';
import UseScroll from './hooks/UseScroll';

export default function About( ) {

  const scrolled = UseScroll();

  return (
    <>
      <SwipeableTemporaryDrawer scrolled={scrolled} />
      <div className='page'>
        <h1 className='page-logo pr-1'>
          <img src="images/about.svg" alt="o mně" />
          <span className='visually-hidden'>o mně</span>
        </h1>
        <div className='page-content about'>
          <p className='text'>Jsem Karolína a pocházím ze Šternberka u Olomouce. Nyní žiji a působím v Praze. Životní cesta mne přivedla k tomu, abych se věnovala vizáži nevěst, než vykročí k oltáři. Ráda podtrhnu krásu nevěsty, aby se v její den cítila sebejistě. Rozzářená nevěsta mi přináší radost. Tímto procesem se mi energie vrací a s láskou tvořím dál.</p>
          <h2 className='h-2'>Absolvované kurzy</h2>
          <ul className='mt-2'>
            <li className='text'>Simeona Lanta Akademie účesů: Kurz individual</li>
            <li className='text'>Berenica Zita: Individuální kurz líčení</li>
          </ul>
          <picture className='page-picture'>
            <img src="images/general/about.webp" alt="" />
          </picture>
        </div>
      </div>
    </>
  );
}
