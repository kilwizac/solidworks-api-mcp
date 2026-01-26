---
type: property
interface: IComponent2
member: AddPropertyExtension
returns: System.Int32
parameters:
  -
    name: PropertyExtension
    type: System.Object
    description: Value of the property extension to add to the component
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetPropertyExtension
  - IComponent2.ResetPropertyExtension
keywords:
  - extension
  - addpropertyextension
  - icomponent2
  - component2
  - add
  - object
  - int32
readonly: null
---

# IComponent2.AddPropertyExtension

Adds a property extension to this component.

## Signature

```csharp
System.Int32 AddPropertyExtension( 
   System.Object
PropertyExtension
)
```
## Parameters

- `PropertyExtension` (System.Object): Value of the property extension to add to the component

## Return Value

1 if the property extension is added to the component, -1 if not

## Remarks

This method does not support adding multiple property extensions to the same component.
To use this method:
Declare the variable.
Assign the variable a value: float, integer, or string.
Call this method to add the value to the component.
NOTE
: SOLIDWORKS recommends that you use the
IAttribute
,
IAttributeDef
, and
IParameter
interfaces instead of this method. These interfaces provide more flexibility.

## See Also

- `IComponent2.GetPropertyExtension`
- `IComponent2.ResetPropertyExtension`