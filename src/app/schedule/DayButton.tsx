type DayButtonProps = {
  titleText: string;
  Day: string;
  Date: string;
  selected: boolean;
    onDayButtonClick: () => void;
};

export default function DayButton(props: DayButtonProps) {
  // Determine the class names based on the 'selected' prop
  const bgColor = props.selected
    ? "bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot"
    : "bg-gray-200";
  const textColor = props.selected ? "text-white" : "text-black";
  const dotColor = props.selected ? "bg-white" : "bg-transparent";

return (
    <section
      className="flex flex-col justify-center items-center rounded-lg hover:cursor-pointer transition-all ease-in-out duration-1000"
      onClick={props.onDayButtonClick}
    >
      {/* Text for day of the conference, for example: 'Day One' */}
      <span className={`text-[16px] md:text-[24px] font-semibold text-gray-600 transition-all ease-in-out duration-1000`}>
        {props.titleText}
      </span>

      {/* Pill Button with Day and Date */}
      <p
        className={`flex flex-col items-center justify-center rounded-t-full rounded-b-full font-medium py-3 px-8 md:px-10 max-w-[60px] ${bgColor} transition duration-300`}
      >
        <span className={`text-[20px] md:text-[24px] ${textColor} transition-all ease-in-out duration-1000`}>
          {props.Day}
        </span>
        <span className={`text-[24px] md:text-[32px] -mt-1 mb-1 ${textColor} transition-all ease-in-out duration-1000`}>
          {props.Date}
        </span>

        {/* Little dot that shows the user whether the pill is selected or not */}
        <span className={`h-2 w-2 rounded-full ${dotColor} transition-all ease-in-out duration-1000`}></span>
      </p>
    </section>
  );
}


//   // A solid fallback background color similar to the gradient's end color
//   const fallbackBgColor = props.selected ? 'bg-roseQuartz' : 'bg-gray-200'; 

//   return (
//     <section
//       className={`relative flex flex-col justify-center items-center rounded-lg hover:cursor-pointer transition duration-[2000ms] ${fallbackBgColor}`}
//       onClick={props.onDayButtonClick}
//     >
//       {/* Overlay for smooth transition (Initially fully transparent) */}
//       <div className={`absolute inset-0 rounded-lg transition-opacity duration-[2000ms] ${props.selected ? 'opacity-100 bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot' : 'opacity-0'}`}></div>

//       {/* Text for day of the conference, for example: 'Day One' */}
//       <span className={`relative z-10 text-[16px] md:text-[24px] font-semibold text-gray-600 transition duration-[2000ms]`}>
//         {props.titleText}
//       </span>

//       {/* Pill Button with Day and Date */}
//       <p className="relative z-10 flex flex-col items-center justify-center rounded-t-full rounded-b-full font-medium py-3 px-8 md:px-10 max-w-[60px] transition duration-[2000ms]">
//         <span className={`text-[20px] md:text-[24px] ${props.selected ? 'text-white' : 'text-black'} transition duration-[2000ms]`}>
//           {props.Day}
//         </span>
//         <span className={`text-[24px] md:text-[32px] -mt-1 mb-1 ${props.selected ? 'text-white' : 'text-black'} transition duration-[2000ms]`}>
//           {props.Date}
//         </span>

//         {/* Little dot that shows the user whether the pill is selected or not */}
//         <span className={`h-2 w-2 rounded-full ${props.selected ? 'bg-white' : 'bg-transparent'} transition duration-[2000ms]`}></span>
//       </p>
//     </section>
//   );
