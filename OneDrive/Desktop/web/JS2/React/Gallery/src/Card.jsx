import React from 'react'

const Card = ({ elem }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-2">
      <a href={elem.url} target="_blank" rel="noopener noreferrer">
        <div className="h-32 w-full overflow-hidden rounded-lg">
          <img
            src={`https://picsum.photos/id/${elem.id}/200/200`}
            alt={elem.author}
            className="h-full w-full object-cover hover:opacity-90 transition duration-300"
          />
        </div>
        <h2 className="mt-2 text-sm font-semibold text-white truncate text-center">
          {elem.author}
        </h2>
      </a>
    </div>
  )
}

export default Card
