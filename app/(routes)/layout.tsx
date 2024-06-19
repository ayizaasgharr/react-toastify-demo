import { Suspense } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import { NextUIProvider } from "@nextui-org/react";
export default async function Layout({ children }: { children: React.ReactNode }) {

  return (
    <NextUIProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Sidebar />
          <main className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-64 rounded-xl border">
          <div className="w-full px-6 py-12 mx-auto bg-white">{children}</div>
              </main>
        </Suspense>
        </NextUIProvider>
  );
}
