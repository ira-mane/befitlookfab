import React from 'react';
export default function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div
          className="inline-block h-16 w-16 animate-spin rounded-full border-8 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span
            className="!absolute!-m-px!h-px!w-px!overflow-hidden!whitespace-nowrap!border-0!p-0![clip:rect(0,0,0,0)]"
          >
            .
          </span>
        </div>
        <p className="text-lg text-gray-600 mt-4">
          If the page fails to load, we apologize for the inconvenience. Please contact us at{' '}
          <a href="mailto:befitlookfab@gmail.com" className="text-blue-600 hover:underline">
            befitlookfab@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}