const AppNavigation = () => {
  return (
    <header>
      <nav className="flex items-center justify-between rounded bg-blue-300 px-4 py-2">
        <div>
          <span className="text-3xl font-semibold uppercase text-orange-600">
            logo
          </span>
        </div>
        <ul className="flex gap-4">
          <li>
            <a
              className="inline-block px-4 py-3 font-semibold uppercase text-orange-600 transition duration-100 hover:text-orange-500"
              href=""
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="inline-block px-4 py-3 font-semibold uppercase text-orange-600 transition duration-100 hover:text-orange-500"
              href=""
            >
              Blogs
            </a>
          </li>
          <li>
            <a
              className="inline-block px-4 py-3 font-semibold uppercase text-orange-600 transition duration-100 hover:text-orange-500"
              href=""
            >
              Contact
            </a>
          </li>
        </ul>
        <div>
          <button className="rounded bg-orange-600 px-4 py-3 font-semibold uppercase text-white">
            login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default AppNavigation;
