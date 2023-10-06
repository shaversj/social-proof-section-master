const Card = ({ id, name, buyerType, review, profile }) => {
  let cardPicker = {
    0: "bg-very-dark-magenta px-[1.7rem] py-8 space-y-5 rounded-lg lg:w-[350px] h-[233px] lg:px-[2rem] lg:py-9 lg:space-y-7 lg:relative lg:top-[0px]",
    1: "bg-very-dark-magenta px-[1.7rem] py-8 space-y-5 rounded-lg lg:w-[350px] h-[233px] lg:px-[2rem] lg:py-9 lg:space-y-7 lg:relative lg:top-[16px]",
    2: "bg-very-dark-magenta px-[1.7rem] py-8 space-y-5 rounded-lg lg:w-[350px] h-[233px] lg:px-[2rem] lg:py-9 lg:space-y-7 lg:relative lg:top-[32px]"
  }

  return (
    <div className={cardPicker[id]}>
      <div className={"flex items-center space-x-5 lg:space-x-6"}>
        <div className={""}>
          <img className={"rounded-full w-[36px] h-[36px] lg:w-[40px] lg:h-[40px]"} src={profile} alt={""} />
        </div>
        <div className={""}>
          <span className={"text-white text-sm font-semibold tracking-wider lg:text-[15.5px] lg:leading-none"}>{name}</span>
          <span className={"text-soft-pink text-sm leading-[.7rem] block tracking-wider lg:text-[15.5px] lg:leading-none"}>{buyerType}</span>
        </div>
      </div>
      <p className={"text-white text-[14.8px] font-thin leading-5 lg:text-[17.1px] lg:leading-[1.4rem]"}>" {review} "</p>
    </div>
  )
}

export default Card
