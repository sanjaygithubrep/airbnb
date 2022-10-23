import React from 'react'

const Seller = () => {
  return (
    <div className="seller">
        <h1>Top sellers</h1>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-4 col-2">
        <img src="Images/Circus.jpg" />
        <h5 className="text-center">The Plague Doctor of Prague-Halloween Edition</h5>
        <p className="text-center">From Rs1,323</p>
        </div>
        <div className="col-sm-4 col-2">
        <img src="Images/Mystery.jfif" />
        <h5 className="text-center">Solve the Mystery Escape Room also with Halloween</h5>
        <p className="text-center">From Rs1,1272/person</p>
        </div>
        <div className="col-sm-4 col-2">
        <img src="Images/Mystery2.jfif" />
        <h5 className="text-center">Murdery Mystery Escape Room Game-Perfect for Game</h5>
        <p className="text-center">Rs 1,3743</p>
        </div>
        </div>
        </div>
        {/* <img src="Images/Mystery3.jfif" /> */}
        {/* <img src="Images/Spain.jpg" /> */}
    </div>
   







  )
}

export default Seller