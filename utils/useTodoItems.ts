import path from "path"
import fs from 'fs'
import { TodoItem } from "../types/data"
import { isReadable } from "stream"

const TODO_ITEMS_DIR = path.join(process.cwd(), 'todoItems')

export default function useTodoItems() {

    const getTodoItems = (): TodoItem[] => {
        const todoItemsPaths = fs.readdirSync(TODO_ITEMS_DIR)

        const todoItems: TodoItem[] = todoItemsPaths.map(todoItemsPath => {
            const fullPath = path.join(TODO_ITEMS_DIR, todoItemsPath)
            const content = fs.readFileSync(fullPath, 'utf-8').split('\n')
            return {
                id: todoItemsPath.replace(/\.txt$/, ''),
                title: content[0] ? content[0] : '',
                isDone: content[1] ?
                    content[1] === 'true' ? true : false
                    : false,
                dueDate: content[2] ? content[2] : ''
            }
        })

        return todoItems
            .sort((a, b): number => {
                if(a.title.length > b.title.length){
                    return 1
                }
                else if(a.title.length < b.title.length){
                    return -1
                }
                else return 0      
            })
    }

    return {
        getTodoItems
    }
}