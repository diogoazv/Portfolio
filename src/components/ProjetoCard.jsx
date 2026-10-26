function ProjetoCard({ imagem, titulo, descricao, tags, site, codigo }) {
    return (
        <div className="Card flex h-[300px] w-full  rounded-2xl bg-[#f3f1eff5] shadow-lg
        md:flex-col md:overflow-hidden md:h-[370px] md:w-[340px]">
            <div className="h-[150px] w-full shrink-0 overflow-hidden rounded-t-2xl">
                <img src={imagem} alt={titulo} className="h-full w-full object-cover"/>
            </div>

            <div className="flex min-h-0 w-full flex-1 flex-col p-5">
                <h3 className="Titulo font-heading text-[18px] font-extrabold tracking-tight text-[#1c140def]">{titulo}</h3>

                <p className="Descricao mt-2 font-heading text-[13px] font-medium leading-relaxed text-[#595959]">{descricao}</p>

                <div className="tags mt-3 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span key={tag} className="rounded-lg bg-[#ebdbcd] px-3 py-1 font-heading text-[12px] font-medium text-[#595959]">{tag}</span>
                    ))}
                </div>

                <div className="links mt-auto flex items-center gap-6">
                    <a href={site} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-heading text-[13px] font-semibold text-[#1c140dcc] transition-colors hover:text-[#7e9a2c]">
                        <i className="fa-solid fa-arrow-up-right-from-square text-[#7e9a2c]"></i>
                        Ver projeto
                    </a>

                    <a href={codigo} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-heading text-[13px] font-semibold text-[#1c140dcc] transition-colors hover:text-[#7e9a2c]">
                        <i className="fa-solid fa-code text-[#7e9a2c]"></i>
                        Código
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjetoCard;