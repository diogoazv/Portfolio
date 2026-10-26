function ProjetoCard({ imagem, titulo, descricao, tags, site, codigo }) {
    return (
        <div className="Card grid w-full grid-cols-[100px_1fr] gap-x-4 gap-y-3 rounded-2xl bg-[#f3f1eff5] p-4 shadow-lg
            md:flex md:h-[370px] md:w-[340px] md:flex-col md:gap-0 md:overflow-hidden md:p-0">
            {/* IMAGEM: esquerda no mobile, topo no desktop */}
            <div className="h-[90px] w-full overflow-hidden rounded-xl
             md:h-[150px] md:shrink-0 md:rounded-none">
                <img
                    src={imagem}
                    alt={titulo}
                    className="h-full w-full object-cover"
                />
            </div>

            {/* "contents" no mobile: os filhos viram itens do grid. No desktop vira o bloco com padding */}
            <div className="contents md:flex md:min-h-0 md:flex-1 md:flex-col md:p-5">
                
                <div className="min-w-0">
                    <h3 className="Titulo font-heading text-[16px] font-extrabold tracking-tight text-[#1c140def] md:text-[18px]">
                        {titulo}
                    </h3>

                    <p className="Descricao mt-2 font-heading text-[13px] font-medium leading-relaxed text-[#595959]">
                        {descricao}
                    </p>
                </div>

                {/* TAGS: embaixo da imagem, largura total */}
                <div className="tags col-span-2 flex flex-wrap gap-2 md:mt-3">
                    {tags.map((tag) => (
                        <span
                            key={tag} className="rounded-lg bg-[#ebdbcd] px-3 py-1 font-heading text-[12px] font-medium text-[#595959]"> {tag}
                        </span>
                    ))}
                </div>

                {/* LINKS: embaixo, largura total */}
                <div className="links col-span-2 flex flex-wrap items-center gap-x-6 gap-y-2 md:mt-auto md:pt-3">
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