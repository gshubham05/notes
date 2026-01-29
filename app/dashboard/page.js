"use client";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ContentArea from "../components/ContentArea";
import Cookies from "../cookies/page";


export default function DashboardPage() {
const data = {
Frontend: ["HTML", "CSS", "JavaScript"],
MERN: ["MongoDB", "Express", "ReactJS", "NodeJS"],
Frameworks: ["Bootstrap", "TailwindCSS"],
Backend: ["Axios", "JWT", "Cookies", "Multer", "Mongoose"]
};


const [active, setActive] = useState("HTML");


const notes = {
HTML: "HTML is used to create web page structure.",
CSS: "CSS styles the web page.",
JavaScript: "JavaScript adds logic.",
ReactJS: "React builds UI components.",
NodeJS: "NodeJS runs JS on server.",
Cookies: <Cookies />
};


return (
<div className="flex min-h-screen bg-slate-900 text-white">
<Sidebar data={data} active={active} setActive={setActive} />
<ContentArea active={active} content={notes[active]} />
</div>
);
}



