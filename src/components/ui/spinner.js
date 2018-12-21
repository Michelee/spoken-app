import React from 'react'
import RiseLoader from 'react-spinners/ClipLoader';
import '../../styles/components/ui/_spinner.scss'

const Spinner = () => (
  <div className="Spinner">
    <RiseLoader
      sizeUnit={"px"}
      size={30}
      color={'#123abc'}
      loading
    />
  </div>
)

export default Spinner
