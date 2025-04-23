"use client";

import { Button } from "@/components/ui/button";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function TopNav() {
  const router = useRouter();

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="bg-secondary p-4 flex justify-between items-center">
      <Button variant="link" onClick={() => router.push("/")}>
        WalletWise Portfolio
      </Button>
      <Button variant="outline" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}
