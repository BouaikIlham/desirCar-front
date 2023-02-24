import React from 'react'
import Dashboard from './Dashboard'
import { useState } from 'react'

const Home = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open);
  }
  return (
    <main className="min-h-screen w-full bg-gray-100 text-gray-700">
      <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-slate-50 p-2 fixed ">
          <div className="flex items-center space-x-2">
              <div className="ml-16 text-2xl">
                <h1>Desir Car</h1>
              </div>
          </div>
          <div>
              <button onClick={() => {handleClick()}} type="button" className="h-9 w-9 overflow-hidden rounded-full">
                  <img src="https://plchldr.co/i/40x40?bg=111111" alt="plchldr.co" />
              </button>
              {open ? (
                <div className="absolute right-2 mt-1 w-48 divide-y divide-gray-200 rounded-md border border-gray-200 bg-white shadow-md"
                  x-show="profileOpen">
                  <div className="flex items-center space-x-2 p-2">
                      <img src="https://plchldr.co/i/40x40?bg=111111" alt="plchldr.co" className="h-9 w-9 rounded-full" />
                      <div className="font-medium">Hafiz Haziq</div>
                  </div>
                  <div className="flex flex-col space-y-3 p-2">
                      <a href="#" className="transition hover:text-blue-600">My Profile</a>
                      <a href="#" className="transition hover:text-blue-600">Edit Profile</a>
                      <a href="#" className="transition hover:text-blue-600">Settings</a>
                  </div>
                  <div className="p-2">
                      <button className="flex items-center space-x-2 transition hover:text-blue-600">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                              </path>
                          </svg>
                          <div>Log Out</div>
                      </button>
                  </div>
              </div>
              ): null}
          </div>
      </header>
      <div className="flex">
        <div className="min-h-screen bg-gray-100 fixed">
          <div className="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover:bg-white hover:shadow-lg">
            <div className="flex h-screen flex-col justify-between pt-2 pb-6">
              <div>
                <ul className="mt-6 space-y-2 tracking-wide">
                  <li className="min-w-max">
                    <a href="" aria-label="dashboard" className="relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white">
                      <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                        <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" className="fill-current text-cyan-400 dark:fill-slate-600"></path>
                        <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" className="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                        <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" className="fill-current group-hover:text-sky-300"></path>
                      </svg>
                      <span className="-mr-1 font-medium">Dashboard</span>
                    </a>
                  </li>
                  <li className="min-w-max">
                    <a href="" className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path className="fill-current text-gray-300 group-hover:text-cyan-300" fillRule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clipRule="evenodd" />
                        <path className="fill-current text-gray-600 group-hover:text-cyan-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                      </svg>
                      <span className="group-hover:text-gray-700">Categories</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-4 ml-16">
           <Dashboard />
        </div>
      </div>
    </main>
  )
}

export default Home