import React, { useState, useEffect } from "react";

function Info() {
  const [greet, setgreet] = useState("");

  const myDate = new Date();
  const time = myDate.getHours();

  useEffect(() => {
    time < 12 || time === 24
      ? setgreet("Good morning")
      : time > 12 && time < 17
      ? setgreet("Good afternoon")
      : setgreet("Good evening");
  }, [time]);

  return (
    <div className="info">
      <span className="greet"> {greet}! I'm</span>
      <span className="myname"> Sunirmal Das.</span>
      <p>
        A B.Tech graduate, looking for a software engineer role, and possessing
        knowledge in<span> HTML</span>, <span>CSS</span>,
        <span> Javascript</span>, <span>ReactJS</span>, <span>REST API</span>,
        and <span>MongoDB</span>. Excellent communication skills and ability to
        understand given requirements. Continuous learner of new technologies,
        strategies, and tools.
      </p>
    </div>
  );
}

export default Info;
