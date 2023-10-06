import Rating from "./Rating.jsx"
const RatingsLayout = ({ ratings }) => {
  return (
    <div className={"w-full space-y-3 lg:flex lg:flex-col lg:justify-center lg:space-y-4 lg:pl-[5.1rem]"}>
      {ratings && ratings.map((item) => <Rating key={item.id} id={item.id} stars={item.stars} rating={item.review} />)}
    </div>
  )
}

export default RatingsLayout
