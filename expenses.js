let expensesExamples = [
  {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpences: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpences: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

function calculateExpensesOver1000(yearlyExpences) {
  let result = 0;
  let usedNumbers = []; //чтобы увидеть, какие данные мы использовали для расчёта
  let unusedNumbers = []; //чтобы увидеть, какие данные мы отбросили для расчёта
  yearlyExpences.forEach((element) => {
    if (element > 1000) {
      result += element;
      usedNumbers.push(element);
    } else {
      unusedNumbers.push(element);
    }
  });
  console.log("Использованы для расчёта: " + usedNumbers);
  console.log("Не использовали для расчёта: " + unusedNumbers);
  return result;
}

function testSampleExpences() {
  let ind = 0;
  expensesExamples.forEach((expense) => {
    ind += 1;
    let totalExpenses = calculateExpensesOver1000(expense.yearlyExpences);
    console.log(
      "Сумма расходов выше 1000 для " +
        ind +
        "го массива: " +
        totalExpenses +
        "\n"
    );
  });
}

testSampleExpences();
