const base = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const habilidades = [
    { nome: "HTML", icone: "html5", nivel: 65 },
    { nome: "CSS", icone: "css3", nivel: 50 },
    { nome: "Git", icone: "git", nivel: 45 },
    { nome: "GitHub", icone: "github", nivel: 40 },
    { nome: "Python", icone: "python", nivel: 40 },
    { nome: "Flask", icone: "flask", nivel: 30 },
    { nome: "PostgreSQL", icone: "postgresql", nivel: 25 },
    { nome: "React", icone: "react", nivel: 20 },
    { nome: "Tailwind", icone:"tailwindcss", nivel: 20},
    { nome: "JavaScript", icone: "javascript", nivel: 15 },
    { nome: "SQLite", icone: "sqlite", nivel: 5 },

];


function urlIcone(icone) {
    return `${base}/${icone}/${icone}-original.svg`;
}

function CardHabilidade({ nome, icone }) {
    return (
        <div className="Card-habilidade flex flex-col items-center justify-center gap-1">
            <div className="icone-habilidade flex h-14 w-14 items-center justify-center rounded-[13px] bg-white shadow-lg
             md:h-16 md:w-16">
                <img src={urlIcone(icone)} alt="" className="w-10" />
            </div>
            <div className="descricao-habilidade">
                <div className="titulo-habilidade font-heading text-[12px] font-semibold text-[#1c140dcc] md:text-[13px]">{nome}</div>
            </div>
        </div>
    );
}

function CardNivelHabilidade({ nome, icone, nivel}){
    return(
        <div className="Card-nivel-habilidade flex gap-3 mt-3">
            <div className="flex h-10 w-10 items-center">
                <img src={urlIcone(icone)} alt="" className="w-9 md:w-10" />
            </div>

            <div className="descricao-nivel flex-1 flex flex-col gap-1">
                <div className="flex w-full justify-between">
                    <div className="nome-habilidade text-[13px] font-medium text-[#595959] md:text-[14px]">{nome}</div>
                    {/*<div className="porcentagem font-heading text-[12px] font-semibold text-[#1c140dcc] md:text-[13px]"></div>*/}
                </div>
                <div className="barra-porcetagem bg-[#ebdbcd] h-2 w-full rounded-3xl md:h-3">
                    <div className="barra-porcetagem-ativa bg-[#CBE86B] h-2 rounded-3xl md:h-3" style={{ width: `${nivel}%`}}></div>
                </div>
            </div>
        </div>
    )
}

function Habilidades() {
    return (
        <section id="habilidades" className="w-full pb-10 pt-5 md:pt-10">
            <div className="mx-auto flex flex-col max-w-[1300px] gap-15 px-6 py-5
             md:flex-row md:justify-between md:items-stretch md:gap-30">
                <div className="cabecalho-habilidades flex w-full flex-col">
                    <div>
                        <h2 className="text-[13px] font-medium text-[#595959] md:text-[14px]">Minhas Habilidades</h2>
                        <h1 className="mb-3 font-heading text-[19px] font-extrabold tracking-tight md:text-[21px]">
                            Tecnologias que eu uso
                        </h1>
                    </div>

                    <div className="Cards-habilidades mt-4 flex w-full flex-wrap justify-start gap-3">
                        {habilidades.map((habilidade) => (
                            <CardHabilidade key={habilidade.nome} {...habilidade} />
                        ))}
                    </div>
                </div>

                <div className="w-full">
                    <h2 className="mb-3 font-heading text-[17px] font-extrabold tracking-tight md:text-[18px]">Nível de familiaridade</h2>
                        <div className="container-nivel ">
                            {habilidades.map((nivel) => (
                                <CardNivelHabilidade key={nivel.nome} {...nivel} />
                            ))}
                        </div>
                </div>
            </div>
        </section>
    );
}

export default Habilidades;