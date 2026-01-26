---
type: property
interface: IFace2
member: AddPropertyExtension
returns: System.Int32
parameters:
  -
    name: PropertyExtension
    type: System.Object
    description: Value of the property extension to add to this face (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFace2.GetPropertyExtension
  - IFace2.ResetPropertyExtension
keywords:
  - extension
  - addpropertyextension
  - iface2
  - face2
  - add
  - object
  - int32
readonly: null
---

# IFace2.AddPropertyExtension

Adds a property extension to this face.

## Signature

```csharp
System.Int32 AddPropertyExtension( 
   System.Object
PropertyExtension
)
```
## Parameters

- `PropertyExtension` (System.Object): Value of the property extension to add to this face (see Remarks )

## Return Value

1 if the property extension is added to the face, -1 if not

## Remarks

This method does not support:
adding multiple property extensions to the same face.
faces obtained from reference surface bodies.
To use this method:
Declare the variable.
Assign the variable a value: float, integer, or string.
Call this method to add the value to the face.
NOTE
: SOLIDWORKS recommends that you use the
IAttribute
,
IAttributeDef
, and
IParameter
interfaces instead of this method. These interfaces provide more flexibility.

## See Also

- `IFace2.GetPropertyExtension`
- `IFace2.ResetPropertyExtension`