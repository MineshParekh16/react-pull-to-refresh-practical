import React from "react";
import {useSwipeable} from 'react-swipeable';

const Home = () => {

    const handlers = useSwipeable({
      onSwiped: (eventData) => alert("User Swiped!", eventData),
    });
    return <div {...handlers}> You can swipe here </div>;
}

export default Home