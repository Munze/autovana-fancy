import { useState } from "react";
import { Tab } from "@headlessui/react";
import { MultipleSelect } from "../MultipleSelect";

const brend = [
  { label: "Audi", value: "1" },
  { label: "Alfa Romeo", value: "2" },
  { label: "Abarth", value: "3" },
  { label: "BMW", value: "4" },
  { label: "Daewoo", value: "5", disabled: true },
  { label: "Dodge", value: "6" },
  { label: "Dacia", value: "7" },
  { label: "Lada", value: "8" },
  { label: "Fiat", value: "9" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabovi() {
  let [categories] = useState({
    Automobili: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Motocikli: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Plovila: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
    Komercijalna: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <div className="w-full max-w-[780px] px-2 py-0.5 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <div className="container">
                  <div className="md:flex mb-5">
                      <div className="min-w-[200px] md:w-2/6 mx-1">
                        <MultipleSelect placeholder="Brend" options={brend} />
                      </div>
                      <div className="min-w-[200px] md:w-2/6 mx-1">
                        <MultipleSelect placeholder="Brend" options={brend} />
                      </div>
                      <div className="min-w-[200px] md:w-2/6 mx-1">
                        <MultipleSelect placeholder="Brend" options={brend} />
                      </div>
                  </div>
                  {/* <div className="md:flex mb-5">
                      <div className="min-w-[200px] md:w-2/6 mx-1">
                        <MultipleSelect placeholder="Brend" options={brend} />
                      </div>
                      <div className="min-w-[200px] md:w-2/6 mx-1">
                        <MultipleSelect placeholder="Brend" options={brend} />
                      </div>
                      <div className="min-w-[200px] md:w-2/6 mx-1">
                        <MultipleSelect placeholder="Brend" options={brend} />
                      </div>
                  </div> */}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
