
export function RevenueCard ({ title, showWarning, orderCount, amount }) {
  return (
    <div className="bg-white rounded shadow-md p-4">
      <div className="text-gray-700 flex justify-center flex-col hover:bg-red-100 ">
        <div className="flex">
          <div>{title}</div>
          <div className="flex flex-col justify-center ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="font-semibold text-2xl">₹ {amount}</div>
        {orderCount ? (
          <div className="flex underline cursor-point font-medium flex-col justify-center">
            <div className="flex ">
              <div className="text-blue-700">{orderCount} order(s)</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
