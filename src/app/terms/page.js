"use client";
import { useState } from "react";
export default function Terms() { 
    const [openWatch, setOpenWatch] = useState(false);
    const [openTV, setOpenTV] = useState(false);
    const [openGlass, setOpenGlass] = useState(false);
    const [openBoard, setOpenBoard] = useState(false);
    const [openMobile, setOpenMobile] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const links = [
    "Watch",
    "TV",
    "Glass",
    "Broadband",
    "Mobile",
    "Protect",
    "Business",
    "Deals",
    "Help",
  ];
    return (
      <>
        <div className=" h-[3px] bg-[linear-gradient(to_right,orange,red,deeppink,violet,blue,skyblue)]"></div>
        <div className="container mx-0 lg:mx-[155px]">
          <div className="flex gap-6 mt-2">
            <div className="block lg:hidden">
              {/* Top Navbar (mobile only) */}
              <div className="flex justify-between items-center ps-4">
                <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
                  {isOpen ? "✖" : "☰"}
                </button>
              </div>

              {/* Mobile Menu */}
              {isOpen && (
                <div className="absolute inset-x-0 bg-white h-full z-50 shadow-md">
                  {/* Search */}
                  <div className="bg-gray-100 py-3">
                    <div className="flex items-center border border-gray-300 rounded mx-4 my-3">
                      <input
                        type="text"
                        placeholder="Enter your search"
                        className="flex-1 p-2 outline-none"
                      />
                      <button className="bg-blue-700 rounded-r text-white px-5 py-3 text-sm font-semibold">
                        Search
                      </button>
                    </div>
                  </div>

                  {/* Links with dropdown arrows */}
                  <ul>
                    {links.map((link, i) => (
                      <li
                        key={i}
                        className="flex justify-between items-center border-t border-gray-200  px-4 py-3 cursor-pointer hover:underline"
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      >
                        <span className="text-gray-600">{link}</span>
                        <hr></hr>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div>
              <a href="app">
                <img
                  src="colorsky.png"
                  className="w-[40px] pt-1 pb-3 lg-pb-0 ml-42 lg:ml-0"
                />
              </a>
            </div>
            <div className="block lg:hidden pt-1 ps-40">
              <a href="#" className="font-bold text-[14px] text-gray-600 ">
                Sign in
              </a>
            </div>
            <ul className=" hidden lg:flex gap-[27px]">
              <li>
                <a href="#" className="flex gap-2">
                  <p className="text-gray-600 text-[15px] hover:underline pt-1">
                    Watch
                  </p>
                  {/* Dropdown Trigger (Arrow Button) */}
                  <button
                    onClick={() => setOpenWatch(!openWatch)}
                    className="px-2 py-1 rounded text-gray-500 hover:bg-gray-100"
                  >
                    ⮟
                  </button>
                </a>
                {/* Dropdown Menu */}
                {openWatch && (
                  <div className="absolute top-12 left-0 w-full bg-white border-y border-gray-200">
                    <ul className="flex gap-10 px-6 py-3 ps-[153px]">
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">Cinema</a>
                      </li>
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">Sports</a>
                      </li>
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">Kids</a>
                      </li>
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">Discovery+</a>
                      </li>
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">What to watch</a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <a href="#" className="flex gap-1">
                  <p className="text-gray-600 text-[15px] hover:underline pt-1">
                    TV
                  </p>
                  {/* Dropdown Trigger (Arrow Button) */}
                  <button
                    onClick={() => setOpenTV(!openTV)}
                    className="px-2 py-1 rounded text-gray-500 hover:bg-gray-100"
                  >
                    ⮟
                  </button>
                </a>
                {/* Dropdown Menu */}
                {openTV && (
                  <div className="absolute top-12 left-0 w-full bg-white border-y border-gray-200">
                    <ul className="flex gap-10 px-6 py-3 ps-[153px]">
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">Stream</a>
                      </li>
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">Glass</a>
                      </li>
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">Sky Q</a>
                      </li>
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">TV & Dashboard</a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <a href="#" className="flex gap-1">
                  <p className="text-gray-600 text-[15px] hover:underline pt-1">
                    Glass
                  </p>
                  {/* Dropdown Trigger (Arrow Button) */}
                  <button
                    onClick={() => setOpenGlass(!openGlass)}
                    className="px-2 py-1 rounded text-gray-500 hover:bg-gray-100"
                  >
                    ⮟
                  </button>
                </a>
                {/* Dropdown Menu */}
                {openGlass && (
                  <div className="absolute top-12 left-0 w-full bg-white border-y border-gray-200">
                    <ul className="flex gap-10 px-6 py-3 ps-[153px]">
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">Glass Gen 2</a>
                      </li>
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#" className="flex gap-2">
                          <div>Glass Air</div>
                          <div>
                            <button className="text-[13px] rounded bg-orange-500 text-white px-1 py-[2px]">
                              New
                            </button>
                          </div>
                        </a>
                      </li>
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">Tech specs</a>
                      </li>
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">Switching to Sky Glass</a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <a href="#" className="flex gap-1">
                  <p className="text-gray-600 text-[15px] hover:underline pt-1">
                    Boardband
                  </p>
                  {/* Dropdown Trigger (Arrow Button) */}
                  <button
                    onClick={() => setOpenBoard(!openBoard)}
                    className="px-2 py-1 rounded text-gray-500 hover:bg-gray-100"
                  >
                    ⮟
                  </button>
                </a>
                {/* Dropdown Menu */}
                {openBoard && (
                  <div className="absolute top-12 left-0 w-full bg-white border-y border-gray-200">
                    <ul className="flex gap-10 px-6 py-3 ps-[153px]">
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">Boardband</a>
                      </li>
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">TV & Bandboard</a>
                      </li>
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">Full Fibre Broadband</a>
                      </li>
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">Broadband for Gaming</a>
                      </li>
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">Broadband for Business</a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <a href="#" className="flex gap-1">
                  <p className="text-gray-600 text-[15px] hover:underline pt-1">
                    Mobile
                  </p>
                  {/* Dropdown Trigger (Arrow Button) */}
                  <button
                    onClick={() => setOpenMobile(!openMobile)}
                    className="px-2 py-1 rounded text-gray-500 hover:bg-gray-100"
                  >
                    ⮟
                  </button>
                </a>
                {/* Dropdown Menu */}
                {openMobile && (
                  <div className="absolute top-13 left-0 w-full bg-white border-y border-gray-200">
                    <ul className="flex gap-8 px-6 py-3 ps-[153px]">
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">Sky Mobile</a>
                      </li>
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">Phones</a>
                      </li>
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">SIM</a>
                      </li>
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">Tablets & Laptops</a>
                      </li>
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">Brands</a>
                      </li>
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">Accessories</a>
                      </li>
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">SIM Activation</a>
                      </li>
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">Manage</a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <a href="#">
                  <p className="text-gray-600 text-[15px] hover:underline pt-1">
                    Protect
                  </p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p className="text-gray-600 text-[15px] hover:underline pt-1">
                    Business
                  </p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p className="text-gray-600 text-[15px] hover:underline pt-1">
                    Deals
                  </p>
                </a>
              </li>
              <li className="ps-113">
                <button className="hover:bg-gray-100 rounded">
                  <a href="#">
                    <img src="search.svg" className="w-9" />
                  </a>
                </button>
              </li>
              <li>
                <button className="hover:bg-gray-100 rounded">
                  <a href="#">
                    <img src="no.svg" className="w-[35px] p-1" />
                  </a>
                </button>
              </li>
              <li>
                <a href="#" className="flex gap-1">
                  <p className="text-gray-600 text-[15px] hover:underline pt-1">
                    Help
                  </p>
                  {/* Dropdown Trigger (Arrow Button) */}
                  <button
                    onClick={() => setOpenHelp(!openHelp)}
                    className="px-2 py-1 rounded text-gray-500 hover:bg-gray-100"
                  >
                    ⮟
                  </button>
                </a>
                {/* Dropdown Menu */}
                {openHelp && (
                  <div className="absolute top-12 left-0 w-full bg-white border-y border-gray-200">
                    <ul className="flex gap-8 px-6 py-3 ps-[1030px]">
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">Help</a>
                      </li>
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">My Account</a>
                      </li>
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">Boardband</a>
                      </li>
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">TV</a>
                      </li>
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">Mobile</a>
                      </li>
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">Talk</a>
                      </li>
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">VIP</a>
                      </li>
                      <li className="hover:underline text-gray-600 text-[15px]">
                        <a href="#">Sky Customer Forum</a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <a href="#">
                  <p className="text-gray-600 text-[15px] hover:underline pt-1">
                    Sign in
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="text-gray-200"></hr>
        <div className="bg-gradient-to-r from-blue-800 to-purple-800">
          <p className="font-bold text-white py-5">
            <a href="#" className=" hover:underline ml-5 lg:ml-[353px]">
              Back to Help
            </a>
          </p>
        </div>
        <div>
          {/* Floating Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="fixed bottom-17 right-6 bg-gradient-to-r from-purple-800 to-blue-900 p-3 rounded-full shadow-lg"
          >
            <img src="/bot.svg" alt="bot" className="w-6" />
          </button>

          {/* Chat Window */}
          {isOpen && (
            <div className="fixed bottom-32 right-8 w-95 h-[600px] bg-white shadow-2xl rounded-lg flex flex-col overflow-hidden">
              {/* Header */}
              <div className="flex gap-3 p-3 border border-gray-300 rounded-t-xl shadow-lg pt-4 pb-6">
                <img src="colorrobo.svg" alt="bot" className="w-8" />
                <h2 className="text-zinc-600 text-[19px] pt-2">
                  Sky’s Virtual Assistant
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold ps-20"
                >
                  ×
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm text-gray-800 bg-gray-100 pt-55">
                <div className="text-center text-[15px] font-bold text-gray-600">
                  Saturday 20 September
                </div>

                <div className="flex gap-2">
                  <img
                    src="colorrobo.svg"
                    className="w-6 h-6 rounded-full mt-35"
                    alt="bot"
                  />
                  <div className="bg-white text-gray-500 p-3 rounded-lg max-w-[75%]">
                    <p>
                      Hi, I'm Sky's Virtual Assistant 🤖. Here to give you a
                      hand and if I can't help, I'll point you in the right
                      direction to get the support you need. Let's get started.
                    </p>
                    <p className="mt-2">
                      In a few words, what would you like help with?
                    </p>
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="p-3 bg-zinc-100 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Enter your message"
                  className="flex-1 bg-white rounded-md px-3 py-2 text-sm focus:outline-none"
                />
                <button className="bg-gradient-to-r from-purple-800 to-blue-900 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
        {/* body */}
        <div className="container mx-[auto] mt-15">
          <div className=" mx-0 lg:mx-[359px] px-8 lg:px-15 py-8 rounded-md lg:border border-gray-100 lg:shadow-md">
            <p className="text-[25px] lg:text-[40px] text-zinc-700 leading-8 lg:leading-12">
              Sky.com and Sky Identity terms and conditions
            </p>
            <p className="text-zinc-500 pt-6 text-[17px]">
              These Terms and Conditions shall apply to Your use of Sky’s
              websites, platforms, services, products and apps including sky.com
              (a “Sky Service”) and use of your Sky iD, username or equivalent
              (“Sky Identity”) on any Sky Service.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              By using a Sky Service or your Sky Identity You agree to be bound
              by the terms and conditions set out below. You may also be bound
              by other terms and conditions when using a Sky Service or Sky
              Identity which you must agree to use that Sky Service in which
              case those terms shall apply in relation to any inconsistency
              between them.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              We may change these Terms and Conditions from time to time and so
              you should check these regularly. Your use of the Sky Service
              and/or your Sky Identity will be deemed an acceptance of the terms
              existing at that time.
            </p>
            <p className="text-zinc-700 font-bold pt-5 text-[17px]">
              Sky Service
            </p>
            <p className="text-zinc-700 pt-5 text-[20px] lg:text-[28px]">
              1. Definitions
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              "You" means you, the user of a Sky Service and "Your" shall be
              interpreted accordingly. "We/Us" means Sky UK Limited of Grant
              Way, Isleworth, Middlesex TW7 5QD and "Our" shall be interpreted
              accordingly. “Content” includes, but is not limited to, any text,
              video, audio, multimedia or photographs which may be provided via
              a Sky Service. "Sky Service" and “Sky Identity” shall have the
              meanings as set out above. "User Information" means the personal
              details, which may be provided by You to Us via a Sky Service.
              "Users" means the users of a Sky Service collectively and/or
              individually as the context admits. "Website and App" means a site
              on the World Wide Web or an app. “Sky” means Sky UK Limited or any
              of its subsidiaries.
            </p>
            <p className="text-zinc-700 pt-5  text-[20px] lg:text-[28px]">
              2. Acceptable Use
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              You agree that any use by You of any Sky Service or of your Sky
              Identity shall be in accordance with the following conditions:
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">2.1</span>{" "}
              You will not post or transmit through any Sky Service or using
              your Sky Identity or use any Sky Service for any defamatory,
              threatening, obscene, harmful, pornographic or otherwise illegal
              material or material which would violate or infringe in any way
              upon our rights or those of others (including intellectual
              property rights, rights of confidentiality, or rights of privacy)
              or cause distress or inconvenience. You must not express opinions
              that are vulgar, crude, sexist, racist, unproven or unfounded
              allegations (especially of wrongdoing) or otherwise offensive.
              Always treat other Users with respect.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">2.2</span>{" "}
              You must not use a Sky Service to upload, post, or otherwise
              transmit any content that includes any of the following
              inappropriate content:
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              a) Any personal information belonging either to you or another
              person, such as full name, address, phone number, email address;
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              b) Spam, such as advertisements for other websites and services,
              or other commercial solicitation; chain letters, pyramid schemes,
              polls or petitions;
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              c) Flooding the forum boards with excessive posts, meaningless
              posts, posts unrelated to the topic or padding posts;
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              d) Discussions that veer off topic, are unrelated to resolving the
              issue at hand, are repetitive or campaigning, that promote
              products or services from other providers, or abuse any company or
              product;
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              e) Repetitive or continuous complaints about Sky policy;
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              f) Discussions of moderator actions on the boards. If you need to
              comment on a moderator action, please message any
              administrator/moderator;
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              g) Posting or transmitting any information or software containing
              a virus, worm, Trojan horse, or other damaging or destructive
              component;
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              h) Posting a link directing users to any information or content
              that, if posted on the Sky Service would constitute a violation of
              any guidelines or terms of use. Sky is not responsible for the
              content of any third party websites and users use of any hypertext
              links posted on the forum at their own risk.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              i) Attacks, including "Flaming", of another user in such a way as
              to incite or perpetuate arguments or conflict; creating usernames
              to attack other users' identities; impersonating other individuals
              or falsely representing one's identity or qualifications; posts
              made under secondary user names or other aliases for the purpose
              of either endorsing or denigrating others; posts that breach any
              participant's privacy by including name, address, phone, email
              address, or any other identifying information.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              j) Include URLs of third party websites which may contain
              offensive or illegal material.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              k) Break the law, or encourage/support breaking the law. This
              includes libel, contempt of court, mandatory export controls or
              sanctions, human trafficking or slavery, and breach of copyright.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              l) Discussions regarding active UK court cases.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              m) Advice that if followed could result in bodily injury or harm.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              n) Discussions regarding products and/or services that are part of
              an NDA (Non-Disclosure Agreement).
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">2.3</span>{" "}
              You must not evade bans or suspensions or otherwise disregard
              directions from moderators or administrators.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">2.4</span>{" "}
              You agree not to use any Sky Site (or any part of it) or your Sky
              Identity to:
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              a) Solicit personal information, email addresses, contact
              information, passwords or other personally identifying
              information.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              b) Solicit participation in public discussion, debate, comment or
              activity outside the Sky Site;
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              c) Provide false or misleading information about yourself or your
              business, or create a false identity or use or attempt to use
              another’s account or identity.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">2.5</span>{" "}
              We reserve the right to manage your postings on a Sky Service to
              provide an orderly presentation of this information and to ensure
              it is appropriate. To effectively manage the site, Sky may
              designate employees or others to act as moderators and
              administrators for the site ("Moderators"). These Moderators are
              the only representatives of Sky that are authorised to manage the
              Sky Communities. Any Sky employees who are not designated as
              Moderators or Employees are not authorised to represent themselves
              on the site as Sky employees. Authorised Sky Employees are
              distinguished by the Rank of "Employee" and/or an official Sky
              logo as an Avatar. Sky is not responsible for content provided by
              any Sky employee who is not designated as a Moderator or an
              Employee.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">2.6</span>{" "}
              You will not post or otherwise make available on any Sky Service
              or using your Sky Identity any material, which You do not own
              without the express permission of the owner of the material unless
              you have the legal right to do so without that permission.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">2.7</span>{" "}
              You will not copy, download, reproduce, republish, frame,
              broadcast, transmit in any manner whatsoever, any material on any
              Sky Service or using your Sky Identity unless it is necessary for
              Your own personal non-commercial home use unless Sky has expressly
              agreed that it is a service which may be used for commercial or
              business purposes.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">2.8</span>{" "}
              You will not access, search and/or collect data from, or attempt
              to access, search and/or collect data from, any Sky Service or
              using your Sky Identity, or any services provided via, or in
              relation to, a Sky Service or using your Sky Identity, by any
              means (whether automated or manual) unless Sky has given its
              express written authorisation to do so. This means that, among
              other things, (a) you may not use any robots, bots, spiders,
              crawlers, devices, scripts or other data gathering or extraction
              software and/or tools, whether automated or manual, to access,
              acquire, copy, monitor, scrape, data mine, or aggregate any
              Content or any portion of the Sky Service for any purpose, and (b)
              you may not use any Content for the purpose of directly or
              indirectly training, developing or improving a software tool or
              service, including any artificial intelligence tool, model, system
              or platform.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">2.9</span>{" "}
              You will abide by the specific rules of any competition or
              promotion that You participate in on or via each Sky Service.
              Unless we tell you otherwise, all prize draws and competitions
              offered via a Sky Service are not open to people resident outside
              the United Kingdom.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">2.10</span>{" "}
              You will not do anything that affects the operability or security
              of any Sky Service or causes unreasonable inconvenience or offence
              or disruption to our staff.
            </p>
            <p className="text-zinc-700 pt-5  text-[20px] lg:text-[28px]">
              3. Third Party Websites and Apps
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">3.1</span>{" "}
              You acknowledge and agree that We are not responsible for the
              availability of any third party Websites, Apps or material You
              access through a Sky Service or using your Sky Identity.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">3.2</span>{" "}
              We do not endorse and shall not be held responsible or liable for
              any content, advertising, products or services on or available
              from such third party Websites, Apps or material.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">3.3</span>{" "}
              Any dealings between You and any third party advertisers or
              merchants on a Third Party Website and App found on or via a Sky
              Service or using your Sky Identity, including payment for and
              delivery of products, services and any other terms, conditions,
              warranties or representations associated with such dealings, are
              made between You and the relevant advertiser or merchant.
              Therefore, We are not responsible or liable for any loss or damage
              of any kind incurred as the result of any such dealings. Where You
              purchase goods or services directly from Us, the Sky Products and
              Accessories T&Cs will usually apply.
            </p>
            <p className="text-zinc-700 pt-5  text-[20px] lg:text-[28px]">
              4. Intellectual Property
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">4.1</span>{" "}
              All copyright, trade marks and all other intellectual property
              rights in all material or content supplied as part of a Sky
              Service or using your Sky Identity shall remain at all times
              vested in Us or Our licensors. You are permitted to use this
              material or content only as expressly authorised in writing by Us
              or Our licensors. You will not, and You will not assist or
              facilitate any third party to, copy, reproduce, transmit,
              distribute, frame, commercially exploit or create derivative works
              of such material or content unless you have the owner’s permission
              or a legal right to do so without that permission.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">4.2</span>{" "}
              If You become aware of any such distribution or commercial
              exploitation, You agree to notify Us immediately.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">4.3</span>{" "}
              You acknowledge that by posting materials on a Sky Service You
              grant to Us and Our licensors and assigns an irrevocable,
              perpetual, royalty free, worldwide licence to use the materials
              within that Sky Service and in any other manner which we may
              reasonably require. The licence extends to copying, distributing,
              broadcasting, and otherwise transmitting, and adapting and editing
              the materials.
            </p>
            <p className="text-zinc-700 pt-5  text-[20px] lg:text-[28px]">
              5. Liability for and information provided on a Sky Service
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">5.1</span>{" "}
              Material which is posted on any bulletin boards or chat forums is
              written by Users and We are not responsible for and do not endorse
              such material. We reserve the right to monitor the contributions
              made and may respond to or comment upon communications made by You
              and edit, refuse to post, or remove any content from the bulletin
              boards and chat forums in our absolute discretion. No failure to
              remove particular material constitutes an endorsement or
              acceptance of it by Us.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">5.2</span>{" "}
              We will not be held responsible or liable for the content,
              accuracy, timing or reliability of any information or statements
              contained within a Sky Service or which you obtain using your Sky
              Identity, or for statements, advice and/or opinions made or given
              by Users on the bulletin boards and chat forums (except as
              required by law). If You have any claim arising from the actions
              or statements of another User, You agree to pursue such a claim
              only against that User and not against Us or any of our suppliers.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">5.3</span>{" "}
              We will endeavour to provide each Sky Service using all reasonable
              care. Except as required by law, We will not be responsible or
              liable for the quality, accuracy or fitness for a particular
              purpose of any Sky Service and do not promise that the material
              contained in a Sky Service, or any of the functions contained in a
              Sky Service or its server will operate without interruption or
              delay or will be error free, free of viruses or bugs or is
              compatible with any other software or material.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">5.4</span>{" "}
              We will be liable for any fraudulent misrepresentations We make
              and for any death or personal injury caused by Our negligence. We
              will not be responsible or liable to You for any other loss or
              damage that You or any third party may suffer as a result of using
              or in connection with Your use of the Sky Service.
            </p>
            <p className="text-zinc-700 pt-5  text-[20px] lg:text-[28px]">
              6. Safety
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              When using any Sky Service, in particular any bulletin boards or
              chat forums, You should always take the following precautions:
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">6.1</span>{" "}
              keep Your identity private. Do not give out Your full name, postal
              address, telephone number, e-mail address, the name of Your school
              or any other information (other than that specifically requested
              by Us), that could help someone discover Your actual identity;
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">6.2</span>{" "}
              never meet with someone You meet online.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">6.3</span>{" "}
              do not reply to any messages that are hostile, rude or
              inappropriate, or in any way make You feel uncomfortable.
            </p>
            <p className="text-zinc-700 pt-5  text-[20px] lg:text-[28px]">
              7. Indemnity
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              If you are a business User, You agree to indemnify Us, and/or any
              of Our affiliates and Our and their officers, directors and
              employees, immediately on demand, against all claims, liability,
              damages, costs and expenses, including legal fees, arising out of
              any breach of these terms and conditions by You or any other
              liabilities arising out of Your use of any Sky Service or your Sky
              Identity.
            </p>
            <p className="text-zinc-700 pt-5  text-[20px] lg:text-[28px]">
              8. Termination
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              We reserve the right to restrict or terminate Your use of any Sky
              Identity if You breach or We have reasonable grounds to believe
              that You are likely to breach these terms and conditions.
            </p>
            <p className="text-zinc-700 pt-5  text-[20px] lg:text-[28px]">
              9. Feedback
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              Should You wish to make any comments to Us about any Sky Service
              or if You have any questions relating to the same please contact
              Us using the Feedback Form on sky.com.
            </p>
            <p className="text-zinc-700 pt-5  text-[20px] lg:text-[28px]">
              10. Sky Identity
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">10.1</span>{" "}
              Section 10 applies to anyone visting a Sky Service or using a Sky
              Identity on any Sky platform, such as Sky.com or any Sky hardware,
              or any Website and App in addition to the terms and conditions
              which precede and follow this section and/or any other terms and
              conditions that may apply to that platform.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">10.2</span>{" "}
              In order to use a Sky Service you may be required to register with
              us and comply with our{" "}
              <a href="#" className="text-blue-800 hover:underline font-bold">
                privacy & cookies notice
              </a>
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">10.3</span>{" "}
              Each registered user is responsible for the security and proper
              use of their user name and password and must not disclose either
              to any third party. It is each registered user's responsibility to
              change their password immediately if they believe it has been
              compromised. It is also advisable to change these details
              frequently even if not considered compromised.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">10.4</span>{" "}
              If your account registration profile is unused for a prolonged
              period we may delete it from our systems without prior notice to
              you after a reasonable period. If you want to access Sky.com in
              the future you would need to re-register your details and create a
              new user name and password.
            </p>
            <p className="text-zinc-700 pt-5  text-[20px] lg:text-[28px]">
              11. Software
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">11.1</span>{" "}
              Where you use your Sky Identity on any Sky hardware, platform or
              device (for example but not limited to Sky Glass), you agree that
              we or our supplier may automatically update any software in that
              hardware, platform or device for any of the reasons set out below
              provided that:
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              a) we reasonably consider that you are not materially
              disadvantaged by the update; and
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              b) energy consumption of your Sky hardware shall not deteriorate
              without your express consent at the time of such update.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              If you do not allow software updates you may not be able to access
              or use certain features. We will not be liable to you for any
              losses or damages you incur as a result of not allowing any
              software updates.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              We may update software in order to help improve the security and
              operation of our technical infrastructure (for example, to prevent
              misuse of our platform), for valid legal or regulatory reasons, to
              enable us to continue to provide you with the goods or services in
              accordance with what we have agreed to provide or as otherwise
              agreed.
            </p>
            <p className="text-zinc-700 pt-5  text-[20px] lg:text-[28px]">
              12. General
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">12.1</span>{" "}
              Invalidity etc. If any court or regulator decides that any
              provision of these terms and conditions is invalid or otherwise
              unenforceable, such provisions shall be severed and deleted from
              these terms and conditions and the remainder of these terms and
              conditions shall continue to have full force and effect.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">12.2</span>{" "}
              Governing Law. These terms and conditions, any Sky Service and
              your use of your Sky Identity are governed by English law and
              disputes can be dealt with by the English courts unless expressly
              agreed otherwise or as required by law.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              <span className="text-zinc-700 font-bold text-[17px]">12.3</span>{" "}
              Third Party Rights. These terms and conditions apply between Us
              and Users. No other person is entitled to benefit under these
              Terms and Conditions.
            </p>
            <p className="text-zinc-700 pt-5  text-[20px] lg:text-[28px]">
              Corporate Information
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              Sky UK Limited (Registration No. 2906991).Sky-In-Home Service
              Limited (Registration No. 2067075), and Sky Subscribers Services
              Limited (Registration No. 2340150) are direct or indirect
              subsidiaries of Sky UK Limited. Our UK VAT number is 440 6274 67.
              All of the companies mentioned in this paragraph are incorporated
              in England and Wales and share the same registered office at Grant
              Way, Isleworth, Middlesex TW7 5QD.
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              Last Updated: 20/01/2025
            </p>
          </div>

          <div className=" mx-0 lg:mx-[359px] px-13 py-6 rounded-md border border-gray-100 shadow-md lg:mt-10">
            <p className="text-zinc-700 pt-3  text-[20px] lg:text-[25px] font-bold">
              Did you get the help you need?
            </p>
            <p className="text-zinc-500 pt-5 text-[17px]">
              Our contact centres are particularly busy and we're sorry if call
              queues are longer than normal right now. Please follow our help
              guides before calling.
            </p>
            <div className="lg:flex pt-5 gap-1">
              <button className="hover:bg-blue-700 border w-full lg:w-auto text-[14px] lg:text-[17px] border-gray-300 text-blue-700 hover:text-white font-bold rounded-full px-4 lg:px-7 py-3">
                <a href="#">Yes, that worked</a>
              </button>
              <br></br>
              <button className="hover:bg-blue-700 border w-full lg:w-auto  text-[14px] lg:text-[17px] mt-5 lg:mt-0 border-gray-300 text-blue-700 hover:text-white font-bold rounded-full px-4 lg:px-7 py-3">
                <a href="#">No, I still need help</a>
              </button>
            </div>
          </div>
          <div className=" h-[4px] bg-gradient-to-r from-blue-800 to-purple-800 mx-90 rounded-full shadow-xl"></div>
        </div>
        <hr className="text-gray-200 mt-15 lg:mt-60"></hr>
        <div className="container mx-[20px] lg:mx-[155px] mt-4">
          <div className="flex gap-8 mt-2">
            <div>
              <a href="#">
                <img src="colorsky.png" className="w-[50px] lg:w-[55px]" />
              </a>
            </div>
            <li className="block lg:hidden">
              <p className="text-gray-600 text-[13px] pt-2">© 2025 Sky UK</p>
            </li>
            <ul className="flex gap-[35px]">
              <div className="hidden lg:block">
                <div className="flex gap-7">
                  <li>
                    <p className="text-gray-600 text-[15px] pt-2">
                      © 2025 Sky UK
                    </p>
                  </li>
                  <li>
                    <a href="#">
                      <p className="text-gray-600 text-[15px] hover:underline pt-2 ps-10">
                        Privacy options
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p className="text-gray-600 text-[15px] hover:underline pt-2">
                        Terms & conditions
                      </p>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <p className="text-gray-600 text-[15px] hover:underline pt-2">
                        Privacy & cookies notice
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p className="text-gray-600 text-[15px] hover:underline pt-2">
                        Accessibility
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p className="text-gray-600 text-[15px] hover:underline pt-2">
                        Site map
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p className="text-gray-600 text-[15px] hover:underline pt-2">
                        Contact us
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p className="text-gray-600 text-[15px] hover:underline pt-2">
                        Complaints
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p className="text-gray-600 text-[15px] hover:underline pt-2">
                        Sky Group
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p className="text-gray-600 text-[15px] hover:underline pt-2">
                        Store locator
                      </p>
                    </a>
                  </li>
                  <li>
                    <p className="text-gray-600 text-[15px] hover:underline pt-2 ps-11">
                      Country
                    </p>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div className=" h-[3px] bg-[linear-gradient(to_right,orange,red,deeppink,violet,blue,skyblue)] mt-4"></div>
      </>
    );
}
