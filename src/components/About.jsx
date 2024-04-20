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
          <p className='text'>Jmenuji se Karolína a pocházím ze Šternberka u Olomouce. Nyní žiji a působím v Praze. Můj zájem o svatby se začal projevovat již na střední škole, nicméně jsem se rozhodla studovat a sloužit v rámci Armády České republiky.</p>
          <p className='text'>Přestože jsem pracovala v odlišném prostředí, mé srdce vždy zůstávalo spojeno se světem svateb. Ve svém volném čase jsem se věnovala pečení dortů, což postupně přerostlo do vášně pro svatební dorty. Mimo to jsem se také začala s velkým zápalem a pozorností k detailům věnovat úpravám vlasů svých přátel.</p>
          <p className='text'>S přibývajícím časem a zkušeností jsem od nevěst začala dostávat nabídky na vytváření účesů a make-upu, což mě nakonec přivedlo k tomu, abych se plně věnovala přípravě nevěst, než vykročí k oltáři.</p>
          <p className='text'>Ráda podtrhnu krásu nevěsty, aby se v její den cítila sebejistě. Rozzářená nevěsta mi přináší radost.</p>
          <p className='text'>Tímto procesem se mi energie vrací a s láskou tvořím dál.</p>
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
