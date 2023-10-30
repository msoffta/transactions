import Transactions from "./sub-components/Transactions"
import Wallets from "./sub-components/Wallets"

function Main() {

    return (
        <main className="mt-11 mb-11">

            <div className="w-3/4 m-auto">
                <div className="flex flex-col items-start">
                    <h1 className="font-bold text-5xl mb-3">Добро пожаловать, Alex Adams!</h1>
                    <p className="text-lg font-bold text-[#0047FF]">alexadams@google.com</p>
                </div>

                <Wallets />
                <Transactions />
            </div>

        </main>
    )
}


export default Main