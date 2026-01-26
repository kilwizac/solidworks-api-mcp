---
type: method
interface: IFeature
member: IGetChildren
returns: Feature
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.GetChildren
  - IFeature.GetParents
  - IFeature.IGetParentCount
  - IFeature.IGetParents
keywords:
  - child
  - parent
  - relations
  - children
  - features
  - igetchildren
  - ifeature
  - feature
---

# IFeature.IGetChildren

Gets the child features belonging to this feature.

## Signature

```csharp
Feature IGetChildren()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of features VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

This method gets the direct children of this feature. It does not get children of children.
To determine the size of the array, call
IFeature::IGetChildCount
before calling this method.

## See Also

- `IFeature.GetChildren`
- `IFeature.GetParents`
- `IFeature.IGetParentCount`
- `IFeature.IGetParents`