---
type: method
interface: ISafeArrayUtility
member: GetInfo
returns: void
parameters:
  -
    name: VariantArray
    type: System.Object
    description: Variant SafeArray
  -
    name: Count
    type: System.Int32
    description: Number of elements in VariantArray
  -
    name: Type
    type: System.Int32
    description: Data type of elements in VariantArray as defined in swSafeArrayType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISafeArrayUtility.PackVariant
  - ISafeArrayUtility.UnPackVariant
keywords:
  - getinfo
  - isafearrayutility
  - safe
  - array
  - utility
  - info
  - variant
  - object
  - count
  - int32
  - type
  - void
---

# ISafeArrayUtility.GetInfo

Gets the number of elements in a Variant SafeArray and their data type.

## Signature

```csharp
void GetInfo( 
   System.Object
VariantArray
,
   out System.Int32
Count
,
   out System.Int32
Type
)
```
## Parameters

- `VariantArray` (System.Object): Variant SafeArray
- `Count` (System.Int32): Number of elements in VariantArray
- `Type` (System.Int32): Data type of elements in VariantArray as defined in swSafeArrayType_e

## Return Value

Unknown.

## See Also

- `ISafeArrayUtility.PackVariant`
- `ISafeArrayUtility.UnPackVariant`