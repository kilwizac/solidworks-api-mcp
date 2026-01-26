---
type: method
interface: ISafeArrayUtility
member: PutBoolean
returns: void
parameters:
  -
    name: VariantArray
    type: System.Object
    description: Variant SafeArray of Boolean values
  -
    name: Index
    type: System.Int32
    description: Index of Boolean value
  -
    name: Value
    type: System.Boolean
    description: Boolean value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISafeArrayUtility.GetBoolean
keywords:
  - putboolean
  - isafearrayutility
  - safe
  - array
  - utility
  - put
  - boolean
  - variant
  - object
  - index
  - int32
  - value
  - void
---

# ISafeArrayUtility.PutBoolean

Adds the specified Boolean value to a Variant SafeArray of Boolean values.

## Signature

```csharp
void PutBoolean( 
   out System.Object
VariantArray
,
   System.Int32
Index
,
   System.Boolean
Value
)
```
## Parameters

- `VariantArray` (System.Object): Variant SafeArray of Boolean values
- `Index` (System.Int32): Index of Boolean value
- `Value` (System.Boolean): Boolean value

## Return Value

Unknown.

## See Also

- `ISafeArrayUtility.GetBoolean`