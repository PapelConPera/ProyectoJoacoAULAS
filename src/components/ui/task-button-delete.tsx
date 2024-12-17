import { Button } from "./button";
import { removeTask } from "@/actions/tasks.actions";

export function TaskButtonDelete({ taskId }: { taskId: number }) {

    return (
       <form action={removeTask}>
        <input type="hidden" name="taskId" value={taskId} />
       <Button className="bg-red-500">Delete</Button>
       </form>
    )
}
