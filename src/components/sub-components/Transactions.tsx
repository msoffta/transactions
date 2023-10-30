interface Transaction {
    id: number
    sentFromWallet: string
    category: string
    amount: number
    date: string
}

function Transactions() {

    const transactions: Transaction[] = [
        {
            id: 1,
            sentFromWallet: "Visa",
            category: "Food",
            amount: 100,
            date: new Date().toLocaleString()
        },
        {
            id: 2,
            sentFromWallet: "Mastercard",
            category: "Food",
            amount: 100,
            date: new Date().toLocaleString()
        },
        {
            id: 3,
            sentFromWallet: "Humo",
            category: "Game",
            amount: 100,
            date: new Date().toLocaleString()
        },
        {
            id: 4,
            sentFromWallet: "Uzcard",
            category: "Car Rent",
            amount: 100554,
            date: new Date().toLocaleString()
        }
    ]

    const transactionsList = transactions.map((transaction) => {
        return (
            <tr key={transaction.id} className="grid grid-cols-5 justify-between auto-rows-[51px] border-b border-[#B9C0D1] items-center">
                <td className="text-lg font-medium">{transaction.id}</td>
                <td className="text-lg font-medium">{transaction.sentFromWallet}</td>
                <td className="text-lg font-medium">{transaction.category}</td>
                <td className="text-lg font-medium">{transaction.amount}</td>
                <td className="text-lg font-medium">{transaction.date}</td>
            </tr>
        )
    })

    return (
        <div className="mt-20 font-medium text-2xl ">
            <h3>Transactions</h3>

            <table className="w-full mt-8">
                <thead>
                    <tr className="grid grid-cols-5 justify-between mb-5">
                        <th className="font-semibold text-sm text-left text-[#B9C0D1]">ID</th>
                        <th className="font-semibold text-sm text-left text-[#B9C0D1]">Отправлено с кошелька</th>
                        <th className="font-semibold text-sm text-left text-[#B9C0D1]">Категория</th>
                        <th className="font-semibold text-sm text-left text-[#B9C0D1]">Сумма транзакции</th>
                        <th className="font-semibold text-sm text-left text-[#B9C0D1]">Когда</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        transactionsList
                    }
                </tbody>
            </table>

            <a className="text-lg font-medium text-[#0047FF]" href="#">
                Смотреть все оплаты 
            </a>
        </div>
    )
}
export default Transactions