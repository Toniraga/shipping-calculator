import React from 'react'
import Button from '../ui-components/Button';
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <div className="bg-calc-gray">
      <div className="w-11/12 md:w-10/12 mx-auto pt-6 flex justify-between">
        <img className="h-6 md:h-8" src={logo} alt="logo" />
        <Button classNames="rounded-lg w-32">
          Contact us
        </Button>
      </div>
      <div className="w-11/12 md:w-10/12 mx-auto text-center py-28">
        <div className="text-calc-black text-5xl font-medium md:font-bold w-11/12 md:w-3/6 mx-auto mb-10">
          Calculate USPS times and rates
        </div>
        <p className="text-sm md:text-base text-calc-gray-200 w-4/6 mx-auto">
          Determining USPS domestic and international shipping cost is now easier than ever. Fill in the details and let our online calculator find out your postage rate and transit time.
        </p>
      </div>
    </div>
  )
}

export default Header
