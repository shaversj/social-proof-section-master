const Rating = ({ id, stars, rating }) => {
  function ratingStars(numOfStars) {
    let stars = []
    for (let i = 0; i < numOfStars; i++) {
      stars.push(
        <svg className={"w-[1rem] h-[0.938rem] lg:w-[1.063rem] lg:h-[1rem]"} xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#EF9546"
            d="M16.539 6.097a.297.297 0 0 0-.24-.202l-5.36-.779L8.542.26a.296.296 0 0 0-.53 0L5.613 5.117l-5.36.779a.297.297 0 0 0-.165.505l3.88 3.78-.917 5.34a.297.297 0 0 0 .43.312l4.795-2.52 4.794 2.52a.296.296 0 0 0 .43-.313l-.916-5.338 3.88-3.782c.08-.08.11-.197.075-.304z"
          />
        </svg>
      )
    }

    return <div className={"flex gap-x-2 justify-center"}>{stars}</div>
  }

  let parentRatingClass = `bg-light-grayish-magenta space-y-2 py-3 rounded-lg flex flex-col items-center lg:w-[27.688rem] lg:h-[3.375rem] lg:flex lg:flex-row lg:space-x-8 lg:pl-8 lg:space-y-0 lg:ml-[${
    id * 3
  }rem]`

  return (
    <div className={parentRatingClass}>
      {ratingStars(stars)}
      <div className={""}>
        <h2 className={"text-very-dark-magenta font-bold text-[0.938rem] text-center lg:text-[1.063rem] lg:leading-3"}>{rating}</h2>
      </div>
    </div>
  )
}

export default Rating
