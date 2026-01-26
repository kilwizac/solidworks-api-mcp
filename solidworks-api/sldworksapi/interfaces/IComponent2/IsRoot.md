---
type: method
interface: IComponent2
member: IsRoot
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetModelDoc2
keywords:
  - components
  - see
  - also
  - icomponent2
  - root
  - isroot
  - component2
  - boolean
  - open
  - assembly
  - large
  - design
  - review
  - mode
  - vba
  - vb
  - net
---

# IComponent2.IsRoot

Gets whether this component is the root component.

## Signature

```csharp
System.Boolean IsRoot()
```
## Parameters

None.

## Return Value

True if this component is the root component, false if not

## Remarks

The root component is located at the top of the FeatureManager design tree in an assembly.

## Examples

- Open Assembly in Large Design Review Mode (VBA) (Open_Assembly_in_Large_Design_Review_Mode_Example_VB.htm)
- Open Assembly in Large Design Review Mode (VB.NET) (Open_Assembly_in_Large_Design_Review_Mode_Example_VBNET.htm)
- Open Assembly in Large Design Review Mode (C#) (Open_Assembly_in_Large_Design_Review_Mode_Example_CSharp.htm)

## See Also

- `IComponent2.GetModelDoc2`