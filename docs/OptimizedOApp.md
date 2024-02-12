# Solidity API

## OptimizedOApp

### endpoint

```solidity
contract ILayerZeroEndpointV2 endpoint
```

### peers

```solidity
mapping(uint32 => bytes32) peers
```

### gasLimitLookup

```solidity
mapping(uint32 => uint128) gasLimitLookup
```

### defaultGasLimit

```solidity
uint128 defaultGasLimit
```

### constructor

```solidity
constructor(address _owner, address _endpoint) internal
```

### nextNonce

```solidity
function nextNonce(uint32, bytes32) public pure virtual returns (uint64 nonce)
```

### allowInitializePath

```solidity
function allowInitializePath(struct Origin origin) public view virtual returns (bool)
```

### lzReceive

```solidity
function lzReceive(struct Origin, bytes32, bytes, address, bytes) external pure
```

### _lzSend

```solidity
function _lzSend(uint32 _dstEid, bytes _message, bytes _options, uint256 _nativeFee, address _refundAddress) internal virtual returns (struct MessagingReceipt receipt)
```

### getPeer

```solidity
function getPeer(uint32 _dstEid) internal view returns (bytes32)
```

### getGasLimit

```solidity
function getGasLimit(uint32 _dstEid) internal view returns (uint128)
```

### setPeers

```solidity
function setPeers(uint32[] _remoteEids, bytes32[] _remoteAddresses) external
```

### setGasLimit

```solidity
function setGasLimit(uint32[] _remoteEids, uint128[] _gasLimits) external
```

### setDefaultGasLimit

```solidity
function setDefaultGasLimit(uint128 _defaultGasLimit) external
```

### setDelegate

```solidity
function setDelegate(address _delegate) external
```

### setUlnConfigs

```solidity
function setUlnConfigs(address _lib, uint64 confirmations, uint32[] eids, address dvn) external
```

