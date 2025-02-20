import Link from "next/link";

export const metadata = {
  title: "App Router",
};

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      <Link href="/profile">Profile</Link>
    </div>
  );
}
