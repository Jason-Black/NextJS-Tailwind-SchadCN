import { NextPage } from "next";
import Image from "next/image";
import TestButton from "@/components/ui/TestButton";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold hover:text-green-500 text-blue-600">Hello, Next.js with Tailwind CSS!</h1>
      <p className="text-gray-700 mt-4">Tailwind CSS is working if this text is styled!</p>

      {/* Test shadcn/ui Button */}
      <TestButton />

      {/* Next.js Image Optimization */}
      <div className="mt-8">
        <Image
          src="/vercel.svg"
          alt="Next.js Logo"
          width={200}
          height={100}
          priority
        />
        <p className="text-gray-500 mt-2">
          Next.js Image Optimization is working if you see the logo above!
        </p>
      </div>
    </div>
  );
};

export default Home;
