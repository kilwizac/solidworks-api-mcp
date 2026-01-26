---
type: property
interface: IComponent2
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
  - assemblies
related:
  - IComponent2.AddPropertyExtension
  - IComponent2.ResetPropertyExtension
keywords:
  - extension
  - getpropertyextension
  - icomponent2
  - component2
  - id
  - int32
  - object
readonly: null
---

# IComponent2.GetPropertyExtension

Gets the property extension on this component.

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

- `IComponent2.AddPropertyExtension`
- `IComponent2.ResetPropertyExtension`