'use client'
 
import { useSearchParams } from 'next/navigation'
 
export default function SortProducts({classNames}) {
 
  function updateSorting(sortOrder, classNames) {
    const params = new URLSearchParams()
    params.set('sort', sortOrder)
    window.history.pushState(null, '', `?${params.toString()}`)
  }
 
  return (
    <div className='flex gap-5'>
      <button className={classNames.asc} onClick={() => updateSorting('asc')}>Sort Ascending</button>
      <button className={classNames.dsc} onClick={() => updateSorting('desc')}>Sort Descending</button>
    </div>
  )
}