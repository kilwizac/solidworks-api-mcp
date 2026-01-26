---
type: method
interface: ISafeArrayUtility
member: GetUNKNOWN
returns: System.Object
parameters:
  -
    name: VariantArray
    type: System.Object
    description: Variant SafeArray of UNKNOWN objects
  -
    name: Index
    type: System.Int32
    description: Index of UNKNOWN object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISafeArrayUtility.PutUNKNOWN
keywords:
  - getunknown
  - isafearrayutility
  - safe
  - array
  - utility
  - unknown
  - variant
  - object
  - index
  - int32
---

# ISafeArrayUtility.GetUNKNOWN

Gets the specified UNKNOWN object in a Variant SafeArray of UNKNOWN objects.

## Signature

```csharp
System.Object GetUNKNOWN( 
   System.Object
VariantArray
,
   System.Int32
Index
)
```
## Parameters

- `VariantArray` (System.Object): Variant SafeArray of UNKNOWN objects
- `Index` (System.Int32): Index of UNKNOWN object

## Return Value

UNKNOWN object

## See Also

- `ISafeArrayUtility.PutUNKNOWN`