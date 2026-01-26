---
type: method
interface: ISafeArrayUtility
member: PutLong
returns: void
parameters:
  -
    name: VariantArray
    type: System.Object
    description: Variant SafeArray of long values
  -
    name: Index
    type: System.Int32
    description: Index of long value
  -
    name: Value
    type: System.Int32
    description: Long value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISafeArrayUtility.GetLong
keywords:
  - putlong
  - isafearrayutility
  - safe
  - array
  - utility
  - put
  - long
  - variant
  - object
  - index
  - int32
  - value
  - void
---

# ISafeArrayUtility.PutLong

Adds the specified long value to a Variant SafeArray of long values.

## Signature

```csharp
void PutLong( 
   out System.Object
VariantArray
,
   System.Int32
Index
,
   System.Int32
Value
)
```
## Parameters

- `VariantArray` (System.Object): Variant SafeArray of long values
- `Index` (System.Int32): Index of long value
- `Value` (System.Int32): Long value

## Return Value

Unknown.

## See Also

- `ISafeArrayUtility.GetLong`