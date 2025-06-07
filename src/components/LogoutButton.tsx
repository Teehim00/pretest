"use client";
import { useClerk } from "@clerk/nextjs";

export default function LogoutButton() {
  const { signOut } = useClerk();

  return (
    <button
      className="btn btn-error"
      onClick={async () => {
        await signOut();
        window.location.href = "/login";
      }}
    >
      Logout
    </button>
  );
}
