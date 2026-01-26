---
type: method
interface: ISafeArrayUtility
member: GetBoolean
returns: System.Boolean
parameters:
  -
    name: VariantArray
    type: System.Object
    description: Variant SafeArray of Boolean values
  -
    name: Index
    type: System.Int32
    description: Index of Boolean value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISafeArrayUtility.PutBoolean
keywords:
  - getboolean
  - isafearrayutility
  - safe
  - array
  - utility
  - boolean
  - variant
  - object
  - index
  - int32
---

# ISafeArrayUtility.GetBoolean

Gets the specified Boolean value in a Variant SafeArray of Boolean values.

## Signature

```csharp
System.Boolean GetBoolean( 
   System.Object
VariantArray
,
   System.Int32
Index
)
```
## Parameters

- `VariantArray` (System.Object): Variant SafeArray of Boolean values
- `Index` (System.Int32): Index of Boolean value

## Return Value

Boolean value

## See Also

- `ISafeArrayUtility.PutBoolean`