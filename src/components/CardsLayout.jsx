import Card from "./Card.jsx"

const CardsLayout = ({ profiles }) => {
  return (
    <div className={"space-y-3 lg:col-span-full lg:flex lg:flex-row lg:space-y-0 lg:space-x-8 lg:relative lg:pt-[4.35rem]"}>
      {profiles && profiles.map((item) => <Card key={item.id} id={item.id} name={item.name} buyerType={item.buyerType} review={item.review} profile={item.profilePic} />)}
    </div>
  )
}

export default CardsLayout
