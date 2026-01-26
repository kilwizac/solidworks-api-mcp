---
type: method
interface: ISafeArrayUtility
member: PutDouble
returns: void
parameters:
  -
    name: VariantArray
    type: System.Object
    description: Variant SafeArray of double values
  -
    name: Index
    type: System.Int32
    description: Index of double value
  -
    name: Value
    type: System.Double
    description: Double value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISafeArrayUtility.GetDouble
keywords:
  - putdouble
  - isafearrayutility
  - safe
  - array
  - utility
  - put
  - double
  - variant
  - object
  - index
  - int32
  - value
  - void
---

# ISafeArrayUtility.PutDouble

Adds the specified double value to a Variant SafeArray of double values.

## Signature

```csharp
void PutDouble( 
   out System.Object
VariantArray
,
   System.Int32
Index
,
   System.Double
Value
)
```
## Parameters

- `VariantArray` (System.Object): Variant SafeArray of double values
- `Index` (System.Int32): Index of double value
- `Value` (System.Double): Double value

## Return Value

Unknown.

## See Also

- `ISafeArrayUtility.GetDouble`