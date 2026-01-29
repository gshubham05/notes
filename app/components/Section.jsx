import React from "react";


export default function Section({ title, children }) {
return (
<div className="max-w-4xl mx-auto mb-10">
<h2 className="text-2xl font-semibold mb-3 text-cyan-400">{title}</h2>
<div className="bg-slate-800 p-6 rounded-xl">{children}</div>
</div>
);
}