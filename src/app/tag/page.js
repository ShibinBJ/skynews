"use client";
import { useState } from "react";
import Terms from "../terms/page";
import { Menu, X } from "lucide-react";
export default function TagPage() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 107;

  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    "Home",
    "UK",
    "Politics",
    "World",
    "US",
    "Money",
    "Science, Climate & Tech",
    "Ents & Arts",
    "Programmes",
    "Puzzles",
    "Videos",
    "Analysis",
    "Data x Forensics",
    "Offbeat",
    "Weather",
  ];
  return (
    <>
      <header className="bg-gray-100">
        <div className="container mx-auto px-[20px] lg:px-[220px] flex gap-4">
          <div>
            <a href="#">
              <img
                src="skylight.svg"
                className="w-[110px] lg:w-[160px] pt-[17px] lg:pt-[23px] pb-5 lg:pb-0"
              />
            </a>
          </div>
          <div className="mt-6 ps-[635px] hidden lg:block">
            <button className="bg-gray-200 px-3 rounded-md cursor-pointer">
              <div className="flex gap-2">
                <div className="text-gray-800 text-[14px] pt-2">16 Sept</div>
                <div>
                  <img src="clo.svg" className="w-[25px] pt-2" />
                </div>
                <div>
                  <p className="text-gray-800 text-[14px]">20°</p>
                  <p className="text-gray-800 text-[11px]">14°</p>
                </div>
              </div>
            </button>
          </div>

          <div className="pt-[13px] lg:pt-[23px]">
            <div className="pl-45 lg:pl-0 flex lg:block">
              <div className="w-[8px] h-[8px] bg-red-600 rounded-full animate-[blink_3s_infinite] mt-[14px] ms-7 block lg:hidden"></div>
              <button className="bg-transparent lg:bg-red-600 text-red-700 lg:text-white text-[14px] lg:text-[16px] font-bold py-2 px-4 rounded lg:hover:bg-red-800 cursor-pointer">
                Watch Live
              </button>
            </div>
          </div>
          <div className="relative pt-2">
            {/* Top Navbar (only in small screens) */}
            <div className="lg:hidden">
              {/* Hamburger button */}
              <button
                className="p-2 text-2xl"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? "✖" : "☰"}
              </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="fixed inset-0 bg-white z-50 p-6 shadow-lg overflow-y-auto lg:hidden">
                <div className="flex justify-end">
                  <button className="text-2xl" onClick={() => setIsOpen(false)}>
                    ✖
                  </button>
                </div>
                <ul className="mt-6 space-y-4">
                  {links.map((link, i) => (
                    <li
                      key={i}
                      className={`pb-2 border-b cursor-pointer ${
                        link === ""
                          ? "border-blue-700 border-b-2"
                          : "border-gray-200 hover:border-b-2 hover:border-blue-700"
                      }`}
                    >
                      <span
                        className={
                          link === ""
                            ? "font-bold text-gray-600"
                            : "text-gray-600"
                        }
                      >
                        {link}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <nav className="container mx-auto px-[220px] mt-8 hidden lg:block">
          <ul className="flex gap-[22px] text-[17px]">
            <li className="group text-gray-700">
              <a href="#">Home</a>
              <hr className="border-1 opacity-0 border-blue-700  group-hover:opacity-100 mt-3" />
            </li>
            <li className="group text-gray-600">
              <a href="#">Uk</a>
              <hr className="border-1 opacity-0 border-blue-700  group-hover:opacity-100 mt-3"></hr>
            </li>
            <li className="group text-gray-600">
              <a href="#">Politics</a>
              <hr className=" border-1 opacity-0  border-blue-700 group-hover:opacity-100 mt-3"></hr>
            </li>
            <li className="group text-gray-600">
              <a href="#">World</a>
              <hr className=" border-1 opacity-0  border-blue-700 group-hover:opacity-100 mt-3"></hr>
            </li>
            <li className="group text-gray-600">
              <a href="#">US</a>
              <hr className=" border-1 opacity-0  border-blue-700 group-hover:opacity-100 mt-3"></hr>
            </li>
            <li className="group text-gray-600">
              <a href="#">Money</a>
              <hr className=" border-1 opacity-0  border-blue-700 group-hover:opacity-100 mt-3"></hr>
            </li>
            <li className="group text-gray-600">
              <a href="#">Science,Climate & Tech</a>
              <hr className=" border-1 opacity-0  border-blue-700 group-hover:opacity-100 mt-3"></hr>
            </li>
            <li className="group text-gray-600">
              <a href="#">Ents & Arts</a>
              <hr className=" border-1 opacity-0  border-blue-700 group-hover:opacity-100 mt-3"></hr>
            </li>
            <li className="group text-gray-600">
              <a href="#">Programmes</a>
              <hr className=" border-1 opacity-0  border-blue-700 group-hover:opacity-100 mt-3"></hr>
            </li>
            <li className="group text-gray-600">
              <a href="#">Puzzles</a>
              <hr className=" border-1 opacity-0  border-blue-700 group-hover:opacity-100 mt-3"></hr>
            </li>
            <ul className="flex text-[16px]">
              <li className="text-gray-600 ps-[138px] relative">
                {/* Toggle dropdown on click */}
                <button
                  onClick={() => setOpen(!open)}
                  className="flex items-center gap-1 focus:outline-none "
                >
                  More <span>⮟</span>
                </button>

                {/* Dropdown menu */}
                {open && (
                  <ul className="absolute left-0 mt-2 w-44 bg-white text-gray-600 shadow-lg border border-gray-200">
                    <li className="px-4 py-2 group">
                      <a href="#">Analysis</a>
                      <hr className="text-gray-200 group-hover:text-blue-700 group-hover:border-1 mt-1"></hr>
                    </li>
                    <li className="px-4 py-2 group">
                      <a href="#">Videos</a>
                      <hr className="text-gray-200  group-hover:text-blue-700 group-hover:border-1 mt-1"></hr>
                    </li>
                    <li className="px-4 py-2 group">
                      <a href="#">Data x Forensics</a>
                      <hr className="text-gray-200 group-hover:text-blue-700 group-hover:border-1 mt-1"></hr>
                    </li>
                    <li className="px-4 py-2 group">
                      <a href="#">Offbeat</a>
                      <hr className="text-gray-200  group-hover:text-blue-700 group-hover:border-1 mt-1"></hr>
                    </li>
                    <li className="px-4 py-2 group">
                      <a href="#">Weather</a>
                      <hr className="text-gray-200 hidden group-hover:block group-hover:text-blue-700 group-hover:border-1 mt-1"></hr>
                    </li>
                  </ul>
                )}

                {/* underline effect */}
                <hr
                  className={`border-1 border-blue-700 mt-3 transition-opacity ${
                    open ? "opacity-100" : "opacity-0"
                  }`}
                />
              </li>
            </ul>
          </ul>
        </nav>
      </header>

      {/* body */}
      <div className="container mx-auto px-[20px] lg:px-[220px] mt-11">
        <p className=" text-[29px] font-bold text-black">DONALD TRUMP</p>
        <div className="grid grid-cols-1 lg:grid-cols-4 grid-rows-7 gap-y-6 gap-x-5 mt-5">
          <div className="">
            <a href="#">
              <div className="relative">
                <img src="dt1.jpg" className="rounded absolute" />
                <button className="bg-white relative mt-[210px] lg:mt-[100px] text-[12px] px-3 py-[6px] font-bold">
                  <a href="#">► 0:41</a>
                </button>
              </div>
            </a>
            <a href="#">
              <p className="text-gray-700 hover:underline pt-12 lg:pt-6 text-[17px]">
                'A great gentleman, a great King'
              </p>
            </a>
            <div className="flex gap-1 pt-[70px] pb-4">
              <div className="text-gray-500 text-[12px] pt-1">57 mins ago</div>
              <div className="text-gray-500">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                UK
              </div>
            </div>
            <hr className="text-gray-300"></hr>
          </div>
          {/* 2 */}
          <div className="">
            <a href="#">
              <div className="relative">
                <img src="d2.jpg" className="rounded absolute" />
                <button className="bg-white relative mt-[210px] lg:mt-[100px] text-[12px] px-3 py-[6px] font-bold">
                  <a href="#">► 2.28</a>
                </button>
              </div>
            </a>
            <a href="#">
              <p className="text-gray-700 hover:underline pt-12 lg:pt-6 text-[17px]">
                Trump card played too soon?
              </p>
            </a>
            <div className="flex gap-1 pt-[70px] pb-4">
              <div className="text-gray-500 text-[12px] pt-1">1 hr ago</div>
              <div className="text-gray-500">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                US
              </div>
            </div>
            <hr className="text-gray-300"></hr>
          </div>
          {/* 3 */}
          <div className="">
            <a href="#">
              <div className="relative">
                <img src="pci2.jpg" className="rounded absolute" />
                <button className="bg-white relative mt-[210px] lg:mt-[100px] text-[13px] px-3 py-[6px] font-bold">
                  <a href="#">► 27.58</a>
                </button>
              </div>
            </a>
            <a href="#">
              <p className="text-gray-700 hover:underline pt-12 lg:pt-6 text-[17px]">
                The King and the Donald
              </p>
            </a>
            <div className="flex gap-1 pt-[70px] pb-4">
              <div className="text-gray-500 text-[12px] pt-2">3 hrs ago</div>
            </div>
            <hr className="text-gray-300"></hr>
          </div>

          {/*4 */}
          <div className="">
            <a href="#">
              <div>
                <img src="dt3.jpg" className="rounded " />
              </div>
            </a>
            <a href="#">
              <p className="text-gray-700 hover:underline pt-2 text-[17px]">
                Four men bailed over Trump-Epstein projection at Windsor Castle
              </p>
            </a>
            <div className="flex gap-1 pt-[20px] pb-4">
              <div className="text-gray-500 text-[12px] pt-1">2 hrs ago</div>
              <div className="text-gray-500">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                UK
              </div>
            </div>
            <hr className="text-gray-300"></hr>
          </div>
          {/* 5 */}
          <div className="">
            <a href="#">
              <div>
                <img src="dt5.jpg" className="rounded" />
              </div>
            </a>
            <a href="#">
              <p className="text-gray-700 hover:underline pt-2 text-[17px]">
                Donald Trump historic state visit - second day in pictures
              </p>
            </a>
            <div className="flex gap-1 pt-[45px] pb-4">
              <div className="text-gray-500 text-[12px] pt-1">47 mins ago</div>
              <div className="text-gray-500">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                UK
              </div>
            </div>
            <hr className="text-gray-300"></hr>
          </div>
          {/* 6 */}
          <div className="">
            <a href="#">
              <div className="relative">
                <img src="dt6.jpg" className="rounded absolute" />
                <button className="bg-red-500 text-white relative mt-[210px] lg:mt-[100px] text-[12px] px-3 py-[6px] font-bold">
                  <a href="#">► LIVE</a>
                </button>
              </div>
            </a>
            <a href="#">
              <p className="text-gray-700 hover:underline pt-12 lg:pt-6 text-[17px]">
                Starmer hosts Trump at Chequers | Watch full Sky News coverage
              </p>
            </a>
            <div className="flex gap-1 pt-[45px] pb-4">
              <div className="text-gray-500 text-[12px] pt-1">3 hrs ago</div>
            </div>
            <hr className="text-gray-300"></hr>
          </div>
          {/* 7 */}
          <div className="">
            <a href="#">
              <div className="relative">
                <img src="dt7.jpg" className="rounded absolute" />
                <button className="bg-white relative mt-[210px] lg:mt-[100px] text-[13px] px-3 py-[6px] font-bold">
                  <a href="#">► 3:12</a>
                </button>
              </div>
            </a>
            <a href="#">
              <p className="text-gray-700 hover:underline pt-12 lg:pt-6 text-[17px]">
                Trump's royal greeting: What happened?
              </p>
            </a>
            <div className="flex gap-1 pt-[48px] pb-4">
              <div className="text-gray-500 text-[12px] pt-1">Yesterday</div>
            </div>
            <hr className="text-gray-300"></hr>
          </div>
          {/*8 */}

          <div className="">
            <a href="#">
              <div className="relative">
                <img src="pci2.jpg" className="rounded absolute" />
                <button className="bg-white relative mt-[210px] lg:mt-[100px] text-[13px] px-2 py-[6px] font-bold">
                  <img src="micb.svg" className="w-4" />
                </button>
              </div>
            </a>
            <a href="#">
              <p className="text-gray-700 hover:underline  pt-12 lg:pt-6 text-[17px]">
                The King and the Donald
              </p>
            </a>
            <div className="flex gap-1 pt-[73px] pb-4">
              <div className="text-gray-500 text-[12px] pt-1">13 mins ago</div>
              <div className="text-gray-500">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                US
              </div>
            </div>
            <hr className="text-gray-300"></hr>
          </div>
          {/* 9 */}
          <div className="">
            <a href="#">
              <div className="relative">
                <img src="dt9.jpg" className="rounded absolute" />
                <button className="bg-blue-900 text-white relative mt-[210px] lg:mt-[100px] text-[12px] px-3 py-[6px] font-bold">
                  <a href="#">ANALYSIS</a>
                </button>
              </div>
            </a>
            <a href="#">
              <p className="text-gray-700 hover:underline pt-12 lg:pt-6 text-[17px]">
                Has the royal Truman Show for Trump been worth the enormous
                effort and expense?
              </p>
            </a>
            <div className="flex gap-1 pt-[21px] pb-4">
              <div className="text-gray-500 text-[12px] pt-1">12 hrs ago</div>
              <div className="text-gray-500">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                US
              </div>
            </div>
            <hr className="text-gray-300"></hr>
          </div>
          {/* 10 */}
          <div className="">
            <a href="#">
              <div>
                <img src="dt10.jpg" className="rounded " />
              </div>
            </a>
            <a href="#">
              <p className="text-gray-700 hover:underline pt-2 text-[17px]">
                Trump hails 'highest honour of my life' at lavish state banquet
              </p>
            </a>
            <div className="flex gap-1 pt-[46px] pb-4">
              <div className="text-gray-500 text-[12px] pt-1">7 hrs ago</div>
              <div className="text-gray-500">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                UK
              </div>
            </div>
            <hr className="text-gray-300"></hr>
          </div>
          {/*11 */}

          <div className="">
            <a href="#">
              <div className="relative">
                <img src="dt11.png" className="rounded absolute" />
                <button className="bg-blue-900 text-white relative mt-[210px] lg:mt-[100px] text-[12px] px-3 py-[6px] font-bold">
                  <a href="#">ANALYSIS</a>
                </button>
              </div>
            </a>
            <a href="#">
              <p className="text-gray-700 hover:underline pt-12 lg:pt-6 text-[17px]">
                History tells us Trump-Starmer talks could be landmark moment
              </p>
            </a>
            <div className="flex gap-1 pt-[45px] pb-4">
              <div className="text-gray-500 text-[12px] pt-1">6 hrs ago</div>
              <div className="text-gray-500">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                Politics
              </div>
            </div>
            <hr className="text-gray-300"></hr>
          </div>
          {/* 12 */}
          <div className="">
            <a href="#">
              <div className="relative">
                <img src="dt12.jpg" className="rounded absolute" />
                <button className="bg-white relative mt-[210px] lg:mt-[100px] text-[13px] px-3 py-[6px] font-bold">
                  <a href="#">► 1:41</a>
                </button>
              </div>
            </a>
            <a href="#">
              <p className="text-gray-700 hover:underline pt-12 lg:pt-6 text-[17px]">
                Anti-Trump protests take place in UK
              </p>
            </a>
            <div className="flex gap-1 pt-[46px] pb-4">
              <div className="text-gray-500 text-[12px] pt-1">Yesterday</div>
              <div className="text-gray-500">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                World
              </div>
            </div>
            <hr className="text-gray-300"></hr>
          </div>
          {/* 13 */}
          <div className="">
            <a href="#">
              <div>
                <img src="dt13.jpg" className="rounded " />
              </div>
            </a>
            <a href="#">
              <p className="text-gray-700 hover:underline pt-2 text-[17px]">
                Who's who at Trump's second state banquet - and what's on the
                menu?
              </p>
            </a>
            <div className="flex gap-1 pt-[20px] pb-4">
              <div className="text-gray-500 text-[12px] pt-1">Yesterday</div>
              <div className="text-gray-500">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                UK
              </div>
            </div>
            <hr className="text-gray-300"></hr>
          </div>
          {/*14 */}
          <div className="">
            <a href="#">
              <div className="relative">
                <img src="dt14.jpg" className="rounded absolute" />
                <button className="bg-white relative mt-[210px] lg:mt-[100px] text-[13px] px-3 py-[6px] font-bold">
                  <a href="#">► 3:39</a>
                </button>
              </div>
            </a>
            <a href="#">
              <p className="text-gray-700 hover:underline pt-12 lg:pt-6 text-[17px]">
                King and Queen welcome Trump
              </p>
            </a>
            <div className="flex gap-1 pt-[74px] pb-4">
              <div className="text-gray-500 text-[12px] pt-1">Yesterday</div>
            </div>
            <hr className="text-gray-300"></hr>
          </div>
          {/* 15 */}
          <div className="">
            <a href="#">
              <div className="relative">
                <img src="dt15.jpg" className="rounded absolute" />
                <button className="bg-white relative mt-[210px] lg:mt-[100px] text-[13px] px-3 py-[6px] font-bold">
                  <a href="#">► 3:47</a>
                </button>
              </div>
            </a>
            <a href="#">
              <p className="text-gray-700 hover:underline pt-12 lg:pt-6 text-[17px]">
                Trump to meet Starmer: What can we expect?
              </p>
            </a>
            <div className="flex gap-1 pt-[46px] pb-4">
              <div className="text-gray-500 text-[12px] pt-1">12 hrs ago</div>
              <div className="text-gray-500">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                Politics
              </div>
            </div>
            <hr className="text-gray-300"></hr>
          </div>
          {/* 16 */}
          <div className="">
            <a href="#">
              <div>
                <img src="dt16.jpg" className="rounded " />
              </div>
            </a>
            <a href="#">
              <p className="text-gray-700 hover:underline pt-2 text-[17px]">
                FBI director shouts at members of Congress for second day during
                questions about Epstein
              </p>
            </a>
            <div className="flex gap-1 pt-[18px] pb-4">
              <div className="text-gray-500 text-[12px] pt-1">Yesterday</div>
              <div className="text-gray-500">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                US
              </div>
            </div>
            <hr className="text-gray-300"></hr>
          </div>
          {/* 17 */}
          <div className="">
            <a href="#">
              <div>
                <img src="dt17.jpg" className="rounded " />
              </div>
            </a>
            <a href="#">
              <p className="text-gray-700 hover:underline pt-2 text-[17px]">
                'Get off the iPad': Air traffic control warns flight to turn
                away from Air Force One
              </p>
            </a>
            <div className="flex gap-1 pt-[18px] pb-4">
              <div className="text-gray-500 text-[12px] pt-1">Yesterday</div>
              <div className="text-gray-500">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                US
              </div>
            </div>
            <hr className="text-gray-300"></hr>
          </div>
          {/* 18 */}
          <div className="">
            <a href="#">
              <div className="relative">
                <img src="dt18.jpg" className="rounded absolute" />
                <button className="bg-white relative mt-[210px] lg:mt-[100px] text-[13px] px-3 py-[6px] font-bold">
                  <a href="#">► 1:11</a>
                </button>
              </div>
            </a>
            <a href="#">
              <p className="text-gray-700 hover:underline pt-12 lg:pt-6 text-[17px]">
                Trump visits King: Moments you might have missed
              </p>
            </a>
            <div className="flex gap-1 pt-[46px] pb-4">
              <div className="text-gray-500 text-[12px] pt-1">Yesterday</div>
            </div>
            <hr className="text-gray-300"></hr>
          </div>
          {/* 19 */}
          <div className="">
            <a href="#">
              <div>
                <img src="dt19.jpg" className="rounded " />
              </div>
            </a>
            <a href="#">
              <p className="text-gray-700 hover:underline pt-2 text-[17px]">
                Trump finally gets his demand for a US rate cut
              </p>
            </a>
            <div className="flex gap-1 pt-[41px] pb-4">
              <div className="text-gray-500 text-[12px] pt-1">17 Sept</div>
              <div className="text-gray-500">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                Money
              </div>
            </div>
            <hr className="text-gray-300"></hr>
          </div>
          {/* 20 */}
          <div className="">
            <a href="#">
              <div className="relative">
                <img src="dt20.jpg" className="rounded absolute" />
                <button className="bg-white relative mt-[210px] lg:mt-[100px] text-[13px] px-3 py-[6px] font-bold">
                  <a href="#">► 0:39</a>
                </button>
              </div>
            </a>
            <a href="#">
              <p className="text-gray-700 hover:underline pt-12 lg:pt-6 text-[17px]">
                Pro and anti-Trump protesters gather in Windsor
              </p>
            </a>
            <div className="flex gap-1 pt-[46px] pb-4">
              <div className="text-gray-500 text-[12px] pt-1">17 Sept</div>
            </div>
            <hr className="text-gray-300"></hr>
          </div>
          {/* 21 */}
          <div className="">
            <a href="#">
              <div className="relative">
                <img src="dt21.jpg" className="rounded absolute" />
                <button className="bg-white relative mt-[210px] lg:mt-[100px] text-[13px] px-3 py-[6px] font-bold">
                  <a href="#">► 0:31</a>
                </button>
              </div>
            </a>
            <a href="#">
              <p className="text-gray-700 hover:underline pt-12 lg:pt-6 text-[17px]">
                King appears to tell Trump 'watch the sword!'
              </p>
            </a>
            <div className="flex gap-1 pt-[46px] pb-4">
              <div className="text-gray-500 text-[12px] pt-1">17 Sept</div>
            </div>
            <hr className="text-gray-300"></hr>
          </div>
          {/* 22 */}
          <div className="">
            <a href="#">
              <div>
                <img src="dt22.jpg" className="rounded " />
              </div>
            </a>
            <a href="#">
              <p className="text-gray-700 hover:underline pt-2 text-[17px]">
                Sword, book and Union flag among gifts exchanged between the
                King and Trump
              </p>
            </a>
            <div className="flex gap-1 pt-[15px] pb-4">
              <div className="text-gray-500 text-[12px] pt-1">17 Sept</div>
              <div className="text-gray-500">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                UK
              </div>
            </div>
            <hr className="text-gray-300"></hr>
          </div>
          {/* 23 */}
          <div className="">
            <a href="#">
              <div className="relative">
                <img src="dt23.png" className="rounded absolute" />
                <button className="bg-white relative mt-[210px] lg:mt-[100px] text-[13px] px-3 py-[6px] font-bold">
                  <a href="#">► 33:06</a>
                </button>
              </div>
            </a>
            <a href="#">
              <p className="text-gray-700 hover:underline pt-12 lg:pt-6 text-[17px]">
                'Trump, the time to act is now'
              </p>
            </a>
            <div className="flex gap-1 pt-[67px] pb-4">
              <div className="text-gray-500 text-[12px] pt-1">17 Sept</div>
              <div className="text-gray-500">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                World
              </div>
            </div>
            <hr className="text-gray-300"></hr>
          </div>
          {/* 24 */}
          <div className="">
            <a href="#">
              <div className="relative">
                <img src="dt24.jpg" className="rounded absolute" />
                <button className="bg-white relative mt-[210px] lg:mt-[100px] text-[13px] px-3 py-[6px] font-bold">
                  <a href="#">► 2:34</a>
                </button>
              </div>
            </a>
            <a href="#">
              <p className="text-gray-700 hover:underline pt-12 lg:pt-6 text-[17px]">
                Trump shakes hands with Yvette Cooper... awkward?
              </p>
            </a>
            <div className="flex gap-1 pt-[42px] pb-4">
              <div className="text-gray-500 text-[12px] pt-1">17 Sept</div>
              <div className="text-gray-500">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                UK
              </div>
            </div>
            <hr className="text-gray-300"></hr>
          </div>
          {/* 25 */}
          <div className="">
            <a href="#">
              <div>
                <img src="dt25.jpg" className="rounded " />
              </div>
            </a>
            <a href="#">
              <p className="text-gray-700 hover:underline pt-2 text-[17px]">
                Donald Trump historic state visit - first day in pictures
              </p>
            </a>
            <div className="flex gap-1 pt-[38px] pb-4">
              <div className="text-gray-500 text-[12px] pt-1">Yesterday</div>
              <div className="text-gray-500">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                UK
              </div>
            </div>
            <hr className="text-gray-300"></hr>
          </div>
          {/* 26 */}
          <div className="">
            <a href="#">
              <div className="relative">
                <img src="dt26.jpg" className="rounded absolute" />
                <button className="bg-white relative mt-[210px] lg:mt-[100px] text-[13px] px-3 py-[6px] font-bold">
                  <a href="#">► 22:08</a>
                </button>
              </div>
            </a>
            <a href="#">
              <p className="text-gray-700 hover:underline pt-12 lg:pt-6 text-[17px]">
                Trump 100: Trump lands in London
              </p>
            </a>
            <div className="flex gap-1 pt-[42px] pb-4">
              <div className="text-gray-500 text-[12px] pt-1">17 Sept</div>
            </div>
            <hr className="text-gray-300"></hr>
          </div>
          {/* 27 */}
          <div className="">
            <a href="#">
              <div className="relative">
                <img src="dt27.jpg" className="rounded absolute" />
                <button className="bg-white relative mt-[210px] lg:mt-[100px] text-[13px] px-3 py-[6px] font-bold">
                  <a href="#">► 1:54</a>
                </button>
              </div>
            </a>
            <a href="#">
              <p className="text-gray-700 hover:underline pt-12 lg:pt-6 text-[17px]">
                Kirk murder suspect appears in court
              </p>
            </a>
            <div className="flex gap-1 pt-[42px] pb-4">
              <div className="text-gray-500 text-[12px] pt-1">17 Sept</div>
            </div>
            <hr className="text-gray-300"></hr>
          </div>
          {/* 28 */}
          <div className="">
            <a href="#">
              <div className="relative">
                <img src="dt28.jpg" className="rounded absolute" />
                <button className="bg-red-500 text-white relative mt-[210px] lg:mt-[100px] text-[13px] px-3 py-[6px] font-bold">
                  <a href="#">► LIVE</a>
                </button>
              </div>
            </a>
            <a href="#">
              <p className="text-gray-700 hover:underline pt-12 lg:pt-6 text-[17px]">
                Watch Sky News coverage live from Windsor
              </p>
            </a>
            <div className="flex gap-1 pt-[40px] pb-4">
              <div className="text-gray-500 text-[12px] pt-1">17 Sept</div>
              <div className="text-gray-500">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                UK
              </div>
            </div>
            <hr className="text-gray-300"></hr>
          </div>
        </div>

        <div className="flex justify-center space-x-2 mt-4">
          {/* Page Numbers */}
          {[...Array(5)].map((_, i) => {
            const page = i + 1;
            const isActive = currentPage === page;

            return (
              <button
                key={page}
                onClick={() => handleClick(page)}
                className={`px-4 py-2 transition ${
                  isActive
                    ? "bg-zinc-100 font-bold hover:bg-blue-700 hover:text-white" // only active gets blue hover
                    : "hover:underline" // others stay simple
                }`}
              >
                {page}
              </button>
            );
          })}

          {/* Dots */}
          <span className="pt-2">...</span>

          {/* Last Page */}
          <button
            onClick={() => handleClick(totalPages)}
            className={`px-4 py-2  transition ${
              currentPage === totalPages
                ? "bg-zinc-100 font-bold hover:bg-blue-700 hover:text-white"
                : "hover:underline"
            }`}
          >
            {totalPages}
          </button>

          {/* Next Button */}
          <button
            onClick={() => handleClick(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2"
          >
            <div className="flex gap-2">
              <div>Next</div>
              <div>
                <p className="font-bold text-blue-700">❯</p>
              </div>
            </div>
          </button>
        </div>
      </div>
      {/* footer */}
      <div className=" container-fluid bg-white h-[660px] mt-13 shadow-[0_-4px_6px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-[20px] lg:px-[220px]">
          <div className="flex gap-3 pt-[40px]">
            <div>
              <a href="#">
                <img src="youtube.svg" className="w-[21px] pt-[2px]" />
              </a>
            </div>
            <div className="text-gray-500">|</div>
            <div>
              <a href="#">
                <img src="facebook.svg" className="w-[18px] pt-[2px]" />
              </a>
            </div>
            <div className="text-gray-500">|</div>
            <div>
              <a href="#">
                <img src="X.png" className="w-[30px] pt-1" />
              </a>
            </div>
            <div className="text-gray-500">|</div>
            <div>
              <a href="#">
                <img src="tiktok.png" className="w-[20px]" />
              </a>
            </div>
            <div className="text-gray-500">|</div>
            <div>
              <a href="#">
                <img src="instagram.svg" className="w-[20px]" />
              </a>
            </div>
            <div className="text-gray-500">|</div>
            <div>
              <a href="#">
                <img src="linkdin.png" className="w-[20px]" />
              </a>
            </div>
            <div className="text-gray-500">|</div>
            <div>
              <a href="#">
                <img src="whatsapp.svg" className="w-[20px]" />
              </a>
            </div>
          </div>
          <hr className="text-gray-200 mt-[35px]"></hr>
          <div className="grid grid-cols-12 mt-7">
            <div className="col-span-6 lg:col-span-3">
              <div className="text-gray-800">
                <p className="text-[19px]">About Sky News</p>
                <ul className="text-[15px]">
                  <a href="#" className="hover:underline">
                    <li className="pt-4">About Us</li>
                  </a>
                  <a href="#" className="hover:underline">
                    <li className="pt-2">Sky News profiles</li>
                  </a>
                  <a href="#" className="hover:underline">
                    <li className="pt-2">Sky News International</li>
                  </a>
                  <a href="#" className="hover:underline">
                    <li className="pt-2">Sky News Library Sales</li>
                  </a>
                  <a href="#" className="hover:underline">
                    <li className="pt-2">Site Map</li>
                  </a>
                  <a href="#" className="hover:underline">
                    <li className="pt-2">Editorial Guidelines</li>
                  </a>
                  <a href="#" className="hover:underline">
                    <li className="pt-2">Sky News Board</li>
                  </a>
                </ul>
              </div>
            </div>
            <div className="col-span-6 lg:col-span-3">
              <div className="text-gray-800">
                <p className="text-[19px]">Sky News Services</p>
                <ul className="text-[15px]">
                  <a href="#" className="hover:underline">
                    <li className="pt-4">Sky News RSS</li>
                  </a>
                  <a href="#" className="hover:underline">
                    <li className="pt-2">Sky News For Your Phone</li>
                  </a>
                  <a href="#" className="hover:underline">
                    <li className="pt-2">Sky News Radio</li>
                  </a>
                </ul>
              </div>
            </div>
            <div className="col-span-6 lg:col-span-3">
              <div className="text-gray-800">
                <p className="text-[19px] pt-4 lg:pt-0">Sky Channels</p>
                <ul className="text-[15px]">
                  <a href="#" className="hover:underline">
                    <li className="pt-4">Sky Witness</li>
                  </a>
                  <a href="#" className="hover:underline">
                    <li className="pt-2">Sky Atlantic</li>
                  </a>
                  <a href="#" className="hover:underline">
                    <li className="pt-2">Sky Arts</li>
                  </a>
                  <a href="#" className="hover:underline">
                    <li className="pt-2">Sky Cinema</li>
                  </a>
                  <a href="#" className="hover:underline">
                    <li className="pt-2">Sky Sports</li>
                  </a>
                </ul>
              </div>
            </div>
            <div className="col-span-6 lg:col-span-3">
              <div className="text-gray-800">
                <p className="text-[19px] pt-4 lg:pt-0">More Sky Sites</p>
                <ul className="text-[15px]">
                  <a href="#" className="hover:underline">
                    <li className="pt-4">NOW</li>
                  </a>
                  <a href="#" className="hover:underline">
                    <li className="pt-2">Sky Zero</li>
                  </a>
                  <a href="#" className="hover:underline">
                    <li className="pt-2">Sky Academy Studios</li>
                  </a>
                  <a href="#" className="hover:underline">
                    <li className="pt-2">Bigger Picture</li>
                  </a>
                  <a href="#" className="hover:underline">
                    <li className="pt-2">Sky Group</li>
                  </a>
                  <a href="#" className="hover:underline">
                    <li className="pt-2">Sky Bet</li>
                  </a>
                  <a href="#" className="hover:underline">
                    <li className="pt-2">Sky.com</li>
                  </a>
                  <a href="#" className="hover:underline">
                    <li className="pt-2">Sky News Arabia</li>
                  </a>
                  <a href="#" className="hover:underline">
                    <li className="pt-2">Advertise With Us</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <hr className="text-gray-200 mt-[35px]"></hr>
          <div className="text-gray-800 text-[15px] mt-[35px]">
            <ul className="block lg:flex  gap-5">
              <div>
                <div className="flex gap-5">
                  <a href="terms" className="hover:underline">
                    <li>Terms & Conditions</li>
                  </a>
                  <a href="#" className="hover:underline">
                    <li>Privacy & Cookies</li>
                  </a>
                  <a href="#" className="hover:underline">
                    <li>Privacy Options</li>
                  </a>
                </div>
              </div>
              <div>
                <div className="flex gap-5 pt-5 lg:pt-0">
                  <a href="#" className="hover:underline">
                    <li>Accessibility</li>
                  </a>
                  <a href="#" className="hover:underline">
                    <li>Contact Us</li>
                  </a>
                </div>
              </div>
            </ul>
          </div>
          <div className="flex gap-5 mt-[35px]">
            <div>
              <a href="#">
                <img src="sky.png" />
              </a>
            </div>
            <div className="text-gray-800 text-[15px]">
              <p className="pt-3">© 2025 Sky UK</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
