---
type: property
interface: IModelDoc2
member: GetPropertyExtension
returns: System.Object
parameters:
  -
    name: ID
    type: System.Int32
    description: (Size of the array returned by IModelDoc2::AddPropertyExtension ) - (Position of the property extension in the array)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.ResetPropertyExtension
keywords:
  - model
  - documents
  - see
  - also
  - imodeldoc2
  - imodeldocextension
  - interfaces
  - extensions
  - extension
  - getpropertyextension
  - doc2
  - id
  - int32
  - object
readonly: null
---

# IModelDoc2.GetPropertyExtension

Gets the specified property extension on this model.

## Signature

```csharp
System.Object GetPropertyExtension( 
   System.Int32
ID
)
```
## Parameters

- `ID` (System.Int32): (Size of the array returned by IModelDoc2::AddPropertyExtension ) - (Position of the property extension in the array)

## Return Value

Value of the property extension

## Remarks

IModelDoc2::AddPropertyExtension adds property extensions to a last-in-first-out, 1-based array and returns the size of that array.
NOTE
: SOLIDWORKS recommends that you use the
IAttribute
,
IAttributeDef
, and
IParameter
interfaces instead of this method. These interfaces provide more flexibility.

## See Also

- `IModelDoc2.ResetPropertyExtension`