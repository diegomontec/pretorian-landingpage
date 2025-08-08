import Image from "next/image";
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const Rodape = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#1A2028] to-[#233446] text-white py-24 px-6 sm:px-12 lg:px-24 flex flex-col items-center justify-center text-center gap-4 sm:gap-24">
      
      {/* Logo */}
      <div className="flex items-center justify-center text-center gap-2 sm:gap-4">
        <div className="relative w-20 h-16 sm:w-28 sm:h-24">
          <Image
            src="/assets/icon-image-pretorian.png"
            alt="Ícone Pretorian"
            fill
            className="object-contain"
          />
        </div>

        {/* Texto */}
        <div className="flex flex-row items-center justify-center gap-1 sm:gap-2">
          <p
            style={{ fontFamily: 'AtypDisplaySemiBold' }}
            className="text-3xl sm:text-5xl mb-6"
          >
            pretorian
          </p>
          <p
            style={{ fontFamily: 'AtypDisplayLight' }}
            className="text-lg sm:text-3xl mb-3 text-[#d4b866] tracking-widest"
          >
            asset
          </p>
        </div>
      </div>
      

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 px-4 py-10 text-white">
        {/* Bloco de contato */}
        <div className="text-center md:text-left flex flex-col gap-2 max-w-md">
          <p style={{ fontFamily: 'AtypDisplaySemiBold' }} className="text-2xl">
            Contato
          </p>
          <div className="flex gap-2" ><p>Telefone:</p>
            <p style={{ fontFamily: 'inter' }} className="text-" >(15) 9 9770-5571 e (82) 3035-4642</p>
          </div>
          <p style={{ fontFamily: 'AtypDisplay' }}>
            Email: antonio.dias@pretorian.net.br
          </p>
          <p style={{ fontFamily: 'AtypDisplay' }}>
            Endereço em São Paulo: Rua Manuel Guedes n° 504 - Jardim Europa SP, CEP 04536-908
          </p>
        </div>

        {/* Botão */}
        <div>
          <a href="https://wa.me/5515997705571" target="_blank" rel="noopener noreferrer">
            <button
              className="bg-[#e0c578] text-[#0F1926] font-semibold text-base sm:text-lg px-10 py-3 rounded-full hover:brightness-110 transition cursor-pointer"
              style={{ fontFamily: 'AtypDisplay' }}
            >
              <div className="flex items-center gap-2" ><FaWhatsapp/> Fale conosco </div>
            </button>
          </a>
        </div>

        {/* Redes sociais */}
        <div className="flex md:flex-col items-center gap-4">
          <a href="https://www.instagram.com/pretoriancontabilidade/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-[#ffde7b] text-3xl" />
          </a>
          <a href="https://www.linkedin.com/in/antonio-dias-8bb389119/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-[#ffde7b] text-3xl" />
          </a>
          <a href="https://www.youtube.com/@pretoriancontabilidade/videos" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-[#ffde7b] text-3xl" />
          </a>
        </div>
      </div>

    
    </div>
  );
};

export default Rodape;
