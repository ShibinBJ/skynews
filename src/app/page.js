"use client";
import Image from "next/image";
import ArtPage from "./article/page";
import Terms from "./terms/page";
import { Menu, X } from "lucide-react";
import content from "./data/content.json";
import image from "./data/image.json";
import { useEffect, useState } from "react";

export default function Home() {
  const [active, setActive] = useState("Latest");

  const menu = ["Latest", "Sky News Originals", "Most Watched", "Explainers"];
  const [open, setOpen] = useState(false);
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
    const [stories, setStories] = useState([]);

    useEffect(() => {
      fetch("/api/hello")
        .then((res) => res.json())
        .then((data) => setStories(data.stories));
    }, []);

  
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
                        link === "Home"
                          ? "border-blue-700 border-b-2"
                          : "border-gray-200 hover:border-b-2 hover:border-blue-700"
                      }`}
                    >
                      <span
                        className={
                          link === "Home"
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
            <li className="group text-gray-700 font-bold">
              <a href="#">Home</a>
              <hr className="w-full border-t-[2px] border-blue-700 border-opacity-0 group-hover:border-opacity-100 mt-3 transition-all duration-300" />
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
            <li className="group text-gray-600">
              <a href="#">Videos</a>
              <hr className=" border-1 opacity-0  border-blue-700 group-hover:opacity-100 mt-3"></hr>
            </li>
            <ul className="flex text-[16px]">
              <li className="text-gray-600 ps-[73px] relative">
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
      {/* top stories */}
      <div className="container mx-auto px-[20px] lg:px-[220px] pt-[50px]">
        <p className=" text-[26px] font-bold text-gray-800">TOP STORIES</p>

        <div className="grid grid-cols-12 gap-4 pt-[20px]">
          <div className="col-span-12 lg:col-span-6 relative">
            <a href="article">
              <img src={image.img1} className="rounded absolute" />
            </a>
            <button className="bg-blue-900 relative text-white px-5 py-2 mt-[230px] lg:mt-[230px]">
              EXCLUSIVE
            </button>
          </div>
          <div className="col-span-12 lg:col-span-3 mt-2 lg:mt-0">
            <p className="text-gray-800 hover:underline text-[22px] px-3 mb-2">
              <a href="article">
                Zelenskyy makes demand of Trump - and issues warning to NATO
              </a>
            </p>
            <p className="text-blue-600 Hover:underline cursor-pointer text-[12px] font-bold px-3 pt-4">
              'Putin wants to trick Trump'
            </p>
            <div className="flex gap-1 px-3 pt-[30px] lg:pt-[130px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">3 hrs ago</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                World
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
          <div className="col-span-12 lg:col-span-3 text-gray-800">
            <img src={image.img2} className="rounded cursor-pointer" />
            <p className="text-gray-800 hover:underline cursor-pointer pt-4">
              <a href="article">
                Bristling with frustration - Zelenskyy's message is clear
              </a>
            </p>
            <div className="flex gap-1 pt-[30px] lg:pt-[60px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">8 hrs ago</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                World
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-[20px] lg:px-[220px]">
        <div className="grid grid-cols-12 gap-6 pt-[20px]">
          <div className="col-span-12 lg:col-span-3 ">
            <a href="#">
              <div className="relative">
                <img src={image.img3} className="rounded absolute" />
                <button className="bg-yellow-300 relative mt-[240px] lg:mt-[110px] text-[13px] px-3 py-1">
                  <a href="#">BREAKING</a>
                </button>
              </div>
            </a>
            <p className="text-gray-800 hover:underline cursor-pointer pt-5">
              UN Commission says Israel is committing genocide in Gaza
            </p>
            <div className="flex gap-1 pt-[20px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">1 hrs ago</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                World
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
          <div className="col-span-12 lg:col-span-3 ">
            <a href="#">
              <div className="relative">
                <img src={image.img4} className="rounded absolute" />
                <button className="bg-yellow-300 relative mt-[240px] lg:mt-[110px] text-[13px] px-3 py-1">
                  <a href="#">BREAKING</a>
                </button>
                <button className="bg-red-500 relative text-white  mt-[110px] text-[13px] px-3 py-1">
                  <a href="#">LIVE</a>
                </button>
              </div>
            </a>
            <p className="text-gray-800 hover:underline cursor-pointer px-1 pt-5">
              Ground forces moving deeper into Gaza City, Israel says - as
              attack to 'destroy Hamas' begins
            </p>
            <div className="flex gap-1 pt-[44px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">1 hrs ago</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                World
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
          <div className="col-span-12 lg:col-span-3 ">
            <img src={image.img5} className="rounded cursor-pointer" />
            <p className="text-gray-800 hover:underline cursor-pointer px-1 pt-3">
              Trump arrives in UK today - and no state visit has ever had such
              an unseemly backdrop as this
            </p>
            <div className="flex gap-1 pt-[20px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">7 hrs ago</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                Uk
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
          <div className="col-span-12 lg:col-span-3 ">
            <a href="#">
              <div className="relative">
                <img src="i6.jpg" className="rounded absolute" />
                <button className="bg-blue-900 relative text-white mt-[240px] lg:mt-[110px] text-[13px] px-3 py-1">
                  <a href="#">EXPLAINER</a>
                </button>
              </div>
            </a>
            <p className="text-gray-800 hover:underline cursor-pointer px-1 pt-5">
              Starmer under pressure as MPs to debate Mandelson appointment and
              Epstein links
            </p>
            <div className="flex gap-1 pt-[19px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">18 mins ago</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                Politics
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-[20px] lg:px-[220px] mt-3">
        <div className="grid grid-cols-12 gap-6 pt-[20px]">
          <div className="col-span-12 lg:col-span-3">
            <a href="#">
              <div className="relative">
                <img src="i7.jpg" className="rounded absolute" />
                <button className="bg-blue-900 relative text-white mt-[240px] lg:mt-[110px] text-[13px] px-3 py-1">
                  <a href="#">EXCLUSIVE</a>
                </button>
              </div>
            </a>
            <p className="text-gray-800 hover:underline cursor-pointer pt-5">
              Income tax warning with state pension set to rise | Money
            </p>
            <div className="flex gap-1 pt-[39px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">1 hr ago</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                Money
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <a href="#">
              <div className="relative">
                <img src="i8.jpg" className="rounded absolute" />
                <button className="bg-red-500 relative text-white mt-[240px] lg:mt-[110px] text-[13px] px-3 py-1">
                  <a href="#">LIVE</a>
                </button>
              </div>
            </a>
            <p className="text-gray-800 hover:underline cursor-pointer px-1 pt-5">
              Britain's drugs industry is suffering withdrawal symptoms, and it
              could prove costly
            </p>
            <div className="flex gap-1 pt-[15px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">10 hrs ago</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                Money
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <img src="i9.jpg" className="rounded cursor-pointer" />
            <p className="text-gray-800 hover:underline cursor-pointer px-1 pt-3">
              Ricky Hatton's ex-girlfriend Claire Sweeney pays tribute after
              boxer's death
            </p>
            <div className="flex gap-1 pt-[15px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">13 mins ago</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                Uk
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <img src="i10.jpg" className="rounded cursor-pointer" />
            <p className="text-gray-800 hover:underline cursor-pointer px-1 pt-3">
              Another ex-Tory minister defects to Reform UK
            </p>
            <div className="flex gap-1 pt-[39px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">11 mins ago</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                Politics
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-[20px] lg:px-[220px] mt-3">
        <p className=" text-[26px] font-bold text-gray-800 pt-[35px]">
          TRUMP'S STATE VISIT
        </p>
        <div className="grid grid-cols-12 gap-4 pt-[20px]">
          <div className="col-span-12 lg:col-span-6 relative">
            <img src="i11.jpg" className="rounded cursor-pointer absolute" />
            <button className="bg-white relative text-black px-5 py-2 mt-[230px] lg:mt-[230px]">
              ► 2:54
            </button>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <p className="text-gray-800 hover:underline cursor-pointer text-[22px] pt-3 lg-pt-0 px-3">
              {content[10].title}
            </p>
            <div className="flex gap-1 px-3 pt-[40px] lg:pt-[165px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">35 mins ago</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                US
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
          <div className="col-span-12 lg:col-span-3 text-gray-800">
            <a href="#">
              <div className="relative">
                <img src="i12.jpg" className="rounded absolute" />
                <button className="bg-red-500 relative text-white mt-[240px] lg:mt-[110px] text-[13px] px-3 py-1">
                  <a href="#">LIVE</a>
                </button>
              </div>
            </a>
            <p className="text-gray-800 cursor-pointer hover:underline pt-5">
              {content[11].title}
            </p>
            <div className="flex gap-1 pt-[60px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">3 hrs ago</div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-[20px] lg:px-[220px]">
        <div className="grid grid-cols-12 gap-4 pt-[20px]">
          <div className="col-span-12 lg:col-span-4">
            <a href="#">
              <img src="i13.jpg" className="rounded" />
              <p className="text-gray-800 pt-2 lg:pt-0 hover:underline">
                {content[12].title}
              </p>
            </a>
            <div className="flex gap-1 pt-[16px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">8 hrs ago</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                UK
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <a href="#">
              <div className="relative">
                <img src="i14.jpg" className="rounded absolute" />
                <button className="bg-blue-900 relative text-white mt-[240px] lg:mt-[160px] text-[13px] px-3 py-1">
                  <a href="#">EXPLAINER</a>
                </button>
              </div>
            </a>
            <a href="#">
              <p className="text-gray-800 hover:underline pt-5 lg:pt-3">
                {content[13].title}
              </p>
            </a>
            <div className="flex gap-1 pt-[16px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">8 hrs ago</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                UK
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <a href="#">
              <img src="i15.jpg" className="rounded cursor-pointer" />
              <p className="text-gray-800 lg:pt-0 pt-2 cursor-pointer hover:underline">
                {content[14].title}
              </p>
            </a>
            <div className="flex gap-1 pt-[16px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">3 hrs ago</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                Uk
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
        </div>
      </div>
      {/* Videos */}
      <div className=" container-fluid bg-blue-900 h-[350px] lg:h-[415px] mt-13">
        <div className="container mx-auto px-[20px] lg:px-[220px]">
          <p className="text-[26px] font-bold text-white pt-[30px]">VIDEOS</p>
          <ul className="flex text-white text-[12px] lg:text-[18px] gap-4 lg:gap-7 pt-[18px] lg:pt-[27px]">
            {menu.map((item) => (
              <li
                key={item}
                className={`cursor-pointer ${
                  active === item ? "text-white font-bold" : "text-gray-400"
                }`}
                onClick={() => setActive(item)}
              >
                <a>{item}</a>
                {active === item && <hr className="border border-white mt-2" />}
              </li>
            ))}
          </ul>
          <hr className=" text-white"></hr>
          <ul className=" flex text-[17px] pt-[1px] gap-6 whitespace-nowrap overflow-x-auto mt-6 pb-5">
            <li className="min-w-[200px] lg:min-w-[255px]">
              <div>
                <a href="#">
                  <div className="relative">
                    <img src="simg1.jpg" className="rounded absolute" />
                    <button className="bg-blue-900 relative text-white mt-[70px] lg:mt-[110px] text-[13px] px-3 py-1">
                      <a href="#">► 0:40</a>
                    </button>
                  </div>
                </a>
              </div>
              <p className="text-white pt-4">
                <a
                  href="#"
                  className="hover:underline text-[13px] lg:text-[17px]"
                >
                  Castle projection highlights<br></br> Trump-Epstein links
                </a>
              </p>
            </li>

            <li className="min-w-[200px] lg:min-w-[255px]">
              <div>
                <a href="#">
                  <div className="relative">
                    <img src="simg2.jpg" className="rounded absolute" />
                    <button className="bg-blue-900 relative text-white  mt-[70px] lg:mt-[110px] text-[13px] px-3 py-1">
                      <a href="#">► 13:29</a>
                    </button>
                  </div>
                </a>
              </div>
              <p className="text-white pt-4">
                <a
                  href="#"
                  className="hover:underline text-[13px] lg:text-[17px]"
                >
                  FBI director clashes with<br></br> senators over Epstein
                </a>
              </p>
            </li>

            <li className="min-w-[200px] lg:min-w-[255px]">
              <div>
                <a href="#">
                  <div className="relative">
                    <img src="simg3.jpg" className="rounded absolute" />
                    <button className="bg-blue-900 relative text-white  mt-[70px] lg:mt-[110px] text-[13px] px-3 py-1">
                      <a href="#">► 2:53</a>
                    </button>
                  </div>
                </a>
              </div>
              <p className="text-white pt-4">
                <a
                  href="#"
                  className="hover:underline text-[13px] lg:text-[17px]"
                >
                  Is Israel committing genocide?
                </a>
              </p>
            </li>

            <li className="min-w-[200px] lg:min-w-[255px]">
              <div>
                <a href="#">
                  <div className="relative">
                    <img src="simg4.jpg" className="rounded absolute" />
                    <button className="bg-blue-900 relative text-white  mt-[70px] lg:mt-[110px] text-[13px] px-3 py-1">
                      <a href="#">► 0:37</a>
                    </button>
                  </div>
                </a>
              </div>
              <p className="text-white pt-4">
                <a
                  href="#"
                  className="hover:underline text-[13px] lg:text-[17px]"
                >
                  'Robert Redford was a hero<br></br> to me'
                </a>
              </p>
            </li>

            <li className="min-w-[200px] lg:min-w-[255px]">
              <div>
                <a href="#">
                  <div className="relative">
                    <img src="simg5.jpg" className="rounded absolute" />
                    <button className="bg-blue-900 relative text-white  mt-[70px] lg:mt-[110px] text-[13px] px-3 py-1">
                      <a href="#">► 3:05</a>
                    </button>
                  </div>
                </a>
              </div>
              <p className="text-white pt-4">
                <a
                  href="#"
                  className="hover:underline text-[13px] lg:text-[17px]"
                >
                  Trump lands in UK for his second <br></br>state visit
                </a>
              </p>
            </li>

            <li className="min-w-[200px] lg:min-w-[255px]">
              <div>
                <a href="#">
                  <div className="relative">
                    <img src="simg6.jpg" className="rounded absolute" />
                    <button className="bg-blue-900 relative text-white  mt-[70px] lg:mt-[110px] text-[13px] px-3 py-1">
                      <a href="#">► 0:30</a>
                    </button>
                  </div>
                </a>
              </div>
              <p className="text-white pt-4">
                <a
                  href="#"
                  className="hover:underline text-[13px] lg:text-[17px]"
                >
                  What we know about the case<br></br> against Tyler Robinson
                </a>
              </p>
            </li>

            <li className="min-w-[200px] lg:min-w-[255px]">
              <div>
                <a href="#">
                  <div className="relative">
                    <img src="simg7.jpg" className="rounded absolute" />
                    <button className="bg-blue-900 relative text-white  mt-[70px] lg:mt-[110px] text-[13px] px-3 py-1">
                      <a href="#">► 0:55</a>
                    </button>
                  </div>
                </a>
              </div>
              <p className="text-white pt-4">
                <a
                  href="#"
                  className="hover:underline text-[13px] lg:text-[17px]"
                >
                  Royal funeral a 'historic' moment
                </a>
              </p>
            </li>

            <li className="min-w-[200px] lg:min-w-[255px]">
              <div>
                <a href="#">
                  <div className="relative">
                    <img src="simg8.jpg" className="rounded absolute" />
                    <button className="bg-blue-900 relative text-white  mt-[70px] lg:mt-[110px] text-[13px] px-3 py-1">
                      <a href="#">► 1:17</a>
                    </button>
                  </div>
                </a>
              </div>
              <p className="text-white pt-4">
                <a
                  href="#"
                  className="hover:underline text-[13px] lg:text-[17px]"
                >
                  'It's going to be great'
                </a>
              </p>
            </li>

            <li className="min-w-[200px] lg:min-w-[255px]">
              <div>
                <a href="#">
                  <div className="relative">
                    <img src="simg9.jpg" className="rounded absolute" />
                    <button className="bg-blue-900 relative text-white  mt-[70px] lg:mt-[110px] text-[13px] px-3 py-1">
                      <a href="#">► 1:35</a>
                    </button>
                  </div>
                </a>
              </div>
              <p className="text-white pt-4">
                <a
                  href="#"
                  className="hover:underline text-[13px] lg:text-[17px]"
                >
                  Trump praises King as he<br></br> leaves US
                </a>
              </p>
            </li>

            <li className="min-w-[200px] lg:min-w-[255px]">
              <div>
                <a href="#">
                  <div className="relative">
                    <img src="simg10.jpg" className="rounded absolute" />
                    <button className="bg-blue-900 relative text-white  mt-[70px] lg:mt-[110px] text-[13px] px-3 py-1">
                      <a href="#">► 2:33</a>
                    </button>
                  </div>
                </a>
              </div>
              <p className="text-white pt-4">
                <a
                  href="#"
                  className="hover:underline text-[13px] lg:text-[17px]"
                >
                  Trump touches down in UK
                </a>
              </p>
            </li>

            <li className="min-w-[200px] lg:min-w-[255px]">
              <div>
                <a href="#">
                  <div className="relative">
                    <img src="simg11.jpg" className="rounded absolute" />
                    <button className="bg-blue-900 relative text-white  mt-[70px] lg:mt-[110px] text-[13px] px-3 py-1">
                      <a href="#">► 1:21</a>
                    </button>
                  </div>
                </a>
              </div>
              <p className="text-white pt-4">
                <a
                  href="#"
                  className="hover:underline text-[13px] lg:text-[17px]"
                >
                  'We cannot be bystanders'
                </a>
              </p>
            </li>

            <li className="min-w-[200px] lg:min-w-[255px]">
              <div>
                <a href="#">
                  <div className="relative">
                    <img src="simg12.jpg" className="rounded absolute" />
                    <button className="bg-blue-900 relative text-white  mt-[70px] lg:mt-[110px] text-[13px] px-3 py-1">
                      <a href="#">► 1:12</a>
                    </button>
                  </div>
                </a>
              </div>
              <p className="text-white pt-4">
                <a
                  href="#"
                  className="hover:underline text-[13px] lg:text-[17px]"
                >
                  'I got a sense of simmering fury'
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
      {/* more top stories */}
      <div className="container mx-auto px-[20px] lg:px-[220px] mt-[45px]">
        <p className="text-gray-800 text-[28px] font-bold">MORE TOP STORIES</p>
        <div className="grid grid-cols-12 gap-6 pt-[20px]">
          <div className="col-span-12 lg:col-span-3">
            <a href="#">
              <img src="tsi1.jpg" className="rounded" />
            </a>
            <p className="text-gray-800 hover:underline pt-3">
              <a href="#">
                Trump's state visit begins as Epstein images beamed on to
                Windsor Castle
              </a>
            </p>
            <div className="flex gap-1 pt-[20px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">6 mins ago</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                UK
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <a href="#">
              <img src="tsi2.png" className="rounded" />
            </a>
            <p className="text-gray-800 hover:underline pt-3">
              <a href="#">
                Zelenskyy tells Yalda: Trump, the time to act is now
              </a>
            </p>
            <div className="flex gap-1 pt-[44px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">33 mins ago</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                World
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <a href="#">
              <img src="tsi3.jpg" className="rounded" />
            </a>
            <p className="text-gray-800 hover:underline pt-3">
              <a href="#">
                Madeleine McCann suspect slapped with strict conditions ahead of
                expected release today
              </a>
            </p>
            <div className="flex gap-1 pt-[20px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">1 hr ago</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                Uk
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <a href="#">
              <img src="tsi4.jpg" className="rounded" />
            </a>
            <p className="text-gray-800 hover:underline pt-3">
              <a href="#">
                Government still waiting for first deportations of small boat
                migrants as court blocks departure
              </a>
            </p>
            <div className="flex gap-1 pt-[20px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">Yesterday</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                Politics
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-[20px] lg:px-[220px] mt-2">
        <div className="grid grid-cols-12 gap-6 pt-[20px]">
          <div className="col-span-12 lg:col-span-3">
            <a href="#">
              <img src="tis5.jpg" className="rounded" />
            </a>
            <p className="text-gray-800 hover:underline pt-3">
              <a href="#">
                Israel's Gaza City offensive branded 'horrific' - as pressure
                mounts for Starmer to act
              </a>
            </p>
            <div className="flex gap-1 pt-[20px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">1 hr ago</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                World
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <a href="#">
              <img src="tis6.jpg" className="rounded" />
            </a>
            <p className="text-gray-800 hover:underline pt-3">
              <a href="#">Wednesday's national newspaper front pages</a>
            </p>
            <div className="flex gap-1 pt-[44px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">3 hrs ago</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                UK
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <a href="#">
              <img src="tis7.jpg" className="rounded" />
            </a>
            <p className="text-gray-800 hover:underline pt-3">
              <a href="#">Hollywood actor and director Robert Redford dies</a>
            </p>
            <div className="flex gap-1 pt-[43px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">Yesterday</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                Ents & Arts
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <a href="#">
              <img src="tisi8.jpg" className="rounded" />
            </a>
            <p className="text-gray-800 hover:underline pt-3">
              <a href="#">
                King, Prince William and Kate attend Duchess of Kent's funeral
              </a>
            </p>
            <div className="flex gap-1 pt-[43px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">Yesterday</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                UK
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-[20px] lg:px-[220px] mt-2">
        <div className="grid grid-cols-12 gap-6 pt-[20px]">
          <div className="col-span-12 lg:col-span-3">
            <a href="#">
              <img src="tsi9.jpg" className="rounded" />
            </a>
            <p className="text-gray-800 hover:underline pt-3">
              <a href="#">
                Adolescence continues winning streak with two Sky Arts Awards
              </a>
            </p>
            <div className="flex gap-1 pt-[44px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">Yesterday</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                Ents & Arts
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <a href="#">
              <img src="tsi10.jpg" className="rounded" />
            </a>
            <p className="text-gray-800 hover:underline pt-3">
              <a href="#">
                FBI director shouts at Democrat senators during oversight
                hearing
              </a>
            </p>
            <div className="flex gap-1 pt-[44px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">yesterday</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                US
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <a href="#">
              <img src="tsi11.jpg" className="rounded" />
            </a>
            <p className="text-gray-800 hover:underline pt-3">
              <a href="#">
                UN Commission says Israel is committing genocide in Gaza
              </a>
            </p>
            <div className="flex gap-1 pt-[44px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">Yesterday</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                World
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <a href="#">
              <img src="tsi12.jpg" className="rounded" />
            </a>
            <p className="text-gray-800 hover:underline pt-3">
              <a href="#">
                Zelenskyy makes demand of Trump - and issues warning to NATO
              </a>
            </p>
            <div className="flex gap-1 pt-[44px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">Yesterday</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                World
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
        </div>
      </div>
      {/* Editors Pick */}
      <div className="container mx-auto px-[20px] lg:px-[220px] mt-3">
        <p className=" text-[26px] font-bold text-gray-800 pt-[35px]">
          EDITOR'S PICK{" "}
          <span className="font-bold text-blue-600 text-[33px] ps-3"> ❯</span>
        </p>
        <div className="grid grid-cols-12 gap-4 pt-[20px]">
          <div className="col-span-12 lg:col-span-6 relative">
            <a href="#">
              <img src="epi1.jpg" className="rounded absolute" />
              <button className="relative bg-blue-900 text-white px-5 py-2 mt-[230px] lg:mt-[240px]">
                EXCLUSIVE
              </button>
            </a>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <p className="text-gray-800 hover:underline cursor-pointer text-[22px] px-3">
              Robert Redford's career in pictures
            </p>
            <div className="flex gap-1 px-3 pt-[30px] lg:pt-[195px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">Yesterday</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                Ents & Arts
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
          <div className="col-span-12 lg:col-span-3 text-gray-800">
            <a href="#">
              <div className="relative">
                <img src="epi2.jpg" className="rounded absolute" />
                <button className="bg-blue-900 relative text-white mt-[240px] lg:mt-[110px] text-[13px] px-3 py-1">
                  <a href="#">EXPLAINER</a>
                </button>
              </div>
            </a>
            <p className="text-gray-800 cursor-pointer hover:underline pt-5">
              Torture, rape and forced starvation as paramilitaries suffocate
              besieged city
            </p>
            <div className="flex gap-1 pt-[30px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">15 Sept</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                World
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-[20px] lg:px-[220px] mt-7">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-4">
            <a href="#">
              <div className="relative">
                <img src="epi3.png" className="rounded absolute" />
                <button className="bg-sky-900 relative text-white mt-[240px] lg:mt-[160px] text-[13px] px-3 py-1">
                  <a href="#">ANALYSIS</a>
                </button>
              </div>
            </a>
            <p className="text-gray-800 cursor-pointer hover:underline pt-6">
              Parasocial relationships are here to stay - what are the signs and
              are you guilty of having one?
            </p>
            <div className="flex gap-1 pt-[16px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">15 Sept</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                UK
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <img src="epi4.jpg" className="rounded cursor-pointer" />
            <p className="text-gray-800 cursor-pointer hover:underline pt-3">
              Oxford Street to be closed to traffic for one day - as plan to
              pedestrianise draws closer
            </p>
            <div className="flex gap-1 pt-[16px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">Yesterday</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                UK
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <a href="#">
              <div className="relative">
                <img src="epi5.jpg" className="rounded absolute" />
                <button className="bg-sky-900 relative text-white mt-[240px] lg:mt-[160px] text-[13px] px-3 py-1">
                  <a href="#">EYEWITNESS</a>
                </button>
              </div>
            </a>
            <p className="text-gray-800 cursor-pointer hover:underline pt-6">
              How runaway couple killed their baby
            </p>
            <div className="flex gap-1 pt-[38px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">15 Sept</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                Uk
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
        </div>
      </div>
      {/* Analysis */}
      <div className="container mx-auto px-[20px] lg:px-[220px] mt-[45px]">
        <p className="text-gray-800 font-bold text-[30px] hover:underline">
          <a href="#">
            ANALYSIS{" "}
            <span className="font-bold text-blue-600 text-[33px] ps-3"> ❯</span>
          </a>
        </p>
        <div className="grid grid-cols-12 gap-6 pt-[20px]">
          <div className="col-span-12 lg:col-span-3 bg-gray-100 place-items-center h-[350px]">
            <div className="pt-7">
              <a href="#">
                <img
                  className="rounded-full bg-white w-[120px]"
                  src="aimg1.png"
                />
              </a>
            </div>
            <p className="pt-4">
              <a href="#" className="text-blue-600 hover:underline text-[13px]">
                Yalda Hakim
              </a>
            </p>
            <p className="text-center px-5">
              <a href="#" className="text-gray-800 hover:underline text-[17px]">
                Bristling with frustration - Zelenskyy's message is clear
              </a>
            </p>
          </div>
          <div className="col-span-12 lg:col-span-3 bg-gray-100 place-items-center h-[350px]">
            <div className="pt-7">
              <a href="#">
                <img
                  className="rounded-full bg-white w-[120px]"
                  src="aimg2.png"
                />
              </a>
            </div>
            <p className="pt-4">
              <a href="#" className="text-blue-600 hover:underline text-[13px]">
                Rob Powell
              </a>
            </p>
            <p className="text-center px-5">
              <a href="#" className="text-gray-800 hover:underline text-[17px]">
                Starmer was aware of the risks of appointing the 'Prince of
                Darkness' as his man in Washington - to an extent
              </a>
            </p>
          </div>
          <div className="col-span-12 lg:col-span-3 bg-gray-100 place-items-center h-[350px]">
            <div className="pt-7">
              <a href="#">
                <img
                  className="rounded-full bg-white w-[120px]"
                  src="aimg3.png"
                />
              </a>
            </div>
            <p className="pt-4">
              <a href="#" className="text-blue-600 hover:underline text-[13px]">
                Alexandra Rogers
              </a>
            </p>
            <p className="text-center px-5">
              <a href="#" className="text-gray-800 hover:underline text-[17px]">
                Why sacking Lucy Powell might come back to haunt Starmer
              </a>
            </p>
          </div>
          <div className="col-span-12 lg:col-span-3 bg-gray-100 place-items-center h-[350px]">
            <div className="pt-7">
              <a href="#">
                <img
                  className="rounded-full bg-white w-[120px]"
                  src="aimg4.png"
                />
              </a>
            </div>
            <p className="pt-4">
              <a href="#" className="text-blue-600 hover:underline text-[13px]">
                Beth Rigby
              </a>
            </p>
            <p className="text-center px-5">
              <a href="#" className="text-gray-800 hover:underline text-[17px]">
                Two scandals and two allies gone in two weeks - serious
                questions remain about Starmer's political judgement
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* Free Daily Puzzles */}
      <div className="container mx-auto px-4 lg:px-[220px] mt-[50px]">
        <p className="text-gray-800 font-bold text-[27px] hover:underline">
          <a>
            FREE DAILY PUZZLES{" "}
            <span className="font-bold text-blue-600 text-[33px] ps-3"> ❯</span>
          </a>
        </p>
        <div className="grid grid-cols-12 gap-6 mt-4">
          <div className="col-span-12 lg:col-span-3">
            <a href="#">
              <img className="rounded" src="fdi1.png" />
            </a>
            <a href="#">
              <p className="text-gray-800 hover:underline pt-3">
                Play the classic numbers game
              </p>
              <hr className="text-gray-200 mt-[40px] lg:mt-[63px]"></hr>
            </a>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <a href="#">
              <img className="rounded" src="fdi2.png" />
            </a>
            <a href="#">
              <p className="text-gray-800 hover:underline pt-3">
                Play our maths challenge
              </p>
            </a>
            <hr className="text-gray-200 mt-[40px] lg:mt-[63px]"></hr>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <a href="#">
              <img className="rounded" src="fdi3.png" />
            </a>
            <a href="#">
              <p className="text-gray-800 hover:underline pt-3">
                Crack the code: one letter at a time
              </p>
            </a>
            <hr className="text-gray-200 mt-[40px] lg:mt-[63px]"></hr>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <a href="#">
              <img className="rounded" src="fdi4.png" />
            </a>
            <a href="#">
              <p className="text-gray-800 hover:underline pt-3">
                Join the tracks and complete the journey
              </p>
            </a>
            <hr className="text-gray-200 mt-[40px]"></hr>
          </div>
        </div>
      </div>
      {/* Listen To Sky News Podcasts */}
      <div className="container mx-auto px-[20px] lg:px-[220px] mt-[50px]">
        <p className="text-gray-800 font-bold text-[27px] hover:underline">
          <a>
            LISTEN TO SKY NEWS PODCASTS{" "}
            <span className="font-bold text-blue-600 text-[33px] ps-3"> ❯</span>
          </a>
        </p>
        <div className="grid grid-cols-12 gap-6 mt-4">
          <div className="col-span-12 lg:col-span-3">
            <a href="#">
              <div className="relative">
                <img src="pci1.png" className="rounded absolute" />
                <button className="bg-white relative mt-[240px] lg:mt-[100px] text-[13px] px-3 py-1">
                  <a href="#">
                    <img src="micb.svg" className="w-4" />
                  </a>
                </button>
              </div>
            </a>
            <a href="#">
              <p className="text-gray-800 hover:underline pt-6">
                Zelenskyy tells Yalda: Trump, the time to act is now
              </p>
            </a>
            <div className="flex gap-1 pt-[20px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">33 mins ago</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                World
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <a href="#">
              <div className="relative">
                <img src="pci2.jpg" className="rounded absolute" />
                <button className="bg-white relative mt-[240px] lg:mt-[100px] text-[13px] px-3 py-1">
                  <a href="#">
                    <img src="micb.svg" className="w-4" />
                  </a>
                </button>
              </div>
            </a>
            <a href="#">
              <p className="text-gray-800 hover:underline pt-6">
                Trump lands in London
              </p>
            </a>
            <div className="flex gap-1 pt-[44px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">1 hr ago</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                US
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <a href="#">
              <div className="relative">
                <img src="pci3.png" className="rounded absolute" />
                <button className="bg-white relative mt-[240px] lg:mt-[100px] text-[13px] px-3 py-1">
                  <a href="#">
                    <img src="micb.svg" className="w-4" />
                  </a>
                </button>
              </div>
            </a>
            <a href="#">
              <p className="text-gray-800 hover:underline pt-6">
                The migrant return scheme: One in, none out?
              </p>
            </a>
            <div className="flex gap-1 pt-[20px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">Yesterday</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                UK
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <a href="#">
              <div className="relative">
                <img src="pci2.jpg" className="rounded absolute" />
                <button className="bg-white relative mt-[240px] lg:mt-[100px] text-[13px] px-3 py-1">
                  <a href="#">
                    <img src="micb.svg" className="w-4" />
                  </a>
                </button>
              </div>
            </a>
            <a href="#">
              <p className="text-gray-800 hover:underline pt-6">
                Join the tracks and complete the journey
              </p>
            </a>
            <div className="flex gap-1 pt-[20px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">Yesterday</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                US
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
        </div>
      </div>
      {/* Most Read */}
      <div className="container mx-auto px-[20px] lg:px-[220px] mt-[50px]">
        <p className="text-gray-800 font-bold text-[27px] hover:underline">
          <a>MOST READ</a>
        </p>
        <div className="grid grid-cols-0 lg:grid-cols-2 grid-cols-1 lg:grid-rows-5 gap-4">
          <div>
            <div className=" text-gray-800 flex gap-8">
              <div className="text-blue-600 font-bold text-[45px]">1</div>
              <div className="text-gray-800 hover:underline text-[18px]">
                <a href="#">
                  <p className="pt-2">
                    Trump says he 'loves' UK as unprecedented state visit gets
                    under way - despite Epstein stunt
                  </p>
                </a>
              </div>
            </div>
            <hr className="text-gray-200 mt-4"></hr>
          </div>
          <div>
            <div className=" text-gray-800 flex gap-8">
              <div className="text-blue-600 font-bold text-[45px] hidden lg:block">
                6
              </div>
              <div className="text-blue-600 font-bold text-[45px] block lg:hidden">
                2
              </div>
              <div className="text-gray-800 hover:underline text-[18px]">
                <a href="#">
                  <p className="pt-2">
                    Arrests after Trump-Epstein images projected on to Windsor
                    Castle
                  </p>
                </a>
              </div>
            </div>
            <hr className="text-gray-200 mt-4"></hr>
          </div>
          <div>
            <div className=" text-gray-800 flex gap-8">
              <div className="text-blue-600 font-bold text-[45px] hidden lg:block">
                2
              </div>
              <div className="text-blue-600 font-bold text-[45px] block lg:hidden">
                3
              </div>
              <div className="text-gray-800 hover:underline text-[18px]">
                <a href="#">
                  <p className="pt-2">
                    New inflation figure announced - here's what it means for
                    you and which prices are rising | Money
                  </p>
                </a>
              </div>
            </div>
            <hr className="text-gray-200 mt-4"></hr>
          </div>
          <div>
            <div className=" text-gray-800 flex gap-8">
              <div className="text-blue-600 font-bold text-[45px] hidden lg:block">
                7
              </div>
              <div className="text-blue-600 font-bold text-[45px] block lg:hidden">
                4
              </div>
              <div className="text-gray-800 hover:underline text-[18px]">
                <a href="#">
                  <p className="pt-2">
                    Charlie Kirk suspect appears in court - as 'I'm sorry' text
                    revealed
                  </p>
                </a>
              </div>
            </div>
            <hr className="text-gray-200 mt-4"></hr>
          </div>
          <div>
            <div className=" text-gray-800 flex gap-8">
              <div className="text-blue-600 font-bold text-[45px] hidden lg:block">
                3
              </div>
              <div className="text-blue-600 font-bold text-[45px] block lg:hidden">
                5
              </div>
              <div className="text-gray-800 hover:underline text-[18px]">
                <a href="#">
                  <p className="pt-2">
                    Wednesday's national newspaper front pages
                  </p>
                </a>
              </div>
            </div>
            <hr className="text-gray-200 mt-4"></hr>
          </div>
          <div>
            <div className=" text-gray-800 flex gap-8">
              <div className="text-blue-600 font-bold text-[45px] hidden lg:block">
                8
              </div>
              <div className="text-blue-600 font-bold text-[45px] block lg:hidden">
                6
              </div>
              <div className="text-gray-800 hover:underline text-[18px]">
                <a href="#">
                  <p className="pt-2">
                    How Putin could target the critical cables that power UK
                  </p>
                </a>
              </div>
            </div>
            <hr className="text-gray-200 mt-4"></hr>
          </div>
          <div>
            <div className=" text-gray-800 flex gap-8">
              <div className="text-blue-600 font-bold text-[45px] hidden lg:block">
                4
              </div>
              <div className="text-blue-600 font-bold text-[45px] block lg:hidden">
                7
              </div>
              <div className="text-gray-800 hover:underline text-[18px]">
                <a href="#">
                  <p className="pt-2">
                    Ricky Hatton's son posts first message since his death
                  </p>
                </a>
              </div>
            </div>
            <hr className="text-gray-200 mt-4"></hr>
          </div>
          <div>
            <div className=" text-gray-800 flex gap-8">
              <div className="text-blue-600 font-bold text-[45px] hidden lg:block">
                9
              </div>
              <div className="text-blue-600 font-bold text-[45px] block lg:hidden">
                8
              </div>
              <div className="text-gray-800 hover:underline text-[18px]">
                <a href="#">
                  <p className="pt-2">
                    'African tribe' evicted from woodland site but set up new
                    camp nearby
                  </p>
                </a>
              </div>
            </div>
            <hr className="text-gray-200 mt-4"></hr>
          </div>
          <div>
            <div className=" text-gray-800 flex gap-8">
              <div className="text-blue-600 font-bold text-[45px] hidden lg:block">
                5
              </div>
              <div className="text-blue-600 font-bold text-[45px] block lg:hidden">
                9
              </div>
              <div className="text-gray-800 hover:underline text-[18px]">
                <a href="#">
                  <p className="pt-2">
                    Madeleine McCann suspect released after serving rape
                    sentence
                  </p>
                </a>
              </div>
            </div>
            <hr className="text-gray-200 mt-4"></hr>
          </div>
          <div>
            <div className=" text-gray-800 flex gap-8">
              <div className="text-blue-600 font-bold text-[45px]">10</div>
              <div className="text-gray-800 hover:underline text-[18px]">
                <a href="#">
                  <p className="pt-2">
                    Court ruling 'will not stop' France migrant deal, says
                    cabinet minister
                  </p>
                </a>
              </div>
            </div>
            <hr className="text-gray-200 mt-4"></hr>
          </div>
        </div>
      </div>
      {/* Ents & Arts */}
      <div className="container mx-auto px-4 lg:px-[220px] mt-[50px]">
        <p className="text-gray-800 font-bold text-[27px] hover:underline">
          <a>
            ENTS & ARTS{" "}
            <span className="font-bold text-blue-600 text-[33px] ps-3"> ❯</span>
          </a>
        </p>
        <div className="grid grid-cols-12 gap-6 mt-4">
          <div className="col-span-12 lg:col-span-3">
            <a href="#">
              <img className="rounded" src="eai1.jpg" />
            </a>
            <a href="#">
              <p className="text-gray-800 hover:underline pt-3">
                Spain votes to boycott Eurovision if Israel competes
              </p>
              <hr className="text-gray-200 mt-[68px]"></hr>
            </a>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <a href="#">
              <img className="rounded" src="eai2.png" />
            </a>
            <a href="#">
              <p className="text-gray-800 hover:underline pt-3">
                Ricky Hatton's ex-girlfriend Claire Sweeney pays tribute after
                boxer's death
              </p>
            </a>
            <hr className="text-gray-200 mt-[45px]"></hr>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <a href="#">
              <img className="rounded" src="eai3.jpg" />
            </a>
            <a href="#">
              <p className="text-gray-800 hover:underline pt-3">
                Trump sues New York Times
              </p>
            </a>
            <hr className="text-gray-200 mt-[93px]"></hr>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <a href="#">
              <img className="rounded" src="eai4.jpg" />
            </a>
            <a href="#">
              <p className="text-gray-800 hover:underline pt-3">
                Young Adolescence star makes history - as show cleans up at
                Emmys
              </p>
            </a>
            <hr className="text-gray-200 mt-[44px]"></hr>
          </div>
        </div>
      </div>
      {/* Science & tech */}
      <div className="container mx-auto px-4 lg:px-[220px] mt-[50px]">
        <p className="text-gray-800 font-bold text-[27px] hover:underline">
          <a>
            SCIENCE & TECH{" "}
            <span className="font-bold text-blue-600 text-[33px] ps-3"> ❯</span>
          </a>
        </p>
        <div className="grid grid-cols-12 gap-6 mt-4">
          <div className="col-span-12 lg:col-span-3">
            <a href="#">
              <img className="rounded" src="sti1.jpg" />
            </a>
            <a href="#">
              <p className="text-gray-800 hover:underline pt-3">
                UK and US firms announce deals in new 'golden age' of nuclear
                power ahead of Trump visit
              </p>
              <hr className="text-gray-200 mt-[44px]"></hr>
            </a>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <a href="#">
              <img className="rounded" src="sti2.jpg" />
            </a>
            <a href="#">
              <p className="text-gray-800 hover:underline pt-3">
                New site of UK drone factory revealed
              </p>
            </a>
            <hr className="text-gray-200 mt-[69px]"></hr>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <a href="#">
              <img className="rounded" src="sti3.png" />
            </a>
            <a href="#">
              <p className="text-gray-800 hover:underline pt-3">
                Parasocial relationships are here to stay - what are the signs
                and are you guilty of having one?
              </p>
            </a>
            <hr className="text-gray-200 mt-[44px]"></hr>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <a href="#">
              <img className="rounded" src="sti4.jpg" />
            </a>
            <a href="#">
              <p className="text-gray-800 hover:underline pt-3">
                Key scientist's daughter sheds new light on decades-long medical
                scandal
              </p>
            </a>
            <hr className="text-gray-200 mt-[44px]"></hr>
          </div>
        </div>
      </div>
      {/* The Wargame */}
      <div className="container mx-auto px-[20px] lg:px-[220px] mt-3">
        <p className=" text-[26px] font-bold text-gray-800 pt-[35px]">
          THE WARGAME
        </p>
        <div className="grid grid-cols-12 gap-4 pt-[20px]">
          <div className="col-span-12 lg:col-span-6 relative">
            <a href="#">
              <div className="relative">
                <img src="wi1.png" className="rounded absolute" />
                <button className="bg-white relative mt-[220px] lg:mt-[225px] text-[13px] px-5 py-3">
                  <a href="#">
                    <img src="micb.svg" className="w-6" />
                  </a>
                </button>
              </div>
            </a>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <p className="text-gray-800 hover:underline pt-2 lg:pt-0 cursor-pointer text-[22px] px-3">
              Episode one: False Flag
            </p>
            <div className="flex gap-1 px-3 pt-[30px] lg:pt-[225px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">10 Jan</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                UK
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
          <div className="col-span-12 lg:col-span-3 text-gray-800">
            <a href="#">
              <div className="relative">
                <img src="wi2.jpg" className="rounded absolute" />
                <button className="bg-white relative mt-[240px] lg:mt-[110px] text-[13px] px-3 py-1">
                  <a href="#">
                    <img src="micb.svg" className="w-4" />
                  </a>
                </button>
              </div>
            </a>
            <p className="text-gray-800 cursor-pointer hover:underline pt-6">
              Episode two: Armed Attack
            </p>
            <div className="flex gap-1 pt-[30px] lg:pt-[73px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">10 Jan</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                UK
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-[20px] lg:px-[220px] mt-7">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-4">
            <a href="#">
              <div className="relative">
                <img src="wi3.jpg" className="rounded absolute" />
                <button className="bg-white relative mt-[240px] lg:mt-[150px] text-[13px] px-4 py-2">
                  <a href="#">
                    <img src="micb.svg" className="w-4" />
                  </a>
                </button>
              </div>
            </a>
            <p className="text-gray-800 cursor-pointer hover:underline pt-7">
              Episode three: Where's the War Book?
            </p>
            <div className="flex gap-1 pt-[40px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">17 Jan</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                UK
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <a href="#">
              <div className="relative">
                <img src="wi4.jpg" className="rounded absolute" />
                <button className="bg-white relative mt-[240px] lg:mt-[150px] text-[13px] px-4 py-2">
                  <a href="#">
                    <img src="micb.svg" className="w-4" />
                  </a>
                </button>
              </div>
            </a>
            <p className="text-gray-800 cursor-pointer hover:underline pt-7">
              Episode four: Ultimatum
            </p>
            <div className="flex gap-1 pt-[40px] pb-4">
              <div className="text-gray-800 text-[12px] pt-1">17 Jan</div>
              <div className="text-gray-800">|</div>
              <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                UK
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div className="flex flex-row-reverse lg:block gap-4">
              <div>
                <a href="#">
                  <div className="relative">
                    <img src="wi5.jpg" className="rounded absolute lg:block" />
                    <button className="bg-white relative mt-[240px] lg:mt-[150px] text-[13px] px-4 py-2">
                      <a href="#">
                        <img src="micb.svg" className="w-4" />
                      </a>
                    </button>
                  </div>
                </a>
              </div>
              <div>
                <p className="text-gray-800 cursor-pointer hover:underline pt-7">
                  Episode five: The Choice
                </p>
                <div className="flex gap-1 pt-[40px] pb-4">
                  <div className="text-gray-800 text-[12px] pt-1">24 Jan</div>
                  <div className="text-gray-800">|</div>
                  <div className="text-blue-600 hover-underline cursor-pointer text-[12px] pt-1">
                    Uk
                  </div>
                </div>
              </div>
            </div>
            <hr className="text-gray-200"></hr>
          </div>
        </div>
      </div>
      {/* Sky Sports */}
      <div className="container mx-auto px-4 lg:px-[220px] mt-[50px]">
        <p className="text-gray-800 font-bold text-[27px]">
          <a href="#" className="flex gap-4">
            <img src="skylight.svg" className="w-[120px] lg:w-[170px]" />
            <span className="font-bold text-blue-600 text-[33px] lg:text-[43px]">
              {" "}
              ❯
            </span>
          </a>
        </p>
        <div className="grid grid-cols-12 gap-6 mt-6">
          <div className="col-span-12 lg:col-span-3">
            <div className="flex flex-row-reverse lg:block gap-4">
              <div>
                <a href="#">
                  <img className="rounded w-[320px] lg:w-auto" src="spi1.jpg" />
                </a>
              </div>
              <div>
                <a href="#">
                  <p className="text-gray-800 hover:underline pt-3">
                    Spurs edge Villarreal to hand Frank win in first Champions
                    League game
                  </p>
                </a>
              </div>
            </div>
            <hr className="text-gray-200 mt-[24px] lg:mt-[44px]"></hr>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <div className="flex flex-row-reverse lg:block gap-4">
              <div>
                <a href="#">
                  <img className="rounded w-[320px] lg:w-auto" src="spi2.jpg" />
                </a>
              </div>
              <div>
                {" "}
                <a href="#">
                  <p className="text-gray-800 hover:underline pt-3">
                    Brentford reach Carabao Cup fourth round after shoot-out win
                    over Villa
                  </p>
                </a>
              </div>
            </div>
            <hr className="text-gray-200 mt-[24px] lg:mt-[69px]"></hr>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <div className="flex flex-row-reverse lg:block gap-4">
              <div>
                <a href="#">
                  <img className="rounded w-[300px] lg:w-auto" src="spi3.jpg" />
                </a>
              </div>
              <div>
                <a href="#">
                  <p className="text-gray-800 hover:underline pt-3">
                    Arteta hails Martinelli as Arsenal subs combine to beat
                    Athletic Club
                  </p>
                </a>
              </div>
            </div>
            <hr className="text-gray-200 mt-[24px] lg:mt-[69px]"></hr>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <div className="flex flex-row-reverse lg:block gap-4">
              <div>
                <a href="#">
                  <img className="rounded w-[250px] lg:w-auto" src="spi4.jpg" />
                </a>
              </div>
              <div>
                <a href="#">
                  <p className="text-gray-800 hover:underline pt-3">
                    Where could Hamilton finally end his Ferrari podium wait?
                  </p>
                </a>
              </div>
            </div>
            <hr className="text-gray-200 mt-[24px] lg:mt-[69px]"></hr>
          </div>
        </div>
      </div>
      {/* Around Sky */}
      <div className="container mx-auto px-[20px] md:px-[20px] lg:px-[220px] mt-3">
        <p className=" text-[26px] font-bold text-gray-800 pt-[35px]">
          AROUND SKY
        </p>
        <div className="grid grid-cols-12 gap-6 mt-5">
          <div className="col-span-12 lg:col-span-4">
            <div className="flex flex-row-reverse lg:block gap-4">
              <div>
                <a href="#">
                  <img
                    src="limg1.jpg"
                    className="rounded cursor-pointer w-[430px] lg:w-auto"
                  />
                </a>
              </div>
              <div>
                <p className="text-gray-800 cursor-pointer hover:underline pt-3">
                  <a href="#">
                    Get closer to the action with all 9 dedicated sports
                    channels, including Premier League, F1 and more.
                  </a>
                </p>
              </div>
            </div>
            <hr className="text-gray-200 mt-[25px]  lg:mt-[45px]"></hr>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="flex flex-row-reverse lg:block gap-4">
              <div>
                <a href="#">
                  <img
                    src="limg2.jpg"
                    className="rounded cursor-pointer w-[320px] lg:w-auto"
                  />
                </a>
              </div>
              <div>
                <p className="text-gray-800 cursor-pointer hover:underline pt-3">
                  <a href="#">
                    Sky Cinema brings you more of the latest blockbusters than
                    anywhere else
                  </a>
                </p>
              </div>
            </div>
            <hr className="text-gray-200  mt-[25px] lg:mt-[70px]"></hr>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="flex flex-row-reverse lg:block gap-4">
              {" "}
              <div>
                <a href="#">
                  <img
                    src="limg3.png"
                    className="rounded cursor-pointer w-[500px] lg:w-auto"
                  />
                </a>
              </div>
              <div>
                <p className="text-gray-800 cursor-pointer hover:underline pt-3">
                  <a href="#">
                    Stream world-class sport on NOW for just £34.99 a month
                    without a contract on NOW for all 11 Sky Sports channels.
                  </a>
                </p>
              </div>
            </div>
            <hr className="text-gray-200 mt-[25px] lg:mt-[45px]"></hr>
          </div>
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
