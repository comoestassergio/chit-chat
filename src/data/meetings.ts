type Meeting = {
  topic: string;
  date: string;
  price: string;
  time: string;
  address: string;
  completed: boolean;
};

export const meetings: Meeting[] = [
  {
    topic: "AI: a blessing or a curse",
    date: "20.10.2024",
    price: "500",
    time: "19:00",
    address: "баклажан на островкого",
    completed: false,
  },
  {
    topic: "Are ghosts real?",
    date: "30.09.2024",
    price: "500",
    time: "19:00",
    address: "баклажан на островкого",
    completed: true,
  },
];
