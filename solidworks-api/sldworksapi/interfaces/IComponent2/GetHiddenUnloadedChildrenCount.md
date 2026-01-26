---
type: method
interface: IComponent2
member: GetHiddenUnloadedChildrenCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.HasUnloadedComponents
  - ITreeControlItem
keywords:
  - hidden
  - components
  - see
  - also
  - icomponent2
  - unloaded
  - gethiddenunloadedchildrencount
  - component2
  - children
  - count
  - int32
---

# IComponent2.GetHiddenUnloadedChildrenCount

Gets the number of hidden children components of this component that were not loaded when an assembly was opened selectively.

## Signature

```csharp
System.Int32 GetHiddenUnloadedChildrenCount()
```
## Parameters

None.

## Return Value

Number of hidden children components of this component that were not loaded when an assembly was opened selectively

## Remarks

You can open an assembly with all components hidden except those that you select. The selected components are loaded lightweight. All other components become hidden and are not loaded into memory. This method returns the number of unloaded hidden children of this component. This method does not return the number of suppressed unloaded children components. Call
IComponent2::GetUnloadedComponentNames
for that type of related information.

## See Also

- `IComponent2.HasUnloadedComponents`
- `ITreeControlItem`