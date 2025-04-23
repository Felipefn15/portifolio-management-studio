"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function WalletDetailsPage() {
  const { id } = useParams();
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    // Mock data for demonstration purposes
    const mockWallets = [
      { id: "1", name: "Main Wallet", balance: 10000, spent: 2000, profitLoss: 500 },
      { id: "2", name: "Savings", balance: 50000, spent: 1000, profitLoss: 1000 },
    ];

    const foundWallet = mockWallets.find((w) => w.id === id);
    setWallet(foundWallet);
  }, [id]);

  if (!wallet) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-4">
      <h1 className="text-4xl font-bold mb-4">Wallet Details</h1>
      <Card className="w-80">
        <CardHeader>
          <CardTitle>{wallet.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Balance: ${wallet.balance}</p>
          <p>Spent: ${wallet.spent}</p>
          <p>Profit/Loss: ${wallet.profitLoss}</p>
          <Button>Edit Wallet</Button>
        </CardContent>
      </Card>
    </div>
  );
}
