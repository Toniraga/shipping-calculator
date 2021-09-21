import React from 'react'
import errorImg from '../assets/error.svg';
import { format } from 'date-fns';

const ShipList = ({
  loading,
  error,
  fetchedData
}) => {
  const calcDiscount = (postDiscount, preDiscount) => {
    const diff = postDiscount - preDiscount;
    return Math.floor((diff / preDiscount) * 100);
  }

  return (
    <div className="w-10/12 mr-auto ml-auto md:m-0 md:w-047 mt-10">
      <div className="divide-y divide-gray-300"> 
        <div className="flex w-11/12 justify-between font-bold text-sm pb-4">
          <p className="flex-1">Service Type</p>
          <p className="flex-1">Expected</p>
          <p className="flex-1">Cost (USD)</p>
        </div>
        {!loading 
          && !error
          && fetchedData?.rates?.length 
          && fetchedData?.rates.map((rate,idx) => (
          <div className="pb-4" key={idx}>
            <div className="flex justify-between w-11/12 items-center">
              <div className="mt-4 flex-1">
                <p className="text-sm font-bold mb-1">{rate.service_name}</p>
                <p className="text-xs">Includes $50,00 Insurance</p>
              </div>
              <p className="mt-4 flex-1 text-xs md:text-sm">
                {`${format(new Date(rate.delivery_date), 'EEE, MMM do')}`}
              </p>
              <div className="mt-4 flex-1 text-xs font-semibold">
                <p className="flex">
                  <span className="text-calc-blue">
                    ${rate?.discounted.total_charge.amount}
                  </span>
                  <span className="ml-2.5 px-2 py-0.5 rounded-xl bg-calc-yellow text-calc-red">
                    {calcDiscount(
                      rate?.discounted.total_charge.amount,
                      rate?.original.total_charge.amount
                    )}% off
                  </span>
                </p>
                <p className="line-through">
                  ${rate?.original.total_charge.amount}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center">
        {((!loading && error) || fetchedData?.rates?.length < 1) && (
          <div>
            <img className="mx-auto" src={errorImg} alt='error' />
            <div className="text-center"> 
              <p className="text-4xl">No results found</p>
              <p className="text-xl">Something went wrong. Try editing the figures entered.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ShipList
