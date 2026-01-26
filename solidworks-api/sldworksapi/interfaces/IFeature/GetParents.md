---
type: method
interface: IFeature
member: GetParents
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.GetChildren
  - IFeature.GetOwnerFeature
  - IFeature.IGetChildCount
  - IFeature.IGetChildren
  - IFeature.IGetParentCount
  - IFeature.IGetParents
keywords:
  - child
  - parent
  - relations
  - parents
  - features
  - getparents
  - ifeature
  - feature
  - object
  - using
  - collections
  - vba
  - relationship
  - component
  - plane
  - where
  - sketch
  - was
  - created
---

# IFeature.GetParents

Gets the parent features for this feature.

## Signature

```csharp
System.Object GetParents()
```
## Parameters

None.

## Return Value

Array pointers to the parent features

## Remarks

This method gets only the direct parents of this feature. It does not get parents of parents.

## Examples

- Get Parent Feature Using Collections (VBA) (Find_Parent_Feature_using_Collections_Example_VB.htm)
- Get Parent-Child Relationship for Component (VBA) (Get_Parent-Child_Relationship_for_Component_Example_VB.htm)
- Get Plane Where Sketch Was Created (VBA) (Get_Plane_on_which_Sketch_Created_Example_VB.htm)

## See Also

- `IFeature.GetChildren`
- `IFeature.GetOwnerFeature`
- `IFeature.IGetChildCount`
- `IFeature.IGetChildren`
- `IFeature.IGetParentCount`
- `IFeature.IGetParents`