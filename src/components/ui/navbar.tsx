import Link from "next/link";
import { ModeToggle } from "../theme-toggle-button";
import { buttonVariants } from "./button";

function Navbar(){
    return(
        <nav className="flex justify-between py-5">
            <h1 className="text-3x1 font-bold text-gray-800 dark:text-gray-100">NextActionsCRUD</h1>

<div className="flex gap-x-2 items-">
    <Link href="/new"className={buttonVariants({variant: "outline"})}>
        Crear Tareas
    </Link>
        <ModeToggle />

</div>
        </nav>
    )
}




export default Navbar

