"use client";

import { algolaIndex } from "@/config/algoliaConfig";
import { addResult } from "@/redux/features/search/searchSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    // handle Debounce
    const delayDebounceFn = setTimeout(async () => {
      if (searchTerm.length > 0) {
        dispatch(
          addResult({
            result: [],
            isLoading: true,
          })
        );
        const { hits } = await algolaIndex.search(searchTerm);
        dispatch(
          addResult({
            result: hits,
            isLoading: false,
          })
        );
      } else {
        dispatch(
          addResult({
            result: [],
            isLoading: false,
          })
        );
      }
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.length > 0) {
      dispatch(
        addResult({
          result: [],
          isLoading: true,
        })
      );
      const { hits } = algolaIndex.search(searchTerm);
      dispatch(
        addResult({
          result: hits,
          isLoading: false,
        })
      );
    } else {
      dispatch(
        addResult([
          {
            result: [],
            isLoading: false,
          },
        ])
      );
    }
  };

  return (
    <form onClick={handleSubmit} className="w-full">
      <div className="flex items-center justify-between w-full">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Search for the tool you like"
          className="w-full px-3 h-10 border border-slate-300 focus:outline-none focus:border-slate-300"
        />
        <button type="submit" className="bg-m p-3">
          <svg
            className="text-white"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
          </svg>
        </button>
      </div>
    </form>
  );
}

export default Search;
