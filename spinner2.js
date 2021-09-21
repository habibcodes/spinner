// spinner 2 //

// process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r-   '];

let waitTime2 = 0;

const spin = () => {
  for (let j = 0; j < spinner.length; j++) { // should loop through spinner
    const waitTime = 200 * (j + 1); // should add 200ms at every iteration
    waitTime2 += waitTime;
    setTimeout(() => {
      process.stdout.write(spinner[j]); // write out each element at the waitTime speed
    }, waitTime);
  }
};
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    spin();
    setTimeout(() => {
      spin();
    }, 1250);
  }, waitTime2 * i);
}
