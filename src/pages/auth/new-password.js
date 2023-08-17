import { IoChevronForward } from "react-icons/io5";


function NewPassword() {
    return (
      <main className="bg-secondary">
        <div className="absolute top-[50%] right-[50%] translate-x-[50%] w-full px-4 md:px-0 translate-y-[-50%] cusomt-shadow flex flex-col gap-7  justify-center items-center">
          <div className="text-center">
            <h1 className="text-[50px] font-medium font-serif leading-tight">Hello</h1>
            <p className="text-[12px] italic">please enter your new password</p>
          </div>
          <div className="bg-[#ffffff] rounded-2xl shadow-md border bord er-red-500 sm:w-[360px] w-full">
            <input type='password' className="border-b h-[66px] focus:ring rounded-t-xl border- red-500 text-[19px] ring-inset p-6 outline-none w-full bg-transparent" placeholder="Password"/>
            <div className="relative">
              <input type="password" className="h-[65px] rounded-b-xl text-[19px] focus:ring p-6 outline-none w-full bg-transparent" placeholder="Conform Password"/>
              <button className="absolute right-0 bottom-0 bg-secondary group shadow-sm hover:bg-helper2 hover:bg-blue-100 h-full rounded-br-2xl px-2">
                <IoChevronForward style={{color:'gray'}} className="h-8 w-8 group-hover:scale-110 transition-all"/>
              </button>
            </div>
          </div>
          <p className="text-red-500 italic text-[15px] hidden">Incorect email or password</p>
        </div>
      </main>
    );
}

export default NewPassword;