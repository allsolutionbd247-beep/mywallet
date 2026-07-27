"use client";

import { useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
  Home,
  Wallet,
  ArrowUpFromLine,
  Send,
  RefreshCcw,
  Trophy,
  BarChart3,
  History,
  Settings,
  CircleHelp,
} from "lucide-react";


export default function DashboardSidebar() {

  const [collapsed, setCollapsed] = useState(false);


  const menuItems = [
    { name: "Home", icon: Home },
    { name: "Add Money", icon: Wallet },
    { name: "Money Out", icon: ArrowUpFromLine },
    { name: "Transfer", icon: Send },
    { name: "Exchange", icon: RefreshCcw },
    { name: "Sports", icon: Trophy },
    { name: "Analysis", icon: BarChart3 },
    { name: "History", icon: History },
    { name: "Settings", icon: Settings },
    { name: "Help Center", icon: CircleHelp },
  ];


  return (
    <aside
      className={`
        ${collapsed ? "w-20" : "w-64"}
        min-h-full
        bg-[#007a43]
        text-white
        shadow-xl
        flex
        flex-col
        p-5
        transition-all
        duration-300
      `}
    >

      {!collapsed && (
        <h2 className="text-xl font-bold">
          My Wallet
        </h2>
      )}


      <button
        onClick={() => setCollapsed(!collapsed)}
        className="
          mt-5
          w-12
          h-12
          rounded-full
          bg-emerald-400
          flex
          items-center
          justify-center
          hover:bg-emerald-600
          transition
          shadow-md
        "
      >

        {collapsed ? (
          <ChevronRight size={26} />
        ) : (
          <ChevronLeft size={26} />
        )}

      </button>

      <nav className="mt-8 flex-1 space-y-3">

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (
            <div
              key={item.name}
              title={collapsed ? item.name : ""}
              className="
                flex
                items-center
                gap-4
                p-3
                rounded-lg
                cursor-pointer
                hover:bg-emerald-600
                transition
              "
            >

              <Icon size={23} />

              {!collapsed && (
                <span>
                  {item.name}
                </span>
              )}

            </div>
          );

        })}

      </nav>

    </aside>
  );
}