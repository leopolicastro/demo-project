import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Prism from "prismjs";

const UseParamsDemo = () => {
  const [jsString, setJsString] = useState("");
  const [jsxString, setJsxString] = useState("");
  let { id } = useParams();

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const jsxResponse = await fetch("/snippets/jsx-params.js");
        let jsx = await jsxResponse.text();
        jsx = jsx.replaceAll(/{{id}}/g, id);
        setJsxString(jsx);

        const jsResponse = await fetch("/snippets/js-params.js");
        let js = await jsResponse.text();
        js = js.replaceAll(/{{id}}/g, id);
        setJsString(js);

        setTimeout(() => {
          Prism.highlightAll();
        }, 100);
      } catch (error) {
        console.error("Error reading the text file:", error);
      }
    };
    fetchFiles();
  }, [id]);

  return (
    <div className="prose-xl flex w-full justify-between">
      <section>
        <h1 className="underline">useParams</h1>
        <a
          href="https://reactrouter.com/en/main/hooks/use-params"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 underline"
        >
          Docs
        </a>
        <p className="text-xl">URL Parameter: {id}</p>
        <hr />
      </section>

      <section className="overflow-scroll">
        <aside>
          <h1 className="underline">React</h1>
          <span>(System solution)</span>
          <pre>
            <code className="language-js">{jsxString}</code>
          </pre>
        </aside>

        <aside>
          <h2 className="underline">JavaScript</h2>
          <span>(Point solution)</span>
          <pre>
            <code className="language-js">{jsString}</code>
          </pre>
        </aside>
      </section>
    </div>
  );
};

export default UseParamsDemo;
