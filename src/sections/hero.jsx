function Hero() {
  return (
    <section id="hero" className="w-full pb-5 pt-5 bg-[#f2e9e163] md:pb-10 md:pt-10 lg:pb-10 lg:pt-10">
      <div className="campos-hero mx-auto flex max-w-[1300px] flex-col items-start  gap-8 px-6 py-5 
       md:flex-row 
       lg:flex-row lg:items-end lg:justify-between">
        <div className="campo-hero-esquerdo flex w-full min-w-0 max-w-md flex-col items-start gap-3">
          <p className="saudacao text-[16px] font-medium text-[#595959]
          md:text-[17px]
          lg:text-[18px]">
            Olá, eu sou
          </p> 

          <img
            src="/Nome-ajustado.svg"
            alt="Nome"
            className="h-auto w-[190px] max-w-full
            md:w-[220px]
            lg:w-[220px]"
          />

          <div className="profissao font-heading text-[18px] font-extrabold text-[#1c140def] tracking-wider">
            Engenheiro de Software
          </div>

          <p className="descricao w-[90%] wrap-break-word font-heading text-[13px] font-medium text-[#595959]
           md:text-[14px]
           lg:text-[14px]">
            Transformo ideias em experiências digitais com foco em Engenharia de
            Software, código limpo e boas práticas de desenvolvimento.
          </p>
          <div className="botoes-hero flex w-full items-center text-center justify-between mt-3 md:justify-start md:gap-5 lg:justify-start lg:gap-5">
            <button className="botao-ver-projetos bg-[#CBE86B] p-2.25 px-5 text-[13px] font-semibold font-heading text-[#1c140dcc] transition-colors hover:bg-[#bdd95f] rounded-xl border-2 border-[#CBE86B] gap-3 flex items-center
            md:text-[14px] lg:p-2.25 lg:px-5
            lg:text-[14px] lg:p-2.25 lg:px-5">
              Ver meus projetos <i className="fa-solid fa-arrow-right-long"></i>
            </button>

            <button className="botao-entrar-contato hidden  border-2 border-[#1c140dcc] rounded-xl p-2.25 px-5 font-semibold font-heading text-[14px] text-[#1c140dcc] hover:border-[#b4cf5a]
             md:flex
             lg:flex">
              Entrar em contato
            </button>
          </div>

          <div className="social-links flex w-full items-center gap-5 mt-2 text-[17px] text-[#1c140def]
           md:text-[19px]
           lg:text-[19px]">

            <a href="https://github.com/seuusuario" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>

            <a href="https://linkedin.com/in/seuusuario" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin "></i>
            </a>

            <a href="mailto:seuemail@gmail.com?subject=Contato%20pelo%20portf%C3%B3lio">
              <i className="fa-solid fa-envelope"></i>
            </a>

            <a href="https://instagram.com/seuusuario" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="campo-hero-direito flex w-full min-w-0 max-w-[550px] justify-center items-center
         md:items-end md:justify-end
         lg:items-end lg:justify-end">
          <img
            src="/Personagem-hero.png"
            alt="Hero"
            className="block h-auto w-[550px] max-w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
