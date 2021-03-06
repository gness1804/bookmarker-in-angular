import { Question } from './question';

export let QUESTIONS: Question[] = [
  {
    id: 1,
    body: 'How can you avoid callback hells?',
    answer: '"Modularization, control flow libraries, generators with promises, async/await"',
    sourceName: 'Node.js Interview Questions and Answers ',
    sourceUrl: 'https://blog.risingstack.com/node-js-interview-questions-and-answers-2017/',
  },
  {
    id: 2,
    body: 'What happens when you call setState?',
    answer: '"The first thing React will do when setState is called is merge the object you passed into setState into the current state of the component. This will kick off a process called reconciliation. The end goal of reconciliation is to, in the most efficient way possible, update the UI based on this new state. To do this, React will construct a new tree of React elements (which you can think of as an object representation of your UI). Once it has this tree, in order to figure out how the UI should change in response to the new state, React will diff this new tree against the previous element tree. By doing this, React will then know the exact changes which occurred, and by knowing exactly what changes occurred, will able to minimize its footprint on the UI by only making updates where absolutely necessary."',
    sourceName: 'React Interview Questions',
    sourceUrl: 'https://tylermcginnis.com/react-interview-questions/',
  }
];
