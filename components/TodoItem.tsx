import React, { FunctionComponent } from "react"
import { TodoItem } from '../types/data'
import cn from 'classnames'

type Props = {
    todoItem: TodoItem
}

const TodoItem: FunctionComponent<Props> = ({ todoItem }) => {
    return (
        <div className='flex m-2 p-3 items-center text-left border border-solid
                        border-zinc-200 rounded-lg max-w-2xl min-w-full'>
            <div className='mr-1'>
                {/* checkbox svg */}
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
        </div>
    )
}

export default TodoItem