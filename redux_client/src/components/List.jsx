import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function List() {


      const reduxData = useSelector(state => state.listSlice.listItems);
      console.log(reduxData)

      const [list, setList] = useState(['gaurav']);


      useEffect(() => {

            setList(reduxData)

      }, [reduxData])

      return (
            <div className='flex flex-col gap-4 border-2 '>
                  
                  here is the List
                  {

                        list.map(data => {

                              return <p className='mt-4 text-black' key={data}>
                                    {data}
                              </p>
                        })

                  }


            </div>
      )
}

export default List