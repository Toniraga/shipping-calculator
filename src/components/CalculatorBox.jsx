import React, {useState, useEffect} from 'react'
import { format } from 'date-fns';
import Button from '../ui-components/Button';
import Input, { Select } from '../ui-components/Input';
import CountrySelect from 'react-bootstrap-country-select';

const today = new Date();

const initialState = {
  shipFromValue: 'us',
  shipFromZipcode: '10001',
  shipToZipcode: '10001',
  packageType: 'custom_package',
  weight: '0.5',
  depth: '1',
  width: '1',
  height: '1',
  date: `${format(today, 'yyyy-MM-dd')}`
}

const CalculatorBox = ({
  onSubmit,
  loading
}) => {
  const [inputData, setInputData] = useState(initialState)
  const [shipToValue, setShipToValue] = useState('gb');

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
    packageType,
    weight,
    depth,
    width,
    height,
    date
  } = inputData;

  const disableBtn = (
    !shipToZipcode.trim() || 
    !shipFromZipcode.trim() ||
    !weight.trim() ||
    !date.trim()
  )

  useEffect(() => {
    onSubmit({
      ...inputData, 
      shipFromValue: 'USA',
      shipToValue: 'GBR'
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div style={{maxHeight: '560px'}} className="bg-calc-blue-100 w-full md:w-047 py-6 px-8">
      {/* Ship From */}
      <div className="pb-4">
        <p className="font-semibold text-sm pb-2.5">Ship from</p>
        <div className="flex justify-between">
          <CountrySelect
            value={shipFromValue}
            onChange={() => {}}
            className="w-070"
            disabled
            valueAs='object'
          />
          <Input 
            classNames="w-3/12 px-1 text-center outline-none border border-calc-gray disabled:bg-white"
            placeholder='Zip code'
            name='shipFromZipcode'
            value={shipFromZipcode}
            onChange={onChange}
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
            valueAs='object'
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
          className="w-full outline-none bg-white border border-calc-gray px-4"
        />
      </div>

      {/* Weight and Dimensions */}
      <div className="pb-4 flex items-center">
        <div>
          <p className="font-semibold text-sm pb-2.5">Weight</p>
          <Input 
            classNames="w-12 text-center border border-calc-gray outline-none" 
            name='weight'
            value={weight}
            onChange={onChange}
          />
        </div>
        <p className="md:mx-4 mx-2 text-sm pt-4">lb</p>
        <div>
          <p className="font-semibold text-sm pb-2.5">Dimension(optional)</p>
          <div className="flex items-center">
            <div className="flex">
              <Input 
                classNames="w-12 text-center border border-calc-gray outline-none" 
                placeholder="Depth"
                name='depth'
                value={depth}
                onChange={onChange}
              />
              <span className="mx-1.5 md:mx-3 mt-2 text-sm">x</span>
            </div>
            <div className="flex">
              <Input 
                classNames="w-12 text-center border border-calc-gray outline-none" 
                placeholder="Width"
                name='width'
                value={width}
                onChange={onChange}
              />
              <span className="mx-1.5 md:mx-3 mt-2 text-sm">x</span>
            </div>
            <div className="flex">
              <Input 
                classNames="w-12 text-center border border-calc-gray outline-none" 
                placeholder="Height"
                name='height'
                value={height}
                onChange={onChange}
              />
              <span className="mx-1.5 md:mx-3 mt-2 text-sm">in</span>
            </div>
          </div>
        </div>
      </div>


      {/* Shipping Date */}
      <div className="pb-2 w-full ship-date-container">
        <p className="font-semibold text-sm pb-2.5">Shipping date</p>
        <Input 
          classNames="w-full shipping-date px-4 outline-none border border-calc-gray"
          type='date'
          name="date"
          value={date}
          onChange={onChange}
        />
      </div>

      {/* Button */}
      <Button
        classNames="w-full"
        disabled={disableBtn}
        loading={loading}
        onClick={() => onSubmit({
          ...inputData, 
          shipFromValue: inputData.shipFromValue.alpha3,
          shipToValue: shipToValue.alpha3
        })}
      >
        Show Rates
      </Button>
    </div>
  )
}

export default CalculatorBox
