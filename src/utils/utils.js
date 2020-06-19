let makeElement = (classes, category, name, symbol, number, weight) => {
  return {
    classes: classes,
    category: category,
    name: name,
    symbol: symbol,
    number: number,
    weight: weight,
  };
};

export let elements = [
  makeElement(
    ["transition", "metal"],
    "transition",
    "Mercury",
    "Hg",
    80,
    200.59
  ),
  makeElement(["metalloid"], "metalloid", "Tellurium", "Te", 52, 127.6),
  makeElement(
    ["post-transition", "metal"],
    "post-transition",
    "Bismuth",
    "Bi",
    83,
    208.98
  ),
  makeElement(
    ["post-transition", "metal"],
    "post-transition",
    "Lead",
    "Pb",
    82,
    207.2
  ),
  makeElement(["transition", "metal"], "transition", "Gold", "Au", 79, 196.967),
  makeElement(["alkali", "metal"], "alkali", "Potassium", "K", 19, 39.0983),
  makeElement(["alkali", "metal"], "alkali", "Sodium", "Na", 11, 22.99),
  makeElement(
    ["transition", "metal"],
    "transition",
    "Cadmium",
    "Cd",
    48,
    112.411
  ),
  makeElement(
    ["alkaline-earth", "metal"],
    "alkaline-earth",
    "Calcium",
    "Ca",
    20,
    40.078
  ),
  makeElement(
    ["transition", "metal"],
    "transition",
    "Rhenium",
    "Re",
    75,
    186.207
  ),
  makeElement(
    ["post-transition", "metal"],
    "post-transition",
    "Thallium",
    "Tl",
    81,
    204.383
  ),
  makeElement(["metalloid"], "metalloid", "Antimony", "Sb", 51, 121.76),
  makeElement(
    ["transition", "metal"],
    "transition",
    "Cobalt",
    "Co",
    27,
    58.933
  ),
  makeElement(
    ["lanthanoid", "metal", "inner-transition"],
    "lanthanoid",
    "Ytterbium",
    "Yb",
    70,
    173.054
  ),
  makeElement(
    ["noble-gas", "nonmetal"],
    "noble-gas",
    "Argon",
    "Ar",
    18,
    39.948
  ),
  makeElement(["diatomic", "nonmetal"], "diatomic", "Nitrogen", "N", 7, 14.007),
  makeElement(
    ["actinoid", "metal", "inner-transition"],
    "actinoid",
    "Uranium",
    "U",
    92,
    238.029
  ),
  makeElement(
    ["actinoid", "metal", "inner-transition"],
    "actinoid",
    "Plutonium",
    "Pu",
    94,
    244
  ),
];

export const filterData = [
  { name: "show all", value: "*" },
  { name: "metal", value: ".metal" },
  { name: "transition", value: ".transition" },
  { name: "alkali and alkaline-earth", value: ".alkali, .alkaline-earth" },
  { name: "not transition", value: ":not(.transition)" },
  { name: "metal but not transition", value: ".metal:not(.transition)" },
  { name: "number > 50", value: "numberGreaterThan50" },
  { name: "name ends with -ium", value: "ium" },
];

export const filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function (itemElem) {
    var number = itemElem.querySelector(".number").textContent;
    return parseInt(number, 10) > 50;
  },
  // show if name ends with -ium
  ium: function (itemElem) {
    var name = itemElem.querySelector(".name").textContent;
    return name.match(/ium$/);
  },
};

export const sortData = [
  { name: "original order", value: "" },
  { name: "name", value: "name" },
  { name: "symbol", value: "symbol" },
  { name: "number", value: "number" },
  { name: "weight", value: "weight" },
  { name: "category", value: "category" },
];
