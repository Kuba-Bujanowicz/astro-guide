import type { FunctionComponent } from "preact";
import { useState } from "preact/hooks";

type Props = {
  messages: string[];
};

const Greeting: FunctionComponent<Props> = ({ messages }) => {
  const [greeting, setGreeting] = useState(messages[0]);

  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button
        className="btn btn-primary"
        onClick={setGreeting.bind(this, randomMessage())}
      >
        New Greeting
      </button>
    </div>
  );
};

export default Greeting;
