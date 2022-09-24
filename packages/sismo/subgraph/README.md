# Subgraph for LepakDAO member 
This is the subgraph for LepakDAO member.

## About this subgraph
1. Service: The Graph-Hosted Service
2. Subgraph Name: lepak-dao-member-2
3. Network: Matic (Polygon)
4. Queries(HTTP): https://api.thegraph.com/subgraphs/name/zengzengzenghuy/lepak-dao-member-2
5. Smart Contract Address: "0x086636172bAB74d87Ce89BE93660Ea105eC249B9"
6. Smart Contract Name: LepakCore.sol
7. Smart Contract Event: NewMember(address member,uint256 fee)

### Sample query
```
{
  members {
    id
    count
    member
    fee
  }
}
```