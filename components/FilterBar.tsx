import React, { FunctionComponent } from "react"
import cn from 'classnames'
import type { Filter, Sorter } from '../types/utilTypes'

type props = {
    sorter: Sorter
    filter: Filter
    onClickSorter: (sorter: Sorter) => void
    onClickFilter: (filter: Filter) => void
}

export const FilterBar: FunctionComponent<props> = ({ sorter, filter, onClickSorter, onClickFilter }) => {
    return (
        <div className={'flex justify-center items-center w-1/5 mb-4'}>
            <div className={'mr-2'}>↑↓</div>
            <button
                onClick={() => onClickSorter("日付")} 
                className={cn('w-1/4 rounded-md cursor-pointer', sorter === "日付" ? 'bg-zinc-400 text-white' : '')}>日付</button>
            <button
                onClick={() => onClickSorter("タイトル")} 
                className={cn('w-1/4 rounded-md cursor-pointer', sorter === "タイトル" ? 'bg-zinc-400 text-white' : '')}>タイトル</button>
            <div className={'mr-2 ml-12'}>▽</div>
            <button 
                onClick={() => onClickFilter("完了")}
                className={cn('w-1/4 rounded-md cursor-pointer', filter === "完了" ? 'bg-zinc-400 text-white' : '')}>完了</button>
            <button 
                onClick={() => onClickFilter("未完了")}
                className={cn('w-1/4 rounded-md cursor-pointer', filter === "未完了" ? 'bg-zinc-400 text-white' : '')}>未完了</button>
        </div>

    )
}