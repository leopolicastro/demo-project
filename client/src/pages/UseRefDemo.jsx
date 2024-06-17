import { useRef, useEffect, useState } from "react";
import Prism from "prismjs";

export default function UseRefDemo() {
  const [demoString, setDemoString] = useState("");
  const [markdownString, setMarkdownString] = useState("");

  const email = useRef();

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch("/snippets/ref-demo.js");
        const jsx = await response.text();
        setDemoString(jsx);

        const markdown = await fetch("/snippets/ref-docs.md");
        const text = await markdown.text();
        setMarkdownString(text);

        setTimeout(() => {
          Prism.highlightAll();
        }, 100);
      } catch (error) {
        console.error("Error reading the text file:", error);
      }
    };

    fetchFiles();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let vanillaJSWay = document.getElementById("email-input");
    console.log("JS:", vanillaJSWay);
    console.log("JS Value:", vanillaJSWay.value);

    console.log("React:", email.current);
    console.log("React Value:", email.current.value);
  };

  return (
    <div className="prose-xl flex justify-between w-full items-start gap-12">
      <section className="w-1/3 p-10 justify-start">
        <h1 className="underline">useRef</h1>
        <div>
          <a
            href="https://react.dev/reference/react/useRef#usage"
            rel="noreferrer"
            target="_blank"
            className="text-blue-500 underline text-xl"
          >
            Docs
          </a>

          <hr />
        </div>
        <code className="my-1">Inspect the console before submitting</code>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            ref={email}
            type="email"
            placeholder="email"
            id="email-input"
          />
          <button className="btn-primary my-2" type="submit">
            Sign up
          </button>
        </form>{" "}
      </section>
      <section className="w-2/3 p-10 justify-start overflow-scroll">
        <div>
          <aside>
            <pre>
              <code className="language-markup">{markdownString}</code>
            </pre>
          </aside>

          <aside>
            <pre>
              <code className="language-js">{demoString}</code>
            </pre>
          </aside>
        </div>
      </section>
    </div>
  );
}
