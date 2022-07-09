const formattedDate = (datetime) => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleString('default', { month: 'long' })
  return `${parsedDate.getDate()} ${month} ${parsedDate.getFullYear()}`
}

const Comment = ({ comment }) => {
  return (
    <div className="bg-gray-300 p-7 rounded-lg shadow-md">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold text-gray-700">{comment.name}</h2>
        <time dateTime={comment.createdAt} className="text-gray-500">
          {formattedDate(comment.createdAt)}
        </time>
      </div>
      <p className="text-sm mt-2">{comment.body}</p>
    </div>
  )
}

export default Comment
