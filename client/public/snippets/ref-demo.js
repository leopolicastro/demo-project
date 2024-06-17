function UseRefDemo() {
  const email = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    let vanillaJSWay = document.getElementById("email-input");
    console.log("JS:", vanillaJSWay);
    console.log("JS Value:", vanillaJSWay.value);

    console.log("React:", email.current);
    console.log("React Value:", email.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={email} type="email" placeholder="email" />
      <button type="submit">Sign up</button>
    </form>
  );
}
