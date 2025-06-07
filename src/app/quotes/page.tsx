"use client";
import QuoteLayout from "@/components/QuoteLayout";
import Topbar from "@/components/TopBar";

export default function QuotePage() {
  return (
    <>
      <Topbar />
      <div className="w-full min-h-screen bg-gray-100 py-6 px-4 sm:py-10 sm:px-6">
        <div className="max-w-5xl mx-auto bg-slate-100 rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
          <QuoteLayout />
        </div>
      </div>
    </>
  );
}
