---
type: property
interface: IBody2
member: GetPropertyExtension2
returns: System.Object
parameters:
  -
    name: ID
    type: System.Int32
    description: (Size of the array returned by IBody2::AddPropertyExtension2 ) - (Position of the property extension in the array)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.ResetPropertyExtension2
keywords:
  - extension
  - getpropertyextension2
  - ibody2
  - body2
  - extension2
  - id
  - int32
  - object
readonly: null
---

# IBody2.GetPropertyExtension2

Gets the specified property extension on this body.

## Signature

```csharp
System.Object GetPropertyExtension2( 
   System.Int32
ID
)
```
## Parameters

- `ID` (System.Int32): (Size of the array returned by IBody2::AddPropertyExtension2 ) - (Position of the property extension in the array)

## Return Value

Value of the property extension

## Remarks

IBody2::AddPropertyExtension2 adds property extensions to a last-in-first-out, 1-based array and returns the size of that array.
NOTE
: SOLIDWORKS recommends that you use the
IAttribute
,
IAttributeDef
, and
IParameter
interfaces instead of this method. These three interfaces provide more flexibility.

## See Also

- `IBody2.ResetPropertyExtension2`