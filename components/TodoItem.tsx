import React, { FunctionComponent } from "react"
import { TodoItem } from '../types/data'
import cn from 'classnames'

type Props = {
    todoItem: TodoItem,
    onDelete: (todoId: string) => void
}

const TodoItem: FunctionComponent<Props> = ({ todoItem, onDelete }) => {

    const onClickTrash = () => {
        onDelete(todoItem.id)
    }

    return (
        <div className='flex m-2 p-3 items-center text-left border border-solid
                        border-zinc-200 rounded-lg max-w-2xl min-w-full'>
            <div className='mr-1'>
                {/* checkbox icon */}
                <svg
                    className={cn(
                        'h-10',
                        'w-10',
                        todoItem.isDone ? 'text-indigo-500' : 'text-indigo-200'

                    )}
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <h2 className='m-0 text-2xl'>
                {todoItem.title}
            </h2>
            <div 
                className="ml-auto"
                onClick={onClickTrash}>
                {/* delete icon */}
                <svg 
                    className="h-10 w-10 text-rose-300 hover:text-rose-500 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </div>
        </div>
    )
}

export default TodoItem