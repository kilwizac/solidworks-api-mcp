---
type: method
interface: IFeature
member: GetChildren
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.GetParents
  - IFeature.IGetChildCount
  - IFeature.IGetChildren
  - IFeature.IGetParentCount
  - IFeature.IGetParents
keywords:
  - child
  - parent
  - relations
  - children
  - features
  - getchildren
  - ifeature
  - feature
  - object
  - relationship
  - component
  - vba
---

# IFeature.GetChildren

Gets the child features belonging to this feature.

## Signature

```csharp
System.Object GetChildren()
```
## Parameters

None.

## Return Value

Array of child features

## Remarks

This method gets the direct children of this feature. It does not get children of children.

## Examples

- Get Parent-Child Relationship for Component (VBA) (Get_Parent-Child_Relationship_for_Component_Example_VB.htm)

## See Also

- `IFeature.GetParents`
- `IFeature.IGetChildCount`
- `IFeature.IGetChildren`
- `IFeature.IGetParentCount`
- `IFeature.IGetParents`