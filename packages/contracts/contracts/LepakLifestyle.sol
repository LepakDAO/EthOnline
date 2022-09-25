// SPDX-License-Identifier: agpl-3.0
pragma solidity ^0.8.0;
/**
 * @title Lepak Lifestyle contract
 * @notice This contract performs the core feature of Lepak DAO,
            it allows moderators of the DAO to add LTHH, for more details visit : ""
            it allows users to join certain LTHH by depositing some tokens on the Core.
            In order to participate in lepak lifestyle
 * @author github @jrcarlos2000 - Carlos Ramos
 */

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import {ILepakCore} from "./Interfaces/ILepakCore.sol";

struct LepakStay {
    uint256[] pricesPerRoom;
    string stayURI;
}
contract LepakLifestyle is Ownable{
    
    using Counters for Counters.Counter;
    using SafeMath for uint256;

    event ApprovedForStay(address user, uint256 hh_index);
    event AppliedForStay(address user, uint256 hh_index);
    event StayAdded(string hh_uri);

    Counters.Counter private stayIds;
    ILepakCore public immutable coreContract;

    mapping(uint256 => LepakStay) public stays;
    mapping(uint256 => address[]) public stayApplications;
    mapping(uint256 => mapping(address => bool)) stayApprovals;


    constructor(address _coreAddr){
        coreContract = ILepakCore(_coreAddr);
    }

    modifier onlyMod() {
        require(coreContract.isMod(msg.sender), "caller is not a mod");
        _;
    }

    modifier onlyMember() {
        require(coreContract.isMember(msg.sender),"caller is not a member");
        _;
    }

    /** 
    ** @dev dummy function to see functionality in the front end
    ** @note this function should have a modifier onlymoderator
    **/


    function addStay(string memory stayURI, uint256[] calldata _pricesPerRoom) external {
        stayIds.increment();
        stays[stayIds.current()] = LepakStay(_pricesPerRoom,stayURI);
        emit StayAdded(stayURI);
    }

/**
 * @dev Joining a LTHH is the core function of Lepak Dao
        Users who want to use the coliving spaces must first be members of the dao
        and the they need to pass interview with moderators 
 */

    function applyForStay(uint256 _stayId) external{
        //can only apply to already added stays
        require(_stayId != 0 && _stayId <= stayIds.current(), "this stay id doesnt exist");
        stayApplications[_stayId].push(msg.sender);
        emit AppliedForStay(msg.sender,_stayId);
    }

    function approveForStay(uint256 _stayId, address[] calldata _applicants) external onlyMod{
        uint len = _applicants.length;
        for(uint i=0;i<len;i++){
            require(coreContract.isMember(_applicants[i]), "Applicant is not a member of Lepak");
            stayApprovals[_stayId][_applicants[i]] = true;
            emit ApprovedForStay(_applicants[i],_stayId);
        }
    }

    function isApprovedForStay(uint256 _stayId, address _member) external view returns (bool){
        return stayApprovals[_stayId][_member];
    }

    function getStays() external view returns(LepakStay[] memory) {
        uint256 len = stayIds.current();
        LepakStay[] memory _stays = new LepakStay[](len);
        for(uint256 i=1;i<=len;i++){
            _stays[i-1] = stays[i]; 
        }
        return _stays;
    }
}
