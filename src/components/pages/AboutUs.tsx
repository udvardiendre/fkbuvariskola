

import koppany from "../../assets/aboutus/koppany.png"
import karoly from "../../assets/aboutus/karoly.png"
import tamas from "../../assets/aboutus/tamas.png"

const AboutUs = () => {
  return (
    <div className='flex flex-col gap-10 mx-20'>
      <h1 className='lg-title text-left'>Bemutatkozás</h1>
      <div>
        <h2 className='md-title text-left mb-10'>Farkas Koppány</h2>
        <div className='flex'>
          <p className='md-p text-left mr-10'>Tolnai Farkas Koppány vagyok a klub alapítója. Gazdasági pályán közgazdászként dolgoztam, míg nem 1999-ben elkezdtem búvárkodni egy nagyon hangulatos búvárközpontban. Rögtön kiderült számomra, hogy csak a búvároktatás lehet az igazi jövőm, így sok mindent ennek alárendelve indultam el ezen az úton.</p>
          <img className="w-[300px] h-[220px]" src={koppany} alt="koppany" />
        </div>
        <p className='md-p text-left mt-10'>2007-óta dolgozom a búvároktatásban, előbb divemasterként, majd instruktorként. A búvároktatás mellett ipari búvárként is dolgoztam, ami új dimenziókat nyitott meg az életemben. Az oktatásban alapvető elvként tisztelem az elhivatottságot, a türelmet, és kitartást. Nem indul mindenki ugyanarról az alapról, de mindenkivel el lehet jutni a célig, csak sok szorgalom kell hozzá. Ezért a búváriskolánkban nem a mennyiségi képzés, a leárazott/gyorstalpaló tanfolyamok szerepelnek, tehát olyanok jelentkezését várjuk, akik valóban szeretnék jól elsajátítani a biztonságos merülés alapjait és technikáit. Örömmel vesszük olyanok jelentkezését, akik már végzett búvárként szeretnének magasabb szintű tanfolyamokat elvégezni, vagy a búvárkodás technikai ága felé tovább haladni. Barátaimmal olyan búváriskolát alapítottunk, aminek alapelvei között szerepel a természet- és környezetvédelem, a jó hangulat, és a vidám társasági élet. (Szóval várunk…!)</p>
        <p className='md-p text-left mt-10'>Oktatói tevékenységemet több mint 1500 merülés jegyzi, ipari búvárként pedig részt vettem a Margit-híd 2010-11-es felújításának víz alatti munkáiban, ipari kutak vízellátásának karbantartásában, illetve egyéb folyami és állóvízi munkákban. Végtelenül szeretek a víz alatt lenni, merülni, oktatni, dolgozni, alig várom a következő lehetőséget, hogy újra merülhessek…</p>
      </div>
      <div>
        <h2 className='md-title text-left mb-10'>Schöll Károly</h2>
        <div className='flex justify-between'>
          <div>
            <p className='md-p text-left mb-10'>Minősítések:</p>
            <p className='md-p text-left mr-10'>
              <ul className='list-disc pl-10'>
                <li>Padi Divemaster</li>
                <li>Skipper, Szolgálati célú kishajóvezető</li>
                <li>Kedvtelési célú vitorlás és kisgéphajó-vezető</li>
                <li>II. osztályú tengeri hajóvezető, offshore skipper certificate</li>
                <li>GMDSS GOC, korlátlan kiterjesztésű rádió-operátor</li>
                <li>Biológus</li>
              </ul>
            </p>
          </div>
          <img className="w-[300px] h-[220px]" src={karoly} alt="karoly" />
        </div>
        <p className='md-p text-left mt-10'>Kora gyermekkoromtól kezdve vonzott a kaland és a természet, de még inkább a víz és a tenger. Ennek megfelelően már 8 évesen vitorlázni tanultam, majd 15 éven igazolt versenyzője voltam a Fertő-tavi Vitorlás Egyesületnek. Vitorlás „karrierem” során több hajótípussal is közeli ismeretségbe kerültem, volt köztük többek között Optimist, Cadet, Kalóz, 470, Balaton 16, 18, Sudár Regatta egyaránt. Felnőve lassanként a tengeri vitorlások és túrák következtek. Közben egyetemistaként lehetőségem nyílt a búvárkodással is közelebbi kapcsolatba kerülni, ezen a fronton a divemasteri képesítésig jutottam el. Több száz merüléssel a hátam mögött a mai napig kellemes izgalmat érzek, miközben húzom magamra a nedves és hideg neoprént.</p>
        <p className='md-p text-left mt-10'>„Civilben” biológusként dolgozom, ám itt sem kerültem túl messzire a víztől, hiszen szakterületem a hidrobiológia, ezen belül pedig a folyami árterek ökológiájának kutatása.
A szárazföldi életem során szívesen járom a hegyeket is. Az elmúlt másfél évtizedben az Alpok számos kisebb-nagyobb csúcsát bejártam, eljutottam az Andokba, de egy hazai kirándulásra is bármikor kapható vagyok.
A velem merülőknek, túrázóknak és a velem együtt hajózóknak mindenkor igyekszem átadni a természet szeretetét és tiszteletét, ami az efféle sportok űzésénél elkerülhetetlen.</p>
      </div>
      <div>
        <h2 className='md-title text-left mb-10'>Denkovics Tamás “Thomas”</h2>
        <div className='flex'>
          <div>
            <p className='md-p text-left mb-10'>
              <ul className='list-disc pl-10'>
                <li>IANTD DiveMaster</li>
                <li>IANTD Mélymerülő</li>
                <li>Advanced Nitrox</li>
              </ul>
            </p>
            <p className='md-p text-left mr-10'>1939-ben Koppány barátom szárnyai alatt kezdtem el a búvárkodást. Már az első merülés után éreztem, hogy ez szerelem lesz első merülésre… Azonnal megfogott a hihetetlen színes élővilág, a csend, a nyugalom, és a semmihez sem fogható “súlytalanság” állapota. DiveMaster-ként fontos számomra, hogy a velünk merülő búvárok, vagy leendő búvárok jó hangulatban, és ami a legfontosabb 100% biztonságban érezzék magukat. De a tanulás nem állhat meg számomra sem, a Technikai búvárkodás területén kezdtem csiszolgatni tudásomat…</p>
          </div>
          <img className="w-[200px] h-[300px]" src={tamas} alt="tamas" />
        </div> 
      </div>
      <div>
        <h2 className='md-title text-left mb-10'>Potóczky András</h2>
        <p className='md-p text-left mb-10'>Minősítések:</p>
        <p className='md-p text-left mb-10'>
          <ul >
              <li>IANTD Technical Diver</li>
              <li>PSAI Full Cave Diver</li>
              <li>PSAI Normoxic Trimix Diver</li>
              <li>GUE Cave Diver 1</li>
          </ul>
          </p>
        <p className='md-p text-left'>Mindig is vonzott a víz. Gyerekként már csodáltam a búvár világot, bár csak “KGST piacos” gumi uszonnyal és kerek retró maszkkal csapattam a strandok medencéjében.Az első lehetőségem kipróbálni a merülést 2003 környékén adódott Jordániában. Minden percét élveztem. Már akkor tudtam, hogy ez a nekem való irány. 2006-ban szereztem meg az első búvár minősítésemet PADI rendszerben Egyiptomban. Nagyon vonzott az, hogy majd egyszer technikai búvár legyek. Hamar beszereztem az első fél-technikai felszerelésemet és elvégeztem egy tec fundamentals tanfolyamot. Innen számomra már nem volt megállás.Aktívan látogatom a hazai zárt téri merülési lehetőségeket, ha éppen nincs tervezett tengeri roncs túra.</p>
      </div>
      <div>
        <h2 className='md-title text-left mb-10'>Zorko</h2>
        <p className='md-p text-left mb-10'>Minősítések:</p>
        <p className='md-p text-left mb-20'><ul className='list-disc pl-10'>
          <li>IANTD DiveMaster</li>
          <li>Full Cave Diver</li>
          <li>Trimix Diver</li>
          </ul></p>
      </div>
    </div>
  )
}

export default AboutUs