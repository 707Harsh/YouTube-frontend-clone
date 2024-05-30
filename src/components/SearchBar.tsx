export function SearchBar() {
    return (
        <div>

            <form className="">
                <div className="flex">
                    <input type="search" id="default-search" className="focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 px-4 text-xl rounded-l-full w-80 xsm:w-100 sm:w-400 sm-md:w-750" placeholder="Search" required  style={{height:'50px',backgroundColor:'rgb(0,0,0)',borderColor:'hsl(0,0%,18.82%)',borderWidth:'thin'}}/>
                    <button type="submit" className="flex items-center justify-center rounded-r-full border-y border-r w-35 xsm:w-85" style={{backgroundColor:'rgba(255, 255, 255, 0.12)',borderColor:'hsl(0,0%,18.82%)'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"   stroke="currentColor" className="size-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </div>
            </form>

        </div>
    )
}