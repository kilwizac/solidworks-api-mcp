---
type: method
interface: ISafeArrayUtility
member: GetShort
returns: System.Int16
parameters:
  -
    name: VariantArray
    type: System.Object
    description: Variant SafeArray of short values
  -
    name: Index
    type: System.Int32
    description: Index of short value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISafeArrayUtility.PutShort
keywords:
  - getshort
  - isafearrayutility
  - safe
  - array
  - utility
  - short
  - variant
  - object
  - index
  - int32
  - int16
---

# ISafeArrayUtility.GetShort

Gets the specified short value in a Variant SafeArray of short values.

## Signature

```csharp
System.Int16 GetShort( 
   System.Object
VariantArray
,
   System.Int32
Index
)
```
## Parameters

- `VariantArray` (System.Object): Variant SafeArray of short values
- `Index` (System.Int32): Index of short value

## Return Value

Short value

## See Also

- `ISafeArrayUtility.PutShort`