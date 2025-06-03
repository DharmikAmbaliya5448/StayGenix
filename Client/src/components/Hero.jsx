import React, { useEffect, useState } from "react";
import { assets, cities } from "../assets/assets";

const Hero = () => {
  const [today, setToday] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOutMin, setCheckOutMin] = useState("");

  useEffect(() => {
    const now = new Date();
    const formattedToday = now.toISOString().split("T")[0];
    setToday(formattedToday);
  }, []);

  const handleCheckInChange = (e) => {
    const selectedDate = e.target.value;
    setCheckIn(selectedDate);

    // Automatically set check-out min date to next day of check-in
    const nextDay = new Date(selectedDate);
    nextDay.setDate(nextDay.getDate() + 1);
    const formattedNextDay = nextDay.toISOString().split("T")[0];
    setCheckOutMin(formattedNextDay);
  };

  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-stone-900 bg-[url("/src/assets/hero2.jpg")] bg-no-repeat bg-cover bg-center h-screen'>
      <p className="bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20">
        The Ultimate Hotel Experience
      </p>
      <h1 className="bg-[#57A3CC]/50 rounded font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4">
        Discover Your Perfect Gateway Destination
      </h1>
      <p className="bg-[#49B9FF]/45 rounded-full max-w-130 mt-2 text-sm md:text-base">
        Unparalleled luxury and comfort await at the world's most exclusive
        hotels and resorts. Start your journey today.
      </p>

      <form className="bg-white text-gray-500 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto">
        {/* Destination Input */}
        <div>
          <div className="flex items-center gap-2">
            <img src={assets.calenderIcon} alt="calendarIcon" className="h-4" />
            <label htmlFor="destinationInput">Destination</label>
          </div>
          <input
            list="destinations"
            id="destinationInput"
            type="text"
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            placeholder="Type here"
            required
          />
          <datalist id="destinations">
            {cities.map((city, index) => (
              <option value={city} key={index} />
            ))}
          </datalist>
        </div>

        {/* Check-in Input */}
        <div>
          <div className="flex items-center gap-2">
            <img src={assets.calenderIcon} alt="calendarIcon" className="h-4" />
            <label htmlFor="checkIn">Check in</label>
          </div>
          <input
            id="checkIn"
            type="date"
            min={today}
            value={checkIn}
            onChange={handleCheckInChange}
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            required
          />
        </div>

        {/* Check-out Input */}
        <div>
          <div className="flex items-center gap-2">
            <img src={assets.calenderIcon} alt="calendarIcon" className="h-4" />
            <label htmlFor="checkOut">Check out</label>
          </div>
          <input
            id="checkOut"
            type="date"
            min={checkOutMin || today}
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            required
          />
        </div>

        {/* Guests Input */}
        <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
          <label htmlFor="guests">Guests</label>
          <input
            min={1}
            max={4}
            id="guests"
            type="number"
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none max-w-16"
            placeholder="0"
            required
          />
        </div>

        {/* Search Button */}
        <button className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1">
          <img src={assets.searchIcon} alt="searchIcon" className="h-7" />
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default Hero;
