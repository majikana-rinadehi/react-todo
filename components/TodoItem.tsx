import React, { FunctionComponent, useRef } from "react"
import { TodoItem } from '../types/data'
import cn from 'classnames'
import EditIcon from '../components/EditIcon'
import TrashIcon from '../components/TrashIcon'

type Props = {
    todoItem: TodoItem,
    onDelete: (todoId: string) => void,
    onEdit: (todoId: string) => void,
    onUpdate: (todoId: string, newTodoTitle: string) => void,
    isEditing: boolean,
}

const TodoItem: FunctionComponent<Props> = ({ todoItem, onDelete, onEdit, isEditing, onUpdate }) => {

    const inputRef = useRef<HTMLInputElement>(null)

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
            {isEditing ? (
                <>
                    <input
                        type="text"
                        ref={inputRef}
                        defaultValue={todoItem.title}
                        className='border-b-4 border-solid border-slate-500 outline-none
                                    italic' />
                    <div
                        onClick={() => onUpdate(todoItem.id, inputRef.current!.value)} 
                        className="text-3xl cursor-pointer">
                        ☑
                    </div>
                </>
            ) : (
                <h2 className='m-0 text-2xl'>
                    {todoItem.title}
                </h2>
            )
            }
            <div
                onClick={() => onEdit(todoItem.id)}
                className="ml-auto">
                <EditIcon />
            </div>
            <div
                className="ml-2"
                onClick={() => onDelete}>
                {/* delete icon */}
                <TrashIcon />
            </div>
        </div>
    )
}

export default TodoItem