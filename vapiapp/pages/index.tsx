import Image from "next/image";
import { Inter } from "next/font/google";
import { Assistant } from "@/components/app/assistant";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-12 ${inter.className}`}
    >
      <div className="text-center">
        <h1 className="text-3xl">Welcome RingIQ Ai Call Attendant</h1>
        <p className="text-slate-600">
          Press call button to make a VoIP cal to a test RingIQ Ai-Call Attendant.
        </p>
        <p className="text-slate-600">
          The RingIQ Ai operator will know exam times, insurance information, and be available 24/7.
        </p>
        <p className="text-slate-600">
          You can book an appointment with this test location.
        </p>
      </div>
      <Assistant/>
    </main>
  );
}
