import { SearchBar } from "./Searchbar"

export const AppBar = () =>{
    return <div className="flex justify-between pt-1 p-3">
        <div className="inline-flex items-center pb-2 text-md">
            Youtube
        </div>
        <div>
           <SearchBar></SearchBar>
        </div>
        <div>
            Sign In
        </div>
    </div>
}