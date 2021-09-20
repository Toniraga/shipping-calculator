import React, {useState} from 'react'
import Button from '../ui-components/Button';
import Input, { Select } from '../ui-components/Input';
import CountrySelect from 'react-bootstrap-country-select';
// import ErrorPage from './ErrorPage';

const initialState = {
  shipFromValue: 'gb',
  shipFromZipcode: '10001',
  shipToZipcode: '10001',
  packageType: 'custom_package',
}

const CalculatorBox = () => {
  const [inputData, setInputData] = useState(initialState)
  const [shipToValue, setShipToValue] = useState('us');

  const onChange = (event) => {
    setInputData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const {
    shipFromValue,
    shipFromZipcode,
    shipToZipcode,
    packageType
  } = inputData;


  console.log(inputData, 'country obj');

  const handleClick = () => {
    console.log('clicked!!')
  }

  // const error = (
  //   <ErrorPage />
  // )

  return (
    <div className="bg-calc-blue-100 w-full md:w-047 py-6 px-8">
      {/* Ship From */}
      <div className="pb-4">
        <p className="font-semibold text-sm pb-2.5">Ship from</p>
        <div className="flex justify-between">
          <CountrySelect
            value={shipFromValue}
            onChange={() => {}}
            className="w-070"
            disabled
            valueAs='id'
          />
          <Input 
            classNames="w-3/12 px-1 text-center outline-none border border-calc-gray disabled:bg-white"
            placeholder='Zip code'
            name='shipFromZipcode'
            value={shipFromZipcode}
            onChange={onChange}
            disabled
          />
        </div>
      </div>

      {/* Ship To */}
      <div className="pb-4">
        <p className="font-semibold text-sm pb-2.5">Ship to</p>
        <div className="flex justify-between">
          <CountrySelect
            value={shipToValue}
            onChange={setShipToValue}
            placeholder="Search"
            className="w-070 focus:outline-none focus:ring focus:border-gray"
            valueAs="id"
            noMatchesText='No matches'
            matchAbbreviations
          />
          <Input 
            classNames="w-3/12 px-1 text-center outline-none border border-calc-gray"
            placeholder='Zip code'
            name='shipToZipcode'
            onChange={onChange}
            value={shipToZipcode}
          />
        </div>
      </div>

      {/* Package Type */}
      <div className="pb-4">
        <p className="font-semibold text-sm pb-2.5">Package Type</p>
        <Select
          value={packageType}
          name='packageType'
          onChange={onChange}
          className="w-full outline-none border border-calc-gray px-4"
        />
      </div>

      {/* Weight and Dimensions */}
      <div className="pb-4 flex items-center">
        <div>
          <p className="font-semibold text-sm pb-2.5">Weight</p>
          <Input classNames="w-12 text-center text-sm border border-calc-gray outline-none" />
        </div>
        <p className="md:mx-4 mx-2 text-sm pt-4">kg</p>
        <div>
          <p className="font-semibold text-sm pb-2.5">Dimension(optional)</p>
          <div className="flex items-center">
            <div className="flex">
              <Input 
                classNames="w-12 text-center text-sm border border-calc-gray outline-none" 
                placeholder="Depth"
              />
              <span className="mx-1.5 md:mx-3 mt-2 text-sm">x</span>
            </div>
            <div className="flex">
              <Input 
                classNames="w-12 text-center text-sm border border-calc-gray outline-none" 
                placeholder="Width"
              />
              <span className="mx-1.5 md:mx-3 mt-2 text-sm">x</span>
            </div>
            <div className="flex">
              <Input 
                classNames="w-12 text-center text-sm border border-calc-gray outline-none" 
                placeholder="Height"
              />
              <span className="mx-1.5 md:mx-3 mt-2 text-sm">in</span>
            </div>
          </div>
        </div>
      </div>


      {/* Shipping Date */}
      <div className="pb-2">
        <p className="font-semibold text-sm pb-2.5">Shipping date</p>
        <Input 
          classNames="w-full px-4 outline-none border border-calc-gray"
          type='date'
        />
      </div>

      {/* Button */}
      <Button
        classNames="w-full"
        onClick={handleClick}
      >
        Show Rates
      </Button>
    </div>
  )
}

export default CalculatorBox
