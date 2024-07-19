import { useState, useEffect } from 'react';
import overViewData from '../../services/overview.service';

function Overview() {
  const [overview, setOveview] = useState([]);

  useEffect(() => {
    fetchOverviewData();
  }, []);

  async function fetchOverviewData() {
    try {
      const overviewData = await overViewData();
      console.log(overViewData);
      setOveview(overviewData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1 class="text-5xl text-center">OVERVIEW</h1>
      <br></br>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {overview.length > 0 ? (
          overview.map((over) => (
            <div
              key={over.id}
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <img src={over.image} alt="not found"></img>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {over.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  class="w-6 h-6 text-white-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z"
                    clip-rule="evenodd"
                  />
                </svg>
                Learn More
              </a>
            </div>
          ))
        ) : (
          <p>No blogs available</p>
        )}
      </div>
    </>
  );
}

export default Overview;
