const base = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const habilidades = [
    { nome: "HTML", icone: "html5", nivel:100 },
    { nome: "CSS", icone: "css3", nivel:60 },
    { nome: "Python", icone: "python", nivel:85 },
    { nome: "Flask", icone: "flask", nivel:65 },
    { nome: "JavaScript", icone: "javascript", nivel:30 },
    { nome: "PostgreSQL", icone: "postgresql", nivel:10 },
    { nome: "SQLite", icone: "sqlite", nivel:5 },
    { nome: "React", icone: "react", nivel:40 },
];


function urlIcone(icone) {
    return `${base}/${icone}/${icone}-original.svg`;
}

function CardHabilidade({ nome, icone }) {
    return (
        <div className="Card-habilidade flex flex-col items-center justify-center gap-1">
            <div className="icone-habilidade flex h-16 w-16 items-center justify-center rounded-[13px] bg-white shadow-lg">
                <img src={urlIcone(icone)} alt="" className="h-10 w-10" />
            </div>
            <div className="descricao-habilidade">
                <div className="titulo-habilidade font-heading text-[13px] font-semibold text-[#1c140dcc]">{nome}</div>
            </div>
        </div>
    );
}

function CardNivelHabilidade({ nome, icone, nivel}){
    return(
        <div className="Card-nivel-habilidade flex gap-3 mt-3">
            <div className="flex h-10 w-10 items-center">
                <img src={urlIcone(icone)} alt="" className="h-10 w-10" />
            </div>

            <div className="descricao-nivel flex-1 flex flex-col gap-1">
                <div className="flex w-full justify-between">
                    <div className="nome-habilidade text-[14px] font-medium text-[#595959]">{nome}</div>
                    <div className="porcentagem font-heading text-[13px] font-semibold text-[#1c140dcc]">{nivel}%</div>
                </div>
                <div className="barra-porcetagem bg-[#ebdbcd] h-3 w-full rounded-3xl">
                    <div className="barra-porcetagem-ativa bg-[#CBE86B] h-3 rounded-3xl" style={{ width: `${nivel}%`}}></div>
                </div>
            </div>
        </div>
    )
}

function Habilidades() {
    return (
        <section id="habilidades" className="w-full pb-10 pt-10">
            <div className="mx-auto flex max-w-[1300px] items-stretch justify-between gap-30 px-6 py-5">
                <div className="cabecalho-habilidades flex w-full flex-col">
                    <div>
                        <h2 className="text-[14px] font-medium text-[#595959]">Minhas Habilidades</h2>
                        <h1 className="mb-3 font-heading text-[21px] font-extrabold tracking-tight">
                            Tecnologias que eu uso
                        </h1>
                    </div>

                    <div className="Cards-habilidades mt-4 flex w-full flex-wrap gap-5">
                        {habilidades.map((habilidade) => (
                            <CardHabilidade key={habilidade.nome} {...habilidade} />
                        ))}
                    </div>
                </div>

                <div className="w-full">
                    <h2 className="mb-3 font-heading text-[18px] font-extrabold tracking-tight">Nível das habilidades</h2>
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