"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-950 px-4">
      <div className="w-full max-w-md bg-slate-800/60 border border-slate-700 rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-2">
          GameCraft<span className="text-purple-400">AI</span>
        </h1>
        <p className="text-slate-400 mb-6">Create your free account</p>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button className="w-full py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 font-medium">
            Sign up
          </button>
        </form>
        <p className="text-sm text-slate-400 mt-6 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-purple-400">Sign in</a>
        </p>
      </div>
    </div>
  );
}
