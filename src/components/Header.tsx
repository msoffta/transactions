
function Header() {
    return (
        <header className="w-full pt-4 pb-4 bg-[#F0F0F0]">
            <div className="w-3/4 m-auto flex justify-between items-center">
                <nav>
                    <ul className="flex items-center gap-4">
                        <li><a className="font-medium" href="#">Главная</a></li>
                        <li><a className="font-medium" href="#">Мои кошельки</a></li>
                        <li><a className="font-medium " href="#">Мои транзакции</a></li>
                    </ul>
                </nav>

                <nav>
                    <ul className="flex items-center gap-4">
                        <li>alexadams@google.com</li>
                        <li>
                            <button className="material-symbols-outlined text-[#FF0000] flex items-center">
                                logout
                            </button>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}


export default Header