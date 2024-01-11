import moment from "moment";

export default function Message({ justify, mes: { message, createdAt } }) {
  return (
    <li className={`flex justify-${justify} mb-2  `}>
      <div
        className={`relative max-w-xl px-4 py-2 0  rounded shadow
      ${
        justify === "end"
          ? "bg-violet-600 text-white"
          : " bg-neutral-200 text-slate-950 "
      }
      `}
      >
        <span title={moment(createdAt).fromNow()} className="block">
          {message}
        </span>
      </div>
    </li>
  );
}
