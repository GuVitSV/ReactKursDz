export const Review = ({user,rating,text})=> {
  return (
  <div>
       <span>{user} ({rating}): </span>{text}
   </div>
  );
}