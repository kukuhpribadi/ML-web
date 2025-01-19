import ProfileCard from "../components/profileCard";

const dataTeam = [
  {
    name: "Ichsan Nurhendy",
    jobDesc: "DS/ML Engineer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optiodelectus molestiae ducimus quaerat magnam illum ad atque error libero esse.",
  },
  {
    name: "Silvia Rachmawati",
    jobDesc: "Project Manager",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optiodelectus molestiae ducimus quaerat magnam illum ad atque error libero esse.",
  },
  {
    name: "Kukuh Pribadi",
    jobDesc: "Web Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optiodelectus molestiae ducimus quaerat magnam illum ad atque error libero esse.",
  },
];

const OurTeam = () => {
  return (
    <div className="flex items-center justify-center p-10 lg:py-20">
      <div className="xl:w-[1140px] mx-auto">
        <h2 className="text-center text-3xl font-bold font-serif">Our Team</h2>
        {/* card-wrapper */}
        <div className="mt-14 grid lg:grid-cols-3 gap-10">
          {dataTeam.map((data) => {
            const { name, jobDesc, description } = data;
            return (
              <ProfileCard
                name={name}
                jobDesc={jobDesc}
                description={description}
              />
            );
          })}
        </div>
        {/* end-card-wrapper */}
      </div>
    </div>
  );
};

export default OurTeam;
