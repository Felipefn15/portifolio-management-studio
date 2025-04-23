"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getApp, initializeApp } from "firebase/app";
import { firebaseConfig } from "@/lib/firebase";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    try {
      getApp(); // Check if Firebase is already initialized
    } catch (e) {
      if (firebaseConfig.apiKey) {
        initializeApp(firebaseConfig); // Initialize only if not already initialized
      } else {
        console.error("Firebase API key is missing. Ensure NEXT_PUBLIC_FIREBASE_API_KEY is set in your environment variables.");
        return;
      }
    }

    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to WalletWise Portfolio</h1>
      <p className="text-lg mb-8">Manage your wallets and assets effectively.</p>
      <Button onClick={() => router.push("/login")}>Login to get started</Button>
    </div>
  );
}

