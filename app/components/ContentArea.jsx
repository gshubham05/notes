export default function ContentArea({ active, content }) {
  return (
    <div className="w-[80%] ml-[20%]">
      <div className="bg-slate-800 ">{content}</div>
    </div>
  );
}
