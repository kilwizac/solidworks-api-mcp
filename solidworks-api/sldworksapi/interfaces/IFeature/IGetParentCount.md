---
type: method
interface: IFeature
member: IGetParentCount
returns: System.Int32
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
  - child
  - parent
  - relations
  - parents
  - features
  - igetparentcount
  - ifeature
  - feature
  - count
  - int32
---

# IFeature.IGetParentCount

Gets the number of parent features for this feature.

## Signature

```csharp
System.Int32 IGetParentCount()
```
## Parameters

None.

## Return Value

Number of direct parents for this feature

## Remarks

Call this method before calling
IFeature::IGetParents
to determine the size of the array.
This method gets the number of direct parents for this feature, not including parents of parents.

## Examples

- Get Parent Features (C++) (Get_Parent_Features_Example_CPlusPlus_COM.htm)

## See Also

- `IFeature.GetChildren`
- `IFeature.GetOwnerFeature`
- `IFeature.GetParents`
- `IFeature.IGetChildCount`
- `IFeature.IGetChildren`