# HLEBCoin-Blockchain-Explorer
Block explorer for HLEBCoin CryptoNote based cryptocurrency.

#### Installation

1) It takes data from daemon hlebd. It should be accessible from the Internet. Run hlebd with open port as follows:
```bash
./hlebd --enable-cors="*" --enable-blockexplorer --rpc-bind-ip=0.0.0.0 --rpc-bind-port=18922
```
2) Just upload to your website and change 'api' variable in config.js to point to your daemon.


### Development
Devs:
    @devopsralf

Donate: [HLEB] <insert dono address in the future>

### Note

A lot of this code is from the great Karbovanets/Karbowanec-Blockchain-Explorer. Was forked from TurtleCoin-Blockchain-Explorer.
