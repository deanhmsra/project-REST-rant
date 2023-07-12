const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place, index) => {
        return (
            <div className="col-sm-6">
                <h2>
                    <a href={`/places/${index}`}>
                    {place.name}
                    </a>
                </h2>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name}></img>
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Places to rant or rave about</h1>
                <div className="row">
                {placesFormatted}
                </div>
                <p>
                    Image by <a href="https://pixabay.com/users/antonytrivet-3549802/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5993951">Antony Trivet</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5993951">Pixabay</a><br></br>
                    Image by <a href="https://pixabay.com/users/sharonang-99559/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1711012">Sharon Ang</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1711012">Pixabay</a>
                </p>
            </main>
        </Def>
    )
}

module.exports = index 