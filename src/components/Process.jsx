import React from 'react'
import SwipeableTemporaryDrawer from './SwipableTemporaryDrawer'
import { Link } from 'react-router-dom'

export default function Process() {
  return (
    <>
      <SwipeableTemporaryDrawer />
      <div className='page'>
        <h1 className='page-logo'>
          <img src="images/process.svg" alt="průvodce procesem" />
          <span className='visually-hidden'>proces</span>
        </h1>
        <div className='page-content'>
          <h2 className='h-2'>První krok</h2>
          <p className='text'>Neváhejte se na mě obrátit s dotazy ohledně volného termínu. Můžete mi zavolat nebo napsat na e-mail, který najdete v sekci 
            <Link to="/kontakt" style={{textDecoration: "none", color: "inherit", marginLeft:".25rem"}}>
              <a className='link'>Kontakt</a>.
              <br></br>
            </Link>
              Vážím si toho, že do mě vkládáte důvěru a ve Váš den se mi svěříte do rukou.<br></br>
              Budu ráda, když mi před prvním setkáním pošlete fotky přibližných představ účesu, případně i líčení.<br></br>
              Ke zvolení té pravé vizáže pomůže i fotka Vašich vlasů zezadu a Vašich svatebních šatů. Není to však podmínkou.<br></br>
              Doporučuji už nestříhat vlásky.
          </p>
          <h2 className='h-2'>Zkouška</h2>
          <p className='text'>Provedení zkoušky může být podceňováno. Nicméně jde o gró naplnění Vašich představ a celkové spokojenosti. Tam se vše „upeče“. Termín zkoušky můžeme domluvit dle časových možností, doporučuji 1-3 týdny před svatbou. Zkouška bude probíhat tam, kde si budete přát Vy.</p>
          <p className='text'>Během zkoušky si často s Vaším souhlasem zaznamenávám fotky a videa Vašeho vzhledu, případně různých variant. Ty Vám následně poskytnu, abychom v den svatby docílily maximálního naplnění Vašich představ.</p>
          <p className='text'>Připravte si pro mne informace, kde budou v den D probíhat přípravy, v kolik hodin musíte být v den D připravená na přesun k oltáři.
  Zakládám si na upřímnosti, proto neváhejte kdykoli během zkoušky sdílet Vaše pocity a návrhy na konkrétní úpravu/změnu. Uvítám to. S kůží na trh půjdete Vy, ne já. Je pro mě tedy nejdůležitější, abyste se cítila ve své vizáži svá a byla s výsledkem spokojená.</p>
          <h3 className='h-3 ml-2'>Účes</h3>
          <p className='text ml-2'>Na zkoušku mějte prosím vlasy čisté a hlavně suché. Moc ráda se s Vámi pobavím o sladění účesu s Vaším obličejem a typem šatů.
  Zvážíme, na co jste zvyklá a jak byste chtěla působit. Sdělím Vám výhody a nevýhody konkrétních variant. Vše můžete v zrcadle kontrolovat a  dát mi upřímnou zpětnou vazbu. Preference jsou zcela na Vás.
  Je možné si dle zvoleného účesu vybrat a zapůjčit doplňky do vlasů (odkaz k fotkám). Pokud máte svoje, budu ráda, když mi je již na zkoušce ukážete.
  Oblíbené jsou také květy ve vlasech. Můžeme se domluvit na konkrétní variantě květin. 
  Pobavíme se i o závoji, pokud ho máte v plánu mít.</p>
          <h3 className='h-3 ml-2'>Líčení</h3>
          <p className='text ml-2'>Zkouška líčení a účesu trvá 2,5 – 3,5 hod., během kterých si společně probereme, co očekáváte a čemu se chcete naopak vyhnout.
  Setkávám se často s obavami nevěst, že budou příliš zmalované. Mým záměrem není Vám na obličeji vytvořit masku. Chci, abyste se cítila sebejistě a zároveň aby se makeup na fotografiích neztrácel. Najdeme spolu balanc. 
  Mezi značky, které používám patří Mac, Estée Lauder, Bobbi Brown, Huda Beauty, Annabelle Minerals nebo Too faced.</p>
          <p className='text'><span className='tip'>TIP! </span>Doporučuji si před svatbou (cca týden až dva) zajít na kosmetiku (odkaz na „Doporučuji“), aby byla pleť co nejzdravější a nejlépe nachystaná a bez nežádoucích chloupků. Dle Vašich preferencí zvažte také úpravu obočí. 
  Vzhledu vlasů může pomoci maska/kůra na doma z drogerie nebo např. Malibu C u kadeřnice.
  Na zahájení příprav prosím mějte vlasy čisté a hlavně suché (myjte a sušte večer před nebo ráno v den svatby, dejte si záležet se sušením).</p>
          <h2 className='h-2'>Den svatby</h2>
          <p className='text'>Zvažte, kde chcete, aby probíhaly přípravy. Ideální je místnost, kde je co nejvíce denního světla a zároveň nebudeme rušeny. V každém případě si s sebou vozím i pomocná světla. 
  Během příprav čas letí a často do nich vstupují další záležitosti, proto je dobré mít časovou rezervu. Nemusíte ale mít obavy, čas příprav Vám ohlídám, Vaše instrukce mám totiž předem poznačené. 
  Většinou je vhodné si na účes a makeup nevěsty vyčlenit 3 hodiny. 
  Je vhodné na sobě mít župánek nebo košili, aby převlékání nepoškodilo účes a makeup při převlékání.
  Na zahájení příprav prosím mějte vlasy čisté a hlavně suché (myjte a sušte večer před nebo ráno v den svatby, dejte si záležet se sušením).</p>
        </div>
      </div>
    </>
  )
}
