const Rating = ({ id, stars, rating }) => {
  function ratingStars(numOfStars) {
    let stars = []
    for (let i = 0; i < numOfStars; i++) {
      stars.push(
        <svg className={"w-[16px] h-[15px] lg:w-[17px] lg:h-[16px]"} xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#EF9546"
            d="M16.539 6.097a.297.297 0 0 0-.24-.202l-5.36-.779L8.542.26a.296.296 0 0 0-.53 0L5.613 5.117l-5.36.779a.297.297 0 0 0-.165.505l3.88 3.78-.917 5.34a.297.297 0 0 0 .43.312l4.795-2.52 4.794 2.52a.296.296 0 0 0 .43-.313l-.916-5.338 3.88-3.782c.08-.08.11-.197.075-.304z"
          />
        </svg>
      )
    }

    return <div className={"flex gap-x-2 justify-center"}>{stars}</div>
  }

  let ratingsPicker = {
    0: "bg-light-grayish-magenta space-y-2 py-3 rounded-lg flex flex-col items-center lg:w-[443px] lg:h-[54px] lg:flex lg:flex-row lg:space-x-8 lg:pl-8 lg:space-y-0 lg:ml-[0px]",
    1: "bg-light-grayish-magenta space-y-2 py-3 rounded-lg flex flex-col items-center lg:w-[443px] lg:h-[54px] lg:flex lg:flex-row lg:space-x-8 lg:pl-8 lg:space-y-0 lg:ml-[48px]",
    2: "bg-light-grayish-magenta space-y-2 py-3 rounded-lg flex flex-col items-center lg:w-[443px] lg:h-[54px] lg:flex lg:flex-row lg:space-x-8 lg:pl-8 lg:space-y-0 lg:ml-[96px]"
  }

  return (
    <div className={ratingsPicker[id]}>
      {ratingStars(stars)}
      <div className={""}>
        <h2 className={"text-very-dark-magenta font-bold text-[15px] text-center lg:text-[17px] lg:leading-3"}>{rating}</h2>
      </div>
    </div>
  )
}

export default Rating
