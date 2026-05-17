"use client";

import { useSyncExternalStore, useMemo } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

// This is a "cheat" to check if we are in the browser without triggering a re-render loop
const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // This hook tells us if we are on the client (browser) or server
  // It returns "client" only after hydration is complete
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => "client",
    () => "server",
  );

  // If we are still on the server, show the empty placeholder
  if (isClient === "server") {
    return <div className="p-2 h-9 w-9" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
    </button>
  );
}
