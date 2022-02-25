import React from "react";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";


function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}


export default withRoomConsumer(RoomContainer);







// function RoomContainer() {

//   return (
//     <RoomConsumer>
//       {
//         value => {
//           const { loading, sortedRooms, rooms } = value
//           if (loading) {
//             return <Loading />;
//           }
//           return (
//             <>
//               <h4>hello from rooom container</h4>
//               <RoomFilter rooms={rooms} />
//               <RoomList rooms={sortedRooms} />
//             </>
//           )

//         }
//       }

//     </RoomConsumer>

//   )
// }

// export default RoomContainer