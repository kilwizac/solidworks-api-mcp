---
type: method
interface: ISafeArrayUtility
member: PutByte
returns: void
parameters:
  -
    name: VariantArray
    type: System.Object
    description: Variant SafeArray of byte values
  -
    name: Index
    type: System.Int32
    description: Index of byte value
  -
    name: Value
    type: System.Byte
    description: Byte value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISafeArrayUtility.GetByte
keywords:
  - putbyte
  - isafearrayutility
  - safe
  - array
  - utility
  - put
  - byte
  - variant
  - object
  - index
  - int32
  - value
  - void
---

# ISafeArrayUtility.PutByte

Adds the specified byte value to a Variant SafeArray of byte values.

## Signature

```csharp
void PutByte( 
   out System.Object
VariantArray
,
   System.Int32
Index
,
   System.byte
Value
)
```
## Parameters

- `VariantArray` (System.Object): Variant SafeArray of byte values
- `Index` (System.Int32): Index of byte value
- `Value` (System.Byte): Byte value

## Return Value

Unknown.

## See Also

- `ISafeArrayUtility.GetByte`