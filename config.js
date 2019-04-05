var api = 'http://82.146.56.17:18922';
var donationAddress = "";
var blockTargetInterval = 120; // enter the block interval in seconds
var coinUnits = 1000;  // enter in the amount of atomic units in 1 coin, eg. 1000 crums = 1 HLEB
var totalSupply =  120000000000000; // enter the total supply in atomic units
var symbol = 'HLEB'; // enter the coin's ticker
var symbolLong = 'HLEB'; //used in "Coins left to mine". It can either be the same as your "symbol", or a longer/alt version of it. aka XMR = Monero.
var refreshDelay = 30000;

// pools stats by MainCoins
var networkStat = {
 "hleb": [
	["pool.hleb.cc", "http://mine.hleb.cc:8117"]
 ]
};

var networkStat2 = {
    "hleb": [
	[""]
 ]
};
