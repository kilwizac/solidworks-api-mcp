---
type: method
interface: ISafeArrayUtility
member: GetLongLong
returns: System.Int64
parameters:
  -
    name: VariantArray
    type: System.Object
    description: Variant SafeArray of long long values
  -
    name: Index
    type: System.Int32
    description: Index of long long value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISafeArrayUtility.PutLongLong
keywords:
  - getlonglong
  - isafearrayutility
  - safe
  - array
  - utility
  - long
  - variant
  - object
  - index
  - int32
  - int64
---

# ISafeArrayUtility.GetLongLong

Gets the specified long long value in a Variant SafeArray of long long values.

## Signature

```csharp
System.Int64 GetLongLong( 
   System.Object
VariantArray
,
   System.Int32
Index
)
```
## Parameters

- `VariantArray` (System.Object): Variant SafeArray of long long values
- `Index` (System.Int32): Index of long long value

## Return Value

Long long value

## See Also

- `ISafeArrayUtility.PutLongLong`