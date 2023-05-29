import './App.css'
import mikemain from "./assets/mikemain.jpg"
import mike1 from "./assets/mike1.jpg"
import mike2 from "./assets/mike2.jpg"
import mike3 from "./assets/mike3.jpg"
import mike4 from "./assets/mike4.jpg"

function App() {
  return (
    <div className="App">
      <div className="p-[0.5rem] mb-[-0.5rem] text-xl font-semibold">
        <p>Ethan Leo Gerhard</p>
      </div>
<div className='flex flex-col items-center'>
<div className="lg:flex lg:justify-between lg:w-[80vw] lg:items-center">
<img src={mikemain} className='mt-[1rem] w-[90vw] lg:w-[30vw] lg:ml-[4rem]'/>
<div>
<p className='mt-[1rem] text-lg w-[85vw] lg:w-[40vw] lg:ml-[-4rem]'>I am widower, we were married for 25 years and have been a widower for 10 years, I am originally from Germany but I live in USA. I am a business man that deals on importing and exporting of diamonds for years now, I am self employed and i handle my job and contracts.</p>
<p className='mt-[0.5rem] text-lg w-[85vw] lg:w-[40vw] lg:ml-[-4rem]'>I inherited the job from my late father. I love biking, shopping, cooking, listening to music, walking, travelling and swimming.</p>
</div>
</div>
<div className="lg:flex lg:w-[83vw] lg:justify-between">
<img src={mike1} className='mt-[1rem] w-[90vw] lg:w-[40vw]'/>
<img src={mike2} className='mt-[1rem] w-[90vw] lg:w-[40vw]'/>
</div>
<div className="lg:flex lg:w-[83vw] lg:justify-between">
<img src={mike3} className='mt-[1rem] w-[90vw] lg:w-[40vw]'/>
<img src={mike4} className='mt-[1rem] w-[90vw] lg:w-[40vw]'/>
</div>
<div className='border my-[1rem]'>
  <p className='bg-[#AfC4DF] w-[90vw] text-center border-y py-[0.5rem] font-semibold'>Background Information</p>
  <div className='w-[90vw] flex justify-between border-b py-[1rem] px-[0.5rem]'>
    <p className='font-bold'>Marital Status</p>
    <p className='w-[60vw]'>Single</p>
  </div>
  <div className='w-[90vw] flex justify-between border-b py-[1rem] px-[0.5rem]'>
    <p className='font-bold'>Family</p>
    <p className='w-[60vw]'>Not in terms with relative/family</p>
  </div>
  <div className='w-[90vw] flex justify-between border-b py-[1rem] px-[0.5rem]'>
    <p className='font-bold'>Friends</p>
    <p className='w-[60vw]'>I have been betrayed by friends in the past who tried to poison me with deadly substances</p>
  </div>
  <div className='w-[90vw] flex justify-between border-b py-[1rem] px-[0.5rem]'>
    <p className='font-bold'>Siblings</p>
    <p className='w-[60vw]'>I am the only child of my parents.</p>
  </div>
  <div className='w-[90vw] flex justify-between border-b py-[1rem] px-[0.5rem]'>
    <p className='font-bold'>Parents</p>
    <p className='w-[60vw]'>Raymond, Ethan Robin Ethan.</p>
  </div>
  <div className='w-[90vw] flex justify-between border-b py-[1rem] px-[0.5rem]'>
    <p className='font-bold'>Born</p>
    <p className='w-[60vw]'>14th December 1966 (Age 56 years)</p>
  </div>
  <div className='w-[90vw] flex justify-between border-b py-[1rem] px-[0.5rem]'>
    <p className='font-bold'>Spouse</p>
    <p className='w-[60vw]'>Wendy Ethan (Age 40)</p>
  </div>
</div>
</div>
<div className="bg-[#AfC4DF] p-[1rem]">
  <p className="text-2xl font-semibold">Contact Details</p>
  <p className="mt-[1rem] mb-[0.5rem]"><span className="font-semibold">Email:</span> Ethanleo1456@gmail.com </p>
  <div className="flex">
        <svg width="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M9 16C2.814 9.813 3.11 5.134 5.94 3.012l.627-.467a1.483 1.483 0 0 1 2.1.353l1.579 2.272a1.5 1.5 0 0 1-.25 1.99L8.476 8.474c-.38.329-.566.828-.395 1.301.316.88 1.083 2.433 2.897 4.246 1.814 1.814 3.366 2.581 4.246 2.898.474.17.973-.015 1.302-.396l1.314-1.518a1.5 1.5 0 0 1 1.99-.25l2.276 1.58a1.48 1.48 0 0 1 .354 2.096l-.47.633C19.869 21.892 15.188 22.187 9 16z" fill="#000000"></path></g></svg>
            <p className="ml-[0.5rem]">: +1(219) 973-4319</p>
        </div>
</div>
    </div>
  )
}

export default App
