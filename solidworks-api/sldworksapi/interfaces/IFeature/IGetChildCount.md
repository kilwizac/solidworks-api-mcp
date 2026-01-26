---
type: method
interface: IFeature
member: IGetChildCount
returns: System.Int32
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
  - igetchildcount
  - ifeature
  - feature
  - count
  - int32
---

# IFeature.IGetChildCount

Gets the number of child features that belong to this feature.

## Signature

```csharp
System.Int32 IGetChildCount()
```
## Parameters

None.

## Return Value

Number of direct children belonging to this feature

## Remarks

Call this method before calling
IFeature::IGetChildren
to determine the size of the array.
This method gets the number of direct children belonging to this feature, not including children of children.

## See Also

- `IFeature.GetChildren`
- `IFeature.GetParents`
- `IFeature.IGetParentCount`
- `IFeature.IGetParents`