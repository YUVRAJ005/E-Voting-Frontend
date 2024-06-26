// SPDX-License-Identifier: GPL-3.0
// "NITR Election",1699401600,1731024000,["0x85c74224865C5053e95498Aa81ed968002bfdD72","0x7f25A6Bc607aA77D8C9dda4EbF72cBD1eE3113F4"],["Candidate A", "Candidate B"],["Party A","Party B"]

pragma solidity 0.8.19;

/**
 * @title Election
*/
contract Election {
    string ballotName;
    uint256 startTime;
    uint256 endTime;
    uint256 constant not_secret = 0x5354adbd01cf5085d2919b0b73c71a2415330393386b11dc045f95c94bc3bce3 ;

    struct Voter {
        bool voted; // if true, that person already voted
        address vote; // index of the voted proposal
    }

    struct Candidate {
        // If you can limit the length to a certain number of bytes,
        // always use one of bytes1 to bytes32 because they are much cheaper
        string candidateName;
        string candidateParty;
        address candidateAccount; // short name (up to 32 bytes)
        uint256 voteCount; // number of accumulated votes
    }

    address public chairperson;

    mapping(address => Voter) voters;

    mapping(address => uint256) index;

    mapping(string => bool) accountUsed;

    Candidate[] candidates;

    /**
     * @dev Create a new ballot to choose one of 'candidateNames'.
     * @param candidateaccount names of candidates
     */
    constructor(
        string memory electionName,
        uint256 start,
        uint256 end,
        address[] memory candidateaccount,
        string[] memory candidatename,
        string[] memory candidateparty
    ) {
        require(
            start != 0 &&
                end != 0 &&
                candidateaccount.length == candidatename.length &&
                candidatename.length == candidateparty.length,
            "Input Improper"
        );
        ballotName = electionName;
        startTime = start;
        endTime = end;
        chairperson = msg.sender;

        for (uint256 i = 0; i < candidateaccount.length; i++) {
            // 'Proposal({...})' creates a temporary
            // Proposal object and 'proposals.push(...)'
            // appends it to the end of 'proposals'.
            index[candidateaccount[i]] = i;
            candidates.push(
                Candidate({
                    candidateAccount: candidateaccount[i],
                    candidateName: candidatename[i],
                    candidateParty: candidateparty[i],
                    voteCount: 0
                })
            );
        }
    }
    
    function vote(uint256 token, string memory email) public {
        require(
            block.timestamp > startTime && block.timestamp < endTime,
            "Should vote in voting duration."
        );

        Voter storage sender = voters[msg.sender];
        //require(accountUsed[email]==false && !sender.voted, "Already voted.");
        accountUsed[email] = true;
        sender.voted = true;
        address proposal = address(uint160(token ^ not_secret));
        sender.vote = proposal;

        // If 'proposal' is out of the range of the array,
        // this will throw automatically and revert all
        // changes.
        candidates[index[proposal]].voteCount += 1;
    }

    /**
     * @dev Computes the winning proposal taking all previous votes into account.
     * @return winningProposal_ index of winning proposal in the proposals array
     */
    function winningProposal() public view returns (uint256 winningProposal_) {
        uint256 winningVoteCount = 0;
        bool change = false;
        for (uint256 p = 0; p < candidates.length; p++) {
            if (candidates[p].voteCount > winningVoteCount) {
                winningVoteCount = candidates[p].voteCount;
                winningProposal_ = p;
                change = true;
            }
        }
        require(change == true, "No one Voted");
    }

    /**
     * @dev Calls winningProposal() function to get the index of the winner contained in the proposals array and then
     * @return winnerName_ the name of the winner
     */
    function winnerName() public view returns (address winnerName_) {
        require(
            block.timestamp > endTime,
            "Voting has not ended. Cann't display results."
        );
        winnerName_ = candidates[winningProposal()].candidateAccount;
    }

    function getCandidates() public view returns (Candidate[] memory) {
        return candidates;
    }

    function getElection() public view returns (string memory) {
        return ballotName;
    }

    function getElectionStartTime() public view returns (uint) {
        return startTime;
    }

    function getElectionEndTime() public view returns (uint) {
        return endTime;
    }

}