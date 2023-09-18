
import other1 from "../../assets/otherprograms/op1.png"
import other2 from "../../assets/otherprograms/op2.png"

const OtherPrograms = () => {
  return (
    <div className='flex flex-col gap-10 mx-20 text-left'>
      <h1 className='lg-title'>Egyéb szolgáltatások</h1>
      <div className='flex gap-20'>
        <div>
          <h2 className='md-title mb-10'>Vízben elveszett tárgyak felkutatása</h2>
          <p className='md-p'>Gyűrű, telefon, csónakmotor? Minden évben tucatjával esnek véletlenül vízbe kedvenc tárgyaink, és sajnos többnyire nem kerülnek elő. A sikeres felkutatást mi sem tudjuk garantálni, de a lelkiismeretes keresést igen. Azt is megmondjuk egy felmérés után, hogy érdemes-e keresni a tárgyat, vagy sem, elkerülve a további fölösleges költségeket. Természetesen, ha annyira fontos az elveszett tárgy, mindent megteszünk a sikerért.</p>
        </div>
        <img className="w-[435px] h-[300px]" src={other1} alt="other1" />
      </div>
      <div className='flex gap-20 mb-20 items-center'>
        <div className=''>
          <h2 className='md-title mb-10'>Víz alatti szerelési munkák</h2>
          <img className="w-[445px] h-[300px]"src={other2} alt="other1" />
        </div>
        <p className='md-p max-w-[50%]'>Kisebb, speciális eszközöket nélkülöző szerelési munkákat tudunk vállalni, mint pl. medencék tisztítása, azok lefolyóinak tisztítása, szerelése a víz alatt.Klubunk önállóan ipari búvár munkát nem végez, nem vállal, léteznek erre szakosodott megfelelő eszközökkel és képzettséggel rendelkező cégek. Kérjük, komolyabb munkákkal azokat keressék. Természetesen a kapcsolatteremtésben tudunk segíteni.</p>
      </div>
    </div>
  )
}

export default OtherPrograms