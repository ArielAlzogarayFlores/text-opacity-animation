import Paragraph from "@/components/paragraph";
import Word from "@/components/word";
import Character from "@/components/character";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 mb-[50vh]">
      <div className="h-[100vh] flex flex-col items-center justify-center gap-6">
        <h1 className="text-6xl font-semibold text-zinc-200">
          Text Opacity Animation
        </h1>
        <p className="text-2xl font-medium text-zinc-500">
          Text opacity animation on scroll made with Framer Motion.
        </p>
        <Link href="/demo" target="_blank">
          {" "}
          <button className="bg-zinc-200 text-zinc-900 rounded-md px-3 py-2 font-semibold mt-2">
            Github Repository ↗
          </button>
        </Link>
        <span className="text-xl font-medium text-zinc-700 mt-20">
          Scroll down ↓
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-[100vh]">
        <Paragraph paragraph="Young entrepreuner, software developer and UX/UI designer based in Buenos Aires, Argentina. Currently studying Digital Technology @Di Tella." />
        <Word paragraph="Young entrepreuner, software developer and UX/UI designer based in Buenos Aires, Argentina. Currently studying Digital Technology @Di Tella." />
        <Character paragraph="Young entrepreuner, software developer and UX/UI designer based in Buenos Aires, Argentina. Currently studying Digital Technology @Di Tella." />
      </div>
    </main>
  );
}
