const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <div className="row">
                    <img src={data.place.pic} className="rounded col-sm-6" alt={data.place.name} width="300"/>
                    <div className="col-sm-6 mt-5">
                        <h1 className="display-4">{ data.place.name }</h1>
                        <div>
                            <h4>Rating</h4>
                            <p className="lead">Currently Unrated</p>
                        </div>
                        <p className="h4">Located in {data.place.city}, {data.place.state} </p>
                        <p className="lead">{data.place.cuisines}</p>
                        <a href="" className="btn btn-warning"> 
                            Edit
                        </a> 
                        <form method="POST" action="">
                            <button type="submit" className="btn btn-danger">
                                Delete
                            </button>
                        </form>
                    </div> 
                    <hr className="mt-2"></hr>
                    <div className="h8">
                            <h1 className="display-5 ">Comments</h1 >
                            <p>No comments yet!</p>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = show