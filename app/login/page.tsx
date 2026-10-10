"use clients";

import {useState} from "react";
import {useRouter} from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

const handleLogin = (e; React.FormEvent) => (
  e.preventDefault();
  setError("");
  return:

if (!email || !password) {
  setError("Please enter both email and password.");
  return;
}

setLoading("true");
setTimeout(() => {
  router.push('/dashboard');
}, 600);
};

return )(
  <div className="min-h-screen flex bg-slate-950">
  </div>
  <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-950">
        {/* Glow blobs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />

        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 flex flex-col justify-center px-16 w-full">
          <h1 className="text-5xl font-bold text-white tracking-tight leading-tight">
            Build worlds.
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Instantly consistent.
            </span>
          </h1>
          <p className="text-slate-400 mt-5 text-lg max-w-md">
            Describe your game concept. GameCraftAI generates a full,
            style-matched asset set — characters, environments, items, and
            icons — in seconds.
          </p>

          {/* Mock asset preview grid */}
          <div className="grid grid-cols-4 gap-3 mt-10 max-w-md">
            {[
              { emoji: "🧙", label: "Character" },
              { emoji: "🌲", label: "Environment" },
              { emoji: "⚔️", label: "Weapon" },
              { emoji: "🧪", label: "Potion" },
              { emoji: "🛡️", label: "Shield" },
              { emoji: "🏰", label: "Castle" },
              { emoji: "🔮", label: "Orb" },
              { emoji: "🗝️", label: "Key" },
            ].map((item, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center text-2xl hover:bg-white/10 hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
                title={item.label}
              >
                {item.emoji}
              </div>
            ))}
          </div>

          <p className="text-slate-500 text-sm mt-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Same style. Same world. Every time.
          </p>
        </div>
      </div>
<div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          {/* Mobile-only logo */}
          <div className="text-center mb-8 lg:hidden">
            <h1 className="text-3xl font-bold text-white">
              🎮 GameCraft<span className="text-purple-400">AI</span>
            </h1>
          </div>
     <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white">Welcome back</h2>
            <p className="text-slate-400 text-sm mt-1">
              Sign in to continue building your game world
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">
                Email
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-medium text-slate-300">
                  Password
                </label>
                <a href="#" className="text-xs text-purple-400 hover:text-purple-300">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M12 11c0-1.1.9-2 2-2s2 .9 2 2-2 4-2 4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <label className="flex items-center gap-2 text-sm text-slate-400 cursor-pointer select-none">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-slate-600 bg-slate-900 text-purple-600 focus:ring-purple-500 focus:ring-offset-0"
              />
              Remember me
            </label>

            {error && (
              <p className="text-red-400 text-sm bg-red-950/40 border border-red-900 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:opacity-60 text-white font-medium transition flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <button
            type="button"
            onClick={() => router.push("/dashboard")}
            className="w-full mt-3 py-2.5 rounded-lg border border-slate-700 hover:bg-slate-900 text-slate-300 text-sm font-medium transition"
          >
            Skip login — try the demo →
          </button>

          <p className="text-center text-slate-500 text-sm mt-8">
            Don't have an account?{" "}
            <a href="/signup" className="text-purple-400 hover:text-purple-300 font-medium">
              Sign up free
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
