import './App.css'
import mikemain from "./assets/mikemain.jpg"
import mike1 from "./assets/mike1.jpg"
import mike2 from "./assets/mike2.jpg"
import mike3 from "./assets/mike3.jpg"
import mike4 from "./assets/mike4.jpg"
import diamond1 from "./assets/diamond.jpg"
import diamond2 from "./assets/diamond2.jpg"
import diamond3 from "./assets/diamond3.jpg"

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
<p className='mt-[1rem]  w-[85vw] lg:w-[40vw] lg:ml-[-4rem]'>Leo Ethan Gerhard was born on December 14, 1966. His father was a wealthy businessman into diamond/jewellery trading and mother was into Real Estate development. A graduate of the New York University (Stern) of business, Mr. Leo followed in his father’s footsteps into the world of diamond and jewellery trading, after the death of his father he inherited the business from him.</p>
<p className='mt-[0.5rem] w-[85vw] lg:w-[40vw] lg:ml-[-4rem]'>As an independent jeweler, Our competitive pricing on quality diamonds, coupled with our personal service, separates us from the diamond sellers on the Internet and at shopping clubs. Diamonds are associated with strength, love and health. As we have uncovered, throughout history, diamonds have been worn by leaders or power figures to symbolise strength and invincibility. Diamonds have also been associated with good health and represent long life and good heart health. Cherished For Their Unique Beauty, Diamonds Are The Ultimate Way To Mark Your Moment.</p>
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

<div>
<p className='mt-[1rem]  w-[85vw] lg:w-[40vw] lg:ml-[-4rem] font-semibold'>Where are diamonds exported from?</p>
<p className='mt-[0.5rem] w-[85vw] lg:w-[40vw] lg:ml-[-4rem]'>Belgium and Israel have been diamond trading spots for centuries. The biggest 'producers of Diamonds' are Russia, Botswana, Canada, South Africa and Angola. Namibia, Lesotho, Democratic Republic of Congo, Australia and Sierra Leone complete the top 10. The U.S. imports most of its diamonds (87% in 2013) from just three countries: Belgium, Israel, and India. These three countries are major hubs for polishing and refining diamonds. Even though they are major diamond refining hubs, Belgium and Israel don't mine diamonds.</p>
<p className='mt-[1rem]  w-[85vw] lg:w-[40vw] lg:ml-[-4rem] font-semibold'>How are diamonds bought and sold?</p>
<p className='mt-[0.5rem] w-[85vw] lg:w-[40vw] lg:ml-[-4rem]'>Loose diamonds are bought from wholesalers and various middlemen, before they are set in gorgeous jewellery pieces. These, in turn, are sold at retail level (online or through traditional brick-and-mortar stores) to the public and become symbols of love and commitment between two people.</p>
</div>

<div className="lg:flex lg:w-[83vw] lg:justify-between">
<img src={diamond1} className='mt-[1rem] w-[90vw] lg:w-[40vw]'/>
<img src={diamond2} className='mt-[1rem] w-[90vw] lg:w-[40vw]'/>
</div>

<div>
<p className='mt-[1rem]  w-[85vw] lg:w-[40vw] lg:ml-[-4rem] font-semibold'> Which country is the highest importer of diamond?</p>
<p className='mt-[0.5rem] w-[85vw] lg:w-[40vw] lg:ml-[-4rem]'>The top 3 importers of Grown diamond are the United States with 667,635 shipments followed by Hong Kong with 220,032 and United Arab Emirates at the 3rd spot with 122,722 shipments.</p>
<p className='mt-[1rem]  w-[85vw] lg:w-[40vw] lg:ml-[-4rem] font-semibold'>How are diamonds shipped ?</p>
<p className='mt-[0.5rem] w-[85vw] lg:w-[40vw] lg:ml-[-4rem]'>The diamonds are transported to the airport in an armored vehicle with armed personnel, and they are delivered directly from the armored vehicles to a special part of the plane, which is also specially secured. Packages containing diamonds have a special seal, so it is easy to detect if anyone has tampered with them.</p>
</div>


<div className="lg:flex lg:w-[83vw] lg:justify-center">
<img src={diamond3} className='mt-[1rem] w-[90vw] lg:w-[40vw]'/>
</div>


<div className='border my-[1rem]'>
  <p className='bg-[#AfC4DF] w-[90vw] text-center border-y py-[0.5rem] font-semibold'>Background Information</p>
  <div className='w-[90vw] flex justify-between border-b py-[1rem] px-[0.5rem]'>
    <p className='font-bold'>Occupation</p>
    <p className='w-[50vw]'>Import and Export of Jewellery and Diamond</p>
  </div>
  <div className='w-[90vw] flex justify-between border-b py-[1rem] px-[0.5rem]'>
    <p className='font-bold'>Job Title</p>
    <p className='w-[50vw]'>General Manager </p>
  </div>
  <div className='w-[90vw] flex justify-between border-b py-[1rem] px-[0.5rem]'>
    <p className='font-bold'>Area served</p>
    <p className='w-[50vw]'>Worldwide</p>
  </div>
  <div className='w-[90vw] flex justify-between border-b py-[1rem] px-[0.5rem]'>
    <p className='font-bold'>Product</p>
    <p className='w-[50vw]'>Diamond and Jewellery </p>
  </div>
  <div className='w-[90vw] flex justify-between border-b py-[1rem] px-[0.5rem]'>
    <p className='font-bold'>Marital Status</p>
    <p className='w-[50vw]'>Single</p>
  </div>
  <div className='w-[90vw] flex justify-between border-b py-[1rem] px-[0.5rem]'>
    <p className='font-bold'>Family</p>
    <p className='w-[50vw]'>Not in good terms with family/relatives</p>
  </div>
  <div className='w-[90vw] flex justify-between border-b py-[1rem] px-[0.5rem]'>
    <p className='font-bold'>Children</p>
    <p className='w-[50vw]'>Becky Ethan </p>
  </div>
  <div className='w-[90vw] flex justify-between border-b py-[1rem] px-[0.5rem]'>
    <p className='font-bold'>Friends</p>
    <p className='w-[50vw]'>I have been betrayed by friends in the past who tried to poison me with deadly substances</p>
  </div>
  <div className='w-[90vw] flex justify-between border-b py-[1rem] px-[0.5rem]'>
    <p className='font-bold'>Siblings</p>
    <p className='w-[50vw]'>I am the only child of my parents.</p>
  </div>
  <div className='w-[90vw] flex justify-between border-b py-[1rem] px-[0.5rem]'>
    <p className='font-bold'>Parents</p>
    <p className='w-[50vw]'>Raymond Ethan, Robin Ethan.</p>
  </div>
  <div className='w-[90vw] flex justify-between border-b py-[1rem] px-[0.5rem]'>
    <p className='font-bold'>Date of birth</p>
    <p className='w-[50vw]'>December 14th, 1966 (56 years)</p>
  </div>
  <div className='w-[90vw] flex justify-between border-b py-[1rem] px-[0.5rem]'>
    <p className='font-bold'>Spouse</p>
    <p className='w-[50vw]'>Late. Wendy Ethan ( 40 years) </p>
  </div>
  <div className='w-[90vw] flex justify-between border-b py-[1rem] px-[0.5rem]'>
    <p className='font-bold'>Hobbies</p>
    <p className='w-[50vw]'>He loves swimming, dancing, biking, cooking, listening to music, walking, travelling. </p>
  </div>
</div>
</div>
<div className="bg-[#AfC4DF] p-[1rem]">
  <p className="text-2xl font-semibold">Contact Details</p>
  <p className="mt-[1rem] mb-[0.5rem]"><span className="font-semibold">Email:</span> ethanleogerhard1456@gmail.com</p>
  <div className="flex">
        <svg width="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M9 16C2.814 9.813 3.11 5.134 5.94 3.012l.627-.467a1.483 1.483 0 0 1 2.1.353l1.579 2.272a1.5 1.5 0 0 1-.25 1.99L8.476 8.474c-.38.329-.566.828-.395 1.301.316.88 1.083 2.433 2.897 4.246 1.814 1.814 3.366 2.581 4.246 2.898.474.17.973-.015 1.302-.396l1.314-1.518a1.5 1.5 0 0 1 1.99-.25l2.276 1.58a1.48 1.48 0 0 1 .354 2.096l-.47.633C19.869 21.892 15.188 22.187 9 16z" fill="#000000"></path></g></svg>
            <p className="ml-[0.5rem]">: +1(219) 973-4319</p>
        </div>
</div>
    </div>
  )
}

export default App

