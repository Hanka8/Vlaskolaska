import React from 'react'

import SwipeableTemporaryDrawer from './SwipableTemporaryDrawer'
import UseScroll from './hooks/UseScroll'

export default function Services() {

  const scrolled = UseScroll();

  return (
    <>
      <SwipeableTemporaryDrawer scrolled={scrolled} />
      <div className='page services'>
        <h1 className='page-logo services'>
          <img src="images/pricelist.svg" alt="ceník" />
          <span className='visually-hidden'>služby a ceník</span>
        </h1>
        <div className='page-content w-100 services'>
          <div className='content-flex'>
              <div>
                  <h2 className='h-2 underline-centered'>Zkouška</h2>
                  <p className='text italic'>(dohromady 2,5 - 3,5 h)</p>
                  <p className='text mb-02'>svatební líčení: 1 500,- Kč</p>
                  <p className='text mb-02'>svatební účes: 1 700,- Kč</p>
              </div>
              <div>
                  <h2 className='h-2 underline-centered'>Den svatby</h2>
                  <p className='text mb-02'>svatební líčení: 1 600,- Kč</p>
                  <p className='text'>svatební účes: 1 800,- Kč</p>
              </div>
          </div>
          <div className='content-banner'>
              <p className='text big emphasized mb-02'>Komplet balíček pro nevěsty</p>
              <p className='text mb-02'>(Zkouška účesu, líčení a den svatby)</p>
              <p className='text big mb-02'>6 600,- Kč</p>
          </div>
          <div className='content-grid'>
              <div>
                  <h2 className='h-2 underline-centered'>Úprava svatebních hostů</h2>
                  <p className='text mb-02'>Líčení: 800,- Kč</p>
                  <p className='text'>Účes: 800,- Kč</p>
              </div>
              <div>
                  <h2 className='h-2 underline-centered'>Jiné události</h2>
                  <p className='text italic'>plesy, večírky apod.</p>
                  <p className='text mb-02'>Líčení: 900,- Kč</p>
                  <p className='text'>Účes: 900 - 1 500,- Kč</p>
              </div>
              <div>
                  <h2 className='h-2 underline-centered'>Vratná záloha</h2>
                  <p className='text italic'>za půjčení doplňků do vlasů</p>
                  <p className='text mb-02'>200,- Kč/ks</p>
              </div>
              <div>
                  <h2 className='h-2 underline-centered'>Doprava</h2>
                  <p className='text'>10,- Kč/km z Prahy 13 + parkovné</p>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
