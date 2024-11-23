export const Card = ({ id, title, description, image}) => {
    return (
        <div className="rounded-xl bg-third max-w-80 h-60 overflow-hidden">
            <img
                src={image}
                alt={`Episode: ${id}`}
                className="w-full h-24 rounded-t-lg"
            />
            <div className="text-white space-y-1 px-2 pt-1 pb-1 overflow-y-auto h-32 no-scrollbar">
                <h3 className="text-md md:text-xl font-bold">Episode {id}: {title}</h3>
                <p className="text-xs">{description}</p>
            </div>
        </div>
    )
}