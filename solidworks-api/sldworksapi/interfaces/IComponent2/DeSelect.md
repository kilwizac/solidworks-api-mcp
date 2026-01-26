---
type: method
interface: IComponent2
member: DeSelect
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - selections
related:
  - IComponent2.Select3
keywords:
  - deselect
  - icomponent2
  - component2
  - de
  - select
  - boolean
---

# IComponent2.DeSelect

Deselects this component.

## Signature

```csharp
System.Boolean DeSelect()
```
## Parameters

None.

## Return Value

True if the component was successfully deselected, false if not

## Remarks

Use
IModelDoc2::DeSelectByID
instead of this method. This method does not work well when a PropertyManager page is open or a command is running. IModelDoc2::DeSelectByID handles selection correctly whether or not a command is running.

## See Also

- `IComponent2.Select3`