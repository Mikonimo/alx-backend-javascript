export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // This block is intentionally left empty to demonstrate block scoping
  }

  return [task, task2];
}
