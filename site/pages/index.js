import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="w-full min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-center">
          {" "}
          Welcome to <br />
          <span className="text-indigo-600 font-semibold">Linkinbio</span>
        </h1>
        <Link
          title="Notice the page loader"
          className="bg-indigo-600 rounded-sm inline-block my-2 p-1 px-2 text-white"
          href="/apply"
        >
          Register
        </Link>
      </main>
    </>
  );
}
