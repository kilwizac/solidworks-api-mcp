---
type: method
interface: IFeature
member: IGetParents
returns: Feature
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.GetChildren
  - IFeature.GetOwnerFeature
  - IFeature.GetParents
  - IFeature.IGetChildCount
  - IFeature.IGetChildren
keywords:
  - parents
  - features
  - child
  - parent
  - relations
  - igetparents
  - ifeature
  - feature
---

# IFeature.IGetParents

Gets the parent features for this feature.

## Signature

```csharp
Feature IGetParents()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of features VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

To determine the size of the array, call
IFeature::IGetParentCount
before calling this method.
This method gets only the direct parents of this feature. It does not get parents of parents.

## Examples

- Get Parent Features (C++) (Get_Parent_Features_Example_CPlusPlus_COM.htm)

## See Also

- `IFeature.GetChildren`
- `IFeature.GetOwnerFeature`
- `IFeature.GetParents`
- `IFeature.IGetChildCount`
- `IFeature.IGetChildren`