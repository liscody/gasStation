# Solidity API

## UlnConfig

```solidity
struct UlnConfig {
  uint64 confirmations;
  uint8 requiredDVNCount;
  uint8 optionalDVNCount;
  uint8 optionalDVNThreshold;
  address[] requiredDVNs;
  address[] optionalDVNs;
}
```

## IUlnBase

### getUlnConfig

```solidity
function getUlnConfig(address, uint32) external returns (struct UlnConfig)
```

