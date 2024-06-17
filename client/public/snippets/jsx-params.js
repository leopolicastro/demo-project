// App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/use-params/:id" element={<UseParamsDemo />} />
      </Routes>
    </Router>
  );
}

export default App;

// UseParamsDemo.jsx
import { useParams } from "react-router-dom";

const UseParamsDemo = () => {
  let { id } = useParams();
  console.log(id); // {{id}}
  return <p>URL Parameter: {{id}}</p>;
};

export default UseParamsDemo;


