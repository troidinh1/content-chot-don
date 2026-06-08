import { Bell, ChevronDown, HelpCircle, Menu, Search } from "lucide-react";

export default function AppTopbar() {
  return (
    <header className="border-b border-slate-200 bg-[#FCFCFA] px-5 py-3.5 sm:px-6 lg:px-8">
      <div className="flex h-12 items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-4">
          <button className="flex size-10 items-center justify-center rounded-2xl border border-slate-200 bg-white lg:hidden">
            <Menu className="size-5 text-slate-700" />
          </button>

          <div className="hidden min-w-0 md:block">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
              <span>Content Chốt Đơn</span>
              <span>/</span>
              <span className="text-slate-600">Dashboard</span>
            </div>
          </div>
        </div>

        <div className="hidden min-w-0 max-w-xl flex-1 xl:block">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
            <input
              placeholder="Tìm ý tưởng, script, sản phẩm..."
              className="h-11 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400 transition focus:border-emerald-300 focus:ring-4 focus:ring-emerald-100"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden size-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 lg:flex">
            <HelpCircle className="size-4" />
          </button>

          <button className="flex size-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50">
            <Bell className="size-4" />
          </button>

          <button className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white py-1.5 pl-1.5 pr-3 transition hover:bg-slate-50">
            <div className="flex size-8 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
              Q
            </div>
            <ChevronDown className="size-4 text-slate-400" />
          </button>
        </div>
      </div>
    </header>
  );
}