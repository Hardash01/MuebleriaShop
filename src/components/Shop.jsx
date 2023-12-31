import useFilters from "../hooks/useFilters"
import { MuebleriaList } from "./MuebleriaList"
import { Filters } from "./Filters"

export function Shop () {
    const {filteredMuebleria } = useFilters()
    
    return (
        <div>
            <div className="bg-black py-5">
                <h2 className="text-center text-4xl uppercase font-bold text-white">Catalogo</h2>
            </div>

            <section className="bg-slate-100">
                <div className="mx-auto px-3 lg:px-0 lg:w-5/6 max-w-screen-xl py-10">
                    <div className="flex flex-col md:flex-row items-start gap-3 md:gap-3 lg:gap-5">
                        <div className="w-full md:w-1/4 bg-white py-5 rounded-lg border">
                            <Filters />
                        </div>
                        <div className="w-full md:w-3/4">
                            <MuebleriaList muebleria = {filteredMuebleria} />
                        </div>
                    </div>
                </div>
            </section>

        </div>
        
    )
}