"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import Link from "next/link";

export default function WalletsPage() {
  const [wallets, setWallets] = useState([
    { id: "1", name: "Main Wallet", balance: 10000, spent: 2000, profitLoss: 500 },
    { id: "2", name: "Savings", balance: 50000, spent: 1000, profitLoss: 1000 },
  ]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-4">
      <h1 className="text-4xl font-bold mb-4">My Wallets</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {wallets.map((wallet) => (
          <Card key={wallet.id} className="w-80">
            <CardHeader>
              <CardTitle>{wallet.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Balance: ${wallet.balance}</p>
              <p>Spent: ${wallet.spent}</p>
              <p>Profit/Loss: ${wallet.profitLoss}</p>
              <Link href={`/wallets/${wallet.id}`}>
                <Button>View Details</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
