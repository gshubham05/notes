"use client";

export default function Sidebar({ data, active, setActive }) {
  return (
    <aside
      className="
        w-[20%] 
        h-screen 
        fixed 
        left-0 
        top-0 
        bg-slate-800 
        p-4 
        overflow-y-auto 
        no-scrollbar
      "
    >
      {/* LOGO / TITLE */}
      <h2 className="text-xl font-bold text-cyan-400 mb-6 text-center">
        CodewareIT 
      </h2>

      {/* MENU */}
      {Object.keys(data).map((group) => (
        <div key={group} className="mb-6">
          {/* HEADING */}
          <h3 className="text-yellow-400 font-semibold mb-2 uppercase text-sm">
            {group}
          </h3>

          {/* SUB ITEMS */}
          {data[group].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`block w-full text-left px-3 py-2 rounded mb-1 text-sm transition-all duration-200
                ${
                  active === item
                    ? "bg-cyan-500 text-black"
                    : "hover:bg-slate-700 text-gray-200"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>
      ))}
    </aside>
  );
}
