---
type: property
interface: IModelDoc2
member: AddPropertyExtension
returns: System.Int32
parameters:
  -
    name: PropertyExtension
    type: System.Object
    description: Value of the property extension to add to the model (see Remarks )
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
  - addpropertyextension
  - doc2
  - add
  - object
  - int32
readonly: null
---

# IModelDoc2.AddPropertyExtension

Adds a property extension to this model.

## Signature

```csharp
System.Int32 AddPropertyExtension( 
   System.Object
PropertyExtension
)
```
## Parameters

- `PropertyExtension` (System.Object): Value of the property extension to add to the model (see Remarks )

## Return Value

Size of the array to which the property extension value is added

## Remarks

To use this method:
Declare the variable.
Assign the variable a value: float, integer, or string.
Call this method to add the value to the model.
The 1-based array is a first-in-last-out structured list, whose size is used by
IModelDoc2::GetPropertyExtension
to access the property extension..
NOTE
: SOLIDWORKS recommends that you use
IAttribute
,
IAttributeDef
, and
IParameter
instead of this method. These interfaces provide more flexibility.

## See Also

- `IModelDoc2.ResetPropertyExtension`