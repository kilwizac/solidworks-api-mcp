---
type: method
interface: ISafeArrayUtility
member: GetDispatch
returns: System.Object
parameters:
  -
    name: VariantArray
    type: System.Object
    description: Variant SafeArray of Dispatch objects
  -
    name: Index
    type: System.Int32
    description: Index of Dispatch object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISafeArrayUtility.PutDispatch
keywords:
  - getdispatch
  - isafearrayutility
  - safe
  - array
  - utility
  - dispatch
  - variant
  - object
  - index
  - int32
  - scale
  - factor
  - each
  - model
  - view
---

# ISafeArrayUtility.GetDispatch

Gets the specified Dispatch object in a Variant SafeArray of Dispatch objects.

## Signature

```csharp
System.Object GetDispatch( 
   System.Object
VariantArray
,
   System.Int32
Index
)
```
## Parameters

- `VariantArray` (System.Object): Variant SafeArray of Dispatch objects
- `Index` (System.Int32): Index of Dispatch object

## Return Value

Dispatch object

## Examples

- Get Scale Factor of Each Model View (C++) (Get_Scale_of_Each_Model_View_Example_CPlusPlus_COM.htm)

## See Also

- `ISafeArrayUtility.PutDispatch`