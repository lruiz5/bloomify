import { Accordion } from "./Accordion";

export const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "Why should I hire you, Luis?",
      answer:
        "I believe that my extensive experience in building web applications using React and my familiarity with the full stack make me an excellent candidate for any job that I apply to. Furthermore, I have worked with JS, HTML, CSS and other relevant programming languages and am comfortable with bothe front-end and back-end development. Let's get in contact and we can discuss my qualifications further!",
    },
    {
      id: 2,
      question: "How can I see more of your work?",
      answer:
        "Check the links in the footer below! They will guide you to my personal website, GitHub, LinkedIn and my most recent published works!",
    },
    {
      id: 3,
      question: "Do you offer refunds?",
      answer:
        "As this is a fictional e-commerce site that does not accept real payments, no refunds will be issued to anyone for anything. This site serves one purpose: to allow me to showcase my React skills in the real world.",
    },
  ];

  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">
        Frequent Questions
      </h1>
      <div
        className=""
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        data-inactive-classes="text-gray-500 dark:text-gray-400"
      >
        {faqs.map((faq) => (
          <Accordion key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};
