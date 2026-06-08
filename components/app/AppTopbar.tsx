import {
  Bell,
  CalendarDays,
  ChevronDown,
  Menu,
  Plus,
  Search,
} from "lucide-react";

export default function AppTopbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#DDEBE4]/80 bg-[#F7FAF4]/85 backdrop-blur-xl">
      <div className="flex h-[88px] items-center gap-4 px-5 sm:px-6 lg:px-6">
        <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#DDEBE4] bg-white text-slate-600 shadow-sm lg:hidden">
          <Menu className="h-5 w-5" strokeWidth={2.2} />
        </button>

        <div className="hidden min-w-0 flex-1 md:block">
          <div className="relative max-w-[430px]">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
              strokeWidth={2.1}
            />
            <input
              type="text"
              placeholder="Tìm kiếm kênh, nội dung, sản phẩm..."
              className="h-12 w-full rounded-[20px] border border-[#DDEBE4] bg-white px-12 text-[14px] font-medium text-slate-700 outline-none shadow-[0_10px_25px_rgba(15,23,42,0.035)] transition placeholder:text-slate-400 focus:border-emerald-200 focus:ring-4 focus:ring-emerald-100/70"
            />
          </div>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <button className="hidden h-12 items-center gap-3 rounded-[18px] border border-[#DDEBE4] bg-white px-4 text-[14px] font-bold text-slate-600 shadow-[0_10px_25px_rgba(15,23,42,0.035)] transition hover:bg-[#FBFDF9] md:flex">
            <CalendarDays className="h-5 w-5 text-slate-500" strokeWidth={2.1} />
            <span>26/05/2024 - 01/06/2024</span>
            <ChevronDown className="h-4 w-4 text-slate-400" strokeWidth={2.2} />
          </button>

          <button className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#DDEBE4] bg-white text-slate-600 shadow-[0_10px_25px_rgba(15,23,42,0.035)] transition hover:bg-[#FBFDF9]">
            <Bell className="h-5 w-5" strokeWidth={2.2} />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-black text-white ring-4 ring-[#F7FAF4]">
              3
            </span>
          </button>

          <button className="hidden h-12 items-center gap-3 rounded-[18px] border border-[#DDEBE4] bg-white px-3 pr-4 shadow-[0_10px_25px_rgba(15,23,42,0.035)] transition hover:bg-[#FBFDF9] sm:flex">
            <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-emerald-100 to-amber-100 text-[15px] font-black text-emerald-700">
              C
            </div>

            <div className="text-left">
              <div className="text-[14px] font-black leading-5 text-[#07111F]">
                Creator xinh
              </div>
              <div className="text-[12px] font-medium text-slate-500">
                Beauty & Lifestyle
              </div>
            </div>

            <ChevronDown className="h-4 w-4 text-slate-400" strokeWidth={2.2} />
          </button>

          <button className="flex h-12 items-center gap-2 rounded-[18px] bg-[#059669] px-5 text-[14px] font-black text-white shadow-[0_18px_36px_rgba(5,150,105,0.22)] transition hover:bg-[#047857]">
            <Plus className="h-5 w-5" strokeWidth={2.5} />
            <span className="hidden sm:inline">Tạo mới</span>
            <ChevronDown
              className="hidden h-4 w-4 text-emerald-50 sm:block"
              strokeWidth={2.2}
            />
          </button>
        </div>
      </div>

      <div className="border-t border-[#DDEBE4]/70 px-5 py-3 md:hidden">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            strokeWidth={2.1}
          />
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="h-12 w-full rounded-[20px] border border-[#DDEBE4] bg-white px-12 text-[14px] font-medium text-slate-700 outline-none placeholder:text-slate-400 focus:border-emerald-200 focus:ring-4 focus:ring-emerald-100/70"
          />
        </div>
      </div>
    </header>
  );
}