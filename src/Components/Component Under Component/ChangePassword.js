import React from 'react'

function ChangePassword() {
  return (
    <div className="flex justify-center mt-20 px-8">
    <form className="max-w-2xl">
        <div className="flex flex-wrap border shadow text-left rounded-lg p-3 dark:bg-gray-600">
            <h2 className="text-xl text-gray-600 dark:text-gray-300 pb-2">Change Password</h2>

            <div className="flex flex-col gap-2 w-full border-gray-400">

                <div>
                    <label className="text-gray-600 dark:text-gray-400">Old Password
                      
                    </label>
                    <input
                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                        type="text"/>
                </div>

                <div>
                    <label className="text-gray-600 dark:text-gray-400">New Password</label>
                    <input
                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                        type="text"/>
                </div>

                <div>
                    <label className="text-gray-600 dark:text-gray-400">Confirm Password</label>
                    <input
                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                        type="text"/>
                </div>
                <div className="flex justify-end">
                    <button
                        className="py-1.5 px-3 m-1 text-center bg-violet-700 border rounded-md text-white  hover:bg-violet-500 hover:text-gray-100 dark:text-gray-200 dark:bg-violet-700"
                        type="submit">Save changes</button>
                </div>
            </div>
        </div>
    </form>
</div>
  )
}

export default ChangePassword
