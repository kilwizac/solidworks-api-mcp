---
type: method
interface: ISafeArrayUtility
member: PutShort
returns: void
parameters:
  -
    name: VariantArray
    type: System.Object
    description: Variant SafeArray of short values
  -
    name: Index
    type: System.Int32
    description: Index of short value
  -
    name: Value
    type: System.Int16
    description: Short value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISafeArrayUtility.GetShort
keywords:
  - putshort
  - isafearrayutility
  - safe
  - array
  - utility
  - put
  - short
  - variant
  - object
  - index
  - int32
  - value
  - int16
  - void
---

# ISafeArrayUtility.PutShort

Adds the specified short value to a Variant SafeArray of short values.

## Signature

```csharp
void PutShort( 
   out System.Object
VariantArray
,
   System.Int32
Index
,
   System.Int16
Value
)
```
## Parameters

- `VariantArray` (System.Object): Variant SafeArray of short values
- `Index` (System.Int32): Index of short value
- `Value` (System.Int16): Short value

## Return Value

Unknown.

## See Also

- `ISafeArrayUtility.GetShort`