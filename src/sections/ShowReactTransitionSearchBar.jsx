import ReactTransitionSearchBars from '../components/ReactTransitionSearchBars';

const ShowReactTransitionSearchBar = () => {
  return (
    <>
      <h2>React Transition</h2>
      <p>The useTransition hook helps you keep your React app responsive during heavy updates. It lets you mark some state updates as "non-urgent", allowing other, more urgent updates to happen first.</p>

      <ReactTransitionSearchBars />
    </>
  );
};

export default ShowReactTransitionSearchBar;
