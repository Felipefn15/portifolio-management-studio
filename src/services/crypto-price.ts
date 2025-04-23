/**
 * Represents cryptocurrency information, including current price.
 */
export interface Crypto {
  /**
   * The symbol of the cryptocurrency (e.g., BTC).
   */
  symbol: string;
  /**
   * The current price of the cryptocurrency.
   */
  currentPrice: number;
}

/**
 * Asynchronously retrieves the current price for a given cryptocurrency symbol.
 *
 * @param symbol The symbol of the cryptocurrency.
 * @returns A promise that resolves to a Crypto object containing the current price.
 */
export async function getCryptoPrice(symbol: string): Promise<Crypto> {
  // TODO: Implement this by calling an API.

  return {
    symbol: symbol,
    currentPrice: 45000.00,
  };
}
