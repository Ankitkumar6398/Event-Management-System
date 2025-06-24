import React, { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import eventsData from "../data/events";

function getStoredEvents() {
  const stored = localStorage.getItem("events");
  return stored ? JSON.parse(stored) : eventsData;
}

const getUniqueTypes = (events) => [
  ...new Set(events.map((e) => e.type || "Other")),
];

const sortEvents = (events, sort) => {
  const sorted = [...events];
  switch (sort) {
    case "date-asc":
      sorted.sort((a, b) => a.date.localeCompare(b.date));
      break;
    case "date-desc":
      sorted.sort((a, b) => b.date.localeCompare(a.date));
      break;
    case "price-asc":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "title-asc":
      sorted.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "title-desc":
      sorted.sort((a, b) => b.title.localeCompare(a.title));
      break;
    default:
      break;
  }
  return sorted;
};

const EVENTS_PER_PAGE = 6;

const EmptyState = () => (
  <div className="col-span-full text-center py-12 flex flex-col items-center">
    <svg
      className="w-24 h-24 text-blue-200 mb-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M12 12l-1.414-1.414a2 2 0 00-2.828 0L6 12m6 0l1.414 1.414a2 2 0 010 2.828L12 18m0-6l-1.414 1.414m2.828 2.828L12 18m0-6l-1.414-1.414"
      />
    </svg>
    <h3 className="text-xl font-semibold text-gray-600">No Events Found</h3>
    <p className="text-gray-500 mt-1">Try adjusting your search or filters.</p>
  </div>
);

const SkeletonCard = () => (
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-pulse flex flex-col h-full">
    <div className="w-full h-48 bg-blue-100" />
    <div className="p-5 flex flex-col flex-1">
      <div className="flex items-center justify-between mb-2">
        <div className="w-20 h-5 bg-blue-100 rounded-full" />
        <div className="w-12 h-5 bg-blue-100 rounded-full" />
      </div>
      <div className="w-2/3 h-6 bg-blue-100 rounded mb-2" />
      <div className="w-1/2 h-4 bg-blue-100 rounded mb-2" />
      <div className="w-full h-4 bg-blue-100 rounded mb-4 flex-1" />
      <div className="w-24 h-8 bg-blue-100 rounded-full mt-auto" />
    </div>
  </div>
);

const Spinner = () => (
  <div className="flex justify-center items-center py-12">
    <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
  </div>
);

const Events = () => {
  const [search, setSearch] = useState("");
  const [events, setEvents] = useState(getStoredEvents());
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setEvents(getStoredEvents());
  }, []);

  // Simulate loading on mount and when filters/search/sort change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, [search, type, price, location, dateFrom, dateTo, sort, page]);

  const uniqueTypes = getUniqueTypes(events);

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.location.toLowerCase().includes(search.toLowerCase()) ||
      event.date.includes(search);
    const matchesType = !type || event.type === type;
    const matchesPrice =
      !price || (price === "free" && event.price === 0) || (price === "paid" && event.price > 0);
    const matchesLocation =
      !location || event.location.toLowerCase().includes(location.toLowerCase());
    const matchesDateFrom = !dateFrom || event.date >= dateFrom;
    const matchesDateTo = !dateTo || event.date <= dateTo;
    return (
      matchesSearch &&
      matchesType &&
      matchesPrice &&
      matchesLocation &&
      matchesDateFrom &&
      matchesDateTo
    );
  });

  const sortedEvents = sortEvents(filteredEvents, sort);

  // Pagination logic
  const totalPages = Math.ceil(sortedEvents.length / EVENTS_PER_PAGE) || 1;
  const paginatedEvents = sortedEvents.slice(
    (page - 1) * EVENTS_PER_PAGE,
    page * EVENTS_PER_PAGE
  );

  const goToPage = (p) => setPage(p);
  const goPrev = () => setPage((p) => Math.max(1, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages, p + 1));

  // Reset to page 1 when filters/search/sort change
  useEffect(() => {
    setPage(1);
  }, [search, type, price, location, dateFrom, dateTo, sort]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-700 text-center">All Events</h1>
      {/* Filter Bar */}
      <div className="flex flex-wrap gap-4 justify-center mb-8 bg-white/80 rounded-xl shadow p-4">
        <input
          type="text"
          placeholder="Search by keyword..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-48 px-3 py-2 border border-blue-200 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select
          value={type}
          onChange={e => setType(e.target.value)}
          className="w-40 px-3 py-2 border border-blue-200 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">All Types</option>
          {uniqueTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        <select
          value={price}
          onChange={e => setPrice(e.target.value)}
          className="w-32 px-3 py-2 border border-blue-200 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">All Prices</option>
          <option value="free">Free</option>
          <option value="paid">Paid</option>
        </select>
        <input
          type="text"
          placeholder="Location..."
          value={location}
          onChange={e => setLocation(e.target.value)}
          className="w-40 px-3 py-2 border border-blue-200 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="date"
          value={dateFrom}
          onChange={e => setDateFrom(e.target.value)}
          className="px-3 py-2 border border-blue-200 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="date"
          value={dateTo}
          onChange={e => setDateTo(e.target.value)}
          className="px-3 py-2 border border-blue-200 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="w-44 px-3 py-2 border border-blue-200 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Sort By</option>
          <option value="date-asc">Date (Soonest First)</option>
          <option value="date-desc">Date (Latest First)</option>
          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>
          <option value="title-asc">Title (A-Z)</option>
          <option value="title-desc">Title (Z-A)</option>
        </select>
      </div>
      {/* Loading Spinner and Skeletons */}
      {loading ? (
        <>
          <Spinner />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: EVENTS_PER_PAGE }).map((_, idx) => (
              <SkeletonCard key={idx} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedEvents.length > 0 ? (
              paginatedEvents.map(event => <EventCard key={event.id} event={event} />)
            ) : (
              <EmptyState />
            )}
          </div>
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-10 space-x-2">
              <button onClick={goPrev} disabled={page === 1} className="px-3 py-1 rounded bg-blue-100 text-blue-700 font-semibold disabled:opacity-50">Prev</button>
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToPage(idx + 1)}
                  className={`px-3 py-1 rounded font-semibold ${page === idx + 1 ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700'} transition`}
                >
                  {idx + 1}
                </button>
              ))}
              <button onClick={goNext} disabled={page === totalPages} className="px-3 py-1 rounded bg-blue-100 text-blue-700 font-semibold disabled:opacity-50">Next</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Events; 