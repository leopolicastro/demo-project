import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import Prism from "prismjs";

const ContextDemo = () => {
  const { timer } = useContext(AppContext);

  const [contextString, setContextString] = useState("");

  useEffect(() => {
    const fetchContext = async () => {
      try {
        const response = await fetch("/snippets/context.js");
        const text = await response.text();
        setContextString(text);
        setTimeout(() => {
          Prism.highlightAll();
        }, 100);
      } catch (error) {
        console.error("Error reading the text file:", error);
      }
    };

    fetchContext();
  }, []);

  return (
    <div className="prose-xl flex justify-between">
      <section>
        <h1>Context</h1>
        <p>React Context API used to manage global state.</p>
        <aside className="flex flex-col text-blue-500 underline">
          <a
            href="https://react.dev/reference/react/createContext"
            target="_blank"
            rel="noreferrer"
          >
            createContext Docs
          </a>
          <a
            href="https://react.dev/reference/react/useContext"
            target="_blank"
            rel="noreferrer"
          >
            useContext Docs
          </a>
        </aside>
        <hr />

        <aside>
          <pre>
            <code className="language-js">{contextString}</code>
          </pre>
        </aside>
      </section>
      <section className="p-10">
        <div className="flex flex-col p-20 border shadow-2xl rounded-lg">
          <h1>Timer: {timer}</h1>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default ContextDemo;
