const About = () => {
    return (
        <div>
            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6 relative">
                        <div className="md:col-span-5">
                            <div className="relative">
                                <img
                                    src="https://shreethemes.in/travosy/layouts/assets/images/about.jpg"
                                    className="mx-auto rounded-3xl shadow dark:shadow-gray-700 w-[90%]"
                                    alt=""
                                />
                                <div className="absolute flex items-center bottom-16 md:-start-10 -start-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-56 m-3">
                                    <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-red-500/5 text-red-500 text-center rounded-xl me-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-users size-6"
                                        >
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                            <circle cx={9} cy={7} r={4} />
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-slate-400">Visitor</span>
                                        <p className="text-xl font-bold">
                                            <span className="counter-value" data-target={4589}>
                                                4589
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute flex items-center top-16 md:-end-10 -end-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 m-3">
                                    <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-red-500/5 text-red-500 text-center rounded-xl me-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-globe size-6"
                                        >
                                            <circle cx={12} cy={12} r={10} />
                                            <line x1={2} y1={12} x2={22} y2={12} />
                                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-slate-400">Travel Packages</span>
                                        <p className="text-xl font-bold">
                                            <span className="counter-value" data-target={50}>
                                                50
                                            </span>
                                            +
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-7">
                            <div className="lg:ms-8">
                                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                                    World Best Travel <br /> Agency: Travosy
                                </h3>
                                <p className="text-slate-400 max-w-xl mb-6">
                                    Get instant helpful resources about anything on the go, easily
                                    implement secure money transfer solutions, boost your daily
                                    efficiency, connect to other app users and create your own Travosy
                                    network, and much more with just a few taps. commodo consequat. Duis
                                    aute irure.
                                </p>
                                <a
                                    href=""
                                    className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md"
                                >
                                    Read More{" "}
                                    <i className="mdi mdi-chevron-right align-middle ms-0.5" />
                                </a>
                            </div>
                        </div>
                        <div className="absolute bottom-0 start-1/3 -z-1">
                            <img
                                src="https://shreethemes.in/travosy/layouts/assets/images/map-plane-big.png"
                                className="lg:w-[600px] w-96"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                {/*end container*/}
                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-6 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                            Our Team
                        </h3>
                        <p className="text-slate-400 max-w-xl mx-auto">
                            This is just a simple text made for this unique and awesome template,
                            you can replace it with any text.
                        </p>
                    </div>
                    {/*end grid*/}
                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                        <div className="lg:col-span-3 md:col-span-6">
                            <div className="group text-center">
                                <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                    <img src="https://shreethemes.in/travosy/layouts/assets/images/client/04.jpg" className="" alt="" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500" />
                                    <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                                        <li className="inline">
                                            <a
                                                href=""
                                                className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-facebook size-4"
                                                >
                                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="inline">
                                            <a
                                                href=""
                                                className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-instagram size-4"
                                                >
                                                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="inline">
                                            <a
                                                href=""
                                                className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-linkedin size-4"
                                                >
                                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                                    <rect x={2} y={9} width={4} height={12} />
                                                    <circle cx={4} cy={4} r={2} />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                    {/*end icon*/}
                                </div>
                                <div className="content mt-3">
                                    <a
                                        href=""
                                        className="text-lg font-semibold hover:text-red-500 duration-500"
                                    >
                                        Jack John
                                    </a>
                                    <p className="text-slate-400">Agent</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-3 md:col-span-6">
                            <div className="group text-center">
                                <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                    <img src="https://shreethemes.in/travosy/layouts/assets/images/client/05.jpg" className="" alt="" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500" />
                                    <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                                        <li className="inline">
                                            <a
                                                href=""
                                                className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-facebook size-4"
                                                >
                                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="inline">
                                            <a
                                                href=""
                                                className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-instagram size-4"
                                                >
                                                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="inline">
                                            <a
                                                href=""
                                                className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-linkedin size-4"
                                                >
                                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                                    <rect x={2} y={9} width={4} height={12} />
                                                    <circle cx={4} cy={4} r={2} />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                    {/*end icon*/}
                                </div>
                                <div className="content mt-3">
                                    <a
                                        href=""
                                        className="text-lg font-semibold hover:text-red-500 duration-500"
                                    >
                                        Krista John
                                    </a>
                                    <p className="text-slate-400">Agent</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-3 md:col-span-6">
                            <div className="group text-center">
                                <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                    <img src="https://shreethemes.in/travosy/layouts/assets/images/client/06.jpg" className="" alt="" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500" />
                                    <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                                        <li className="inline">
                                            <a
                                                href=""
                                                className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-facebook size-4"
                                                >
                                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="inline">
                                            <a
                                                href=""
                                                className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-instagram size-4"
                                                >
                                                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="inline">
                                            <a
                                                href=""
                                                className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-linkedin size-4"
                                                >
                                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                                    <rect x={2} y={9} width={4} height={12} />
                                                    <circle cx={4} cy={4} r={2} />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                    {/*end icon*/}
                                </div>
                                <div className="content mt-3">
                                    <a
                                        href=""
                                        className="text-lg font-semibold hover:text-red-500 duration-500"
                                    >
                                        Roger Jackson
                                    </a>
                                    <p className="text-slate-400">Agent</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-3 md:col-span-6">
                            <div className="group text-center">
                                <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                    <img src="https://shreethemes.in/travosy/layouts/assets/images/client/07.jpg" className="" alt="" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500" />
                                    <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                                        <li className="inline">
                                            <a
                                                href=""
                                                className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-facebook size-4"
                                                >
                                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="inline">
                                            <a
                                                href=""
                                                className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-instagram size-4"
                                                >
                                                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="inline">
                                            <a
                                                href=""
                                                className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-linkedin size-4"
                                                >
                                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                                    <rect x={2} y={9} width={4} height={12} />
                                                    <circle cx={4} cy={4} r={2} />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                    {/*end icon*/}
                                </div>
                                <div className="content mt-3">
                                    <a
                                        href=""
                                        className="text-lg font-semibold hover:text-red-500 duration-500"
                                    >
                                        Johnny English
                                    </a>
                                    <p className="text-slate-400">Agent</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*end grid*/}
                </div>
                {/*end container*/}
                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-6 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                            What Our Users Say
                        </h3>
                        <p className="text-slate-400 max-w-xl mx-auto">
                            This is just a simple text made for this unique and awesome template,
                            you can replace it with any text.
                        </p>
                    </div>
                    {/*end grid*/}
                    
                    {/*end grid*/}
                </div>
                {/*end container*/}
                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-6 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                            Travel Blogs
                        </h3>
                        <p className="text-slate-400 max-w-xl mx-auto">
                            This is just a simple text made for this unique and awesome template,
                            you can replace it with any text.
                        </p>
                    </div>
                    {/*end grid*/}
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                        <div className="group relative overflow-hidden">
                            <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                                <img
                                    src="https://shreethemes.in/travosy/layouts/assets/images/blog/1.jpg"
                                    className="group-hover:scale-110 group-hover:rotate-3 duration-500"
                                    alt=""
                                />
                                <div className="absolute top-0 start-0 p-4 opacity-0 group-hover:opacity-100 duration-500">
                                    <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">
                                        Travel
                                    </span>
                                </div>
                            </div>
                            <div className="mt-6">
                                <div className="flex mb-4">
                                    <span className="flex items-center text-slate-400 text-sm">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-clock size-4 text-slate-900 dark:text-white me-1.5"
                                        >
                                            <circle cx={12} cy={12} r={10} />
                                            <polyline points="12 6 12 12 16 14" />
                                        </svg>
                                        5 min read
                                    </span>
                                    <span className="text-slate-400 text-sm ms-3">
                                        by{" "}
                                        <a
                                            href=""
                                            className="text-slate-900 dark:text-white hover:text-red-500 dark:hover:text-red-500 font-medium"
                                        >
                                            Travosy
                                        </a>
                                    </span>
                                </div>
                                <a
                                    href="blog-detail.html"
                                    className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out"
                                >
                                    This Spanish city is a feast for the eyes: Travosy
                                </a>
                                <p className="text-slate-400 mt-2">
                                    This is required when, for example, the final text is not yet
                                    available.
                                </p>
                                <div className="mt-3">
                                    <a
                                        href="blog-detail.html"
                                        className="hover:text-red-500 inline-flex items-center"
                                    >
                                        Read More{" "}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-chevron-right size-4 ms-1"
                                        >
                                            <polyline points="9 18 15 12 9 6" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*end content*/}
                        <div className="group relative overflow-hidden">
                            <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                                <img
                                    src="https://shreethemes.in/travosy/layouts/assets/images/blog/2.jpg"
                                    className="group-hover:scale-110 group-hover:rotate-3 duration-500"
                                    alt=""
                                />
                                <div className="absolute top-0 start-0 p-4 opacity-0 group-hover:opacity-100 duration-500">
                                    <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">
                                        Tour
                                    </span>
                                </div>
                            </div>
                            <div className="mt-6">
                                <div className="flex mb-4">
                                    <span className="flex items-center text-slate-400 text-sm">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-clock size-4 text-slate-900 dark:text-white me-1.5"
                                        >
                                            <circle cx={12} cy={12} r={10} />
                                            <polyline points="12 6 12 12 16 14" />
                                        </svg>
                                        5 min read
                                    </span>
                                    <span className="text-slate-400 text-sm ms-3">
                                        by{" "}
                                        <a
                                            href=""
                                            className="text-slate-900 dark:text-white hover:text-red-500 dark:hover:text-red-500 font-medium"
                                        >
                                            Travosy
                                        </a>
                                    </span>
                                </div>
                                <a
                                    href="blog-detail.html"
                                    className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out"
                                >
                                    New Zealand’s South Island brims with majestic
                                </a>
                                <p className="text-slate-400 mt-2">
                                    This is required when, for example, the final text is not yet
                                    available.
                                </p>
                                <div className="mt-3">
                                    <a
                                        href="blog-detail.html"
                                        className="hover:text-red-500 inline-flex items-center"
                                    >
                                        Read More{" "}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-chevron-right size-4 ms-1"
                                        >
                                            <polyline points="9 18 15 12 9 6" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*end content*/}
                        <div className="group relative overflow-hidden">
                            <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                                <img
                                    src="https://shreethemes.in/travosy/layouts/assets/images/blog/3.jpg"
                                    className="group-hover:scale-110 group-hover:rotate-3 duration-500"
                                    alt=""
                                />
                                <div className="absolute top-0 start-0 p-4 opacity-0 group-hover:opacity-100 duration-500">
                                    <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">
                                        Tourist
                                    </span>
                                </div>
                            </div>
                            <div className="mt-6">
                                <div className="flex mb-4">
                                    <span className="flex items-center text-slate-400 text-sm">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-clock size-4 text-slate-900 dark:text-white me-1.5"
                                        >
                                            <circle cx={12} cy={12} r={10} />
                                            <polyline points="12 6 12 12 16 14" />
                                        </svg>
                                        5 min read
                                    </span>
                                    <span className="text-slate-400 text-sm ms-3">
                                        by{" "}
                                        <a
                                            href=""
                                            className="text-slate-900 dark:text-white hover:text-red-500 dark:hover:text-red-500 font-medium"
                                        >
                                            Travosy
                                        </a>
                                    </span>
                                </div>
                                <a
                                    href="blog-detail.html"
                                    className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out"
                                >
                                    When you visit the Eternal Rome City: Travosy
                                </a>
                                <p className="text-slate-400 mt-2">
                                    This is required when, for example, the final text is not yet
                                    available.
                                </p>
                                <div className="mt-3">
                                    <a
                                        href="blog-detail.html"
                                        className="hover:text-red-500 inline-flex items-center"
                                    >
                                        Read More{" "}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-chevron-right size-4 ms-1"
                                        >
                                            <polyline points="9 18 15 12 9 6" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*end content*/}
                    </div>
                    {/*end grid*/}
                </div>
                {/*end container*/}
            </section>

        </div>
    );
};

export default About;