"use client";

import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { BsSearch } from "react-icons/bs";
import { FaCreditCard } from "react-icons/fa6";
import { IoPeople, IoSpeedometerSharp, IoBusiness, IoAirplane } from "react-icons/io5";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { FaCar, FaChartLine } from "react-icons/fa6";
import { FaPiggyBank, FaMoneyCheck, FaHome } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#d3ded1" }} className="min-h-screen flex flex-col shadow-md">

      <header style={{ backgroundColor: "#d3ded1" }} className="w-full text-gray-700 shadow z-50 flex justify-between items-center px-36 py-16">
        <div className="flex flex-col items-start space-y-2">
          <nav className="space-x-6 pl-24 -mt-4">
            <a href="#">Personal</a>
            <a href="#">Business</a>
            <a href="#">Commercial</a>
          </nav>
          <div className="relative font-bold pl-24 translate-y-3 text-xl">Secret Bank</div>
          <nav className="relative text-sm space-x-4 pl-24 -mt-4 translate-y-6">
            <a href="#">Checking</a>
            <a href="#">Savings & CDs</a>
            <a href="#">Credit cards</a>
            <a href="#">Home loans</a>
            <a href="#">Auto</a>
            <a href="#">Investing by Secret Bank</a>
          </nav>
        </div>
        <div className="flex flex-col items-start -translate-x-6 space-y-2">
          <nav className="relative flex items-center text-xs space-x-4 -translate-y-12 -translate-x-24">
            <a href="#">Schedule a meeting</a>
            <a href="#">Customer service</a>
            <a href="#"><BsSearch className="inline-block text-base -translate-y-0.5" /></a>
          </nav>
        </div>
      </header>

      <section className="flex justify-center bg-emerald-900 py-10">
        <div className="flex w-full max-w-6xl px-6 space-x-8">
          <div style={{ backgroundColor: "#8EA58C" }} className="flex-1 pt-13 rounded-lg -translate-x-32 shadow-md p-8">
            <div className="flex space-x-8">
              <div className="w-1/2 translate-y-8">
                <h2 className="text-2xl text-white ml-13 mb-2">Enjoy</h2>
                <h1 className="text-white ml-13 font-bold text-8xl">$500</h1>
              </div>
              <div className="w-1/2">
                <h2 className="text-3xl text-white mb-5">New Secret Bank checking customers</h2>
                <p className="text-lg mb-5">
                  Open a Secret Bank Checking account with qualifying activities.
                </p>
                <button
                  type="submit"
                  className="w-1/2 bg-emerald-900 text-white py-2 rounded-md hover:bg-emerald-700 transition"
                >
                  Open an account
                </button>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: "#8EA58C" }} className="w-full max-w-sm p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center text-white mb-6">Secret Bank</h1>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-900 text-white py-2 rounded-md hover:bg-emerald-700 transition"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="flex flex-col text-white py-9">
        <div className="text-center text-gray-700 text-5xl mb-8">Choose what's right for you</div>
        <div className="w-full max-w-6xl mx-auto px-4">
          <KeenCarousel />
        </div>
      </section>

      <section className="py-10 flex flex-wrap justify-center gap-10 text-center">
        {[
          {
            title: "Unlimited",
            subtitle: "Secret Bank",
            desc1: "Earn a $300 bonus",
            desc2: "Plus, earn unlimited 2% cash back or more on all purchases, including 4% on dining and drugstores - all with no annual fee.",
            icon: <FaCreditCard className="text-7xl mt-3 -translate-y-1 text-white" />,
            button: "Learn more"
          },
          {
            title: "Secure Banking",
            subtitle: "Secret Bank",
            desc1: "Enjoy $200 on us",
            desc2: "For new Secret Bank checking customers when you open a Secret Banking account with qualifying transactions.",
            icon: <FaMoneyCheck className="text-7xl mt-3 -translate-y-1 text-white" />,
            button: "Open an account"
          },
          {
            title: "Auto",
            subtitle: "Secret Bank",
            desc1: "Finance your next ride with Secret Bank",
            desc2: "Apply online in just minutes and secure your monthly payment, rate and financing terms for 30 days.",
            icon: <FaCar className="text-7xl mt-3 -translate-y-1 text-white" />,
            button: "Apply now"
          }
        ].map((card, idx) => (
          <div key={idx} style={{ backgroundColor: "#becfbc" }} className="flex flex-col max-w-sm w-full rounded-lg shadow-md overflow-hidden">
            <div className="relative flex items-center justify-between bg-emerald-900 px-6 py-4">
              <div className="text-left text-white">
                <p className="text-2xl font-semibold">{card.subtitle}</p>
                <p className="text-2xl font-semibold">{card.title}</p>
              </div>
              <div>{card.icon}</div>
            </div>
            <div className="p-6 text-left text-gray-700">
              <h3 className="text-2xl font-bold mb-3">{card.desc1}</h3>
              <p className="text-md mb-6">{card.desc2}</p>
              <button className="text-lg bg-emerald-900 px-4 py-2 text-white rounded-2xl shadow-md">{card.button}</button>
            </div>
          </div>
        ))}
      </section>

      <section className="h-96justify-center items-center">
        <hr className="border-t border-gray-400 my-2 pb-6 w-3/4 mx-auto" />

        <div className="flex justify-center items-center">
          <div className="flex bg-[#8EA58C] w-7/12 h-72 border-2 border-gray-400">
            <div className="flex w-4/10 h-72">
              <img src="/images/promo.png" alt="Promo" className="w-full h-full" />
            </div>

            <div className="flex-col w-6/10 h-72">
              <div className="flex-col h-1/3">
                <p className="text-3xl pt-8 pl-3">
                  Keep your business moving forward with Secret Bank
                </p>
              </div>
              <div className="flex-colh-1/3 pt-7 pl-3">
                <p className="text-xl">
                  When you open a new Chase Business Complete Checking account with qualifying activities. For business checking customers only.
                </p>
              </div>
              <div className="flex-col h-1/3 justify-center items-centers pt-8 pl-3">
                <button className="text-lg bg-emerald-900 px-6 py-2 text-white rounded-2xl shadow-md">Open account</button>
              </div>

            </div>
          </div>
        </div>

        <hr className="border-t border-gray-400 my-8 w-3/4 mx-auto" />

        <div className="flex justify-center items-center">
          <div className="flex bg-white w-7/12 h-72">
            <div className="flex bg-red-400 w-4/10 h-72">
            </div>
            <div className="flex-col bg-green-400 w-6/10 h-72">
              <div className="flex-col bg-orange-400 h-1/3">
                <p className="text-3xl">
                  Keep your business moving forward with Secret Bank
                </p>
              </div>
              <div className="flex-col bg-pink-400 h-1/3">
                <p className="text-xl">
                  When you open a new Chase Business Complete Checking account with qualifying activities. For business checking customers only.
                </p>
              </div>
              <div className="flex-col bg-yellow-400 h-1/3 justify-center items-centers">
                <button className="text-lg bg-emerald-900 px-4 py-2 text-white rounded-2xl shadow-md">Open account</button>
              </div>

            </div>
          </div>
        </div>

        <hr className="border-t border-gray-400 my-8 w-3/4 mx-auto" />

      </section>

    </main>
  );
}

function KeenCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    mode: "snap",
    rubberband: false,
    dragSpeed: 10,
    slides: {
      perView: 2.2,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 3,
          spacing: 15,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 5,
          spacing: 15,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const items = [
    { label: "Schedule a meeting", icon: IoPeople },
    { label: "Free credit score", icon: IoSpeedometerSharp },
    { label: "Business", icon: MdBusinessCenter },
    { label: "Credit cards", icon: BsFillCreditCard2FrontFill },
    { label: "Checking", icon: FaMoneyCheck },
    { label: "Travel", icon: IoAirplane },
    { label: "Savings", icon: FaPiggyBank },
    { label: "Home loans", icon: FaHome },
    { label: "Auto", icon: FaCar },
    { label: "Investments", icon: FaChartLine },
    { label: "Commercial", icon: IoBusiness },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative flex items-center justify-center w-full">
        <button onClick={() => instanceRef.current?.prev()} className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-emerald-900 hover:bg-emerald-700 text-white px-3 py-2 rounded-l z-10">‹</button>
        <div ref={sliderRef} className="keen-slider w-full">
          {items.map(({ label, icon: Icon }, index) => (
            <div key={index} className="keen-slider__slide w-60 h-40 p-4 flex flex-col items-center justify-center text-center bg-emerald-900 text-white rounded-md shadow-lg hover:bg-emerald-700 transition">
              <Icon className="text-3xl mb-2" />
              <h3 className="text-lg font-bold">{label}</h3>
              <p className="text-sm mt-1">Explore our {label.toLowerCase()} options.</p>
            </div>
          ))}
        </div>
        <button onClick={() => instanceRef.current?.next()} className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-emerald-900 hover:bg-emerald-700 transition text-white px-3 py-2 rounded-r z-10">›</button>
      </div>
      {loaded && instanceRef.current && (() => {
        const maxIdx = instanceRef.current.track.details.maxIdx;
        return (
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: maxIdx + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-3 h-3 rounded-full ${currentSlide === idx ? "bg-emerald-700" : "bg-gray-400"} transition-all duration-200`}
              />
            ))}
          </div>
        );
      })()}
    </div>
  );
}