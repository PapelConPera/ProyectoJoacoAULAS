import * as React from "react"

import { Button } from "@/components/ui/button"
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { createTask } from "@/actions/tasks.actions"
import { Task } from "@prisma/client/edge"

export function TaskForm({ task }: {task: Task}) {
return (
  <form action={createTask}> 
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Crear Tareas</CardTitle>
        <CardDescription>
          Complete el siguiente formulario para crear una nueva tarea.
        </CardDescription>
      </CardHeader>
      <CardContent> 
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input name="name" id="name" placeholder="Nombre de tu tarea" defaultValue={task?.name}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Textarea name="description" id="description" placeholder="Description of your task" defaultValue={task?.priority}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="priority">Priority</Label>
              <Select name="priority">
                <SelectTrigger id="priority">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
      
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button type="submit">Crear Tarea</Button>
      </CardFooter>
    </Card>
  </form>
  )
}
