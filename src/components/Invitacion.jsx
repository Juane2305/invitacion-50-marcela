import PropTypes from "prop-types";

import cancion from '../assets/song.mp3'
import CountdownCircles from "../components/CountdownCircles";
import Asistencia from "../components/Asistencia";
import Footer from "../components/Footer";
import TextoFinal from "../components/TextoFinal";
import LugaresLineal from "../components/LugaresLineal";
import GalleryElegante from "../components/GalleryElegante";

import hojasDecoracionIzq from "../assets/verona/hojasDecoracionIzq.svg";
import hojasDecoracionDer from "../assets/verona/hojasDecoracionDer.svg";
import decoracionBajoNombres from "../assets/verona/decoracionBajoNombres.svg";
import decoracionImagenes from "../assets/verona/decoracionImagenes.svg";
import MusicScreen from "../components/MusicScreen";


const Invitacion = () => {

    const images=[
        {
            index: 2,
            img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1757253469/dc2d78f0-fdd5-495b-b9cb-2771e29df7ee_qaz7k9.jpg",
        },
        {
          index: 4,
          img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1757363963/2d46ccc6-6dc1-4e2e-888b-b16ba3a08288_2_zjyq8n.jpg",
        },
        {
            index: 1,
            img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1757253469/814a57b3-9068-4b47-8930-8d28edce31c9_ah3kr0.jpg",
        },
        {
            index: 3,
            img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1757253469/e5325eb7-da5a-45c8-a3ec-3cbbcd55cf51_nl6you.jpg",
        },
      ]
  
  

  const targetDate = new Date("2025-09-13T21:00:00-03:00");



  return (
    <div className="w-full font-eleganteText relative overflow-hidden bg-[#f8f5f0]">
        <div className="absolute z-40">
          <MusicScreen cancion={cancion}/>
        </div>

      <div
        className="relative flex flex-col justify-center items-center min-h-screen w-full text-center bg-center bg-cover font-eleganteText space-y-5 overflow-hidden"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dfschbyq2/image/upload/v1741620131/Invitacio%CC%81n_Vertical_Boda_Casamiento_Minimalista_Verde_y_Blanco_dlihnb.jpg')" }}
      >
        <img
          src={hojasDecoracionIzq}
          alt="Decoración Izquierda"
          className="
            absolute 
            top-0 
            -left-10
            pointer-events-none 
            w-[15rem]  
            md:w-[20rem]       
            transition-all
            duration-300
          "
        />

        <img
          src={hojasDecoracionDer}
          alt="Decoración Derecha"
          className="
            absolute 
            bottom-0 
            -right-10
            pointer-events-none 
            w-[15rem] 
            md:w-[20rem]
            transition-all
            duration-300
          "
        />

        <h1 className="text-6xl md:text-8xl font-brushNames text-[#2c003e] z-10 italic mb-0">
            ¡Mis 50 años!
        </h1>

        <img
          src={decoracionBajoNombres}
          alt="Decoración bajo nombres"
          className="w-48 sm:w-72 md:w-[21rem] block mb-0"
        />

        <div className="flex items-center justify-center py-2 px-4 bg-[#ecbaf9]">
          <p className="font-bold text-[#2c003e] text-lg">13 / 09 / 2025</p>
        </div>
      </div>

      <div>
          <section
            id="contador"
            className="bg-white py-10 border-y-4 border-[#b26cc4]"
          >
            <CountdownCircles
              targetDate={targetDate}
              containerClasses="my-8"
              backgroundColor="#e5e7eb"
              progressColor="#b26cc4"
              textColor="black"
              valueClassName="text-3xl font-light"
              labelClassName="text-base font-thin"
            />
          </section>

        <div className="bg-[#b26cc4]">
          <div data-aos="fade-up">
            <LugaresLineal
              iglesia= "Nombre iglesia"
              hora_iglesia = "hora"
              salon= "salon"
              hora_civil= "hora"
              hora_fiesta= "hora"
              link_ceremonia = "link"
              link_fiesta = "link"
              borderColor="border-[#ecbaf9]"
              buttonStyle="border-[#ecbaf9] text-lg"
            />
          </div>
        </div>

          <div className="relative py-10 border-b-4 border-[#b26cc4] bg-white">
            <img
              src={decoracionImagenes}
              alt="Decoración lateral"
              className="hidden md:block absolute -left-36 top-1/2 transform -translate-y-1/2 pointer-events-none"
              style={{
                width: "30rem",
                transform: "translateY(-50%) scaleX(-1)",
              }}
            />
            <img
              src={decoracionImagenes}
              alt="Decoración lateral invertida"
              className="hidden md:block absolute -right-36 top-1/2 transform -translate-y-1/2 pointer-events-none"
              style={{ width: "30rem" }}
            />
            <GalleryElegante textStyle="text-[#4b5147]" buttonStyle="bg-[#ecbaf9]" images= {images}/>
          </div>

          <Asistencia
            linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLSdUnttwYghANWC-jLWXjdLK42PzjjCpUXD2q6dCTfQ8mtwiRQ/viewform?usp=header"
            clase="py-10 bg-white bg-fixed border-b-4 border-[#b26cc4]"
            claseTitle="text-[#b26cc4]"
            claseButton="border-2 border-[#b26cc4] font-semibold hover:bg-[#b26cc4]  text-gray-700 hover:text-white rounded-full"
          />

        <div className="font-eleganteTitle text-2xl bg-white">
          <TextoFinal textoFinal="¡Gracias por venir!"/>
        </div>

        <Footer />
      </div>
    </div>
  );
};

Invitacion.propTypes = {
  invitacionData: PropTypes.shape({
    plan: PropTypes.string.isRequired,
    fecha_cuenta_regresiva: PropTypes.string.isRequired,
    imagenes: PropTypes.string.isRequired,
    cancion: PropTypes.string,
    novios: PropTypes.string.isRequired,
    fecha_evento: PropTypes.string.isRequired,
    nombre_iglesia: PropTypes.string,
    hora_ceremonia_religiosa: PropTypes.string,
    nombre_salon: PropTypes.string,
    hora_civil: PropTypes.string,
    hora_evento: PropTypes.string,
    linkCeremonia: PropTypes.string,
    linkFiesta: PropTypes.string,
    ig_user: PropTypes.string,
    fecha_comienzo_calendario: PropTypes.string,
    fecha_fin_calendario: PropTypes.string,
    dressCode: PropTypes.string,
    cbu: PropTypes.string,
    alias: PropTypes.string,
    banco: PropTypes.string,
    nombre_completo: PropTypes.string,
    link_asistencia: PropTypes.string,
    mensaje_personalizado: PropTypes.string,
  }).isRequired,
};


export default Invitacion;