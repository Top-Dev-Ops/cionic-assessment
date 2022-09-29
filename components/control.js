export default function Control({ active, element, label, onClick }) {
  return (
    <div
      className={`w-full flex flex-col gap-8 items-center my-4 p-2 ${active ? 'border border-gray-700 border-b-4 border-b-sky-500 ease-linear duration-300' : ''}`}
      onClick={() => onClick(label)}
    >
      <div>
        {element}
      </div>
      {active && (
        <div className="text-sm">
          {label}
        </div>
      )}
    </div>
  )
}