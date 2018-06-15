import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

const App = () => (
  <Wrapper>
    <h1 className="title">Friends List</h1>
    {this.state.friends.map(item => (
    <FriendCard
        key={item.id}
        name={item.name}
        image={item.image}
        occupation={item.occupation}
        location={item.location}
        />
      ))}
      
    </Wrapper>
);

export default App;
