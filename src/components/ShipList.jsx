import React from 'react'

const ShipList = () => {
  return (
    <div className="w-full md:w-047 mt-10">
      <div className="divide-y divide-gray-300"> 
        <div className="flex w-11/12 justify-between font-bold text-sm pb-4">
          <p className="flex-1">Service Type</p>
          <p className="flex-1">Expected</p>
          <p className="flex-1">Cost (USD)</p>
        </div>
        {[0, 1, 2].map((val) => (
          <div className="pb-4" key={val}>
            <div className="flex justify-between w-11/12 items-center">
              <div className="mt-4 flex-1">
                <p className="text-sm font-bold mb-1">USPS Priority Mail</p>
                <p className="text-xs">Includes $50,00 Insurance</p>
              </div>
              <p className="mt-4 flex-1 text-xs">Thu, Sep 9</p>
              <div className="mt-4 flex-1 text-xs font-semibold">
                <p className="flex">
                  <span className="text-calc-blue">$7.90</span>
                  <span className="ml-2.5 px-2 py-0.5 rounded-xl bg-calc-yellow text-calc-red">7% off</span>
                </p>
                <p className="line-through">$7.90</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShipList
