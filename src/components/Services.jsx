import React from 'react'

export default function Services() {
  return (
    <div className='page'>
      <div className='page-logo'>
        <img src="images/about.svg" alt="booking process" />
      </div>
      <div className='page-content'>
        <div className='content-flex'>
            <div>
                <h2 className='h-2 underline-centered'>Zkouška</h2>
                <p className='text italic'>(dohromady 2,5 - 3,5 h)</p>
                <p className='text mb-02'>svatební líčení: 850,- Kč</p>
                <p className='text mb-02'>svatební účes: 1200,- Kč</p>
            </div>
            <div>
                <h2 className='h-2 underline-centered'>Den svatby</h2>
                <p className='text mb-02'>svatební líčení: 850,- Kč</p>
                <p className='text'>svatební účes: 1200,- Kč</p>
            </div>
        </div>
        <div className='content-banner'>
            <p className='text big emphasized mb-02'>Komplet balíček pro nevěsty</p>
            <p className='text mb-02'>(Zkouška účesu, líčení a den svatby)</p>
            <p className='text big mb-02'>4000,- Kč</p>
        </div>
        <div className='content-grid'>
            <div>
                <h2 className='h-2 underline-centered'>Úprava svatebních hostů</h2>
                <p className='text mb-02'>Líčení: 650,- Kč</p>
                <p className='text'>Účes: 600,- Kč</p>
            </div>
            <div>
                <h2 className='h-2 underline-centered'>Jiné události</h2>
                <p className='text italic'>plesy, večírky apod.</p>
                <p className='text mb-02'>Líčení: 700,- Kč</p>
                <p className='text'>Účes: 800,- Kč</p>
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
  )
}