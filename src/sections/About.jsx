const About = () => {
  return (
    <div className="flex items-center justify-center  bg-gray-50 ">
      <div className="mx-auto flex flex-col lg:flex-row items-center lg:gap-20">
        {/* left */}
        <div className="lg:w-1/2 h-[300px] lg:h-[550px] overflow-hidden">
          <img
            src="image2.jpg"
            className="w-full  object-cover object-top "
            alt=""
          />
        </div>
        {/* end-left */}
        {/* right */}
        <div className="lg:w-1/2 p-10">
          <div className="lg:w-[80%]">
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
              <b>"Moekai"</b> you can say <i>muke</i> or <i>moek ai</i> or
              whatever you want. It means <i>muka</i> in Bahasa or <i>face</i>{" "}
              in English. Moekai is a model machine learning built with a CNN
              algorithm for using the detection of human emotion with human face
              images. You can use this model for some cases like if you online
              meeting with your friend, you can take a picture of your friend's
              face and analyze it before you start the conversation, so you can
              adapt the way you talk to his/her emotions. You can also use it
              for yourself because some people can't recognize their emotions.
              In our dream, moekai can be developed and implemented in a smart
              home, it's will be wonderful if we go back home and open the door,
              moekai can adjust the light ambiance, adjust the room temperature,
              and play music recommendations according to our emotions. For now,
              moekai is just a simple model to predict emotion using face images
              but it's possible to be developed to a more advanced step.
            </p>
          </div>
        </div>
        {/* end-right */}
      </div>
    </div>
  );
};

export default About;
