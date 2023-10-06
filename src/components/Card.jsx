const Card = ({ id, name, buyerType, review, profile }) => {
  let parentCardClass = `bg-very-dark-magenta px-[1.7rem] py-8 space-y-5 rounded-lg lg:w-[21.875rem] h-[14.563rem] lg:px-[2rem] lg:py-9 lg:space-y-7 lg:relative lg:top-[${id}rem]`

  return (
    <div className={parentCardClass}>
      <div className={"flex items-center space-x-5 lg:space-x-6"}>
        <div className={""}>
          <img className={"rounded-full w-[2.25rem] h-[2.25rem] lg:w-[2.5rem] lg:h-[2.5rem]"} src={profile} alt={""} />
        </div>
        <div className={""}>
          <span className={"text-white text-sm font-semibold tracking-wider lg:text-[0.969rem] lg:leading-none"}>{name}</span>
          <span className={"text-soft-pink text-sm leading-[.7rem] block tracking-wider lg:text-[0.969rem] lg:leading-none"}>{buyerType}</span>
        </div>
      </div>
      <p className={"text-white text-[0.925rem] font-thin leading-5 lg:text-[1.069rem] lg:leading-[1.4rem]"}>" {review} "</p>
    </div>
  )
}

export default Card
