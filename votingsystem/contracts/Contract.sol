// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract VotingContract {
    enum Status{reg, voting , complete}
	Status public state;
    uint public candidatesCount;
    address admin;
    
    // custome datatypes
    struct Candidate{
		uint id;
		string name;
		uint voteCount;
		string party;
		uint age;
		string qualification;
	}

	struct Voter{
		bool hasVoted;
		uint vote;
		bool isVarified;
	}

    // mapping candidate and voters
    mapping(uint => Candidate) public candidates; 
    mapping(address => Voter) public voters;

    // custom modifier to check if the sender of the transaction is admin or not
    modifier onlyAdmin(){
		require(msg.sender==admin);
		_;
	}

    // check the state which is valid or not
    modifier validState(Status x){
	    require(state==x);
	    _;
	}

    constructor() {
		admin=msg.sender;
        state=Status.reg;
	}

    // functions
    // changing the state of the system either Registration , Voting or Completed
    function changeState(Status x) onlyAdmin public{
		require(x > state);
        state = x;
    }

    // Get the status for public access view
    function getStatus() public view returns(Status){
        return state ;
    }

    // Adding the candidate only by admin
    function addCandidate(string memory _name , string memory _party , uint _age , string memory _qualification) public onlyAdmin validState(Status.reg){
		candidatesCount++;
		candidates[candidatesCount]=Candidate(candidatesCount, _name, 0, _party, _age, _qualification);
	}

    // varify the voter by the admin
	function voterVerification(address user) public onlyAdmin {
		voters[user].isVarified=true;
	}

    // voters vote function
	function vote(uint _candidateId) public validState(Status.voting){
		require(voters[msg.sender].isVarified);
		require(!voters[msg.sender].hasVoted);
        require(_candidateId > 0 && _candidateId<=candidatesCount);
		candidates[_candidateId].voteCount++;
		voters[msg.sender].hasVoted=true;
		voters[msg.sender].vote=_candidateId;
	}
}