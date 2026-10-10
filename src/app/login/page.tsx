"use client";
import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { api } from "@/lib/api-client";
import { useAuth } from "@/lib/auth-context";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/dashboard";
  const { refreshAuth } = useAuth();

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID && process.env.NODE_ENV === "production") {
      console.error(
        "[EduGuide AI Auth] NEXT_PUBLIC_GOOGLE_CLIENT_ID is undefined in production environment variables. Google OAuth may fail unless configured in Vercel."
      );
    }
  }, []);

  const handleGoogleSignIn = async () => {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    if (!clientId && process.env.NODE_ENV === "production") {
      console.error(
        "[EduGuide AI Auth] Missing NEXT_PUBLIC_GOOGLE_CLIENT_ID in production environment variables. Please add it to your Vercel Project Settings."
      );
    }
    try {
      await signIn("google", { callbackUrl: "/dashboard" });
    } catch (err) {
      console.error("[EduGuide AI Auth] Error triggering Google Sign-In:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const res = await api.post("/api/v1/auth/login", { email, password });
      if (res.ok) {
        await refreshAuth();
        router.push(next);
      } else {
        setError("Invalid email or password");
      }
    } catch {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-surface p-space-xl rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border border-border flex flex-col gap-space-lg">
      <div className="text-center flex flex-col gap-space-xs">
        <Link href="/" className="inline-flex justify-center mb-space-sm">
          <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold text-xl">E</div>
        </Link>
        <h1 className="font-headline-md text-headline-md text-on-surface">Sign in to EduGuide AI</h1>
        <p className="font-body-sm text-body-sm text-on-surface-variant">Welcome back! Please enter your details.</p>
      </div>
      
      {error && <div className="p-space-sm bg-error-container text-on-error-container rounded-lg font-body-sm text-center">{error}</div>}
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-space-md">
        <div className="flex flex-col gap-space-xs">
          <label className="font-label-md text-label-md text-on-surface">Email</label>
          <input 
            type="email" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-10 px-space-sm bg-surface-container-low rounded-lg border border-outline-variant font-body-md focus:outline-none focus:ring-2 focus:ring-primary-container transition-all"
            placeholder="Enter your email" 
          />
        </div>
        <div className="flex flex-col gap-space-xs">
          <label className="font-label-md text-label-md text-on-surface">Password</label>
          <input 
            type="password" 
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-10 px-space-sm bg-surface-container-low rounded-lg border border-outline-variant font-body-md focus:outline-none focus:ring-2 focus:ring-primary-container transition-all"
            placeholder="••••••••" 
          />
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          className="w-full h-10 mt-space-sm rounded-lg bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-hover transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        <div className="relative flex items-center justify-center my-1">
          <div className="border-t border-gray-300 w-full" />
          <span className="bg-surface px-3 text-xs text-on-surface-variant font-medium absolute">OR</span>
        </div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 py-2.5 px-4 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors shadow-sm text-sm font-medium text-gray-700"
        >
          <svg className="w-5 h-5" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
            <path fill="none" d="M0 0h48v48H0z" />
          </svg>
          <span>Continue with Google</span>
        </button>
      </form>
      
      <div className="text-center font-body-sm text-body-sm text-on-surface-variant">
        Don't have an account? <Link href="/register" className="text-primary font-label-md hover:underline">Create Account</Link>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-canvas px-space-md">
      <Suspense fallback={<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
