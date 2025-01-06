"use client";
import Image from "next/image";

export default function Page() {
  return (
    <div
      className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-black transition-colors duration-200 flex-col p-4 gap-[32px]"
      data-oid="vo3f_q."
    >
      <div
        className="text-center text-gray-900 dark:text-gray-100 p-4"
        data-oid="hqnopab"
      >
        <h1
          className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight"
          data-oid="pt2l59b"
        >
          Welcome to your app
        </h1>
        <p
          className="text-xl md:text-2xl text-gray-800 dark:text-gray-300"
          data-oid="q144xfr"
        >
          This is a blank template React App
        </p>
      </div>
      <div
        className="w-full max-w-[1065px] flex gap-4 md:gap-5 p-4 md:p-6 text-red-500 flex-col border border-red-300 border-dashed"
        data-oid="6yuu06z"
      >
        <p className="dark:text-red-400" data-oid="nkxwwn:">
          You can delete this parent container to start from a blank page
        </p>

        <div
          className="flex flex-col md:flex-row gap-4 md:gap-5 w-full"
          data-oid="u-cg87c"
        >
          <div
            className="w-full p-4 md:p-8 bg-gray-100 dark:bg-gray-800 flex items-center flex-col gap-4 md:gap-6 transition-colors duration-200 rounded-[16px]"
            data-oid="-nsaa-u"
          >
            <div
              className="w-fit inline-flex items-center px-1.5 py-0.5 bg-purple-50 dark:bg-purple-900/50 border border-purple-300 dark:border-purple-700 rounded-full"
              data-oid="n-yi-h8"
            >
              <p
                className="text-purple-600 dark:text-purple-300 text-xs font-medium uppercase text-center"
                data-oid=".gq::s."
              >
                AI Chat
              </p>
            </div>
            <p
              className="text-gray-800 dark:text-gray-300 text-xl md:text-2xl text-center"
              data-oid="dnlzaav"
            >
              Select an element and ask AI to build something with it
            </p>
            <div
              className="relative w-full h-[450px] rounded-lg overflow-hidden"
              data-oid="t6mw20v"
            >
              <Image
                src="/images/chat.jpg"
                alt="AI Chat"
                fill
                className="object-cover transition-opacity duration-200"
                priority
                data-oid="slf0axr"
              />
            </div>
          </div>
          <div
            className="w-full p-4 md:p-8 bg-gray-100 dark:bg-gray-800 flex items-center flex-col gap-4 md:gap-6 transition-colors duration-200 rounded-[16px]"
            data-oid="nl7ejdf"
          >
            <div
              className="w-fit inline-flex items-center px-1.5 py-0.5 bg-green-50 dark:bg-green-900/50 border border-green-300 dark:border-green-700 rounded-full"
              data-oid="8vdlt7t"
            >
              <p
                className="text-green-600 dark:text-green-300 text-xs font-medium uppercase text-center"
                data-oid="__96881"
              >
                Code Link
              </p>
            </div>
            <p
              className="text-gray-800 dark:text-gray-300 text-xl md:text-2xl text-center"
              data-oid="bw:bj8j"
            >
              Select and Right-Click to view the code of any element on your
              page
            </p>
            <div
              className="relative w-full h-[450px] rounded-lg overflow-hidden"
              data-oid="_bthnsf"
            >
              <Image
                src="/images/right-click.jpg"
                alt="Code Link"
                fill
                className="object-cover transition-opacity duration-200"
                priority
                data-oid="d9al5-."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
