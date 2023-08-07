const ShimmerCard = () => {
    return (

        <div className="shimmer-card">
            <div className="shimmer-img stroke animate"></div>
            <div className="shimmer-title stroke animate"></div>
            <div className="shimmer-tags stroke animate "></div>
            <div className="shimmer-details stroke animate "></div>
        </div>

    )
}

export const Shimmer = () => {
    return (
        <div className="shimmer-container">

            {new Array(10).fill(0).map((e, index) => {
                return <ShimmerCard key={index} />
            })}
        </div>
    )
}


