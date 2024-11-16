import Form from "./Form";

function App() {
  return (
    <>
      <div className="flex min-h-[95vh] items-center justify-center">
        <Form />
      </div>
      <footer className="p-2 text-center text-sm">
        <div className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            className="text-medium-green underline"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://github.com/Jenny-Eikens"
            target="_blank"
            className="text-medium-green underline"
          >
            Jennifer Eikens
          </a>
          .
        </div>
      </footer>
    </>
  );
}

export default App;
