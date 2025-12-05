"use client";
import { useState } from "react";
import Terms from "../terms/page"
import TagPage from "../tag/page";
import { Menu, X } from "lucide-react";
export default function ArtPage() {
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
                        link === "World"
                          ? "border-blue-700 border-b-2"
                          : "border-gray-200 hover:border-b-2 hover:border-blue-700"
                      }`}
                    >
                      <span
                        className={
                          link === "World"
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
            <li className="group text-gray-600 font-bold">
              <a href="#">World</a>
              <hr className=" w-full border-t-[2px] border-blue-700 border-opacity-0 group-hover:border-opacity-100 mt-3 transition-all duration-300"></hr>
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
      <div className="container mx-auto px-[20px] lg:px-[280px] mt-10">
        <button className="bg-blue-900 text-white text-[11px] px-2 py-[7px]">
          EXCLUSIVE
        </button>
        <p className="text-[45px] leading-12 text-zinc-600 pt-[6px]">
          Zelenskyy demands 'clear position' from<br></br> Trump on ending war
        </p>
        <p className="text-[20px] text-zinc-600 pt-8 leading-7">
          In a one-on-one interview in the Presidential Palace in Kyiv, the
          Ukrainian leader tells Sky<br></br>News' lead world news presenter
          Yalda Hakim that Donald Trump needs to take "strong <br></br>personal
          steps" and "make Putin afraid of him".
        </p>
        <div className="flex gap-1 pt-10">
          <div>
            <img src="clock.svg" className="w-[13px] pt-[5px]" />
          </div>
          <div className="text-[15px] text-zinc-500">
            Tuesday 16 September 2025 07:04, UK
          </div>
        </div>
        <a href="#">
          <div className="pt-10 relative">
            <img src="artimg1.jpg" className="absolute" />
            <div className="flex gap-[260px] lg:gap-[745px] relative pt-[200px] lg:pt-[380px]">
              <img src="play.svg" className="w-[60px] lg:w-[120px] ms-8" />
              <div>
                <button className="bg-zinc-700 text-white text-[14px] lg:text-[17px] text-bold px-2 py-1 mt-5 lg:mt-25">
                  13:10
                </button>
              </div>
            </div>
          </div>
        </a>
        <div className="text-gray-500 py-5 ps-7 text-[15px] bg-gray-100 mt-[21px] lg:mt-[38px]">
          Yalda Hakim interviews Volodymyr Zelenskyy
        </div>
        <div className="flex gap-3 mt-10">
          <button className="border rounded border-gray-300 px-5 py-2 hover:bg-gray-100">
            <a href="#">
              <img src="facebook.svg" className="w-5" />
            </a>
          </button>
          <button className="border rounded border-gray-300 px-4 py-2 hover:bg-gray-100">
            <a href="#">
              <img src="X.png" className="w-7" />
            </a>
          </button>
          <button className="border rounded border-gray-300 px-4 py-2 hover:bg-gray-100">
            <a href="#">
              <img src="wsapp.svg" className="w-6" />
            </a>
          </button>
          <button className="border rounded border-gray-300 px-4 py-2 hover:bg-gray-100">
            <a href="#">
              <img src="mail.svg" className="w-5" />
            </a>
          </button>
        </div>
      </div>
      {/* why trust */}
      <div className="container mx-auto px-[20px] lg:px-[280px] mt-8">
        <div className="w-[450px] lg:w-[640px]">
          <div className="flex gap-1 mt-11">
            <div>
              <img src="t.jpeg" className="w-7" />
            </div>
            <p className="text-[15px] text-zinc-500 pt-[3px]">
              <a href="#" className="hover:underline">
                Why you can trust Sky News ＞
              </a>
            </p>
          </div>
          <p className="text-[16px] lg:text-[20px] text-zinc-600 font-bold mt-10">
            Volodymyr Zelenskyy has called for a "clear position" from Donald
            Trump on a sanctions package for Russia and security guarantees for
            Ukraine to stop Vladimir Putin and end the war.
          </p>
          <p className="text-[16px] lg:text-[20px] text-gray-500 mt-9">
            In an exclusive interview with Sky News'
            <span>
              <a href="#" className="font-bold text-blue-900 hover:underline">
                lead world presenter Yalda Hakim
              </a>
            </span>
            , the Ukrainian president said the only way for the fighting to stop
            was for defined security guarantees to first be put in place.
          </p>
          <p className="text-[15px] text-zinc-700 font-bold mt-9">
            Sponsored link
          </p>
        </div>
        <div className="w-[450px] lg:w-[640px] mt-2">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4">
              <a href="#">
                <img src="gif1.gif" className="rounded" />
                <p className="text-[15px] lg:text-[17px] font-bold text-zinc-700 pt-1">
                  Pirates Climb Aboard SeaPlane - Watch What The Captain Did
                  Next
                </p>
                <p className="text-[12px] text-gray-500">Tips and Tricks</p>
                <hr className="border-2 text-orange-400 mt-1"></hr>
              </a>
            </div>
            <div className="col-span-4">
              <a href="#">
                <img src="gif2.webp" className="rounded" />
                <p className="text-[15px] lg:text-[17px] font-bold text-zinc-700 pt-1">
                  Sleep Apnea: Why Top Experts Are Calling This the Most
                  Ingenious...
                </p>
                <p className="text-[12px] text-gray-500">derila.com</p>
                <hr className="border-2 text-orange-400 mt-1"></hr>
              </a>
            </div>
            <div className="col-span-4">
              <a href="#">
                <img src="gif3.gif" className="rounded" />
                <p className="text-[15px] lg:text-[17px] font-bold text-zinc-700 pt-1">
                  Pirates Approach a Cruise Ship – See How the Genius Captain...
                </p>
                <p className="text-[12px] text-gray-500">Happy in Shape</p>
                <hr className="border-2 text-orange-400 mt-1"></hr>
              </a>
            </div>
          </div>
          <p className="text-[16px] lg:text-[20px] text-gray-500 pt-10">
            And that, he said, could only come if Mr Trump was bold.
          </p>
          <p className="text-[16px] lg:text-[20px] text-gray-500 pt-10">
            He told Sky News he hopes UK Prime Minister
            <span>
              {" "}
              <a href="#" className="font-bold text-blue-900 hover:underline">
                Sir Keir Starmer
              </a>{" "}
            </span>
            would drill into the detail of securing Ukraine's future with the
            president during his state visit to Britain this week.
          </p>
          <p className="text-[16px] lg:text-[20px] text-gray-500 pt-10">
            He said: "I very much hope he (Starmer) will be able to have a very
            specific discussion on the security guarantees of the US for
            <span>
              {" "}
              <a href="#" className="font-bold text-blue-900 hover:underline">
                Ukraine
              </a>
            </span>
            .
          </p>
          <p className="text-[16px] lg:text-[20px] text-gray-500 pt-10">
            "Before we end the war, I really want to have all the agreements in
            place. I want to… have a document that is supported by the US and
            all European partners. This is very important.
          </p>
          <p className="ttext-[16px] lg:text-[20px] text-gray-500 pt-10">
            "To make this happen, we need a clear position of President Trump."
          </p>
          <div className="pt-10">
            <img src="i1.jpg" />
          </div>
          <div className="text-gray-500 py-5 ps-7 text-[15px] bg-gray-100">
            Zelenskyy and Trump have endured a sometimes testy relationship.
            Pic: Reuters
          </div>
          <p className="text-[16px] lg:text-[20px] font-bold text-zinc-700 pt-10">
            'Make Putin afraid'
          </p>
          <p className="text-[16px] lg:text-[20px] text-gray-500 pt-10">
            <span>
              <a href="#" className="font-bold text-blue-900 hover:underline">
                Mr Zelenskyy
              </a>
            </span>{" "}
            also urged the US leader to take "strong personal steps" to "stop
            Putin",{" "}
            <span>
              <a href="#" className="font-bold text-blue-900 hover:underline">
                after Mr Trump urged NATO allies to stop buying Russian oil and
                put tariffs on China to pressure Moscow.
              </a>
            </span>
          </p>
          <p className="text-[16px] lg:text-[20px] text-gray-500 pt-10">
            "I believe that the US is strong enough to take decisions of their
            own," he said. "I believe Donald Trump can give us air defence
            systems in quantity and US has enough.
          </p>
          <p className="text-[16px] lg:text-[20px] text-gray-500 pt-10">
            "I'm sure the US can apply enough sanctions in order to hurt the
            Russian economy, plus Donald Trump has enough force to make Putin
            afraid of him.
          </p>
          <p className="text-[16px] lg:text-[20px] text-gray-500 pt-10">
            "I'm sure the US can apply enough sanctions in order to hurt the
            Russian economy, plus Donald Trump has enough force to make Putin
            afraid of him.
          </p>
          <p className="text-[16px] lg:text-[20px] font-bold text-zinc-700 pt-10">
            Read more from Sky News:
          </p>
          <p className="text-[16px] lg:text-[20px]">
            <a href="#" className="font-bold text-blue-900 hover:underline">
              Moscow trying to send a message with military drills
            </a>
          </p>
          <p className="text-[16px] lg:text-[20px]">
            <a href="#" className="font-bold text-blue-900 hover:underline">
              Russia's war rehearsals offer NATO one thing
            </a>
          </p>
          <div className="relative mt-2 lg:mt-10">
            <a href="#">
              <div className="pt-10 relative">
                <img src="readmore1.jpg" className="absolute" />
                <div className="flex gap-[260px] lg:gap-[400px] relative pt-[170px] lg:pt-[235px]">
                  <img src="play.svg" className="w-[60px] lg:w-[80px] ms-8" />
                  <div>
                    <button className="bg-zinc-700 text-white text-[14px] lg:text-[17px] text-bold px-2 py-1 mt-5 lg:mt-15">
                      13:10
                    </button>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="text-gray-500 py-5 ps-7 text-[15px] bg-gray-100 mt-6 lg:mt-8">
            Russia rehearses for war
          </div>
          <p className="text-[16px] lg:text-[20px] text-gray-600 pt-10">
            His comments came{" "}
            <span>
              <a href="#" className="font-bold text-blue-900 hover:underline">
                following criticism in his interview with Sky News
              </a>
            </span>
            - at the Presidential Palace in Kyiv - of the recent Trump-Putin
            summit in{" "}
            <span>
              <a href="#" className="font-bold text-blue-900 hover:underline">
                Alaska
              </a>
            </span>
            .
          </p>
          <p className="text-[16px] lg:text-[20px] text-gray-600 pt-10">
            He said Mr Trump "gave a lot to Putin" and that "he should have paid
            more" for it.
          </p>
          <p className="text-[16px] lg:text-[20px] text-gray-600 pt-10">
            "I believe, if it was a trilateral meeting [with Ukraine included],
            we would have some result," he added.
          </p>
          <div className="relative mt-2 lg:mt-10">
            <a href="#">
              <div className="pt-10 relative">
                <img src="readmore2.png" className="absolute" />
                <div className="flex gap-[260px] lg:gap-[400px] relative pt-[170px] lg:pt-[235px]">
                  <img src="play.svg" className="w-[60px] lg:w-[80px] ms-8" />
                  <div>
                    <button className="bg-zinc-700 text-white text-[14px] lg:text-[17px] text-bold px-2 py-1 mt-5 lg:mt-15">
                      3:01
                    </button>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="text-gray-500 py-5 ps-7 text-[15px] bg-gray-100 mt-6 lg:mt-8">
            Sky News exclusive interview with Zelenskyy
          </div>
          <div className="bg-gray-100 border border-gray-300 rounded-md hover:bg-white group mt-10">
            <a href="#">
              <div className="flex p-7 gap-7">
                <div>
                  <img src="follow.jpg" className="w-[200px]" />
                </div>
                <div>
                  <p className="text-[21px] text-gray-700">Follow the World</p>
                  <p className="text-[17px] text-gray-700 pt-3 pb-4">
                    Listen to the World with Richard Engel and Yalda Hakim every
                    Wednesday
                  </p>
                  <button className="border border-blue-800 text-blue-800 rounded group-hover:bg-blue-900 group-hover:text-white px-3 py-1">
                    Tap to follow
                  </button>
                </div>
              </div>
            </a>
          </div>

          <p className="text-[16px] lg:text-[20px] text-zinc-700 font-bold pt-10">
            Putin 'testing NATO', warns Zelenskyy
          </p>
          <p className="text-[16px] lg:text-[20px] text-gray-600 pt-10">
            As news broke that British fighter jets were{" "}
            <span>
              <a href="#" className="font-bold text-blue-900 hover:underline">
                flying air defence missions over Poland
              </a>
            </span>{" "}
            after a Russian drone incursion, Hakim asked the Ukrainian leader
            what message he thought Putin was sending to Europeans.
          </p>
          <p className="text-[16px] lg:text-[20px] text-gray-600 pt-10">
            "He's testing{" "}
            <span>
              <a href="#" className="font-bold text-blue-900 hover:underline">
                NATO
              </a>
            </span>
            ," he said. "He wants to see what NATO is ready for, what they're
            capable of, both diplomatically and politically, and how the local
            population will respond to this."
          </p>
          <p className="text-[16px] lg:text-[20px] text-gray-600 pt-10">
            "Also, in my opinion, the other message they are sending is, 'don't
            you dare to give Ukraine additional air defence systems, because you
            might need them yourself.'"
          </p>

          <div className="bg-zinc-100 rounded-md px-8 py-4">
            <div className="flex gap-4">
              <div>
                <p className="text-[62px] font-bold text-blue-900">|</p>
              </div>
              <div className="text-[22px] font-bold text-zinc-700">
                <p className="pt-5">
                  BRISTLING WITH FRUSTRATION - ZELENSKYY'S MESSAGE IS CLEAR
                </p>
              </div>
            </div>
            <div className="flex gap-5 pt-5">
              <div>
                <img src="aimg1.png" className="w-15 rounded-full bg-white" />
              </div>
              <div>
                <p className="pt-1">
                  <a
                    href="#"
                    className=" text-blue-900 hover:underline font-bold"
                  >
                    Yalda Hakim
                  </a>
                </p>
                <p className="text-gray-600">
                  Lead world news presenter{" "}
                  <span>
                    <a href="#" className=" text-blue-900 hover:underline">
                      @SkyYaldaHakim
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <p className="text-gray-600 pt-6">
              Ukraine's president has a very clear message for Trump - you alone
              have the power to stop Putin, and the time to act is now.
            </p>
            <p className="text-gray-600 pt-5">
              Meeting with me in Kyiv on the eve of the US president's state
              visit to Britain, Zelenskyy bristled with frustration at the
              failure of the Western powers to ramp up pressure on the Kremlin,
              even as the Russians escalated their attacks on Ukraine.
            </p>
            <p className="text-gray-600 pt-5">
              Asked if the summit between Trump and Putin in Alaska has proven a
              mistake, he responded without hesitation that Putin is clearly not
              paying a price for his actions.
            </p>
            <p className="text-gray-600 pt-5">
              Zelenskyy believes Trump is reluctant to put pressure on Putin
              because it might jeopardise attempts to end the war.
            </p>
            <p className="text-gray-600 pt-5">
              But the Ukrainian leader argues this isn't the way to handle the
              Russian president.
            </p>
            <p className="text-gray-600 pt-5">
              Zelenskyy also argued Trump's emphasis on getting the Europeans to
              ratchet up economic pressure - foremost by stopping their
              purchases of Russian energy and tariffing other buyers like China
              and India - was understandable, but that the world’s sole
              superpower shouldn’t wait for others to act.
            </p>
            <p className="text-gray-600 pt-5">
              Trump has called on EU countries to end all Russian oil and gas
              purchases - and only then will he consider imposing sanctions on
              Russia.
            </p>
          </div>

          <p className="text-[16px] lg:text-[20px] text-gray-600 pt-10">
            Mr Trump arrives in the UK today for{" "}
            <span>
              <a href="#" className=" text-blue-900 hover:underline font-bold">
                an unprecedented second state visit
              </a>
            </span>
            , following an invitation from
            <span>
              <a href="#" className=" text-blue-900 hover:underline font-bold">
                {" "}
                King Charles
              </a>
            </span>
            .
          </p>
          <p className="text-[16px] lg:text-[20px] text-gray-600 pt-10">
            He and First Lady Melania will stay at Windsor Castle and be treated
            to a flypast by the Red Arrows as well as UK and US F-35 military
            jets on the east lawn, and a special Beating Retreat military
            ceremony.
          </p>
          <p className="text-[16px] lg:text-[20px] text-gray-600 pt-10">
            They will also visit Chequers, the prime minister's official country
            residence in Buckinghamshire, though details of what they will
            discuss - and whether it will include the situation in Ukraine -
            have not been revealed.
          </p>
          <div className="mt-17">
            <p className="text-[17px] font-bold text-zinc-700">
              Related Topics
            </p>
            <div className="flex gap-2 mt-4">
              <button className="border rounded-full text-[13px] px-3 text-blue-900 border-blue-900 hover:bg-blue-900 hover:text-white">
                <a href="\tag">Donald Trump</a>
              </button>
              <button className="border rounded-full text-[13px] px-3 text-blue-900 border-blue-900 hover:bg-blue-900 hover:text-white">
                <a href="#">Russia</a>
              </button>
              <button className="border rounded-full text-[13px] px-3 text-blue-900 border-blue-900 hover:bg-blue-900 hover:text-white">
                <a href="#">Ukrine</a>
              </button>
              <button className="border rounded-full text-[13px] px-3 text-blue-900 border-blue-900 hover:bg-blue-900 hover:text-white">
                <a href="#">Vladimir Putin</a>
              </button>
              <button className="hidden lg:block border rounded-full text-[13px] px-3 text-blue-900 border-blue-900 hover:bg-blue-900 hover:text-white">
                <a href="#">Volodymyr Zelenskyy</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* sponsered links */}
      <div className="container mx-auto px-[20px] lg:px-[280px] mt-14">
        <p className="text-[20px] text-zinc-700">sponsered Links</p>
        <div className="grid grid-cols-12 gap-4 mt-4">
          <div className="col-span-6">
            <a href="#">
              {" "}
              <img src="spo1.gif" />
              <p className="text-[16px] lg:text-[20px] text-zinc-600 font-bold">
                Young Woman Keeps Making Hand Signals in Airplane – Stewardess
                Alerts the Authorities
              </p>
              <p className="text-gray-600">Watch what happened</p>
              <p className="text-[11px] text-gray-600">Tips and Tricks</p>
            </a>
          </div>
          <div className="col-span-6">
            <a href="#">
              <img src="spo2.webp" />
              <p className="text-[16px] lg:text-[20px] text-zinc-600 font-bold">
                Sleep Apnea: Why Top Experts Are Calling This the Most Ingenious
                Pillow of 2025
              </p>
              <p className="text-[11px] text-gray-600">derila.com</p>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 mt-7">
          <div className="col-span-6 lg:col-span-3">
            <div className="relative">
              <a href="#">
                <img src="spo3.webp" className="absolute" />
                <img
                  src="float1.png"
                  className="relative w-16 p-2 opacity-50 hover:opacity-100"
                />
                <p className="pt-24 font-bold text-zinc-600">
                  Try out our new free fun puzzles now
                </p>
                <p className="text-gray-500 text-[13px]">Sky News</p>
              </a>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-3">
            <div className="relative">
              <a href="#">
                <img src="spo4.webp" className="absolute" />
                <img
                  src="float1.png"
                  className="relative w-16 p-2 opacity-50 hover:opacity-100"
                />
                <p className="pt-24 font-bold text-zinc-600">
                  Conor McGregor announces he is withdrawing from Irish...
                </p>
                <p className="text-gray-500 text-[13px]">Sky News</p>
              </a>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-3">
            <div className="relative">
              <a href="#">
                <img src="spo5.webp" className="absolute" />
                <img
                  src="float2.png"
                  className="relative w-16 p-2 opacity-50 hover:opacity-100"
                />
                <p className="pt-24 font-bold text-zinc-600">
                  Ryder Cup 2025: Sir Clive Woodward backs Team...
                </p>
                <p className="text-gray-500 text-[13px]">Sky News</p>
              </a>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-3">
            <div className="relative">
              <a href="#">
                <img src="spo6.webp" className="absolute" />
                <img
                  src="float1.png"
                  className="relative w-16 p-2 opacity-50 hover:opacity-100"
                />
                <p className="pt-24 font-bold text-zinc-600">
                  China warns UK and US after USS Higgins and HMS...
                </p>
                <p className="text-gray-500 text-[13px]">Sky News</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* grids */}
      <div className="container mx-auto px-[20px] lg:px-[280px] mt-8">
        <div className="grid grid-cols-2 grid-rows-6 gap-x-4">
          <div className="">
            <a href="#">
              <img src="r1.gif" />
              <p className="text-[16px] lg:text-[20px] text-zinc-700 font-bold  pt-1">
                Dog Raises Lion Cubs As Her Own – Years Later, The Big Cats Do
                The Unthinkable
              </p>
              <p className="text-gray-500 text-[14px] lg:text-[16px]">
                Watch what happened!
              </p>
              <p className="text-gray-500 text-[11px]">House and Garden</p>
            </a>
          </div>
          <div className="">
            <a href="#">
              <img src="r2.webp" />
              <p className="text-[16px] lg:text-[20px] text-zinc-700 font-bold pt-1">
                Corporate Mobility, Redefined
              </p>
              <p className="text-gray-500">
                Urbania offers safe, reliable, and comfortable transport for
                your staff.
              </p>
              <p className="text-gray-500 text-[11px]">
                Urbania by Force Motors
              </p>
            </a>
          </div>
          <div className="">
            <a href="#">
              <img src="r3.webp" />
              <p className="text-[16px] lg:text-[20px] text-zinc-700 font-bold pt-1">
                Japanese Use This Trick to Reduce Neck Pain (It's Genius!)
              </p>
              <p className="text-gray-500 text-[11px]">derila.com</p>
            </a>
          </div>
          <div className="">
            <a href="#">
              <img src="r4.webp" />
              <p className="text-[16px] lg:text-[20px] text-zinc-700 font-bold pt-1">
                Poonawalla Personal Loan Up To 5 Lakhs
              </p>
              <p className="text-gray-500">
                Avail Poonawalla Fincorp's Personal Loan up to 5 Lakh with
                instant disbursal
              </p>
              <p className="text-gray-500 text-[11px]">poonawallafincorp.com</p>
            </a>
          </div>
          <div className="">
            <a href="#">
              <img src="r5.webp" />
              <p className="text-[16px] lg:text-[20px] text-zinc-700 font-bold pt-1">
                Personalized Content Tailored to Your Preferences - All in One
                Place
              </p>
              <p className="text-gray-500 text-[11px]">Discoveryfeed</p>
            </a>
          </div>
          <div className="">
            <a href="#">
              <img src="r6.webp" />
              <p className="text-[16px] lg:text-[20px] text-zinc-700 font-bold pt-1">
                Exeter 0-2 Port Vale
              </p>
              <p className="text-gray-500">
                Port Vale cruised to a comfortable 2-0 win at Exeter in League
                One to pick up their first win of the season.
              </p>
              <p className="text-gray-500 text-[11px]">Sky Sports</p>
            </a>
          </div>
          <div className="">
            <a href="#">
              <img src="r7.webp" />
              <p className="text-[16px] lg:text-[20px] text-zinc-700 font-bold pt-1">
                Vitality Blast Finals Day: Will Smeed helps Somerset complete
                record chase against Hampshire to claim...
              </p>
              <p className="text-gray-500">
                Hampshires Toby Albert top-scored for his side with 85 off 48
                balls; Somersets Will Smeed made 94; The Hawks beat Somerset by
                six...
              </p>
              <p className="text-gray-500 text-[11px]">Sky Sports</p>
            </a>
          </div>
          <div className="">
            <a href="#">
              <img src="r8.webp" />
              <p className="text-[16px] lg:text-[20px] text-zinc-700 font-bold pt-1">
                Thursday's national newspaper front pages
              </p>
              <p className="text-gray-500">
                Sky News takes a look at the headlines on Thursday's newspaper
                front pages.
              </p>
              <p className="text-gray-500 text-[11px]">Sky Sports</p>
            </a>
          </div>
          <div className="">
            <a href="#">
              <img src="r9.gif" />
              <p className="text-[16px] lg:text-[20px] text-zinc-700 font-bold pt-1">
                Pirates Climb Aboard SeaPlane - Watch What The Captain Did Next
              </p>
              <p className="text-gray-500">Watch what happened!</p>
              <p className="text-gray-500 text-[11px]">Tips and Tricks</p>
            </a>
          </div>
          <div className="">
            <a href="#">
              <img src="r10.gif" />
              <p className="text-[16px] lg:text-[20px] text-zinc-700 font-bold pt-1">
                Young Woman Keeps Making Hand Signals in Airplane – Stewardess
                Alerts the Authorities
              </p>
              <p className="text-gray-500">Watch what happened</p>
              <p className="text-gray-500 text-[11px]">Tips and Tricks</p>
            </a>
          </div>
          <div className="">
            <a href="#">
              <img src="r11.gif" />
              <p className="text-[16px] lg:text-[20px] text-zinc-700 font-bold pt-1">
                Pirates Approach a Cruise Ship – See How the Genius Captain
                Responds!
              </p>
              <p className="text-gray-500">Watch what happened</p>
              <p className="text-gray-500 text-[11px]">Happy in Shape</p>
            </a>
          </div>
          <div className="">
            <a href="#">
              <img src="r12.webp" />
              <p className="text-[16px] lg:text-[20px] text-zinc-700 font-bold pt-1">
                The Pillow Trick That Almost No One Uses Against Sleep Apnea
              </p>
              <p className="text-gray-500 text-[11px]">derila.com</p>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-[20px] lg:px-[280px]">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6 lg:col-span-3">
            <div className="relative">
              <a href="#">
                <img src="lst1.webp" className="absolute" />
                <img
                  src="float1.png"
                  className="relative w-16 p-2 opacity-50 hover:opacity-100"
                />
                <p className="pt-24 font-bold text-zinc-600">
                  China warns UK and US after USS Higgins and HMS...
                </p>
                <p className="text-gray-500 text-[13px]">Sky News</p>
              </a>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-3">
            <div className="relative">
              <a href="#">
                <img src="lst2.webp" className="absolute" />
                <img
                  src="float1.png"
                  className="relative w-16 p-2 opacity-50 hover:opacity-100"
                />
                <p className="pt-24 font-bold text-zinc-600">
                  Air traffic control warns flight to turn away from Air...
                </p>
                <p className="text-gray-500 text-[13px]">Sky News</p>
              </a>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-3">
            <div className="relative">
              <a href="#">
                <img src="lst3.webp" className="absolute" />
                <img
                  src="float1.png"
                  className="relative w-16 p-2 opacity-50 hover:opacity-100"
                />
                <p className="pt-24 font-bold text-zinc-600">
                  Who's who at Trump's second state banquet
                </p>
                <p className="text-gray-500 text-[13px]">Sky News</p>
              </a>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-3">
            <div className="relative">
              <a href="#">
                <img src="lst4.webp" className="absolute" />
                <img
                  src="float1.png"
                  className="relative w-16 p-2 opacity-50 hover:opacity-100"
                />
                <p className="pt-24 font-bold text-zinc-600">
                  Tesla shares soar as Musk goes on buying spree
                </p>
                <p className="text-gray-500 text-[13px]">Sky News</p>
              </a>
            </div>
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
