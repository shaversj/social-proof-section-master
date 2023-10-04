import ratingsData from "./ratingsData.json"
import Rating from "./Rating.jsx"
const RatingsLayout = () => {
  return (
    <div className={"w-full space-y-3 lg:flex lg:flex-col lg:justify-center lg:space-y-4 lg:pl-[5.1rem]"}>
      {ratingsData && ratingsData.map((item) => <Rating key={item.id} id={item.id} stars={item.stars} rating={item.review} />)}
    </div>
  )
}

export default RatingsLayout
