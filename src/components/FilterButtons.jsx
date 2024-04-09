const FilterButtons = ({ handleFilter }) => {
  return (
    <div className="mt-4">
      <button
        onClick={() => handleFilter("all")}
        className="mr-2 px-3 py-1 rounded-md bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white"
      >
        All
      </button>
      <button
        onClick={() => handleFilter("completed")}
        className="mr-2 px-3 py-1 rounded-md bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white"
      >
        Completed
      </button>
      <button
        onClick={() => handleFilter("active")}
        className="mr-2 px-3 py-1 rounded-md bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white"
      >
        Active
      </button>
    </div>
  );
};

export default FilterButtons;
