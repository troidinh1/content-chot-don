import AppSidebar from "@/components/app/AppSidebar";
import AppTopbar from "@/components/app/AppTopbar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#F7FAF4] text-[#07111F]">
      <div className="flex min-h-screen">
        <AppSidebar />

        <div className="min-w-0 flex-1">
          <AppTopbar />

          <main className="min-h-[calc(100vh-88px)] px-5 pb-8 pt-4 sm:px-6 lg:px-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}