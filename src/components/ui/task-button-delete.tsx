import prisma from "@/lib/prisma";
import { Button } from "./button";
import { revalidatePath } from "next/cache";

export function TaskButtonDelete({ taskId }: { taskId: number }) {
    async function removeTask(formData: FormData){
         "use server"
         const taskId = formData.get("taskId")?. toString();

        if (!taskId){
            return;
        }

        await prisma.task.delete({
            where:{
                id: parseInt(taskId)
            }
        })

        revalidatePath('/');

    }

    return (
       <form action={removeTask}>
        <input type="hidden" name="taskId" value={taskId} />
       <Button className="bg-red-500">Delete</Button>
       </form>
    )
}
