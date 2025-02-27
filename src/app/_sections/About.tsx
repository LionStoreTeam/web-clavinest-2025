"use client"

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const otrosValores = [
    {
        title: "> Honestidad"
    },
    {
        title: "> Integridad"
    },
    {
        title: "> Pasión"
    },
    {
        title: "> Calidad"
    },
    {
        title: "> Sustentabilidad"
    },
    {
        title: "> Impacto social"
    }
]

const About = () => {
    return (
        <div className="w-full my-10 text-slate-600">
            {/* Inicio - Nuestra Historia */}
            <h1 className="text-[30px] font-extrabold md:text-[50px] xl:text-[70px]">
                <TypeAnimation
                    sequence={[
                        'Clavinest',
                        1000,
                        'Nuestra historia',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ display: 'inline-block' }}
                    repeat={Infinity}
                />
            </h1>
            <div className="my-16 flex flex-col justify-center items-center text-center md:flex-row md:gap-12 xl:gap-28">
                <div className="w-[300px] xl:w-[600px]">
                    <Image src="/bottle-1.png" alt="img-bottle-1" width={500} height={500} className="rounded-sm float" />
                </div>
                <div className="md:w-[450px] xl:w-[900px] xl:text-[40px] p-4 text-start text-[20px] transform transition-transform duration-700 hover:scale-105">
                    <span className="">
                        <TypeAnimation
                            sequence={[
                                'Clavinest surge como un proyecto de emprendimiento de la universidad, tras intercambiar ideas, se recordaron los remédios de las abuelas, uno de ellos fue el alivio de dolor de muela con clavo de olor, lo que llevó a imaginar que si alivia un dolor tan intenso, podría aliviar mucho más; al investigar a fondo se supo de sus múltiples beneficios en la piel, surgiendo así una combinación de alivio al dolor y cuidado de la piel.',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </span>
                </div>
            </div>
            {/* Fin - Nuestra Historia */}

            {/* Inicio - Filosofía Empresarial */}
            <div className="paper-bg py-32">
                <h1 className="text-[30px] font-extrabold md:text-[50px] xl:text-[70px]">
                    <TypeAnimation
                        sequence={[
                            'Clavinest',
                            1000,
                            'Fisolofía Empresarial',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </h1>
                <div className="w-full p-4 text-center text-[20px] transform transition-transform duration-700 hover:scale-105 md:px-32  xl:px-96 md:text-[25px] xl:text-[40px]">
                    <span className="text-slate-800">
                        <TypeAnimation
                            sequence={[
                                'Clavinest es una empresa que ofrece un producto natural, ecológico y libre de crueldad animal, a través de nuestra pomada a base de clavo de olor que busca mitigar las dolencias físicas por medio de una fórmula que alivia dolores musculares, humecta y cuida tu piel.',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </span>
                </div>
            </div>
            {/* Fin - Filosofía Empresarial */}

            {/* Inicio - Misión, Visión, Valores */}
            <div className="plant-bg my-16 py-30 px-2 flex flex-col justify-start items-start text-start md:px-16 xl:px-32">
                {/* Misión */}
                <div className="p-4 my-5 transform transition-transform duration-700 hover:scale-105">
                    <h1 className="mb-3 text-[28px] border-b-4 border-[#4f82c2] md:text-[35px] xl:text-[50px] font-extrabold">
                        <TypeAnimation
                            sequence={[
                                'Clavinest',
                                1000,
                                'Nuestra Misión',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h1>
                    <span className="text-[20px] font-semibold sm:font-normal xl:text-[35px] text-black ">Clavinest es un producto 100% natural creado para aliviar malestares físicos, está principalmente dirigido a los deportistas y a la sociedad en general con dolencias físicas que buscan sensación de alivio a través de una
                        pomada con propiedades anestésicas. Del mismo modo es apto para todo
                        estilo de vida gracias a su bajo costo y su fácil adquisición en <b>Cuernavaca</b>.
                        El principal motivo de este producto es concientizar a la sociedad de los
                        beneficios de los productos ecológicos, evitando el uso de medicamentos
                        dañinos e industrializados, para ofrecer un producto funcional que ayude
                        a cesar dolores físicos.</span>
                </div>
                {/* Visión */}
                <div className="p-4 my-5 transform transition-transform duration-700 hover:scale-105">
                    <h1 className="mb-3 text-[28px] border-b-4 border-[#4f82c2] md:text-[35px] xl:text-[50px] font-extrabold ">
                        <TypeAnimation
                            sequence={[
                                'Clavinest',
                                2000,
                                'Nuestra Visión',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h1>
                    <span className="text-[20px] font-semibold sm:font-normal xl:text-[35px] text-black">Expandir el producto Clavinest para que sea altamente reconocido a
                        nivel nacional, siendo la pomada anestésica a base de productos naturales número uno, caracterizándose por procurar siempre el bien de
                        nuestro mercado y tener un precio accesible para nuestros clientes. </span>
                </div>
                {/* Valores */}
                <div className="p-4 my-5 transform transition-transform duration-700 hover:scale-105">
                    <h1 className="mb-3 text-[28px] border-b-4 border-[#4f82c2] md:text-[35px] xl:text-[50px] font-extrabold ">
                        <TypeAnimation
                            sequence={[
                                'Clavinest',
                                3000,
                                'Nuestros Valores',
                                3000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h1>
                    <span className="text-[20px] font-semibold sm:font-normal xl:text-[35px] text-black">
                        <b>
                            &gt; Responsabilidad:{" "}
                        </b>
                        Prometemos un producto 100% orgánico y amigable con el medio ambiente, así como reciclable.</span>
                    <br />
                    <br />
                    <span className="text-[20px] font-semibold sm:font-normal xl:text-[35px] text-black">
                        <b>
                            &gt; Empatía:{" "}
                        </b>
                        Nos preocupamos por todos, por ello hemos dado un
                        precio accesible al producto y hemos trabajado con elementos que
                        pueden usar todas las personas.</span>
                    <br />
                    <br />
                    <span className="text-[20px] font-semibold sm:font-normal xl:text-[35px] text-black">
                        <b>
                            &gt; Transparencia:{" "}
                        </b>
                        Nos hemos enfocado en reflejar la delicadeza de las
                        creadoras de clavinest, pero a la vez brindar un producto mágico
                        que pueda aliviar los dolores más fuertes.</span>
                    {/* Cards para los demás Valores */}
                </div>
                <div className="my-5 flex flex-col justify-center items-center text-center w-full text-black text-[14px] font-bold md:text-[20px] xl:my-10 xl:text-[30px]">
                    <div className="grid grid-cols-2 gap-2 items-center justify-center md:grid-cols-3 md:gap-6 xl:gap-10">
                        {
                            otrosValores.map((valores, index) => (

                                <div key={index} className="w-[150px] p-3 flex justify-center items-center text-center rounded-full bg-[#fbede0] opacity-70 border-2 border-slate-600 md:w-[250px] xl:w-[350px] xl:border-4 transform transition-transform ease-linear duration-500 hover:scale-105 md:hover:scale-110 hover:border-dashed hover:border-[#4f82c2] cursor-default">
                                    <h2>{valores.title}</h2>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* Fin - Misión, Visión, Valores */}


        </div>
    );
}

export default About;