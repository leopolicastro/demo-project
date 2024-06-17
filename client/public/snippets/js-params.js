console.log(window.location.pathname); // "/use-params/{{id}}
let endpoint = window.location.pathname;
const paramId = endpoint.split("/")[2]; // {{id}}
const params = { id: paramId };
console.log(params.id); // {{id}}
