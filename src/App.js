import ExpenseItem from "./Component/ExpenseItems";

function App() {
  // let expenseDate = new Date(2022, 7, 2);
  // let expenseTitle = "Car Insurance";
  // let expenseAmount = 295.35;

  const expenses = [
    {
      id: 0,
      date: new Date(2022, 7, 2),
      title:"Car Insurance",
      amount: 295.35,
    },
    {
      id: 1,
      date: new Date(2018, 8, 17),
      title:"Tiolet Paper",
      amount: 95.67,
    },
    {
      id: 2,
      date: new Date(2020, 11, 29),
      title:"New Desk",
      amount: 795.67,
    },
    {
      id: 3,
      date: new Date(2022, 7, 2),
      title:"Jaguar",
      amount: 1100.96,
    },
  ];

  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}
      />

      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        amount={expenses[1].amount}
      />

      <ExpenseItem
       title={expenses[2].title}
       date={expenses[2].date}
       amount={expenses[2].amount}
      />

      <ExpenseItem
        title={expenses[3].title}
        date={expenses[3].date}
        amount={expenses[3].amount}
      />
    </div>
  );
}

export default App;
