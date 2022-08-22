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
const model = [
  { label: "Ford F-Series", value: "1" },
  { label: "Golf", value: "2" },
  { label: "Clio", value: "3" },
  { label: "Polo", value: "4" },
  { label: "Tiguan", value: "5", disabled: true },
  { label: "Corsa", value: "6" },
  { label: "208", value: "7" },
  { label: "Qashqai", value: "8" },
  { label: "Captur", value: "9" },
];
const stanje = [
  { label: "Novo", value: "1" },
  { label: "Polovno", value: "2" },
  { label: "Oštećeno", value: "3" },
];

const godina = [
  { label: "2010", value: 2010 },
  { label: "2011", value: 2011 },
  { label: "2012", value: 2012 },
  { label: "2013", value: 2013 },
  { label: "2014", value: 2014 },
  { label: "2015", value: 2015 },
  { label: "2016", value: 2016 },
  { label: "2017", value: 2017 },
  { label: "2018", value: 2018 },
  { label: "2019", value: 2019 },
  { label: "2020", value: 2020 },
  { label: "2021", value: 2021 },
  { label: "2022", value: 2022 },
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
    // Plovila: [
    //   {
    //     id: 1,
    //     title: "Ask Me Anything: 10 answers to your questions about coffee",
    //     date: "2d ago",
    //     commentCount: 9,
    //     shareCount: 5,
    //   },
    //   {
    //     id: 2,
    //     title: "The worst advice we've ever heard about coffee",
    //     date: "4d ago",
    //     commentCount: 1,
    //     shareCount: 2,
    //   },
    // ],
    // Komercijalna: [
    //   {
    //     id: 1,
    //     title: "Ask Me Anything: 10 answers to your questions about coffee",
    //     date: "2d ago",
    //     commentCount: 9,
    //     shareCount: 5,
    //   },
    //   {
    //     id: 2,
    //     title: "The worst advice we've ever heard about coffee",
    //     date: "4d ago",
    //     commentCount: 1,
    //     shareCount: 2,
    //   },
    // ],
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
                <div className="md:flex md:mb-5">
                  <div className="min-w-[200px] md:w-2/6 mx-1 my-1">
                    <MultipleSelect placeholder="Brend" options={brend} />
                  </div>
                  <div className="min-w-[200px] md:w-3/6 mx-1 my-1">
                    <MultipleSelect placeholder="Model" options={model} />
                  </div>
                  <div className="sm:min-w-[200px] w-[200px] md:w-1/6 mx-1 my-1">
                    <MultipleSelect placeholder="Stanje" options={stanje} />
                  </div>
                </div>
                <div className="grid grid-cols-2 md:flex sm:mb-5">
                  <div className="min-w-[100px]  md:w-1/4 mx-1 my-1">
                    <MultipleSelect
                      placeholder="Godina od"
                      options={godina}
                      multiple={0}
                    />
                  </div>
                  <div className="min-w-[100px]  md:w-1/4 mx-1 my-1">
                    <MultipleSelect
                      placeholder="Godina do"
                      options={godina}
                      multiple={0}
                    />
                  </div>
                  <div className="min-w-[100px]  md:w-1/4 mx-1 my-1">
                    <MultipleSelect
                      placeholder="Cena od"
                      options={godina}
                      multiple={0}
                    />
                  </div>
                  <div className="min-w-[100px]   md:w-1/4 mx-1 my-1">
                    <MultipleSelect
                      placeholder="Cena do"
                      options={godina}
                      multiple={0}
                    />
                  </div>
                </div>
                <div className="md:flex mb-4 items-center">
                  <a className="w-4/12 pl-6 font-bold text-lg cursor-pointer text-blue-700 hover:text-emerald-600">
                    <p className="mb-3 md:mb-0">Napredna pretraga</p>
                  </a>
                  <button
                    type="button"
                    className="w-8/12 inline-block uppercase px-6 py-2.5 bg-emerald-400 text-white text-lg font-extrabold leading-tight rounded shadow-md hover:bg-emerald-500 hover:shadow-lg focus:bg-emerald-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-400 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    1.245 rezultata
                  </button>
                </div>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
