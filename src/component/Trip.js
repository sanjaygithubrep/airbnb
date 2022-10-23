import React from 'react'

const Trip = () => {
  return (
    <div className="container-fluid trip">
        <h1>Plan a trip with help from local Hosts around the world</h1>
        <div className="row">
            <div className="col-sm-2">
                <img src="Images/Trip1.jpg" />
                <h6 className="text-center">Plan the Perfect New York Vacation</h6>
                <p className="text-center">Rs1,572</p>
            </div>
            <div className="col-sm-2 col-6">
            <img src="Images/Trip2.jpg" />
            <h6 className="text-center">Design Your Trip to barcelona to New york</h6>
            <p className="text-center">Rs 1,573</p>
            </div>
            <div className="col-sm-2 col-6">
            <img src="Images/Trip3.jpg" />
            <h6 className="text-center">Cast a custom trip to korea with jay</h6>
            <p className="text-center">Rs 1,435</p>
            </div>
            <div className="col-sm-2 col-6">
            <img src="Images/Trip4.jpg" />
            <h6 className="text-center">Trip from london to germany</h6>
            <p className="text-center">Rs 1,4534</p>
            </div>
            <div className="col-sm-2 col-6">
            <img src="Images/Trip5.jpg" />
            <h6 className="text-center">A trip bombay to goa</h6>
            <p className="text-center">Rs 1,234</p>
            </div>
            <div className="col-sm-2 col-6">
            <img src="Images/Trip6.jpg" />
            <h6 className="text-center">Holiday with Family</h6>
            <p className="text-center">Rs 1,2342</p>
            </div>
        </div>
    </div>
  )
}

export default Trip