import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-w-screen max-w-screen min-h-screen ">
      <Sidebar />
      <div className="w-full flex flex-col ml-[328px]">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
