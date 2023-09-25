import coltonProfile from "./assets/images/image-colton.jpg"
import anneProfile from "./assets/images/image-anne.jpg"
import ireneProfile from "./assets/images/image-irene.jpg"

function App() {
  return (
    <>
      <main className={"bg-white min-h-screen font-League-Spartan grid place-items-center"}>
        <div className={"max-w-screen-sm px-5 space-y-9 lg:grid lg:grid-cols-[44%,56%] lg:max-w-screen-lg lg:px-[165px] lg:space-y-0 lg:grid-rows-[auto,1fr]"}>
          <div className={"lg:flex lg:flex-col lg:justify-center lg:pr-12"}>
            <h1 className={"text-very-dark-magenta text-[33px] font-bold leading-[1.6rem] text-center lg:text-[55px] lg:font-bold lg:leading-[3rem] lg:text-left lg:tracking-tight"}>
              10,000+ of our users love our products.
            </h1>
            <p className={"pt-6 text-dark-grayish-magenta text-center leading-[1.38rem] text-[15px] font-medium lg:text-left lg:text-[18px] lg:leading-6 lg:pt-7 lg:font-normal"}>
              We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.
            </p>
          </div>

          <div className={"w-full space-y-3 lg:flex lg:flex-col lg:justify-center lg:space-y-4 lg:pl-[5.1rem]"}>
            <div className={"bg-light-grayish-magenta space-y-2 py-3 rounded-lg flex flex-col items-center lg:w-[443px] lg:h-[54px] lg:flex lg:flex-row lg:space-x-8 lg:pl-8 lg:space-y-0"}>
              <div className={"flex gap-x-2 justify-center"}>
                <svg className={"w-[16px] h-[15px] lg:w-[17px] lg:h-[16px]"} xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#EF9546"
                    d="M16.539 6.097a.297.297 0 0 0-.24-.202l-5.36-.779L8.542.26a.296.296 0 0 0-.53 0L5.613 5.117l-5.36.779a.297.297 0 0 0-.165.505l3.88 3.78-.917 5.34a.297.297 0 0 0 .43.312l4.795-2.52 4.794 2.52a.296.296 0 0 0 .43-.313l-.916-5.338 3.88-3.782c.08-.08.11-.197.075-.304z"
                  />
                </svg>
                <svg className={"w-[16px] h-[15px] lg:w-[17px] lg:h-[16px]"} xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#EF9546"
                    d="M16.539 6.097a.297.297 0 0 0-.24-.202l-5.36-.779L8.542.26a.296.296 0 0 0-.53 0L5.613 5.117l-5.36.779a.297.297 0 0 0-.165.505l3.88 3.78-.917 5.34a.297.297 0 0 0 .43.312l4.795-2.52 4.794 2.52a.296.296 0 0 0 .43-.313l-.916-5.338 3.88-3.782c.08-.08.11-.197.075-.304z"
                  />
                </svg>
                <svg className={"w-[16px] h-[15px] lg:w-[17px] lg:h-[16px]"} xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#EF9546"
                    d="M16.539 6.097a.297.297 0 0 0-.24-.202l-5.36-.779L8.542.26a.296.296 0 0 0-.53 0L5.613 5.117l-5.36.779a.297.297 0 0 0-.165.505l3.88 3.78-.917 5.34a.297.297 0 0 0 .43.312l4.795-2.52 4.794 2.52a.296.296 0 0 0 .43-.313l-.916-5.338 3.88-3.782c.08-.08.11-.197.075-.304z"
                  />
                </svg>
                <svg className={"w-[16px] h-[15px] lg:w-[17px] lg:h-[16px]"} xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#EF9546"
                    d="M16.539 6.097a.297.297 0 0 0-.24-.202l-5.36-.779L8.542.26a.296.296 0 0 0-.53 0L5.613 5.117l-5.36.779a.297.297 0 0 0-.165.505l3.88 3.78-.917 5.34a.297.297 0 0 0 .43.312l4.795-2.52 4.794 2.52a.296.296 0 0 0 .43-.313l-.916-5.338 3.88-3.782c.08-.08.11-.197.075-.304z"
                  />
                </svg>
                <svg className={"w-[16px] h-[15px] lg:w-[17px] lg:h-[16px]"} xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#EF9546"
                    d="M16.539 6.097a.297.297 0 0 0-.24-.202l-5.36-.779L8.542.26a.296.296 0 0 0-.53 0L5.613 5.117l-5.36.779a.297.297 0 0 0-.165.505l3.88 3.78-.917 5.34a.297.297 0 0 0 .43.312l4.795-2.52 4.794 2.52a.296.296 0 0 0 .43-.313l-.916-5.338 3.88-3.782c.08-.08.11-.197.075-.304z"
                  />
                </svg>
              </div>
              <div className={""}>
                <h2 className={"text-very-dark-magenta font-bold text-[15px] text-center lg:text-[17px] lg:leading-3"}>Rated 5 Stars in Reviews</h2>
              </div>
            </div>

            <div
              className={"bg-light-grayish-magenta space-y-2 py-3 rounded-lg flex flex-col items-center lg:w-[443px] lg:h-[58px] lg:flex lg:flex-row lg:space-x-8 lg:pl-8 lg:ml-[48px] lg:space-y-0"}
            >
              <div className={"flex gap-x-2 justify-center"}>
                <svg className={"w-[16px] h-[15px] lg:w-[17px] lg:h-[16px]"} xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#EF9546"
                    d="M16.539 6.097a.297.297 0 0 0-.24-.202l-5.36-.779L8.542.26a.296.296 0 0 0-.53 0L5.613 5.117l-5.36.779a.297.297 0 0 0-.165.505l3.88 3.78-.917 5.34a.297.297 0 0 0 .43.312l4.795-2.52 4.794 2.52a.296.296 0 0 0 .43-.313l-.916-5.338 3.88-3.782c.08-.08.11-.197.075-.304z"
                  />
                </svg>
                <svg className={"w-[16px] h-[15px] lg:w-[17px] lg:h-[16px]"} xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#EF9546"
                    d="M16.539 6.097a.297.297 0 0 0-.24-.202l-5.36-.779L8.542.26a.296.296 0 0 0-.53 0L5.613 5.117l-5.36.779a.297.297 0 0 0-.165.505l3.88 3.78-.917 5.34a.297.297 0 0 0 .43.312l4.795-2.52 4.794 2.52a.296.296 0 0 0 .43-.313l-.916-5.338 3.88-3.782c.08-.08.11-.197.075-.304z"
                  />
                </svg>
                <svg className={"w-[16px] h-[15px] lg:w-[17px] lg:h-[16px]"} xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#EF9546"
                    d="M16.539 6.097a.297.297 0 0 0-.24-.202l-5.36-.779L8.542.26a.296.296 0 0 0-.53 0L5.613 5.117l-5.36.779a.297.297 0 0 0-.165.505l3.88 3.78-.917 5.34a.297.297 0 0 0 .43.312l4.795-2.52 4.794 2.52a.296.296 0 0 0 .43-.313l-.916-5.338 3.88-3.782c.08-.08.11-.197.075-.304z"
                  />
                </svg>
                <svg className={"w-[16px] h-[15px] lg:w-[17px] lg:h-[16px]"} xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#EF9546"
                    d="M16.539 6.097a.297.297 0 0 0-.24-.202l-5.36-.779L8.542.26a.296.296 0 0 0-.53 0L5.613 5.117l-5.36.779a.297.297 0 0 0-.165.505l3.88 3.78-.917 5.34a.297.297 0 0 0 .43.312l4.795-2.52 4.794 2.52a.296.296 0 0 0 .43-.313l-.916-5.338 3.88-3.782c.08-.08.11-.197.075-.304z"
                  />
                </svg>
                <svg className={"w-[16px] h-[15px] lg:w-[17px] lg:h-[16px]"} xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#EF9546"
                    d="M16.539 6.097a.297.297 0 0 0-.24-.202l-5.36-.779L8.542.26a.296.296 0 0 0-.53 0L5.613 5.117l-5.36.779a.297.297 0 0 0-.165.505l3.88 3.78-.917 5.34a.297.297 0 0 0 .43.312l4.795-2.52 4.794 2.52a.296.296 0 0 0 .43-.313l-.916-5.338 3.88-3.782c.08-.08.11-.197.075-.304z"
                  />
                </svg>
              </div>
              <h2 className={"text-very-dark-magenta font-bold text-[15px] text-center lg:text-[17px] lg:leading-3"}>Rated 5 Stars in Report Guru</h2>
            </div>
            <div
              className={"bg-light-grayish-magenta space-y-2 py-3 rounded-lg flex flex-col items-center lg:w-[443px] lg:h-[58px] lg:flex lg:flex-row lg:space-x-8 lg:pl-8 lg:ml-[96px] lg:space-y-0"}
            >
              <div className={"flex gap-x-2 justify-center"}>
                <svg className={"w-[16px] h-[15px] lg:w-[17px] lg:h-[16px]"} xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#EF9546"
                    d="M16.539 6.097a.297.297 0 0 0-.24-.202l-5.36-.779L8.542.26a.296.296 0 0 0-.53 0L5.613 5.117l-5.36.779a.297.297 0 0 0-.165.505l3.88 3.78-.917 5.34a.297.297 0 0 0 .43.312l4.795-2.52 4.794 2.52a.296.296 0 0 0 .43-.313l-.916-5.338 3.88-3.782c.08-.08.11-.197.075-.304z"
                  />
                </svg>
                <svg className={"w-[16px] h-[15px] lg:w-[17px] lg:h-[16px]"} xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#EF9546"
                    d="M16.539 6.097a.297.297 0 0 0-.24-.202l-5.36-.779L8.542.26a.296.296 0 0 0-.53 0L5.613 5.117l-5.36.779a.297.297 0 0 0-.165.505l3.88 3.78-.917 5.34a.297.297 0 0 0 .43.312l4.795-2.52 4.794 2.52a.296.296 0 0 0 .43-.313l-.916-5.338 3.88-3.782c.08-.08.11-.197.075-.304z"
                  />
                </svg>
                <svg className={"w-[16px] h-[15px] lg:w-[17px] lg:h-[16px]"} xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#EF9546"
                    d="M16.539 6.097a.297.297 0 0 0-.24-.202l-5.36-.779L8.542.26a.296.296 0 0 0-.53 0L5.613 5.117l-5.36.779a.297.297 0 0 0-.165.505l3.88 3.78-.917 5.34a.297.297 0 0 0 .43.312l4.795-2.52 4.794 2.52a.296.296 0 0 0 .43-.313l-.916-5.338 3.88-3.782c.08-.08.11-.197.075-.304z"
                  />
                </svg>
                <svg className={"w-[16px] h-[15px] lg:w-[17px] lg:h-[16px]"} xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#EF9546"
                    d="M16.539 6.097a.297.297 0 0 0-.24-.202l-5.36-.779L8.542.26a.296.296 0 0 0-.53 0L5.613 5.117l-5.36.779a.297.297 0 0 0-.165.505l3.88 3.78-.917 5.34a.297.297 0 0 0 .43.312l4.795-2.52 4.794 2.52a.296.296 0 0 0 .43-.313l-.916-5.338 3.88-3.782c.08-.08.11-.197.075-.304z"
                  />
                </svg>
                <svg className={"w-[16px] h-[15px] lg:w-[17px] lg:h-[16px]"} xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#EF9546"
                    d="M16.539 6.097a.297.297 0 0 0-.24-.202l-5.36-.779L8.542.26a.296.296 0 0 0-.53 0L5.613 5.117l-5.36.779a.297.297 0 0 0-.165.505l3.88 3.78-.917 5.34a.297.297 0 0 0 .43.312l4.795-2.52 4.794 2.52a.296.296 0 0 0 .43-.313l-.916-5.338 3.88-3.782c.08-.08.11-.197.075-.304z"
                  />
                </svg>
              </div>
              <h2 className={"text-very-dark-magenta font-bold text-[15px] text-center lg:text-[17px] lg:leading-3"}>Rated 5 Stars in BestTech</h2>
            </div>
          </div>

          <div className={"space-y-3 lg:col-span-full lg:flex lg:flex-row lg:space-y-0 lg:space-x-8 lg:relative lg:pt-[4.35rem]"}>
            <div className={"bg-very-dark-magenta px-[1.7rem] py-8 space-y-5 rounded-lg lg:w-[350px] h-[233px] lg:px-[2rem] lg:py-9 lg:space-y-7"}>
              <div className={"flex items-center space-x-5 lg:space-x-6"}>
                <div className={""}>
                  <img className={"rounded-full w-[36px] h-[36px] lg:w-[40px] lg:h-[40px]"} src={coltonProfile} alt={""} />
                </div>
                <div className={""}>
                  <span className={"text-white text-sm font-semibold tracking-wider lg:text-[15.5px] lg:leading-none"}>Colton Smith</span>
                  <span className={"text-soft-pink text-sm leading-[.7rem] block tracking-wider lg:text-[15.5px] lg:leading-none"}>Verified Buyer</span>
                </div>
              </div>

              <p className={"text-white text-[14.8px] font-thin leading-5 lg:text-[17.1px] lg:leading-[1.4rem]"}>
                " We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! "
              </p>
            </div>

            <div className={"bg-very-dark-magenta px-[1.7rem] py-8 space-y-5 rounded-lg lg:w-[350px] lg:h-[233px] lg:relative lg:top-[16px] lg:px-[2rem] lg:py-9 lg:space-y-7"}>
              <div className={"flex items-center space-x-5 lg:space-x-6"}>
                <div className={""}>
                  <img className={"rounded-full w-[36px] h-[36px] lg:w-[40px] lg:h-[40px]"} src={ireneProfile} alt={""} />
                </div>
                <div className={""}>
                  <span className={"text-white text-sm font-semibold tracking-wider lg:text-[15.5px] lg:leading-none"}>Irene Roberts</span>
                  <span className={"text-soft-pink text-sm leading-[.7rem] block tracking-wider lg:text-[15.5px] lg:leading-none"}>Verified Buyer</span>
                </div>
              </div>

              <p className={"text-white text-[14.8px] font-thin leading-5 lg:text-[17.1px] lg:leading-[1.4rem]"}>
                " Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery. "
              </p>
            </div>

            <div className={"bg-very-dark-magenta px-[1.7rem] py-8 space-y-5 rounded-lg lg:w-[350px] lg:h-[233px] lg:relative lg:top-[32px] lg:px-[2rem] lg:py-9 lg:space-y-7"}>
              <div className={"flex items-center space-x-5 lg:space-x-6"}>
                <div className={""}>
                  <img className={"rounded-full w-[36px] h-[36px] lg:w-[40px] lg:h-[40px]"} src={anneProfile} alt={""} />
                </div>
                <div className={""}>
                  <span className={"text-white text-sm font-semibold tracking-wider lg:text-[15.5px] lg:leading-none"}>Anne Wallace</span>
                  <span className={"text-soft-pink text-sm leading-[.7rem] block tracking-wider lg:text-[15.5px] lg:leading-none"}>Verified Buyer</span>
                </div>
              </div>

              <p className={"text-white text-[14.8px] font-thin leading-5 lg:text-[17.1px] lg:leading-[1.4rem]"}>
                " Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! "
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
