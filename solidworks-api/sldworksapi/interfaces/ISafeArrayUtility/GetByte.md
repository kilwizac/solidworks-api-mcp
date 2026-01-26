---
type: method
interface: ISafeArrayUtility
member: GetByte
returns: System.Byte
parameters:
  -
    name: VariantArray
    type: System.Object
    description: Variant SafeArray of byte values
  -
    name: Index
    type: System.Int32
    description: Index of byte value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISafeArrayUtility.PutByte
keywords:
  - getbyte
  - isafearrayutility
  - safe
  - array
  - utility
  - byte
  - variant
  - object
  - index
  - int32
  - persistent
  - reference
  - id
---

# ISafeArrayUtility.GetByte

Gets the specified byte value in a Variant SafeArray of byte values.

## Signature

```csharp
System.byte GetByte( 
   System.Object
VariantArray
,
   System.Int32
Index
)
```
## Parameters

- `VariantArray` (System.Object): Variant SafeArray of byte values
- `Index` (System.Int32): Index of byte value

## Return Value

Byte value

## Examples

- Get Object's Persistent Reference ID (C++) (Get_Object_s_Persistent_Reference_ID_Example_CPlusPlus_COM.htm)

## See Also

- `ISafeArrayUtility.PutByte`