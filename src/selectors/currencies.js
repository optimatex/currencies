export const getCurrenciesList = ({ currencies }) => currencies.list.data.items;

export const getCurrenciesListCount = ({ currencies }) =>
  currencies.list.data.count;

export const getIsLoadingList = ({ currencies }) => currencies.list.isLoading;

export const getIsFullCurrencies = ({ currencies }) =>
  currencies.list.isFullCurrencies;

export const getSymbols = ({ currencies }) => currencies.list.symbols;
