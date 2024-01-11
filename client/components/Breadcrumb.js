import Link from "next/link";

const Breadcrumb = ({ paths }) => {
  return (
    <nav className="max-w-screen-xl my-5 md:px-8 text-sm font-medium relative">
      <ol className="list-none p-0 inline-flex">
        {paths.map((path, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2 text-white">&#47;</span>}
            {path.link ? (
              <Link href={path.link}>
                <span className="text-white hover:underline">{path.label}</span>
              </Link>
            ) : (
              <span className="text-white">{path.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
