
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { insertInList } from '../redux/listReducer';

function InputFile() {


      const [item, setItem] = useState('gaurav')
      
      const dispatch = useDispatch();

      const sendDataToRedux = () => {

            dispatch(insertInList(item));
            console.log(item);
            setItem("");


      }


      return (
            <div className='flex  item-center gap-4 shadow-xl shadow-gray-300 flex-col align-center'>

                 

                        <label htmlFor=""
                              className='text-xl m-auto'
                        > Item Add Here </label>
                        <input 
                              type="text"
                              placeholder='enter List Item'
                              className='border m-auto'
                              value={item}
                              onChange={(e) => setItem(e.target.value)}
                        />


                        <button
                              type="submit"
                              onClick={sendDataToRedux}
                              className='px-4 py-2 w-[8rem] border m-auto'
                        >
                              send Data to Redux
                        </button>

                  
                  

            </div>
      )
}

export default InputFile