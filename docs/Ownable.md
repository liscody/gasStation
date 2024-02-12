# Solidity API

## Ownable

Simple single owner authorization mixin.

_Note:
This implementation does NOT auto-initialize the owner to `msg.sender`.
You MUST call the `_initializeOwner` in the constructor / initializer.

While the ownable portion follows
[EIP-173](https://eips.ethereum.org/EIPS/eip-173) for compatibility,
the nomenclature for the 2-step ownership handover may be unique to this codebase._

### Unauthorized

```solidity
error Unauthorized()
```

_The caller is not authorized to call the function._

### NewOwnerIsZeroAddress

```solidity
error NewOwnerIsZeroAddress()
```

_The `newOwner` cannot be the zero address._

### NoHandoverRequest

```solidity
error NoHandoverRequest()
```

_The `pendingOwner` does not have a valid handover request._

### AlreadyInitialized

```solidity
error AlreadyInitialized()
```

_Cannot double-initialize._

### OwnershipTransferred

```solidity
event OwnershipTransferred(address oldOwner, address newOwner)
```

_The ownership is transferred from `oldOwner` to `newOwner`.
This event is intentionally kept the same as OpenZeppelin's Ownable to be
compatible with indexers and [EIP-173](https://eips.ethereum.org/EIPS/eip-173),
despite it not being as lightweight as a single argument event._

### OwnershipHandoverRequested

```solidity
event OwnershipHandoverRequested(address pendingOwner)
```

_An ownership handover to `pendingOwner` has been requested._

### OwnershipHandoverCanceled

```solidity
event OwnershipHandoverCanceled(address pendingOwner)
```

_The ownership handover to `pendingOwner` has been canceled._

### _OWNERSHIP_TRANSFERRED_EVENT_SIGNATURE

```solidity
uint256 _OWNERSHIP_TRANSFERRED_EVENT_SIGNATURE
```

_`keccak256(bytes("OwnershipTransferred(address,address)"))`._

### _OWNERSHIP_HANDOVER_REQUESTED_EVENT_SIGNATURE

```solidity
uint256 _OWNERSHIP_HANDOVER_REQUESTED_EVENT_SIGNATURE
```

_`keccak256(bytes("OwnershipHandoverRequested(address)"))`._

### _OWNERSHIP_HANDOVER_CANCELED_EVENT_SIGNATURE

```solidity
uint256 _OWNERSHIP_HANDOVER_CANCELED_EVENT_SIGNATURE
```

_`keccak256(bytes("OwnershipHandoverCanceled(address)"))`._

### _OWNER_SLOT

```solidity
bytes32 _OWNER_SLOT
```

_The owner slot is given by:
`bytes32(~uint256(uint32(bytes4(keccak256("_OWNER_SLOT_NOT")))))`.
It is intentionally chosen to be a high value
to avoid collision with lower slots.
The choice of manual storage layout is to enable compatibility
with both regular and upgradeable contracts._

### _HANDOVER_SLOT_SEED

```solidity
uint256 _HANDOVER_SLOT_SEED
```

The ownership handover slot of `newOwner` is given by:
```
    mstore(0x00, or(shl(96, user), _HANDOVER_SLOT_SEED))
    let handoverSlot := keccak256(0x00, 0x20)
```
It stores the expiry timestamp of the two-step ownership handover.

### _guardInitializeOwner

```solidity
function _guardInitializeOwner() internal pure virtual returns (bool guard)
```

_Override to return true to make `_initializeOwner` prevent double-initialization._

### _initializeOwner

```solidity
function _initializeOwner(address newOwner) internal virtual
```

_Initializes the owner directly without authorization guard.
This function must be called upon initialization,
regardless of whether the contract is upgradeable or not.
This is to enable generalization to both regular and upgradeable contracts,
and to save gas in case the initial owner is not the caller.
For performance reasons, this function will not check if there
is an existing owner._

### _setOwner

```solidity
function _setOwner(address newOwner) internal virtual
```

_Sets the owner directly without authorization guard._

### _checkOwner

```solidity
function _checkOwner() internal view virtual
```

_Throws if the sender is not the owner._

### _ownershipHandoverValidFor

```solidity
function _ownershipHandoverValidFor() internal view virtual returns (uint64)
```

_Returns how long a two-step ownership handover is valid for in seconds.
Override to return a different value if needed.
Made internal to conserve bytecode. Wrap it in a public function if needed._

### transferOwnership

```solidity
function transferOwnership(address newOwner) public payable virtual
```

_Allows the owner to transfer the ownership to `newOwner`._

### renounceOwnership

```solidity
function renounceOwnership() public payable virtual
```

_Allows the owner to renounce their ownership._

### requestOwnershipHandover

```solidity
function requestOwnershipHandover() public payable virtual
```

_Request a two-step ownership handover to the caller.
The request will automatically expire in 48 hours (172800 seconds) by default._

### cancelOwnershipHandover

```solidity
function cancelOwnershipHandover() public payable virtual
```

_Cancels the two-step ownership handover to the caller, if any._

### completeOwnershipHandover

```solidity
function completeOwnershipHandover(address pendingOwner) public payable virtual
```

_Allows the owner to complete the two-step ownership handover to `pendingOwner`.
Reverts if there is no existing ownership handover requested by `pendingOwner`._

### owner

```solidity
function owner() public view virtual returns (address result)
```

_Returns the owner of the contract._

### ownershipHandoverExpiresAt

```solidity
function ownershipHandoverExpiresAt(address pendingOwner) public view virtual returns (uint256 result)
```

_Returns the expiry timestamp for the two-step ownership handover to `pendingOwner`._

### onlyOwner

```solidity
modifier onlyOwner()
```

_Marks a function as only callable by the owner._

