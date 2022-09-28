const { expect } = require("chai");
const { ethers } = require("hardhat");

// describe("Token Contract",function(){
//   it("Deployment Should Assign the Total supply of the token to the owner",async function(){ //! Case 1
//     const [owner,otherAccounts] = await ethers.getSigners();   //get signers address contract is deploy on
                                                                  //hardhat testnet so it will give his own addresses

//    console.log("address of owner is :",owner);
//    console.log("address of other Accounts is :",otherAccounts);

//     const Token = await ethers.getContractFactory("VavelToken"); //get detail of contract

//     const hardhatToken = await Token.deploy(); // deploy the contract

//     const ownerBalance = await hardhatToken.balanceOf(owner.address); // get balance of owner
   //  console.log("address of owner is :",owner.address);
   //  console.log("balance of Owner is :",ownerBalance);

//     expect(await hardhatToken.totalSupply()).to.equal(ownerBalance); //expect is basically where test case check
//                                                                     //it is basically called condition
//   });

//   it("Should transfer tokens between accounts",async function(){  //! Case 2
//     const [owner,addr1,addr2] = await ethers.getSigners(); //here we need 3 addresses

//    console.log("address of owner is :",owner);
//    console.log("address of addr1 is :",addr1);
//    console.log("address of addr2 is :",addr2);

//     const Token = await ethers.getContractFactory("VavelToken"); // get contract factory

//     const hardhatToken = await Token.deploy(); //deploy token on hardhat

//    await hardhatToken.transfer(addr1.address,10); // transfer tokens from owner address to address 1

//     expect(await hardhatToken.balanceOf(addr1.address)).to.equal(10); // check balance of address 1 with 10

//    await hardhatToken.connect(addr1).transfer(addr2.address,5); // here we transfer address 1 to address 2
//                                                                  //thats why connect function is used
//    expect(await hardhatToken.balanceOf(addr2.address)).to.equal(5); // compare address 2 balance with 5
//   });
// });

describe("Vavel Token", function () {
  let Token;
  let hardhatToken;
  let Owner;
  let addr1;
  let addr2;
  let addrs;
  //beforeEach is a hook which is provided by mocha framework by using it these functions are call on each case
  beforeEach(async function () {
    Token = await ethers.getContractFactory("VavelToken"); //get contract factory
    [Owner, addr1, addr2, ...addrs] = await ethers.getSigners(); //get signers it means addresses
    hardhatToken = await Token.deploy(); //here we deploy our token
  });

  describe("deployment", function () {
    it("Should set the right Owner", async function () {
      //!Test 1 to check is contract set Right Owner
      expect(await hardhatToken.owner()).to.equal(Owner.address); //check is contract make the right owner
    });

    it("should assign the total supply of the token to the owner", async function () {
      //!Test 2 Total Supply Assign to the owner
      const balance = await hardhatToken.balanceOf(Owner.address);
      expect(await hardhatToken.totalSupply()).to.equal(balance);
    });
  });

  describe("Transactions", function () {
    it("Should transfer tokens between accounts", async function () {
      //!Test 3 to check is transferring works or not
      await hardhatToken.transfer(addr1.address, 20);
      const addr1Balance = await hardhatToken.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(20);

      await hardhatToken.connect(addr1).transfer(addr2.address, 10);
      const addr2Balance = await hardhatToken.balanceOf(addr2.address);
      expect(addr2Balance).to.equal(10);
    });

    it("Should fail if sender doest not have enough balance", async function () {
      //!Test 4 if sender does not have enough balance then it will be reverted
      const initialOwnerBalance = await hardhatToken.balanceOf(Owner.address);
      await expect(
        hardhatToken.connect(addr1).transfer(Owner.address, 5)
      ).to.be.revertedWith("ERC20: transfer amount exceeds balance");
      expect(await hardhatToken.balanceOf(Owner.address)).to.equal(
        initialOwnerBalance
      );
    });

    it("Should update balance after transfering", async function () {
      //!Test 5 should update balance after transferring
      await hardhatToken.transfer(addr1.address, 5);
      await hardhatToken.transfer(addr2.address, 10);
      expect(await hardhatToken.balanceOf(addr1.address)).to.equal(5);
      expect(await hardhatToken.balanceOf(addr2.address)).to.equal(10);
    });
  });
});
