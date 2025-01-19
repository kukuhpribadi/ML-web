const Header = () => {
  return (
    <div>
      {/* navbar */}
      <nav className="flex justify-between items-center px-5 lg:px-20 py-5 border-b-2 border-black">
        {/* left */}
        <div className="text-4xl font-bold font-serif">
          moek
          <span className="relative">
            <span className="bg-transparent z-10 relative">ai</span>
            <span className="absolute bg-accent h-1/2 w-[130%] left-0 bottom-1"></span>
          </span>
        </div>
        {/* end-left */}
        {/* right */}
        <div>
          {/* source */}
          <div className="flex gap-5">
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 496 512"
                height="28px"
                width="28px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
            </div>
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                height="28px"
                width="28px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.9414 4.9757a7.033 7.033 0 0 0-4.9308 2.0646 7.033 7.033 0 0 0-.1232 9.8068l2.395-2.395a3.6455 3.6455 0 0 1 5.1497-5.1478l2.397-2.3989a7.033 7.033 0 0 0-4.8877-1.9297zM7.07 4.9855a7.033 7.033 0 0 0-4.8878 1.9316l2.3911 2.3911a3.6434 3.6434 0 0 1 5.0227.1271l1.7341-2.9737-.0997-.0802A7.033 7.033 0 0 0 7.07 4.9855zm15.0093 2.1721l-2.3892 2.3911a3.6455 3.6455 0 0 1-5.1497 5.1497l-2.4067 2.4068a7.0362 7.0362 0 0 0 9.9456-9.9476zM1.932 7.1674a7.033 7.033 0 0 0-.002 9.6816l2.397-2.397a3.6434 3.6434 0 0 1-.004-4.8916zm7.664 7.4235c-1.38 1.3816-3.5863 1.411-5.0168.1134l-2.397 2.395c2.4693 2.3328 6.263 2.5753 9.0072.5455l.1368-.1115z"></path>
              </svg>
            </div>
          </div>
          {/* eend-source */}
        </div>
        {/* end-right */}
      </nav>
      {/* end-navbar */}
      <div className="bg-gray-100">
        <div className="p-10 lg:py-20 xl:w-[1350px] mx-auto flex flex-col lg:flex-row justify-between gap-5">
          {/* left */}
          <div className="order-2 lg:order-1 flex flex-col lg:gap-3 justify-center">
            <h1 className="text-center lg:text-left text-2xl lg:text-5xl font-bold font-serif">
              Decode Emotions, <br />
              Understand Expressions
            </h1>
            <div className="flex flex-col items-center lg:items-start gap-5 lg:gap-10">
              <p className="text-center lg:text-xl">
                Accurate and Fast Facial Expression Analysis Platform
              </p>
              <button className="bg-accent p-2 px-10 rounded-lg border border-black border-r-4 border-b-4">
                Learn More
              </button>
            </div>
          </div>
          {/* end-left */}
          {/* right */}
          <div className="order-1 lg:order-2 h-[250px] lg:h-[500px] rounded-lg border border-black border-r-4 border-b-4 overflow-hidden">
            <img
              src="image1.jpg"
              className="h-full w-full object-cover object-top"
              // style={{ objectPosition: "center -130px" }}
              alt=""
            />
          </div>
          {/* end-right */}
        </div>
      </div>
    </div>
  );
};

export default Header;
