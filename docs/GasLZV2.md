# Solidity API

## GasLZV2

### constructor

```solidity
constructor(address _owner, address _endpoint) public
```

### SentMessages

```solidity
event SentMessages(uint32[] eids, bytes[] messages, uint256 value, uint256 fee, address from)
```

### SentDeposits

```solidity
event SentDeposits(uint256[] params, address to, uint256 value, uint256 fee, address from)
```

### sendMessages

```solidity
function sendMessages(uint32[] _dstEids, bytes[] _messages) external payable
```

### sendDeposits

```solidity
function sendDeposits(uint256[] _depositParams, address _to) external payable
```

### _sendMessage

```solidity
function _sendMessage(uint32 _dstEid, bytes _message) internal returns (uint256 fee)
```

### _sendDeposit

```solidity
function _sendDeposit(uint32 _dstEid, uint128 _amount, address _to) internal returns (uint256 fee)
```

### createReceiveOption

```solidity
function createReceiveOption(uint32 _dstEid) public view returns (bytes)
```

### createNativeDropOption

```solidity
function createNativeDropOption(uint32 _dstEid, uint128 _nativeAmount, address _to) public view returns (bytes)
```

### estimateFees

```solidity
function estimateFees(uint32[] _dstEids, bytes[] _messages, bytes[] _options) external view returns (uint256[] nativeFees)
```

### quote

```solidity
function quote(uint32 _dstEid, bytes _message, bytes _options) public view returns (uint256 nativeFee)
```

### withdraw

```solidity
function withdraw(address token, uint256 amount) external
```

### receive

```solidity
receive() external payable
```

