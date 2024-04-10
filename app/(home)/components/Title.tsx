export default function Title({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <h1 className="text-2xl lg:text-3xl font-bold group-hover:text-green-600 transition-none duration-300 ease-in-out">
        {text}
      </h1>
      <div className="-rotate-2 w-40 h-2 bg-indigo-500 rounded-full translate-x-2 group-hover:-translate-x-2 transition-all duration-300 ease-in-out"></div>
      <div className="-rotate-2 w-40 h-2 bg-green-500 group-hover:translate-x-2 rounded-full transition-all duration-300 ease-in-out"></div>
    </div>
  );
}
