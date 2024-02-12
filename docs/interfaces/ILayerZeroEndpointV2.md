# Solidity API

## MessagingParams

```solidity
struct MessagingParams {
  uint32 dstEid;
  bytes32 receiver;
  bytes message;
  bytes options;
  bool payInLzToken;
}
```

## MessagingReceipt

```solidity
struct MessagingReceipt {
  bytes32 guid;
  uint64 nonce;
  struct MessagingFee fee;
}
```

## MessagingFee

```solidity
struct MessagingFee {
  uint256 nativeFee;
  uint256 lzTokenFee;
}
```

## Origin

```solidity
struct Origin {
  uint32 srcEid;
  bytes32 sender;
  uint64 nonce;
}
```

## ILayerZeroEndpointV2

### PacketSent

```solidity
event PacketSent(bytes encodedPayload, bytes options, address sendLibrary)
```

### PacketVerified

```solidity
event PacketVerified(struct Origin origin, address receiver, bytes32 payloadHash)
```

### PacketDelivered

```solidity
event PacketDelivered(struct Origin origin, address receiver)
```

### LzReceiveAlert

```solidity
event LzReceiveAlert(address receiver, address executor, struct Origin origin, bytes32 guid, uint256 gas, uint256 value, bytes message, bytes extraData, bytes reason)
```

### LzTokenSet

```solidity
event LzTokenSet(address token)
```

### DelegateSet

```solidity
event DelegateSet(address sender, address delegate)
```

### quote

```solidity
function quote(struct MessagingParams _params, address _sender) external view returns (struct MessagingFee)
```

### send

```solidity
function send(struct MessagingParams _params, address _refundAddress) external payable returns (struct MessagingReceipt)
```

### verify

```solidity
function verify(struct Origin _origin, address _receiver, bytes32 _payloadHash) external
```

### verifiable

```solidity
function verifiable(struct Origin _origin, address _receiver) external view returns (bool)
```

### initializable

```solidity
function initializable(struct Origin _origin, address _receiver) external view returns (bool)
```

### lzReceive

```solidity
function lzReceive(struct Origin _origin, address _receiver, bytes32 _guid, bytes _message, bytes _extraData) external payable
```

### clear

```solidity
function clear(address _oapp, struct Origin _origin, bytes32 _guid, bytes _message) external
```

### setLzToken

```solidity
function setLzToken(address _lzToken) external
```

### lzToken

```solidity
function lzToken() external view returns (address)
```

### nativeToken

```solidity
function nativeToken() external view returns (address)
```

### setDelegate

```solidity
function setDelegate(address _delegate) external
```

