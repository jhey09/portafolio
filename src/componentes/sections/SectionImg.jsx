import miImage from '../../assets/img/WhatsApp-Image-2023-05-09-at-11.20.21-PM.jpg';
import './sectionImg.css'
const SectionImg = () => {
  return (
    <>
    
      <div className="containerImg">
      <div className="imgtext">
        <div className="styleParrafo">
        <p>hola, Yo soy</p>
        </div>
      <h1 className="name">jheyson martinez</h1>
      </div>
        <div className="img">
        <picture>
            <img src={miImage} alt="" className='imgMe' />
        </picture>

        </div>
      </div>
    </>
  );
};

export default SectionImg;
