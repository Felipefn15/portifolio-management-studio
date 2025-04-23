"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to WalletWise Portfolio</h1>
      <p className="text-lg mb-8">Manage your wallets and assets effectively.</p>
      <Button onClick={() => router.push("/login")}>Login to get started</Button>
    </div>
  );
}
