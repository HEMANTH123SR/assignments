let count = 0;
const increcmentCounter = () => {
  setTimeout(() => {
    console.clear();
    console.log(count);
    count++;
    increcmentCounter();
  }, 1000);
};

increcmentCounter();
