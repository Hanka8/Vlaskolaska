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
                <h2 className='h-2'>Zkouška</h2>
                <p className='text mb-02'>svatební líčení: 850,- Kč</p>
                <p className='text mb-02'>svatební účes: 1200,- Kč</p>
                <p className='text'>(dohromady 2,5 - 3,5 h)</p>
            </div>
            <div>
                <h2 className='h-2'>Den svatby</h2>
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
                <h2 className='h-2'>Úprava svatebních hostů</h2>
                <p className='text mb-02'>líčení: 650,- Kč</p>
                <p className='text'>účes: 600,- Kč</p>
            </div>

        </div>
      </div>
    </div>
  )
}
