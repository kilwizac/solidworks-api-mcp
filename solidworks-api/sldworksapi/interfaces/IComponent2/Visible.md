---
type: property
interface: IComponent2
member: Visible
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IAssemblyDoc.CompConfigProperties5
  - IAssemblyDoc.ISetComponentVisibility
  - IAssemblyDoc.SetComponentVisibility
  - IComponent2.GetVisibility
  - IComponent2.IGetVisibility
  - IComponent2.ISetVisibility
  - IComponent2.IsHidden
  - IComponent2.SetVisibility
keywords:
  - components
  - see
  - also
  - icomponent2
  - visibility
  - visible
  - component2
  - int32
  - open
  - assembly
  - large
  - design
  - review
  - mode
  - vb
  - net
  - vba
readonly: null
---

# IComponent2.Visible

Gets or sets the visibility state of this component.

## Signature

```csharp
System.Int32 Visible {get; set;}
```
## Parameters

None.

## Return Value

Visibility state as defined in swComponentVisibilityState_e

## Remarks

This functionality is also available using
IModelDoc2::HideComponent2
and
IModelDoc2::ShowComponent2
.

## Examples

- Open Assembly in Large Design Review Mode (C#) (Open_Assembly_in_Large_Design_Review_Mode_Example_CSharp.htm)
- Open Assembly in Large Design Review Mode (VB.NET) (Open_Assembly_in_Large_Design_Review_Mode_Example_VBNET.htm)
- Open Assembly in Large Design Review Mode (VBA) (Open_Assembly_in_Large_Design_Review_Mode_Example_VB.htm)

## See Also

- `IAssemblyDoc.CompConfigProperties5`
- `IAssemblyDoc.ISetComponentVisibility`
- `IAssemblyDoc.SetComponentVisibility`
- `IComponent2.GetVisibility`
- `IComponent2.IGetVisibility`
- `IComponent2.ISetVisibility`
- `IComponent2.IsHidden`
- `IComponent2.SetVisibility`