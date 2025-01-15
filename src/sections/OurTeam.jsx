const OurTeam = () => {
  return (
    <div className="flex items-center justify-center p-10 lg:py-20">
      <div className="xl:w-[1140px] mx-auto">
        <h2 className="text-center text-3xl font-bold font-serif">Our Team</h2>
        {/* card-wrapper */}
        <div className="mt-14 grid lg:grid-cols-3 gap-10">
          {/* card */}
          <div className="flex flex-col items-center p-10 border border-black border-r-4 border-b-4 rounded-lg bg-white">
            <div className="w-40 h-40 overflow-hidden rounded-full">
              <img
                src="placeholder.png"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <h4 className="mt-5 text-lg font-bold">John Doe</h4>
            <p>Web developer</p>
            <p className="mt-5 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              delectus molestiae ducimus quaerat magnam illum ad atque error
              libero esse.
            </p>
          </div>
          {/* end-card */}
          {/* card */}
          <div className="flex flex-col items-center p-10 border border-black border-r-4 border-b-4 rounded-lg bg-white">
            <div className="w-40 h-40 overflow-hidden rounded-full">
              <img
                src="placeholder.png"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <h4 className="mt-5 text-lg font-bold">John Doe</h4>
            <p>Web developer</p>
            <p className="mt-5 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              delectus molestiae
            </p>
          </div>
          {/* end-card */}
          {/* card */}
          <div className="flex flex-col items-center p-10 border border-black border-r-4 border-b-4 rounded-lg bg-white">
            <div className="w-40 h-40 overflow-hidden rounded-full">
              <img
                src="placeholder.png"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <h4 className="mt-5 text-lg font-bold">John Doe</h4>
            <p>Web developer</p>
            <p className="mt-5 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              delectus molestiae ducimus quaerat magnam illum ad atque error
              libero esse.
            </p>
          </div>
          {/* end-card */}
        </div>
        {/* end-card-wrapper */}
      </div>
    </div>
  );
};

export default OurTeam;
