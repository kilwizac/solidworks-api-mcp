---
type: method
interface: ISafeArrayUtility
member: GetDouble
returns: System.Double
parameters:
  -
    name: VariantArray
    type: System.Object
    description: Variant SafeArray of double values
  -
    name: Index
    type: System.Int32
    description: Index of double value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISafeArrayUtility.PutDouble
keywords:
  - getdouble
  - isafearrayutility
  - safe
  - array
  - utility
  - double
  - variant
  - object
  - index
  - int32
  - spline
  - points
---

# ISafeArrayUtility.GetDouble

Gets the specified double value in a Variant SafeArray of double values.

## Signature

```csharp
System.Double GetDouble( 
   System.Object
VariantArray
,
   System.Int32
Index
)
```
## Parameters

- `VariantArray` (System.Object): Variant SafeArray of double values
- `Index` (System.Int32): Index of double value

## Return Value

Double value

## Examples

- Get Spline Points (C++) (Get_Spline_Points_Example_CPlusPlus_COM.htm)

## See Also

- `ISafeArrayUtility.PutDouble`