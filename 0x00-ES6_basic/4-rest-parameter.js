export default function returnHowManyArguments(...args) {
  let count = 0;
  args.forEach(() => {
  count++;
  });

  return count;
}
