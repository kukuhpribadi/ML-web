const ProfileCard = ({ name, jobDesc, description }) => {
  return (
    <>
      {/* card */}
      <div className="flex flex-col items-center p-10 border border-black border-r-4 border-b-4 rounded-lg bg-white">
        <div className="w-40 h-40 overflow-hidden rounded-full">
          <img
            src="placeholder.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <h4 className="mt-5 text-lg font-bold">{name}</h4>
        <p>{jobDesc}</p>
        <p className="mt-5 text-center">{description}</p>
      </div>
      {/* end-card */}
    </>
  );
};

export default ProfileCard;
