import RatingsLayout from "./components/RatingsLayout.jsx"
import Header from "./components/Header.jsx"
import CardsLayout from "./components/CardsLayout.jsx"
function App() {
  return (
    <>
      <main className={"min-h-screen font-League-Spartan grid place-items-center"}>
        <div className={"max-w-screen-sm px-5 space-y-9 lg:grid lg:grid-cols-[44%,56%] lg:max-w-screen-lg lg:px-[165px] lg:space-y-0 lg:grid-rows-[auto,1fr]"}>
          <Header />
          <RatingsLayout />
          <CardsLayout />
        </div>
      </main>
    </>
  )
}

export default App
