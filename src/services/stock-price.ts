/**
 * Represents stock information, including current price.
 */
export interface Stock {
  /**
   * The ticker symbol of the stock (e.g., AAPL).
   */
  symbol: string;
  /**
   * The current price of the stock.
   */
  currentPrice: number;
}

/**
 * Asynchronously retrieves the current price for a given stock symbol.
 *
 * @param symbol The ticker symbol of the stock.
 * @returns A promise that resolves to a Stock object containing the current price.
 */
export async function getStockPrice(symbol: string): Promise<Stock> {
  // TODO: Implement this by calling an API.

  return {
    symbol: symbol,
    currentPrice: 150.25,
  };
}
