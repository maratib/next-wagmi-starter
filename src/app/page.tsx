import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="m-auto">
        <h1>Welcome to Next 14 with Shadcn</h1>
        <Button>Shadcn Button</Button>
      </div>
    </main>
  );
}
