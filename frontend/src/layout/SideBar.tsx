"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'

type Props = {}

const SideBar = (props: Props) => {
  
  const [files, setFiles] = useState<any[]>([])

  const handleFileUpload = (e : any) => {
    setFiles([])
    for (const file  of e.target.files) {
      setFiles((prev : any) => {
        return [...prev, file]
      })      
    }
    
  }

  console.log({files});
  

  return (
    <div
      className={`text-white z-50 w-96 h-full fixed top-0 duration-300 ease-in-out transition-all bg-[#102030] dark:bg-[#102030] left-0`}
    >
      <div className="h-auto">
        <div className="px-6 pt-5">
          <div className="flex items-center justify-between">
            <Image src="/img/download.png" className="w-full" alt="Logo" height={1000} width={250} />
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="px-6 pt-4">
          <hr className="border-gray-700" />
        </div>
        <div className="px-6 pt-4">
          <ul className="flex flex-col space-y-2">
            <li className="">
              <h1 className='text-2xl font-bold'>Upload PDF Files</h1>

              <div className="flex items-center justify-center w-full mt-3">
                <label
                  htmlFor="dropzone-file"
                  className=" flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 "
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      PDF Only
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" multiple onChange={handleFileUpload}/>
                </label>
              </div>

            </li>
          </ul>
        </div>

        <div className="px-6 pt-4">
          <ul className='flex flex-col space-y-2'>
            <h1>Uploaded Files : </h1>
          {
            files?.length > 0 && files?.map((f : any, i : number) => {
              return <>
                <li key={i + 988} className='bg-gray-600 p-2 border rounded-2xl border-slate-600/50 flex flex-row align-middle'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 my-auto mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                  <h1>{f.name}</h1>
                </li>
              </>
            })
          }
          </ul>
        </div>

        {files?.length > 0 && <div className="px-6 pt-4 flex justify-between">
          <button onClick={() => setFiles([])} className='bg-red-400/60 p-3 w-20 border rounded-lg border-slate-900'>Clear</button>
          <button onClick={() => setFiles([])} className='bg-green-400/25 p-3 w-20 border rounded-lg border-slate-900'>Upload</button>
        </div>}

      </div >
    </div>
  )
}

export default SideBar