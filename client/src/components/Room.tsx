import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const Room = () => {
  const [searchParams, setSearchParas] = useSearchParams();
  const name = searchParams.get('name');
  useEffect(() => { }, [name])
  return (
    <div>

      hiii {name}
    </div>
  )
}

export default Room
