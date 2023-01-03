interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

//Always extendable
/* interface Bear {
  dangerous: boolean;
} */

const bear: Bear = { name: "Bjørn", honey: true };

type Vegetable = {
  name: string;
};

type Olive = Vegetable & {
  isGreen: boolean;
};

/* type Olive = {
    isBlack: boolean;
} */

const olive: Olive = { name: "my olive", isGreen: false };
