---
type: property
interface: IFace2
member: GetPropertyExtension
returns: System.Object
parameters:
  -
    name: ID
    type: System.Int32
    description: 0
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFace2.AddPropertyExtension
  - IFace2.ResetPropertyExtension
keywords:
  - extension
  - getpropertyextension
  - iface2
  - face2
  - id
  - int32
  - object
readonly: null
---

# IFace2.GetPropertyExtension

Gets the property extension on this face.

## Signature

```csharp
System.Object GetPropertyExtension( 
   System.Int32
ID
)
```
## Parameters

- `ID` (System.Int32): 0

## Return Value

Value of the property extension

## Remarks

SOLIDWORKS recommends that you use the
IAttribute
,
IAttributeDef
, and
IParameter
interfaces instead of this method. These interfaces provide more flexibility.

## See Also

- `IFace2.AddPropertyExtension`
- `IFace2.ResetPropertyExtension`