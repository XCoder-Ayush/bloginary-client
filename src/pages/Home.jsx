import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Home() {
  const location = useLocation();
  const email = location.state?.email;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <h1 className="text-3xl font-semibold">
        Welcome, {email}!
      </h1>
    </div>
  )
}
