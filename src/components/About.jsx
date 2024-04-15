import React from 'react'
import SwipeableTemporaryDrawer from './SwipableTemporaryDrawer';

export default function About() {

  return (
    <>
      <SwipeableTemporaryDrawer />
      <div className='page pr-6'>
        <h1 className='page-logo'>
          <img src="images/about.svg" alt="o mně" />
          <span className='visually-hidden'>o mně</span>
        </h1>
        <div className='page-content'>
          <p className='text'>Jmenuji se Karolína a pocházím ze Šternberka u Olomouce. Nyní žiji a působím v Praze. Můj zájem o svatby se začal projevovat již na střední škole, avšak mé akademické vzdělání směřovalo jiným směrem, a proto jsem se rozhodla věnovat svou kariéru Armádě České republiky.</p>
          <p className='text'>Přestože jsem pracovala v odlišném prostředí, mé srdce vždy zůstávalo spojeno se světem svateb. Ve svém volném čase jsem se věnovala pečení dortů, což postupně přerostlo do vášně pro svatební dorty. Mimo to jsem se také začala věnovat úpravám vlasů svých přátel, a to s velkým zápalem a pozorností k detailům.</p>
          <p className='text'>S přibývajícím časem jsem začala dostávat nabídky na úpravu vlasů a make-up od nevěst, což mě nakonec přivedlo k tomu, abych se plně věnovala oboru svatebního stylingu. Tento proces mi přináší radost a energii, a já se těším, že vám mohu pomoci zazářit ve vašem nejkrásnějším dni.</p>
          <p className='text'>S láskou a zaujetím se věnuji práci se svatebními účesy a make-upem, abych vám pomohla cítit se sebevědomě a krásně ve vašem výjimečném dni.</p>
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
