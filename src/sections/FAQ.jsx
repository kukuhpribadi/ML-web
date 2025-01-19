const dataFaq = [
  {
    question: "Why is recognizing emotions important in daily life?",
    answer:
      "Recognizing emotions is crucial because it helps individuals understand their own feelings and the feelings of others. This awareness can improve communication, enhance relationships, and lead to better decision-making. It also allows for more effective conflict resolution and promotes empathy.",
  },
  {
    question: "How does recognizing emotions contribute to mental health?",
    answer:
      "Being able to identify and understand emotions is vital for mental health. It enables individuals to process their feelings, cope with stress, and seek help when needed. Recognizing emotions can also prevent emotional suppression, which can lead to anxiety and depression.",
  },
  {
    question:
      "In what ways can recognizing emotions improve interpersonal relationships?",
    answer:
      "Recognizing emotions fosters empathy and understanding in relationships. It allows individuals to respond appropriately to others' feelings, leading to stronger connections and trust. This emotional intelligence can enhance teamwork, collaboration, and conflict resolution in both personal and professional settings.",
  },
  {
    question:
      "What role does emotional recognition play in effective leadership?",
    answer:
      "Effective leaders must recognize and understand emotions to inspire and motivate their teams. By being attuned to the emotional climate, leaders can address concerns, provide support, and create a positive work environment. This emotional awareness can lead to increased employee engagement and productivity.",
  },
  {
    question: "How can one improve their ability to recognize emotions?",
    answer:
      "Improving emotional recognition can be achieved through practices such as mindfulness, active listening, and self-reflection. Engaging in conversations about feelings, observing non-verbal cues, and seeking feedback from others can also enhance one's ability to recognize and understand emotions in themselves and others.",
  },
];

const FAQ = () => {
  return (
    <div className="flex items-center justify-center p-10 lg:py-20 bg-gradient-to-r from-yellow-200 to-amber-300">
      <div className="xl:w-[1140px] mx-auto">
        <h2 className="text-center text-3xl font-bold font-serif">FAQ</h2>
        {/* card-wrapper */}
        <div className="mt-20 grid gap-5">
          {dataFaq.map((data, index) => {
            const { question, answer } = data;
            return (
              <div className="flex border border-black border-r-4 border-b-4 rounded-lg bg-white">
                <div className="min-w-[200px] border-dashed border-r-2 border-black flex items-center justify-center">
                  <p className="-mt-3 font-serif font-bold text-6xl">
                    {index + 1}
                  </p>
                </div>
                <div className="p-10">
                  <h4 className="font-serif font-semibold text-lg">
                    {question}
                  </h4>
                  <p>{answer}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* end-card-wrapper */}
      </div>
    </div>
  );
};

export default FAQ;
