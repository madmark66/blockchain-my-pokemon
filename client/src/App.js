import React, { Component, useState } from "react";
import Ethermon from "./contracts/Ethermon.json";
import getWeb3 from "./getWeb3";

import "./App.css";

function App() { 

let loadData = async () => {  
  // Get network provider and web3 instance.
  const web3 = await getWeb3();

  // Use web3 to get the user's accounts.
  const accounts = await web3.eth.getAccounts();

  // Get the contract instance.
  const networkId = await web3.eth.net.getId();
  const deployedNetwork = Ethermon.networks[networkId];
  const instance = new web3.eth.Contract(
    Ethermon.abi,
    deployedNetwork && deployedNetwork.address,
  );
  //var instance = await Ethermon.deployed();
  // Set web3, accounts, and contract to the state, and then proceed with an
  // example of interacting with the contract's methods.
  
  //const [web3, setWeb3] = useState(web3);
  //const [contract, setContract] = useState(instance);

};

loadData();

const [values, setValues] = useState({
  name: "",
  address: "",
});

const handleNameChange = (event) => {setValues({...values, name : event.target.value})}
const handleAddressChange = (event) => {setValues({...values, address : event.target.value})}

let handleSubmit = (event) => {
  event.preventDefault();
  instance.createNewMonster(values.name, values.address);
}
  
    return (
        <div>

          <div>
            <h1>You are the game owner, you can create new monsters and give to players</h1>
              <form onSubmit={handleSubmit}>
                  <label>
                    Name for New Monster:
                    <input type="text" name="name" value={values.name}
            onChange={handleNameChange}/>
                  </label>

                  <label>
                    Address of player who you give New Monster to :
                    <input type="text" name="address" value={values.address}
            onChange={handleAddressChange}/>
                  </label>

                  <input type="submit" value="Create Monster" />
              </form> 
          </div>

          <div>
            <h1>My ERC721 Pokemon Game1</h1>
            <p>you have monster:</p>
            //To show all of monsters that player have by detecting their address
              <h3>name:{} level:{}</h3> 
          </div>

          <div>
            <form>
            //player to select one monster from what he owns
              <p>if you want to attack other monster, select your fighter !</p> 
              <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>

              <p>Pick your opponent !</p>
              //select opponent's address and pick one of his monsters to attack
              <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <button>Attack now!!</button>
            </form>
          </div>
        </div>

    );
}


export default App;
