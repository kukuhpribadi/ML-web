const About = () => {
  return (
    <div className="flex items-center justify-center  bg-gray-50">
      <div className="mx-auto flex flex-col lg:flex-row items-center lg:gap-20">
        {/* left */}
        <div className="lg:w-1/2 h-[300px] lg:h-[500px] overflow-hidden">
          <img
            src="aboutImage.jpg"
            className="w-full  object-cover object-top lg:mt-[-130px]"
            alt=""
          />
        </div>
        {/* end-left */}
        {/* right */}
        <div className="lg:w-1/2 p-10">
          <div className="lg:w-2/3">
            <h2 className="text-center lg:text-left text-3xl font-bold font-serif">
              About{" "}
              <span>
                moek
                <span className="relative">
                  <span className="bg-transparent z-10 relative">ai</span>
                  <span className="absolute bg-accent h-1/2 w-[130%] left-0 bottom-1"></span>
                </span>
              </span>
            </h2>
            <p className="text-center lg:text-left mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              voluptate earum omnis, et ad quo delectus expedita fugit facilis
              repellat magnam sit commodi labore ab nihil dicta, officia, eos
              sunt! Iusto voluptas aliquid, dolorem quo quibusdam iste porro
              vitae blanditiis incidunt nemo animi recusandae autem debitis
              consequuntur molestiae? Perferendis, hic? Nobis non quam sint ut
              quas eos reprehenderit unde, omnis, consequuntur praesentium sed!
              Ratione aut laboriosam ab enim tenetur sed voluptate repudiandae
              eum expedita sunt esse, quos temporibus sint animi alias veritatis
              similique saepe corporis consectetur nulla incidunt praesentium
              rerum dignissimos accusamus! Fugiat quas cum itaque expedita! Hic,
              fuga maiores.
            </p>
          </div>
        </div>
        {/* end-right */}
      </div>
    </div>
  );
};

export default About;
