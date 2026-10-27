function Footer(){
    return (
        <footer id="footer" className="w-full pt-10 bg-[#1c140d] rounded-tl-2xl rounded-tr-2xl">
            <div className="mx-auto flex flex-col max-w-[1300px] gap-8 px-6 py-5 pb-15
             md:justify-between md:flex-row md:flex-nowrap md:gap-4 md:pb-5
             lg:justify-between lg:flex-row lg:gap-8 lg:pb-5">

                {/* Imagem */}
                <div className="flex w-full min-w-0 max-w-[350px] md:max-w-[250px] md:shrink-0 lg:max-w-[350px]">
                    <img src="/personagem-footer.png" alt="" className="block h-auto w-[350px] max-w-full"/>
                </div>

                {/* Contato */}
                <div className="flex min-w-0 max-w-md flex-col items-start gap-2 md:max-w-[220px] lg:max-w-md">
                    <h2 className="text-[15px] text-[#CBE86B] font-medium md:text-[13px] lg:text-[15px]">Contato</h2>
                    <h1 className="font-heading text-[22px] font-extrabold tracking-tight text-[#f8f6f6] md:text-[20px] lg:text-[22px]">Vamos conversar?</h1>
                    <p className="w-[90%] wrap-break-word font-heading text-[13px] font-medium text-[#e2dede] mb-5 md:w-full md:text-[11px] lg:w-[90%] lg:text-[13px]">Se voce tem um projeto em mente, uma oportunidade ou só quer trocar uma ideia, fique a vontade para me chamar!</p>
                    <button className="Saiba-sobre-mim bg-[#CBE86B] p-2.25 px-5 font-semibold font-heading text-[14px] text-[#1c140dcc] transition-colors hover:bg-[#bdd95f] rounded-xl border-2 border-[#CBE86B] gap-3 flex items-center md:px-4 md:text-[12px] lg:px-5 lg:text-[14px]">
                        Enviar mensagem
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </button>
                </div>

                {/* Links */}
                <div className="flex flex-col min-w-0 max-w-md gap-5 md:gap-4 lg:gap-5">
                    <div className="flex items-center gap-5 md:gap-3 lg:gap-5">
                        <div className="icone text-[20px] md:text-[18px] lg:text-[20px]">
                            <i className="fa-solid fa-envelope text-[#CBE86B]"></i>
                        </div>
                        <div className="Formacao">
                            <div className="titulo text-[14px] font-semibold font-heading text-[#e2dede] md:text-[12px] lg:text-[14px]">Email</div>
                            <div className="descricao font-heading text-[13px] font-medium text-[#9e9d9d] md:text-[11px] lg:text-[13px]">diogoazz07@gmail.com</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 md:gap-3 lg:gap-5">
                        <div className="icone text-[20px] md:text-[18px] lg:text-[20px]">
                            <i className="fa-brands fa-linkedin text-[#CBE86B]"></i>
                        </div>
                        <div className="Formacao">
                            <div className="titulo text-[14px] font-semibold font-heading text-[#e2dede] md:text-[12px] lg:text-[14px]">LinkedIn</div>
                            <div className="descricao font-heading text-[13px] font-medium text-[#9e9d9d] md:text-[11px] lg:text-[13px]">linkedin.com/in/diogo-azevedo</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 md:gap-3 lg:gap-5">
                        <div className="icone text-[20px] md:text-[18px] lg:text-[20px]">
                            <i className="fa-brands fa-github text-[#CBE86B]"></i>
                        </div>
                        <div className="Formacao">
                            <div className="titulo text-[14px] font-semibold font-heading text-[#e2dede] md:text-[12px] lg:text-[14px]">GitHub</div>
                            <div className="descricao font-heading text-[13px] font-medium text-[#9e9d9d] md:text-[11px] lg:text-[13px]">https://github.com/diogoazv</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="items-center flex flex-col px-5 -mt-6">
                <div className="h-0.5 w-full bg-[#423939] max-w-[1300px]"></div>
                <div className="h-15 w-full max-w-[1300px] flex items-center justify-between gap-5
                 md:gap-0">
                    <div className="flex items-center text-center gap-5">
                        <a href="#inicio" className="text-[22px] font-extrabold font-heading tracking-tight text-[#f0f0f0ef]
                         md:text-[25px]">
                            D<span>.</span>
                        </a>
                        <div className="font-heading text-[11px] font-medium text-[#9e9d9d]
                         md:text-[13px]">Desenvolvido por Diogo Azevedo</div>
                    </div>
                    <p className="font-heading text-[11px] font-medium text-[#9e9d9d]
                     md:text-[13px]">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;