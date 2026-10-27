function SobreMim() {
  return (
    <section id="sobre" className="w-full flexpb-5 pt-5 
     md:pb-20 md:pt-20">
      <div className="campos-sobre-mim w-full mx-auto flex flex-col lg:max-w-[1300px] items-stretch gap-8 px-6 py-5
        md:flex md:justify-between md:flex-row">
        {/* Lado esquerdo */}
        <div className="campo-sobre-mim-esquerdo flex w-full min-w-0 max-w-md flex-col items-start">
          <h2 className="Sobre-mim text-[15px] font-medium text-[#595959]">
            Sobre mim
          </h2>

          <h1 className="QuemSou mb-3 font-heading text-[28px] font-extrabold tracking-tight">
            Quem sou eu?
          </h1>

          <p className="Descricao-quem-sou mb-5 w-[100%] wrap-break-word font-heading text-[13px] font-medium text-[#595959]
          md:w-[95%] md:text-[14px]
          lg:w-[110%]">
            Minha jornada na tecnologia começou com o interesse por programação e cibersegurança. No último ano do ensino médio, um professor me ensinou os primeiros conceitos e me acompanhou nos meus projetos iniciais com HTML, CSS e JavaScript.
            Com o início da faculdade de Engenharia de Software, passei a explorar novas tecnologias e desenvolver aplicações mais completas, ampliando meus conhecimentos no desenvolvimento web.
            Hoje, sigo aprendendo na prática e buscando evoluir a cada novo projeto.
          </p>

            <button className="botao-saiba-mais bg-[#CBE86B] p-2.25 px-5 text-[13px] font-semibold font-heading text-[#1c140dcc] transition-colors hover:bg-[#bdd95f] rounded-xl border-2 border-[#CBE86B] gap-3 flex items-center
            md:text-[14px] md:p-2.25 md:px-5">
              Saiba mais sobre mim <i className="fa-solid fa-arrow-right-long"></i>
            </button>
        </div>

        {/* Lado direito: cards */}
        <div className="campo-sobre-mim-direito flex w-full min-w-0 max-w-md flex-col justify-center gap-5 px-[10px]
         md:px-[30px]">

          <div className="flex -translate-x-[10px] items-center gap-4 rounded-xl bg-[#CBE86B] p-4 shadow-lg
           md:gap-7 md:p-4: md:-translate-x-[30px]">
            <div className="icone text-[18px] md:text-[20px] lg:text-[20]">
              <i className="fa-solid fa-graduation-cap text-[#475e1b]"></i>
            </div>

            <div>
              <div className="titulo font-heading text-[14px] font-semibold text-[#1c140def]">
                Formação
              </div>
              <div className="descricao font-heading text-[13px] font-medium text-[#595959] md:text-[14px]">
                Graduando em Engenharia de Software
              </div>
            </div>
          </div>

          
          <div className="flex translate-x-[10px] items-center gap-4 rounded-xl bg-[#CBE86B] p-4 shadow-lg
           md:gap-7 md:p-4: md:translate-x-[30px]">
            <div className="icone text-[18px] md:text-[20px] lg:text-[20]">
              <i className="fa-solid fa-code text-[#475e1b]"></i>
            </div>

            <div>
              <div className="titulo font-heading text-[14px] font-semibold text-[#1c140def]">
                Foco atual
              </div>
              <div className="descricao font-heading text-[13px] font-medium text-[#595959] md:text-[14px]">
                Desenvolvimento Web e Backend
              </div>
            </div>
          </div>

          
          <div className="flex -translate-x-[10px] items-center gap-4 rounded-xl bg-[#CBE86B] p-4 shadow-lg
           md:gap-7 md:p-4: md:-translate-x-[30px]">
            <div className="icone text-[18px] md:text-[20px] lg:text-[20]">
              <i className="fa-solid fa-rocket text-[#475e1b]"></i>
            </div>

            <div>
              <div className="titulo font-heading text-[14px] font-semibold text-[#1c140def]">
                Aprendizado contínuo
              </div>
              <div className="descricao font-heading text-[13px] font-medium text-[#595959] md:text-[14px]">
                Criando projetos para evoluir na prática
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMim;