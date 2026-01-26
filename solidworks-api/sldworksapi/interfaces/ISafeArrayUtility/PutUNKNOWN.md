---
type: method
interface: ISafeArrayUtility
member: PutUNKNOWN
returns: void
parameters:
  -
    name: VariantArray
    type: System.Object
    description: Variant SafeArray of UNKNOWN objects
  -
    name: Index
    type: System.Int32
    description: Index of UNKNOWN object
  -
    name: Value
    type: System.Object
    description: UNKNOWN object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISafeArrayUtility.GetUNKNOWN
keywords:
  - putunknown
  - isafearrayutility
  - safe
  - array
  - utility
  - put
  - unknown
  - variant
  - object
  - index
  - int32
  - value
  - void
---

# ISafeArrayUtility.PutUNKNOWN

Adds the specified UNKNOWN object to a Variant SafeArray of UNKNOWN objects.

## Signature

```csharp
void PutUNKNOWN( 
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

- `VariantArray` (System.Object): Variant SafeArray of UNKNOWN objects
- `Index` (System.Int32): Index of UNKNOWN object
- `Value` (System.Object): UNKNOWN object

## Return Value

Unknown.

## See Also

- `ISafeArrayUtility.GetUNKNOWN`