// import React from "react";
// import Carousel from "../Components/AboutComponents/Carousel";
// import bankImage from "../../public/bank_account.jpg"
// import { Link } from "react-router-dom";
// const RegisterPage = () => {
//   return (
//     <>
//       <Carousel />
//       <section>
//         <div className="registration py-5 px-6 md:px-16">
//           <div className="container md:px-16">
//             <h1 className="text-2xl sm:text-4xl text-orange-500 mb-2">
//               Registration
//             </h1>
            
//             <p className="text-xl ">
//               Participants are requested to register for the conference by
//               filling the registration form available on website.
//             </p>
//             <a href="https://forms.gle/6pwGomGnApfKxhTU7" className="text-orange-500 underline text-xl" target="_blank">Click here to register</a>
//             <p className="text-xl ">
//               *All the registered delegates shall be entitled to Conference kit,
//               participation in all sessions, participatory certificate, 2 high tea, 1 breakfast, 2 lunches and 1 dinner.
//             </p>
//           </div>
//         </div>
//         <div className="back_account  md:px-16 py-5">
//           <div className="container flex md:flex-row flex-col justify-center items-start md:px-16 md:gap-x-5 gap-y-5 ">
//             <div className="w-full md:w-3/6 px-6 md:px-0">
//               <img className="rounded-xl  " src={bankImage} alt="" />
//             </div>
//             <div className="w-full md:w-3/6  px-10">
//               <h1 className="text-2xl sm:text-3xl text-orange-500 mb-2">Payment Details</h1>
//               <ul className="list-disc text-xl ">
//                 <li>
//                   Account No: <span className="font-bold">0477040520000058</span>
//                 </li>
//                 <li>
//                   {" "}
//                   IFSC: <span className="font-bold">JAKA0SMVDUN</span>
//                 </li>
//                 <li>
//                   MICR Code: <span className="font-bold">182051202</span>
//                 </li>
//                 <li>
//                   Bank: <span className="font-bold">J&K Bank</span>
//                 </li>
//                 <li>
//                   Branch:
//                   <span className="font-bold">SMVDU </span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="accommodation px-10 md:px-16 py-5">
//            <div className="container md:px-16">
//               <h1 className="text-3xl text-orange-500 pb-2">Registration Fees</h1>
              
             
//               <table className="table border-collapse text-xl">
//                  <thead>
//                     <tr className=" ">
//                     <th className="border border-slate-300 p-3 text-center">S.No.</th>
//                         <th className="border border-slate-300 p-3 text-center">Participants</th>
//                         <th className="border border-slate-300 p-3 text-center ">
//                         Early Bird 
                        
//                         </th>
//                         <th className="border border-slate-300 p-3 text-center">Late Registration
                        
//                             </th>
//                             <th className="border border-slate-300 p-3 text-center"> On Spot Registration
//                             </th>
//                     </tr>
//                  </thead>
//                  <tbody>
                   
//                     <tr>
//                     <td className="border border-slate-300 p-3 text-center">1</td>
//                        <td className="border border-slate-300 p-3 text-center">Academician/Technician Staff</td>
//                        <td className="border border-slate-300 p-3 text-center">Rs. 3000/-</td>
//                        <td className="border border-slate-300 p-3  text-center">Rs. 3500/-</td>
//                        <td className="border border-slate-300 p-3  text-center">Rs. 3800/-</td>
//                     </tr>
//                     <tr>
//                     <td className="border border-slate-300 p-3 text-center">2</td>
//                        <td className="border border-slate-300 p-3 text-center">Delegates from R&D /Industry</td>
//                        <td className="border border-slate-300 p-3 text-center">Rs. 4000/-</td>
//                        <td className="border border-slate-300 p-3 text-center">Rs. 4500/-</td>
//                        <td className="border border-slate-300 p-3 text-center">Rs. 4800/-</td>
//                     </tr>
//                     <tr>
//                     <td className="border border-slate-300 p-3 text-center">3</td>
//                        <td className="border border-slate-300 p-3 text-center">Scholar (Ph.D)</td>
//                        <td className="border border-slate-300 p-3 text-center">Rs. 1800/-</td>
//                        <td className="border border-slate-300 p-3 text-center">Rs. 2300/-</td>
//                        <td className="border border-slate-300 p-3 text-center">Rs. 2500/-</td>
//                     </tr>
//                     <tr>
//                     <td className="border border-slate-300 p-3 text-center">4</td>
//                        <td className="border border-slate-300 p-3 text-center">Students(UG & PG) 
//                        </td>
//                        <td className="border border-slate-300 p-3 text-center">Rs. 1000/-</td>
//                        <td className="border border-slate-300 p-3 text-center">Rs. 1500/-</td>
//                        <td className="border border-slate-300 p-3 text-center">Rs. 1700/-</td>
//                     </tr>
//                     <tr>
//                     <td className="border border-slate-300 p-3 text-center">5</td>
//                        <td  className="border border-slate-300 p-3 text-center">International Delegates
//                        </td>
//                        <td className="border border-slate-300 p-3 text-center">$200</td>
//                        <td className="border border-slate-300 p-3 text-center">$250</td>
//                        <td className="border border-slate-300 p-3 text-center">$280</td>
//                     </tr>

//                  </tbody>
//               </table>
            
//               <p className="text-xl font-bold">*Rs. 500 for National and 50$ for International Delegates those who are interested to attend the workshop.</p>
//               <ul className="text-xl py-5 list-disc">
//                 <li>Accompanying person will be charged Rs 1500 extra.</li>
//                 <li>Registration fee includes conference kit, lunch, dinner and refreshment. </li>
//                 <li>Details for the Registration is available on university website.</li>
//               </ul>
//               <p className="text-xl pb-3">For Key-note speakers, accommodation shall be arranged by the organizers. Accommodation for other delegates of ETBCT-2025 would be available on sharing basis at reasonable price in the hotels at Katra. Travel from hotels to venue will be arranged by organisers only in the morning and evening.</p>
//            </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default RegisterPage;


import React from "react";
import Carousel from "../Components/AboutComponents/Carousel";
import bankImage from "../../public/bank_account.jpg";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <Carousel />
      <section>
        <div className="registration py-5 px-6 md:px-16">
          <div className="container md:px-16">
            <h1 className="text-2xl sm:text-4xl text-orange-500 mb-2">
              Registration
            </h1>

            <p className="text-xl ">
              Participants are requested to register for the conference by
              filling the registration form available on website.
            </p>
            <a
              href="https://forms.gle/6pwGomGnApfKxhTU7"
              className="text-orange-500 underline text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to register
            </a>
            <p className="text-xl ">
              *All the registered delegates shall be entitled to Conference kit,
              participation in all sessions, participatory certificate, 2 high
              tea, 1 breakfast, 2 lunches and 1 dinner.
            </p>
          </div>
        </div>

        <div className="back_account  md:px-16 py-5">
          <div className="container flex md:flex-row flex-col justify-center items-start md:px-16 md:gap-x-5 gap-y-5">
            <div className="w-full md:w-3/6 px-6 md:px-0">
              <img className="rounded-xl" src={bankImage} alt="Bank Account" />
            </div>
            <div className="w-full md:w-3/6 px-10">
              <h1 className="text-2xl sm:text-3xl text-orange-500 mb-2">
                Payment Details
              </h1>
              <ul className="list-disc text-xl ">
                <li>
                  Account No:{" "}
                  <span className="font-bold">0477040520000058</span>
                </li>
                <li>
                  {" "}
                  IFSC: <span className="font-bold">JAKA0SMVDUN</span>
                </li>
                <li>
                  MICR Code: <span className="font-bold">182051202</span>
                </li>
                <li>
                  Bank: <span className="font-bold">J&K Bank</span>
                </li>
                <li>
                  Branch: <span className="font-bold">SMVDU </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accommodation px-4 md:px-16 py-5">
          <div className="container md:px-16">
            <h1 className="text-3xl text-orange-500 pb-2">Registration Fees</h1>

            {/* Responsive Table */}
            <div className="overflow-x-auto">
              <table className="table border-collapse w-full text-xl">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-slate-300 p-3 text-center">
                      S.No.
                    </th>
                    <th className="border border-slate-300 p-3 text-center">
                      Participants
                    </th>
                    <th className="border border-slate-300 p-3 text-center">
                      Early Bird
                    </th>
                    <th className="border border-slate-300 p-3 text-center">
                      Late Registration
                    </th>
                    <th className="border border-slate-300 p-3 text-center">
                      On Spot Registration
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 p-3 text-center">
                      1
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Academician/Technician Staff
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Rs. 3000/-
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Rs. 3500/-
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Rs. 3800/-
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-3 text-center">
                      2
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Delegates from R&D /Industry
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Rs. 4000/-
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Rs. 4500/-
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Rs. 4800/-
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-3 text-center">
                      3
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Scholar (Ph.D)
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Rs. 1800/-
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Rs. 2300/-
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Rs. 2500/-
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-3 text-center">
                      4
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Students(UG & PG)
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Rs. 1000/-
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Rs. 1500/-
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Rs. 1700/-
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-3 text-center">
                      5
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      International Delegates
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      $200
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      $250
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      $280
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xl font-bold mt-4">
              *Rs. 500 for National and 50$ for International Delegates those
              who are interested to attend the workshop.
            </p>
            <ul className="text-xl py-5 list-disc">
              <li>Accompanying person will be charged Rs 1500 extra.</li>
              <li>
                Registration fee includes conference kit, lunch, dinner, and
                refreshment.
              </li>
              <li>Details for the Registration are available on the website.</li>
            </ul>
            <p className="text-xl pb-3">
              For Key-note speakers, accommodation shall be arranged by the
              organizers. Accommodation for other delegates of ETBCT-2025 would
              be available on a sharing basis at reasonable prices in hotels at
              Katra. Travel from hotels to the venue will be arranged by
              organizers only in the morning and evening.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
