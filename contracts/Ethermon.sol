// SPDX-License-Identifier: MIT

pragma solidity >0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";
//import "https://github.com/athiwatp/openzeppelin-solidity/blob/master/contracts/token/ERC721/ERC721Full.sol";
//import "node_modules/openzeppelin-solidity-master/contracts/token/ERC721/ERC721Full.sol";

contract Ethermon is ERC721Full{
    
    address gameOwner;

    constructor(string memory _name, string memory _symbol) 
       ERC721Full ( _name ,  _symbol) public {
           gameOwner = msg.sender;
       } 

    mapping(uint => address) public owners;
       
    struct Monster {
        string name;
        uint level;
    } 
    
    Monster[] public monsters;

    function createNewMonster(string memory _name, address _to) public {
        require(msg.sender == gameOwner, "Only game owner can create new monsters");
        uint id = monsters.length;
        monsters.push(Monster(_name, 1));       
        _mint(_to, id);        
    }
    
/////////////////////////////////////////
}

