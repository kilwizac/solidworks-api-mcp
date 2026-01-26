---
type: method
interface: IModelDoc2
member: IsActive
returns: System.Boolean
parameters:
  -
    name: CompStr
    type: System.String
    description: Name specification of the component
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.HideComponent2
  - IModelDoc2.ShowComponent2
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - hide
  - show
  - components
  - icomponent2
  - isactive
  - imodeldoc2
  - model
  - doc2
  - active
  - comp
  - str
  - string
  - boolean
---

# IModelDoc2.IsActive

Gets whether the specified assembly component is shown or hidden in this model document.

## Signature

```csharp
System.Boolean IsActive( 
   System.String
CompStr
)
```
## Parameters

- `CompStr` (System.String): Name specification of the component

## Return Value

True if component is shown, false if component is hidden

## Remarks

The CompStr parameter is the full assembly component name designation. The format of the name designation is:
parentModel
/
childModel
where:
childModel is the model whose display status you want to determine. For example, if you want to determine the display status of a part named SPOKE.SLDPRT and if this part is a child of WHEEL.SLDPRT, which itself is a child of AXIS.SLDPRT, then you would specify CompStr as follows:
AXIS
/
WHEEL
/
SPOKE
TIP:
The assembly component name designation is shown in the lower-left corner of the SOLIDWORKS Design application when an assembly component is selected.

## See Also

- `IModelDoc2.HideComponent2`
- `IModelDoc2.ShowComponent2`