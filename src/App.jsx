import Home from "./pages/Home";

function App() {
  return (
    <main className="w-full max-h-screen h-screen min-h-screen bg-neutral-50 text-neutral-600 
      flex flex-col bg-[url('./assets/bg-image.jpg')] 
      bg-cover bg-no-repeat bg-center relative overflow-hidden">

      {/* Heading on top */}
      <div className="absolute top-6 left-0 w-full flex justify-center z-20">
        <h1 className="text-4xl font-extrabold text-white drop-shadow-lg tracking-tight">
          Test Yourself
        </h1>
      </div>

      {/* overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* content */}
      <Home />

    </main>
  );
}

export default App;
