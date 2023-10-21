import React,{useState} from 'react'
import VCApp from './VCApp'
import CodeEditor from './CodeEditor'


function App() {

const[view,setView]=useState("")
const normalBtnClass="my-2 flex flex-col items-center bg-white/5 p-4 rounded-xl hover:bg-white/10 text-white font-bold text-xl";
const activeBtnClass="my-2 flex flex-col items-center bg-blue-600 shadow-2xl shadow-blue-500/50 p-4 rounded-xl hover:bg-blue-700 text-white font-bold text-xl"

  return (
    <div className='bg-customGray-200 min-w-screen min-h-screen grid grid-cols-12 gap-x-6 '>
        <div className='col-span-2 gap-3 bg-customGray-150 rounded-tr-3xl rounded-br-3xl p-4 flex flex-col'>
            <button className={view==="vc"?activeBtnClass:normalBtnClass} onClick={()=>setView("vc")}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
              </svg>
              Video Conference  
            </button>
            <button className={view==="ce"?activeBtnClass:normalBtnClass} onClick={()=>setView("ce")}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
              </svg>
              Code Editor
            </button>
            <button className={view==="wb"?activeBtnClass:normalBtnClass} onClick={()=>setView("wb")}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
              White Board
            </button>
        </div>
        <div className='relative bg-transparent border-2 border-white/10 col-span-10 m-4 rounded-xl items-center justify-center'>
            {view==="vc"?<VCApp/>:null}
            {view==="ce"?<CodeEditor/>:null}
        </div>
    </div>
  )
}

export default App