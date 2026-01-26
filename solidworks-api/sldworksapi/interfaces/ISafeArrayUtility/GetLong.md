---
type: method
interface: ISafeArrayUtility
member: GetLong
returns: System.Int32
parameters:
  -
    name: VariantArray
    type: System.Object
    description: Variant SafeArray of long values
  -
    name: Index
    type: System.Int32
    description: Index of a long value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISafeArrayUtility.PutLong
keywords:
  - getlong
  - isafearrayutility
  - safe
  - array
  - utility
  - long
  - variant
  - object
  - index
  - int32
---

# ISafeArrayUtility.GetLong

Gets the specified long value in a Variant SafeArray of long values.

## Signature

```csharp
System.Int32 GetLong( 
   System.Object
VariantArray
,
   System.Int32
Index
)
```
## Parameters

- `VariantArray` (System.Object): Variant SafeArray of long values
- `Index` (System.Int32): Index of a long value

## Return Value

Long value

## See Also

- `ISafeArrayUtility.PutLong`