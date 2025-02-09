
export function LabelCheap({ labelText, active = false }: {
  labelText: string,
  active: boolean
}) {
  return (
    <span key={labelText} className={`${active ? 'bg-violet-700 text-gray-100' : 'bg-gray-100'} mr-1 px-5 py-2 rounded-full text-xs`}>
      {labelText}
    </span>

  )
}
