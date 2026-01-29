export default function CodeBlock({ children }) {
    return (
    <pre className="bg-black text-pink-400 p-4 rounded overflow-x-auto">
    <code>{children}</code>
    </pre>
    );
    }