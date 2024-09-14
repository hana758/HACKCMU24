//backup
import Link from "next/link";
import { LoadButtons } from "~/app/_components/modulebuttons";
import { api, HydrateClient } from "~/trpc/server";
import { NpcDialogue } from "~/app/_components/npc-dialogue";

export default function Home() {
  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen items-center justify-center bg-cover bg-center text-white" style={{ backgroundImage: 'url("/images/dark-city3.jpg")' }}>
        <div className="flex flex-col items-center justify-center gap-12 px-4 py-16 w-full">
          {/* NpcDialogue component */}
          <NpcDialogue />
          
          {/* Buttons should now be centered */}
          <LoadButtons />
        </div>
      </main>
    </HydrateClient>
  );
}