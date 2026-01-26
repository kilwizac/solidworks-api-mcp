---
type: property
interface: IBody2
member: AddPropertyExtension2
returns: System.Int32
parameters:
  -
    name: PropertyExtension
    type: System.Object
    description: Value of the property extension to add to this body (see Remarks )
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
  - addpropertyextension2
  - ibody2
  - body2
  - add
  - extension2
  - object
  - int32
readonly: null
---

# IBody2.AddPropertyExtension2

Adds a property extension to this body.

## Signature

```csharp
System.Int32 AddPropertyExtension2( 
   System.Object
PropertyExtension
)
```
## Parameters

- `PropertyExtension` (System.Object): Value of the property extension to add to this body (see Remarks )

## Return Value

Size of the array to which the property extension value is added

## Remarks

To use this method:
Declare the variable.
Assign the variable a value: float, integer, or string.
Call this method to add the value to the body.
The 1-based array is a first-in-last-out structured list, whose size is used by
IBody2::GetPropertyExtension2
to access the property extension.
NOTE
: SOLIDWORKS recommends that you use the
IAttribute
,
IAttributeDef
, and
IParameter
interfaces instead of this method. These interfaces provide more flexibility.

## See Also

- `IBody2.ResetPropertyExtension2`