import Link from "next/link";

export default function Auth() {
  return (
    <div className="flex items-center gap-2 ml-auto">
      <Link
        className="px-4 py-2 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-transparent border border-white rounded shadow outline-none hover:shadow-lg focus:outline-none active:bg-blue-600"
        href="/login"
      >
        Sign In
      </Link>
      <Link
        className="px-4 py-2 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-transparent border border-white rounded shadow outline-none hover:shadow-lg focus:outline-none active:bg-blue-600"
        href="/register"
      >
        Sign Up
      </Link>
    </div>
  );
}