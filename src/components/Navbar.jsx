
function Navbar() {
    return (
        <header className="w-full bg-[#f2e9e163]">
            <nav className="mx-auto flex max-w-[1300px] items-center justify-between px-6 py-5">
                <a href="#inicio" className="text-[27px] font-extrabold font-heading tracking-tight text-[#1c140def]">
                    D<span>.</span>
                </a>

                <div className="hidden items-center gap-9 lg:flex">
                    <a href="#inicio" className="font-heading text-[13px] font-semibold text-[#595959] transition-colors hover:text-[#1C140D]">Início</a>
                    <a href="#projetos" className="font-heading text-[13px] font-semibold text-[#595959] transition-colors hover:text-[#1C140D]">Projetos</a>
                    <a href="#habilidades" className="font-heading text-[13px] font-semibold text-[#595959] transition-colors hover:text-[#1C140D]">Habilidades</a>
                    <a href="#contato" className="font-heading text-[13px] font-semibold text-[#595959] transition-colors hover:text-[#1C140D]">Contato</a>
                    <a href="#sobre" className="font-heading text-[13px] font-semibold text-[#595959] transition-colors hover:text-[#1C140D]">Sobre</a>
                </div>

                <a href="#contato" className="font-heading rounded-xl bg-[#CBE86B] px-5 py-2.5 text-sm font-semibold text-[#1c140dcc] transition-colors hover:bg-[#bdd95f]">
                    Fale comigo
                </a>
            </nav>
        </header>
    );
}

export default Navbar;
