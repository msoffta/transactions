interface Wallet {
    card: string,
    currency: string
}

function Wallets() {

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    console.log(getRandomColor());


    const wallets: Wallet[] = [
        {
            card: "Visa",
            currency: "USD"
        },

        {
            card: "Mastercard",
            currency: "EUR"
        },

        {
            card: "Humo",
            currency: "UZS"
        },
        {
            card: "Uzcard",
            currency: "UZS"
        }
    ]

    const walletsList = wallets.map((wallet, index) => {
        const style = {
            "--tw-gradient-from": getRandomColor(),
            "--tw-gradient-to": getRandomColor(),
            "--tw-gradient-stops": "var(--tw-gradient-from), var(--tw-gradient-to)"
        } as React.CSSProperties
        return (
            <div key={index} style={style} className="flex flex-col items-left justify-between p-5 w-[282px] h-[160px] rounded-2xl bg-gradient-to-r">
                <p className="text-white">{wallet.card}</p>
                <p className="text-white">{wallet.currency}</p>
            </div>
        )
    })

    return (
        <div className="mt-20">
            <h3 className="font-medium text-2xl">Мои кошельки</h3>

            <div className="w-full mt-5 flex justify-between items-center">
                {walletsList}
            </div>

            <a className="text-[#0047FF] flex mt-5" href="#">
                Смотреть все кошельки
            </a>
        </div>
    )
}

export default Wallets