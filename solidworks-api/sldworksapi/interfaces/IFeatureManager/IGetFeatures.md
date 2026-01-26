---
type: method
interface: IFeatureManager
member: IGetFeatures
returns: Feature
parameters:
  -
    name: ToplevelOnly
    type: System.Boolean
    description: True to get only the features at the top level of the FeatureManager design tree, false to get the top-level features and all child features in the FeatureManager design tree
  -
    name: Count
    type: System.Int32
    description: Number of features
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IComponent2.FirstFeature
  - IFeature.GetChildren
  - IFeature.GetOwnerFeature
  - IFeature.GetParents
  - IFeature.IGetChildCount
  - IFeature.IGetChildren
  - IFeature.IGetParentCount
  - IFeature.IGetParents
  - IFeatureManager.GetFeatures
keywords:
  - igetfeatures
  - ifeaturemanager
  - feature
  - manager
  - features
  - toplevel
  - only
  - boolean
  - count
  - int32
---

# IFeatureManager.IGetFeatures

Gets the features in this document.

## Signature

```csharp
Feature IGetFeatures( 
   System.Boolean
ToplevelOnly
,
   System.Int32
Count
)
```
## Parameters

- `ToplevelOnly` (System.Boolean): True to get only the features at the top level of the FeatureManager design tree, false to get the top-level features and all child features in the FeatureManager design tree
- `Count` (System.Int32): Number of features

## Return Value

in-process, unmanaged C++: Pointer to an array of IFeature objects VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IFeatureManager::GetFeatureCount
before calling this method to get the size for the array of features.
If TopLevelOnly is false, then this method gets all of the feature and child features in this document.
It does not get features in components.
The features that are returned by this method can be in any order. You should not rely on the order to indicate anything about children or parents. If hierarchy and order information is needed, then use
IPartDoc::FirstFeature
or
IPartDoc::IFirstFeature
or
IModelDoc2::FirstFeature
or
IModelDoc2::FirstFeature
,
IFeature::GetNextFeature
or
IFeatureIGetNextFeature
,
IFeature::GetFirstSubFeature
or
IFeature::IGetFirstSubFeature
, and
IFeature::GetNextSubFeature
or
IFeature::IGetNextSubFeature
to retrieve your information.

## See Also

- `IComponent2.FirstFeature`
- `IFeature.GetChildren`
- `IFeature.GetOwnerFeature`
- `IFeature.GetParents`
- `IFeature.IGetChildCount`
- `IFeature.IGetChildren`
- `IFeature.IGetParentCount`
- `IFeature.IGetParents`
- `IFeatureManager.GetFeatures`