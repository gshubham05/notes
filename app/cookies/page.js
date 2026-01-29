import React from "react";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white px-6 py-10">

      {/* HERO */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">
          Cookies in Web Development 
        </h1>

        <p className="text-lg text-gray-300">
          Easy explanation using{" "}
          <span className="text-cyan-400">Next.js</span> &{" "}
          <span className="text-cyan-400">Tailwind CSS</span>
        </p>

        <p className="mt-4 text-sm text-gray-400">
          Learn Coding & Internship at{" "}
          <span className="text-yellow-400 font-semibold">
            CodewareIT Dehradun
          </span>
        </p>
      </div>

      {/* WHAT IS COOKIE */}
      <Section title="📌 What is a Cookie?">
        <Definition>
          A cookie is a small piece of data stored in the user's browser. It helps
          websites remember login status, preferences, and sessions.
        </Definition>
      </Section>

      {/* TYPES */}
      <Section title="🍪 Types of Cookies">
        <ul className="list-disc ml-6 space-y-2 text-gray-300">
          <li>Session Cookies</li>
          <li>Persistent Cookies</li>
          <li>HttpOnly Cookies</li>
          <li>Secure Cookies</li>
          <li>Signed Cookies</li>
        </ul>
      </Section>

      {/* SESSION */}
      <Section title="1️⃣ Session Cookie">
        <Definition>
          Deleted automatically when browser is closed.
        </Definition>

        <CodeBlock>
{`cookies().set("user","shubham");`}
        </CodeBlock>
      </Section>

      {/* PERSISTENT */}
      <Section title="2️⃣ Persistent Cookie">
        <Definition>
          Stays in browser for fixed time.
        </Definition>

        <CodeBlock>
{`cookies().set("token","abc123",{
  maxAge:60*60*24
});`}
        </CodeBlock>
      </Section>

      {/* HTTPONLY */}
      <Section title="3️⃣ HttpOnly Cookie">
        <Definition>
          JavaScript cannot access this cookie.
        </Definition>

        <CodeBlock>
{`cookies().set("token","jwt",{
  httpOnly:true
});`}
        </CodeBlock>
      </Section>

      {/* SECURE */}
      <Section title="4️⃣ Secure Cookie">
        <Definition>
          Sent only over HTTPS.
        </Definition>

        <CodeBlock>
{`cookies().set("token","secure",{
  secure:true
});`}
        </CodeBlock>
      </Section>

      {/* SIGNED */}
      <Section title="5️⃣ Signed Cookie">
        <Definition>
          Detects if user changes cookie value.
        </Definition>

        <CodeBlock>
{`cookies().set("role","admin",{
  signed:true
});`}
        </CodeBlock>
      </Section>

      {/* SAMESITE */}
      <Section title="🛡 sameSite Option">
        <Definition>
          Controls when cookies are sent with other websites.
        </Definition>

        <CodeBlock>
{`// Strict
cookies().set("token","abc",{
  sameSite:"strict"
});

// Lax
cookies().set("token","abc",{
  sameSite:"lax"
});

// None
cookies().set("token","abc",{
  sameSite:"none",
  secure:true
});`}
        </CodeBlock>
      </Section>

      {/* PROTECT PAGE */}
      <Section title="🔐 Protect Page using Cookie">
        <CodeBlock>
{`import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Dashboard(){
  const token = cookies().get("token");

  if(!token){
    redirect("/login");
  }

  return <h1>Welcome Dashboard</h1>;
}`}
        </CodeBlock>
      </Section>

    </div>
  );
}

/* ====== REUSABLE COMPONENTS ===== */

function Section({ title, children }) {
  return (
    <div className="max-w-4xl mx-auto mb-10">
      <h2 className="text-2xl font-semibold mb-3 text-cyan-400">{title}</h2>
      <div className="bg-slate-800 p-6 rounded-xl">{children}</div>
    </div>
  );
}

function Definition({ children }) {
  return (
    <p className="bg-black text-green-400 p-4 rounded mb-4 font-semibold">
      👉 {children}
    </p>
  );
}

function CodeBlock({ children }) {
  return (
    <pre className="bg-black text-pink-400 p-4 rounded overflow-x-auto">
      <code>{children}</code>
    </pre>
  );
}
