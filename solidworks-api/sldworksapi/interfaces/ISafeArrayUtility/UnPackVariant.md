---
type: method
interface: ISafeArrayUtility
member: UnPackVariant
returns: System.Int32
parameters:
  -
    name: VariantArray
    type: System.Object
    description: Variant SafeArray
  -
    name: Count
    type: System.Int32
    description: Number of native SOLIDWORKS Dispatch-based objects of the same data type
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISafeArrayUtility.GetInfo
  - ISafeArrayUtility.PackVariant
keywords:
  - unpackvariant
  - isafearrayutility
  - safe
  - array
  - utility
  - un
  - pack
  - variant
  - object
  - count
  - int32
---

# ISafeArrayUtility.UnPackVariant

Unpacks the specified packed Variant SafeArray to native SOLIDWORKS Dispatch-based objects of the same data type.

## Signature

```csharp
System.Int32 UnPackVariant( 
   System.Object
VariantArray
,
   System.Int32
Count
)
```
## Parameters

- `VariantArray` (System.Object): Variant SafeArray
- `Count` (System.Int32): Number of native SOLIDWORKS Dispatch-based objects of the same data type

## Return Value

Native SOLIDWORKS Dispatch-based objects of the same data type

## See Also

- `ISafeArrayUtility.GetInfo`
- `ISafeArrayUtility.PackVariant`