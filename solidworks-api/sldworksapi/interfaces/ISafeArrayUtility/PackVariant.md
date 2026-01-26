---
type: method
interface: ISafeArrayUtility
member: PackVariant
returns: void
parameters:
  -
    name: VariantArray
    type: System.Object
    description: Packed Variant SafeArray
  -
    name: Count
    type: System.Int32
    description: Number of native SOLIDWORKS Dispatch-based objects of Type
  -
    name: Type
    type: System.Int32
    description: Data type as defined in swSafeArrayType_e
  -
    name: Data
    type: System.Int32
    description: Native SOLIDWORKS Dispatch-based objects of Type
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISafeArrayUtility.GetInfo
  - ISafeArrayUtility.UnPackVariant
keywords:
  - packvariant
  - isafearrayutility
  - safe
  - array
  - utility
  - pack
  - variant
  - object
  - count
  - int32
  - type
  - data
  - void
  - scale
  - factor
  - each
  - model
  - view
---

# ISafeArrayUtility.PackVariant

Packs the specified native SOLIDWORKS Dispatch-based objects of the same data type into a Variant SafeArray and returns that packed Variant SafeArray to use in methods requiring passing a packed Variant SafeArray.

## Signature

```csharp
void PackVariant( 
   out System.Object
VariantArray
,
   System.Int32
Count
,
   System.Int32
Type
,
   ref System.Int32
Data
)
```
## Parameters

- `VariantArray` (System.Object): Packed Variant SafeArray
- `Count` (System.Int32): Number of native SOLIDWORKS Dispatch-based objects of Type
- `Type` (System.Int32): Data type as defined in swSafeArrayType_e
- `Data` (System.Int32): Native SOLIDWORKS Dispatch-based objects of Type

## Return Value

Unknown.

## Examples

- Get Scale Factor of Each Model View (C++) (Get_Scale_of_Each_Model_View_Example_CPlusPlus_COM.htm)

## See Also

- `ISafeArrayUtility.GetInfo`
- `ISafeArrayUtility.UnPackVariant`