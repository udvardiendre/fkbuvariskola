

import sailing1 from "../../assets/sailing/s1.png"
import sailing2 from "../../assets/sailing/s2.png"
import sailing3 from "../../assets/sailing/s3.png"
import sailing4 from "../../assets/sailing/s4.png"
import sailing5 from "../../assets/sailing/s5.png"
import sailing6 from "../../assets/sailing/s6.png"
import sailing7 from "../../assets/sailing/s7.png"

const Sailing = () => {
  return (
    <div className='flex flex-col gap-10'>
      <h1 className='lg-title self-start ml-20'>Túravitorlázás</h1>
      <div>
        <h2 className='md-title text-left ml-20'>Vitorlástúrák Görögországban</h2>
        <div className='flex '>
          <div className='w-[50vw] text-left mx-20 my-20'>
            <p className='md-p mb-10'>A 2019-es év legnagyobb eseménye képpen Kapitányunk Karesz vásárolt egy vitorlást, ami mérete folytán alkalmas arra, hogy a korábbihoz hasonló túrákat szervezzünk vele!</p>
            <p className='md-p'>A hajó Görögországban van, 2020-as vitorlázásainkat ide tervezzük. Görögország sok mindenben különbözik a korábban megszokott horvátországi túráink helyszíneitől.A görög partokon sokkal (de tényleg sokkal) kevesebb a marina, és sokkal több a nyugodt és ingyenes horgonyzóhely. A naponta megtett távok esetenként jóval nagyobbak,a korábban megszokotthoz képest, sőt adott esetben komolyabb hullámzással is számolnunk kell. Cserébe nincs bóra, télen is melegebb a víz, és bizony sokkal olcsóbbak a kikötődíjak.A tenger valahogy nagyobbnak és ősibbnek tűnik errefelé, gyakori vendégeink az álcserepes teknősök, néha még akár mediterrán barátfókát is láthatunk.A görög emberek is mások, ezt majd meglátjátok.</p>
          </div>
          <div className='w-[50vw] flex flex-col items-center gap-10 mt-20'>
            <img className='w-[300px] h-[200px]' src={sailing1} alt="sailing1" />
            <div className='flex justify-center gap-10'>
              <img className='w-[200px] h-[300px]' src={sailing2} alt="sailing2" />
              <img className='w-[200px] h-[300px]' src={sailing3} alt="sailing3" />
            </div>
          </div>
        </div>
        <div>
          <p className='md-p text-left mx-20'>Alapesetben 5-en, esetleg 6-an férünk el kényelmesen a hajón. A korábbiakhoz hasonlóan főzni, mosogatni, korlátozottan még zuhanyozni is tudunk rajta,de igyekszünk a túrák során többször kikötőkben, marinákban aludni, de emellett természetesen a horgonyon töltött csillagos éjszakák sem maradhatnak el továbbra sem.
              …és most következzenek a részletek, a hajóról, a kikötőről és a jövő évi terveinkről:</p>
        </div>
      </div>
      <div className='mx-20'>
        <h2 className='md-title mb-10 text-left'>Az Amel hajógyár</h2>
        <p className='md-p text-left mb-10'>Az Amel hajógyár La Rochelle-ben, Franciaországban található, 1965-ben Henry Amel alapította. A többi francia hajógyártóhoz képest ma is kicsi üzemnek számít.Mr. Amel üzemében a tökéletes “blue-water cruiser” (hosszú, nyílt tengeri utak megtétele alkalmas túravitorlás) megteremtésére törekedett. És ezalatt nem a tágas belsőtérre,kényelmes zuhanyra és a kokpitban elhelyezett pohártartókra kell gondolni. Az 54 lábas modellnek is pont akkora a zuhanyzója, mint a 41-esnek – kicsi.Azért kicsi, hogy nyílt tengeren, dülöngélő hajón is lehessen benne zuhanyozni. Mr. Amel saját gyárát 1984-ben a munkásoknak adományozta. Hogy miért?Úgy gondolta, hogy ezáltal még jobb, tökéletesebb hajókat fog tudni gyártani.
        </p>
        <p className='md-p text-left mb-10' >Vitorlás újságokban ritkán lehet Amel hirdetést látni. Az Amel hajógyár nem szponzorál hatalmas versenyeket.Kitűnő minőségük és tulajdonságaik mégis világszerte ismerté tették ezeket a hajókat, amelyek használtan is könnyedén új gazdára lelnek.</p>
        <p className='md-p text-left'>Mr. Amelnek konkrét elképzelései voltak arról, milyen egy tökéletes “blue-water cruiser”:<ul className='list-disc pl-10'>
          <li>A fedélzet és a hajótest egy darabból készül, a gyártás során egy egységként laminálják, és ezáltal a hajótest szuper-erős.Nincsenek fedélzetet a héjjal összekötő csavarok, nincsenek szigetelési, beázási problémák.A hajótest olyan erős, hogy a gyárban 3 fedélzetre szerelt kampóval emelgetik és mozgatják a már kész hajót,és a gyári leírás szerint daruzásnál a vízből is ki lehet a hajót a 3 rögzítési ponttal emelni.</li>
          <li>A hajóhosszhoz képest -különösen a mai, nyaralásra tervezett hajókhoz képest- keskeny a hajótest.Ezáltal jelentősen nő a hajó iránytartása, kellemesebben viselkedik komolyabb hullámzásban is,a belső tér viszont a hajóhosszhoz viszonyítva kisebb.</li>
          <li>A víztartály a hajó tőkesúlyába van beépítve, olyan módon, hogy egy esetleges fenéksérülésnél dupla fenékként funkcionáljon és a hajóba ne juthasson be a víz.</li>
          <li>Az Euros utáni modelleken az orrkabin ajtaja vízmentesen lezárható. Ha egy frontális ütközésnél megsérül a hajótest, akkor ezáltal megakadályozható a hajó elsüllyedése.A hátsó kabinrész hasonlóan vízmentesen lezárható.</li>
          <li>A kormánylapátot teljes hosszában szkeg védi, ami olyan erõsre van építve, hogy önmagában elbírja a hajó teljes súlyát. Maga a kormánylapát acélból készül.A kormánytengely duplán van csapágyazva, a csapágyaknál különösen erős a héj.</li>
          <li>A csavartengely kihajtás mélyen a vízvonal alatt van, és körkörösen védett. A védelem ára a hajtás hatékonyságának csökkenése.</li>
          <li>A hajóba épített motor a hasonló hajókhoz képest túlméretezett.</li>
          <li>A hajó középkokpitos, ezáltal jobban védve van a becsapódó hullámoktól. A kokpit alatt csak a motor található, amelyhez egy nagyméretű ajtó kinyitása után 100%-ban hozzá lehet férni.A kokpit annyira alacsony és ezáltal védett, hogy nem is a hajón, hanem a hajó belsejében van.</li>
          <li>A kabinbejáratot félig befedi a kemény fröccsvédő.</li>
          <li>A veretek a hajótestre kívülről vannak ráerősítve. Állapotuk emiatt folyamatosan nyomon követhető. Nincs beázási probléma, nincs túl nagy esély korrózióra.</li>
          <li>A korlát teljes hosszában merev, rozsdamentes acélcsőből van elkészítve. Nincs megnyúló drótkötél, és a billegő hajón sokkal nagyobb biztonságot ad a fix korlátot megfogni,mint egy vékony drótkötelet.</li>
          <li>A navigációs asztal a hajótest oldala felé néz, ezáltal a navigátor nem a menetirányba, hanem arra merőlegesen ül, közelebb a hajó tömegközéppontjához, ahol kisebb,jobban elviselhető a hajó mozgása. Az asztal közvetlenül a kabinlejáratnál található. Csak egy lépés, hogy a navigátor kidugja a fejét a lejáraton és körbepillantson.</li>
          <li>Minden ágynál merev, kivehető lee-betét van kialakítva, ami megakadályozza, hogy pihenés közben leguruljunk az ágyról.Más hajókon általában egy ponyvával oldják meg ezt a problémát, de aki már próbálta a ponyvát és a kemény tartófalat is az tudja, micsoda különbség van a kettő között.</li>
          <li>A mosdó a hajó hossztengelyében, illetve annak közelében található, így menet közben mindkét oldalra dőlve használható.</li></ul></p>
      </div>
      <div className='mx-20'>
        <h2 className='md-title text-left'>Az Amel Kirk</h2>
        <p className='md-p text-left mb-10 mt-10'>Az Amel hajógyár az 1971 és 1980 között 276 példányt gyártott a Kirk névre keresztelt hajótípusból, közülük a 214-es sorozatszámú, 1977-ben épült példány a miénk.A hajót első tulajdonosa Daal névre keresztelte, amit nem változtattunk meg.</p>
        <p className='md-p text-left mb-10'>Az egyárbocos, topriges, szlup vitorlázatú hajó alapadatai a következők:</p>
        <div className='flex'>
          <div><p className='md-p text-left'><ul>Tervező: Henri Amel
            <li>Hajótest anyaga: <span className='text-salmon'>üvegszál-erősítésű poliészter (GRP)</span></li>
            <li>Teljes hossz: <span className='text-salmon'>11,02 m</span></li>
            <li>Vízvonalhossz: <span className='text-salmon'>9,08 m</span></li>
            <li>Szélesség: <span className='text-salmon'>3,00 m</span></li>
            <li>Merülés: <span className='text-salmon'>1,60 m</span></li>
            <li>Vízkiszorítás: <span className='text-salmon'>5200 kg</span></li>
            <li>Tőkesúly tömege: <span className='text-salmon'>1928 kg</span></li>
            <li>Névleges vitorlafelület: <span className='text-salmon'>52,95 m2</span></li>
            <li>Motor típusa: <span className='text-salmon'>Lombardini LDW1404M, dízel</span></li>
            <li>Motor teljesítménye: <span className='text-salmon'>36le/25,5kw</span></li></ul></p></div>
          <div className='flex items-center w-[50vw] justify-end'>
            <img className="w-[240px] h-[300px]" src={sailing4} alt="sailing4" />
            <img className="w-[450px] h-[285px]"src={sailing5} alt="sailing5" />
          </div>
        </div>
        <p className='md-p text-left mt-10'>A hajóban egy kétágyas orrkabin, egy kétágyas hátsó kabin, egy szalon és egy kis fürdő-helyiség található. A szalonban szükség esetén 3 fő számára alakítható ki fekhely.</p>
      </div>
      <div className='mx-20'>
        <h2 className='md-title text-left'>A kikötő</h2>
        <p className='md-p text-left mt-10'>Hajónk a Messolonghi marinában áll. A marina a Korintoszi-öböl nyugati bejáratánál, annak északi partján található.Ideális kiindulópont a Jón-tenger nagyobb szigeteihez (Lefkada, Lefkas, Zakynthos, Korfu), vagy az Albán és Dél-olasz kikötőkbe vezető túrákhoz.A kikötőből délre indulva a ritkásan lakott Peloponészoszi-félsziget partjait, Korintoszi-csatornán átkelve az Égei-tenger szigeteit is megcélozhatjuk.</p>
        <div className='flex gap-10 mt-10'>
          <div className='flex flex-col gap-10'>
            <p className='md-p text-left'>Messolonghi lakosainak száma 34000 körül van, idegenforgalma mediterrán mértékkel nézve csekély, más szóval elkerülik a máshol már megszokott nyaralóhordák.1824-ben itt lelte halálát Byron. A városban néhány múzeum és park, illetve számos strand található, érdekes látnivaló az ősidők óta használt hatalmas sólepárló üzem.</p>
            <img className="" src={sailing7} alt="sailing7" />
          </div>
          <div className='flex flex-col gap-10'>
            <img className="" src={sailing6} alt="sailing6" />
            <p className='md-p text-left'>A kikötőt övező lagúna Európa természetvédelmi szempontból egyik legfontosabb vizes élőhelye, Natura 2000 terület, illetve a Ramsari-konvencióban is szerepel.A lagúnában az álcserepes teknősök (Caretta caretta) költőhelyei, parti madár élő- és fészkelőhelyek található.</p>
          </div>       
        </div>
      </div>
      <div className='mx-20'>
        <h2 className='md-title text-left'>Megközelítés</h2>
        <p className='md-p text-left mt-10'>A kikötőt övező lagúna Európa természetvédelmi szempontból egyik legfontosabb vizes élőhelye, Natura 2000 terület, illetve a Ramsari-konvencióban is szerepel.A lagúnában az álcserepes teknősök (Caretta caretta) költőhelyei, parti madár élő- és fészkelőhelyek található.</p>
      </div>
      <div className='mx-20 mb-20'>
        <h2 className='md-title text-left'>Túrák árai:</h2>
        <p className='md-p text-left mt-10'><ul>
          <li>Egyhetes túrák: 1400 EUR/hét/hajó/2-5fő</li>
          <li>Hosszú hétvégék: 200 EUR/nap/hajó/2-5 fő</li>
          </ul>
          </p>
      </div>
    </div>
  )
}

export default Sailing