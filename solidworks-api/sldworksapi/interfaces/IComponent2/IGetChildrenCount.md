---
type: method
interface: IComponent2
member: IGetChildrenCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - igetchildrencount
  - icomponent2
  - component2
  - children
  - count
  - int32
  - show
  - all
  - components
  - vba
---

# IComponent2.IGetChildrenCount

Gets the number of children components for this component.

## Signature

```csharp
System.Int32 IGetChildrenCount()
```
## Parameters

None.

## Return Value

Number of children

## Remarks

This method returns a single-level count. The
IComponent2::GetChildren
and
IComponent2::IGetChildren
do not recurse sub-assemblies.

## Examples

- Show All Components (VBA) (Show_All_Components_Example_VB.htm)