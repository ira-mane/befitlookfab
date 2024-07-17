import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";

const faqs = [
  {
    title: "What is BeFitLookFaB all about?",
    desc: "At BFLB, we have personalised online diet programs for weight loss & food caused diseases such as Thyroid, PCOS, Diabetes, Uric Acid, Liver & Cancer. Here, we believe in eating smart, not right. Along with diet charts, clients learn to manage their weight & condition for life",
  },
  {
    title: "How to book consultation appointment?",
    desc: "You can book a appointment directly by clicking on Booking button and filling the form. If that doesn't work then you can either mail us at befitlookfab@gmail.com or fill contact form on the website.",
  },
  {
    title: "How often does the diet change?",
    desc: "One diet plan is to be followed for 10 days, during this period if you have any queries or issues you can tell your mentor on chat section provided and she will address it within 8 working hours.So, in a 30 day’s Program you get 3 Diets, 60 day’s Program you get 6 new diets and in 90 Day’s program you get 9 new Diets.",
  },
  {
    title: "Do you give supplement ",
    desc: "BFLB  is about pure natural foods that you eat and see around you. We don’t use any artificial powders, pills or anything which is not natural or locally available.",
  },
  {
    title: "Do I need to exercise for weightloss?",
    desc: "We work on the 80/20 principle of nutrition science.For any weight loss/wellness/fitness program, diet plays 80% role, once you get that right you are bound to get results, if you can exercise and have time, we can recommend a suitable physical activity as well.In certain programs we recommend some physical activity, you should follow the advice of the mentor and she will give you options that will suit you.",
  },
  {
    title: "How much weightloss do you guarantee ?",
    desc: "In any health care program, anywhere in the world there will not be any guarantee. We promise that if you are dedicated, follow our diet plans & advice; RESULTS will follow.We have a very high success rate and have never seen a client not getting results if they follow our advice and are engaged with the mentor.Key is to engage with the mentor for any difficulty as she will do all in her power to make it easy and explain things to you. If that be the case, results are sure.",
  }
];

export function Faqs4() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="px-8 py-20">
      <div className="container mx-auto">
        <div className="mb-14 text-center ">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 text-4xl!leading-snug lg:text-[40px]"
          >
            Frequently asked questions
          </Typography>
          <Typography
            className="mx-auto font-normal text-[18px]!text-gray-500 lg:max-w-3xl"
          >
           Here are all the questions we frequently receive. If you have any further inquiries, please don't hesitate to contact us—we're happy to help!
          </Typography>
        </div>
        <div className="max-w-3xl mx-auto grid gap-10">
          {faqs.map(({ title, desc }, index) => (
            <div key={title}>
              <Typography
                color="blue-gray"
                className="pb-6 text-[20px] font-bold cursor-pointer"
                onClick={() => setActiveIndex(index === activeIndex? null : index)}
              >
                {title}
              </Typography>
              {index === activeIndex && (
                <div className="border-t border-gray-200 pt-4">
                  <Typography className="font-normal!text-gray-500">
                    {desc}
                  </Typography>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs4;