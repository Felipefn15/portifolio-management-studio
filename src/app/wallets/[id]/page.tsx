"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function WalletDetailsPage() {
  const { id } = useParams();
  const [wallet, setWallet] = useState<{ id: string; name: string; balance: number; spent: number; profitLoss: number } | null>(null);
  const [open, setOpen] = useState(false);
  const [editName, setEditName] = useState("");
  const [editBalance, setEditBalance] = useState("");

  useEffect(() => {
    // Mock data for demonstration purposes
    const mockWallets = [
      { id: "1", name: "Main Wallet", balance: 10000, spent: 2000, profitLoss: 500 },
      { id: "2", name: "Savings", balance: 50000, spent: 1000, profitLoss: 1000 },
    ];

    const foundWallet = mockWallets.find((w) => w.id === id);
    setWallet(foundWallet);
    if (foundWallet) {
      setEditName(foundWallet.name);
      setEditBalance(String(foundWallet.balance));
    }
  }, [id]);

  const handleEditWallet = () => {
    setOpen(true);
  };

  const handleSaveWallet = () => {
    if (wallet) {
      setWallet({ ...wallet, name: editName, balance: parseFloat(editBalance) });
      setOpen(false);
    }
  };

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
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button onClick={handleEditWallet}>Edit Wallet</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Edit Wallet</DialogTitle>
                <DialogDescription>
                  Make changes to your wallet details.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="balance" className="text-right">
                    Balance
                  </Label>
                  <Input
                    id="balance"
                    value={editBalance}
                    onChange={(e) => setEditBalance(e.target.value)}
                    className="col-span-3"
                  />
                </div>
              </div>
              <Button onClick={handleSaveWallet}>Save changes</Button>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
}
