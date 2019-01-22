export default rates => {
  // since getting currencies rates in RUB is not concluded into the free subscription, here is some workaround to get this done
  const { RUB } = rates;

  const ratesInRUB = Object.keys(rates).reduce((acc, val) => {
    acc[val] = (RUB / rates[val]).toFixed(2);

    return acc;
  }, {});

  delete ratesInRUB["RUB"];

  ratesInRUB["USD"] = RUB.toFixed(2);

  return ratesInRUB;
};
