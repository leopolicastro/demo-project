import { useEffect, useState } from "react";
import Prism from "prismjs";

export default function FormDataDemo() {
  const [formDataString, setFormDataString] = useState("");
  const [formHtml, setFormHtml] = useState("");

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const response = await fetch("/snippets/form-data.js");
        const text = await response.text();
        setFormDataString(text);

        const formHtml = await fetch("/snippets/form-data-html.html");
        const html = await formHtml.text();
        setFormHtml(html);

        setTimeout(() => {
          Prism.highlightAll();
        }, 100);
      } catch (error) {
        console.error("Error reading the text file:", error);
      }
    };
    fetchFormData();
  }, []);
  return (
    <section className="prose-2xl">
      <h1>FormData</h1>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500 underline"
      >
        Docs
      </a>
      <hr />
      <aside>
        <pre>
          <code className="language-html">{formHtml}</code>
        </pre>
        <pre>
          <code className="language-js">{formDataString}</code>
        </pre>
      </aside>
    </section>
  );
}
