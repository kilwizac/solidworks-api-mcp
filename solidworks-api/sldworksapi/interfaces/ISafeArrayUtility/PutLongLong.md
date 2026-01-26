---
type: method
interface: ISafeArrayUtility
member: PutLongLong
returns: void
parameters:
  -
    name: VariantArray
    type: System.Object
    description: Variant SafeArray of long long values
  -
    name: Index
    type: System.Int32
    description: Index of long long value
  -
    name: Value
    type: System.Int64
    description: Long long value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISafeArrayUtility.GetLongLong
keywords:
  - putlonglong
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
  - int64
  - void
---

# ISafeArrayUtility.PutLongLong

Adds the specified long long value to a Variant SafeArray of long long values.

## Signature

```csharp
void PutLongLong( 
   out System.Object
VariantArray
,
   System.Int32
Index
,
   System.Int64
Value
)
```
## Parameters

- `VariantArray` (System.Object): Variant SafeArray of long long values
- `Index` (System.Int32): Index of long long value
- `Value` (System.Int64): Long long value

## Return Value

Unknown.

## See Also

- `ISafeArrayUtility.GetLongLong`