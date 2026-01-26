---
type: method
interface: ISafeArrayUtility
member: PutDispatch
returns: void
parameters:
  -
    name: VariantArray
    type: System.Object
    description: Variant SafeArray of Dispatch objects
  -
    name: Index
    type: System.Int32
    description: Index of Dispatch object
  -
    name: Value
    type: System.Object
    description: Dispatch object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISafeArrayUtility.GetDispatch
keywords:
  - putdispatch
  - isafearrayutility
  - safe
  - array
  - utility
  - put
  - dispatch
  - variant
  - object
  - index
  - int32
  - value
  - void
---

# ISafeArrayUtility.PutDispatch

Adds the specified Dispatch object to a Variant SafeArray of Dispatch objects.

## Signature

```csharp
void PutDispatch( 
   out System.Object
VariantArray
,
   System.Int32
Index
,
   System.Object
Value
)
```
## Parameters

- `VariantArray` (System.Object): Variant SafeArray of Dispatch objects
- `Index` (System.Int32): Index of Dispatch object
- `Value` (System.Object): Dispatch object

## Return Value

Unknown.

## See Also

- `ISafeArrayUtility.GetDispatch`