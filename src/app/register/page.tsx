"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api-client";
import { useAuth } from "@/lib/auth-context";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { refreshAuth } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const res = await api.post("/api/v1/auth/register", { name, email, password });
      if (res.ok) {
        // Log them in immediately
        const loginRes = await api.post("/api/v1/auth/login", { email, password });
        if (loginRes.ok) {
          await refreshAuth();
          router.push("/dashboard");
        } else {
          router.push("/login");
        }
      } else {
        const data = await res.json();
        setError(data.detail || "Failed to register. Please try again.");
      }
    } catch {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-canvas px-space-md py-space-xl">
      <div className="w-full max-w-md bg-surface p-space-xl rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border border-border flex flex-col gap-space-lg">
        <div className="text-center flex flex-col gap-space-xs">
          <Link href="/" className="inline-flex justify-center mb-space-sm">
            <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold text-xl">E</div>
          </Link>
          <h1 className="font-headline-md text-headline-md text-on-surface">Create an Account</h1>
          <p className="font-body-sm text-body-sm text-on-surface-variant">Start discovering your scholarships.</p>
        </div>
        
        {error && <div className="p-space-sm bg-error-container text-on-error-container rounded-lg font-body-sm text-center">{error}</div>}
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-space-md">
          <div className="flex flex-col gap-space-xs">
            <label className="font-label-md text-label-md text-on-surface">Full Name</label>
            <input 
              type="text" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-10 px-space-sm bg-surface-container-low rounded-lg border border-outline-variant font-body-md focus:outline-none focus:ring-2 focus:ring-primary-container transition-all"
              placeholder="Enter your name" 
            />
          </div>
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
              minLength={6}
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full h-10 mt-space-sm rounded-lg bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-hover transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Creating account..." : "Get Started Free"}
          </button>
        </form>
        
        <div className="text-center font-body-sm text-body-sm text-on-surface-variant">
          Already have an account? <Link href="/login" className="text-primary font-label-md hover:underline">Sign In</Link>
        </div>
      </div>
    </div>
  );
}
