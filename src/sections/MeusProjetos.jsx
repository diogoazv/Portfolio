import ProjetoCard from "../components/ProjetoCard";

const projetos = [
    {
        imagem: "/projeto-digital-memory.png",
        titulo: "Digital Memory",
        descricao: "Uma galeria digital para compartilhar fotos e memórias da minha cidade.",
        tags: ["Python", "Flask", "JavaScript", "HTML", "CSS", "PostGreSQL", "Entre Outras"],
        site: "#",
        codigo: "#",
    },
    {
        imagem: "/projeto-vagas.png",
        titulo: "Vagas Express",
        descricao: "Uma plataforma para divulgar e encontrar vagas de emprego na minha cidade.",
        tags: ["Python", "Flask", "JavaScript", "HTML", "CSS", "SQLite", "Entre Outras"],
        site: "#",
        codigo: "#",
    },
    {
        imagem: "/projeto-gerador-senha.png",
        titulo: "Gerador de senhas em Flask",
        descricao: "Projeto de Gerador de senha em Flask e Python",
        tags: ["Python", "Flask", "HTML", "CSS"],
        site: "#",
        codigo: "#",
    },

];

function MeusProjetos() {
  return (
    <section id="projetos" className="w-full bg-[#f2e9e163] pb-10 pt-10">
      <div className="mx-auto max-w-[1300px] px-6 py-5">
        <div className="cabecalho-projetos flex w-full items-center justify-between">
          <div>
            <h2 className="text-[13px] font-medium text-[#595959]">Projetos</h2>
            <h1 className="mb-3 font-heading text-[25px] font-extrabold tracking-tight">
              Meus Projetos
            </h1>
          </div>

          <button className="ver-todos flex items-center gap-3 font-heading text-[12px] font-semibold text-[#1c140dcc]">
            Ver todos os Projetos
            <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>

        <div className="Cards mt-10 flex w-full flex-wrap gap-7 justify-center">
            {projetos.map((projeto) => (
                <ProjetoCard key={projeto.titulo} {...projeto} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default MeusProjetos;