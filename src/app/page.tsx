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

      <header style={{ backgroundColor: "#d3ded1" }} className="fixed top-0 w-full text-gray-700 shadow z-50 flex justify-between items-center px-35 py-16">
        <div className="flex flex-col items-start space-y-2">
          <nav className="space-x-6 pl-25 -mt-15">
            <a href="#">Personal</a>
            <a href="#">Business</a>
            <a href="#">Commercial</a>
          </nav>
          <div className="relative font-bold pl-25 translate-y-3 text-xl">Secret Bank</div>
          <nav className="relative text-sm space-x-4 pl-25 -mt-15 translate-y-21">
            <a href="#">Checking</a>
            <a href="#">Savings & CDs</a>
            <a href="#">Credit cards</a>
            <a href="#">Home loans</a>
            <a href="#">Auto</a>
            <a href="#">Investing by Secret Bank</a>
          </nav>
        </div>
        <div className="flex flex-col items-start -translate-x-6 space-y-2">
          <nav className="relative flex items-center text-xs space-x-4 -translate-y-12 -translate-x-25">
            <a href="#">Schedule a meeting</a>
            <a href="#">Customer service</a>
            <a href="#"><BsSearch className="inline-block text-base -translate-y-0.5" /></a>
          </nav>
        </div>
      </header>

      <div className="h-36"></div>

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


      <section className="flex flex-col text-white py-6">
        <div className="text-center text-gray-700 text-5xl mb-6">
          Choose what's right for you
        </div>
        <div className="w-full max-w-6xl mx-auto px-4">
          <KeenCarousel />
        </div>
      </section>

      <section className="h-140 flex justify-center space-x-10 items-center text-center">


        <div style={{ backgroundColor: "#becfbc" }} className="flex flex-col w-100 h-110 shadow border-gray-700 border-1">
          <div className="flex w-100 h-30 bg-emerald-900">
            <div className="w-50 h-30 pt-2 text-left">
              <p className="text-2xl pl-5 pt-1 ">Secret</p>
              <p className="text-2xl pl-5">Bank</p>
              <p className="text-2xl pl-5">Unlimited</p>
            </div>
            <div className="w-50 h-30">
              <FaCreditCard className="text-7xl ml-16.5 mt-6" />
            </div>
          </div>
          <div className="flex flex-col w-100 h-50">
            <div className="w-100 h-20">
              <h3 className="text-2xl text-bold text-left pl-10 pt-8 text-gray-700">Earn a $300 bonus</h3>
            </div>
            <div className="w-100 h-30 pb-5">
              <h3 className="text-lg text-bold text-left pl-10 text-gray-700">Plus, earn unlimited 2% cash back or more on all purchases
                , including 4% on dining and drugstores - all with no annual fee.
              </h3>
            </div>
          </div>
          <div className="w-100 h-20 flex items-center justify-start pl-10">
            <button className="text-2xl bg-emerald-900 px-2 py-2 rounded-2xl">Learn more
            </button>
          </div>
        </div>

        <div style={{ backgroundColor: "#becfbc" }} className="flex flex-col w-100 h-110 shadow border-gray-700 border-1">
          <div className="flex w-100 h-30 bg-emerald-900">
            <div className="w-50 h-30 pt-2 text-left">
              <p className="text-2xl pl-5 pt-5">Secret Bank Secure Banking</p>
            </div>
            <div className="w-50 h-30">
              <FaMoneyCheck className="text-7xl ml-16.5 mt-6" />
            </div>
          </div>
          <div className="flex flex-col w-100 h-50">
            <div className="w-100 h-20">
              <h3 className="text-2xl text-bold text-left pl-10 pt-8 text-gray-700">Enjoy $200 on us</h3>
            </div>
            <div className="w-100 h-30 pb-5">
              <h3 className="text-lg text-bold text-left pl-10 text-gray-700">For new Secret Bank checking customers when you open a Secret Banking acccount with qualifiying transactions.
              </h3>
            </div>
          </div>
          <div className="w-100 h-20 flex items-center justify-start pl-10">
            <button className="text-2xl bg-emerald-900 px-2 py-2 rounded-2xl">Learn more
            </button>
          </div>
        </div>

        <div style={{ backgroundColor: "#becfbc" }} className="flex flex-col w-100 h-110 shadow border-gray-700 border-1">
          <div className="flex w-100 h-30 bg-emerald-900">
            <div className="w-50 h-30 pt-2 text-left">
              <p className="text-2xl pl-5 pt-8">J.P. Morgan</p>
            </div>
            <div className="w-50 h-30">
              <FaCreditCard className="text-7xl ml-16.5 mt-6" />
            </div>
          </div>
          <div className="flex flex-col w-100 h-50">
            <div className="w-100 h-20">
              <h3 className="text-2xl text-bold text-left pl-10 pt-8 text-gray-700">Earn a $300 bonus</h3>
            </div>
            <div className="w-100 h-30 pb-5">
              <h3 className="text-lg text-bold text-left pl-10 text-gray-700">Plus, earn unlimited 2% cash back or more on all purchases, including 4% on dining and drugstores - all with no annual fee.
              </h3>
            </div>
          </div>
          <div className="w-100 h-20 flex items-center justify-start pl-10">
            <button className="text-2xl bg-emerald-900 px-2 py-2 rounded-2xl">Learn more
            </button>
          </div>
        </div>

      </section>

      <section className="h-96 bg-red-400 flex flex-col justify-center items-center">
        <div className="bg-white w-40 h-32"></div>
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
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-emerald-900 hover:bg-emerald-700 text-white px-3 py-2 rounded-l z-10"
        >
          ‹
        </button>
        <div ref={sliderRef} className="keen-slider w-full">
          {items.map(({ label, icon: Icon }, index) => (
            <div
              key={index}
              className="keen-slider__slide w-60 h-40 p-4 flex flex-col items-center justify-center text-center bg-emerald-900 text-white rounded-md shadow hover:bg-emerald-700 transition"
            >
              <Icon className="text-3xl mb-2" />
              <h3 className="text-lg font-bold">{label}</h3>
              <p className="text-sm mt-1">Explore our {label.toLowerCase()} options.</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-emerald-900 hover:bg-emerald-700 transition text-white px-3 py-2 rounded-r z-10"
        >
          ›
        </button>
      </div>
      {loaded && instanceRef.current && (() => {
        const maxIdx = instanceRef.current.track.details.maxIdx;
        return (
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: maxIdx + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-3 h-3 rounded-full ${currentSlide === idx ? "bg-emerald-700" : "bg-gray-400"
                  } transition-all duration-200`}
              />
            ))}
          </div>
        );
      })()}

    </div>
  );
}
