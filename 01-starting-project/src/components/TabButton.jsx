// export default function Tabbutton({label}) {
//   return(
//     <li>
//       <button>{label}</button>
//     </li>
//   );
// }

// export default function Tabbutton(Props) {
//   return(
//     <li>
//       <button>{Props.label}</button>
//     </li>
//   );
// }

export default function TabButton({children, onSelect}) {

  return(
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}