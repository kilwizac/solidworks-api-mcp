---
type: method
interface: IFeatureManager
member: GetFeatures
returns: System.Object
parameters:
  -
    name: ToplevelOnly
    type: System.Boolean
    description: True to get only the features at the top level of the FeatureManager design tree, false to get the top-level features and all child features in the FeatureManager design tree
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
  - IFeatureManager.GetFeatureCount
  - IFeatureManager.IGetFeatures
keywords:
  - getfeatures
  - ifeaturemanager
  - feature
  - manager
  - features
  - toplevel
  - only
  - boolean
  - object
  - create
  - loft
  - body
  - vb
  - net
  - vba
---

# IFeatureManager.GetFeatures

Gets the features in this document.

## Signature

```csharp
System.Object GetFeatures( 
   System.Boolean
ToplevelOnly
)
```
## Parameters

- `ToplevelOnly` (System.Boolean): True to get only the features at the top level of the FeatureManager design tree, false to get the top-level features and all child features in the FeatureManager design tree

## Return Value

Array of all of the features

## Remarks

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

## Examples

- Create Loft Body (VB.NET) (Create_Loft_Body_Example_VBNET.htm)
- Create Loft Body (VBA) (Create_Loft_Body_Example_VB.htm)
- Create Loft Body (C#) (Create_Loft_Body_Example_CSharp.htm)

## See Also

- `IComponent2.FirstFeature`
- `IFeature.GetChildren`
- `IFeature.GetOwnerFeature`
- `IFeature.GetParents`
- `IFeature.IGetChildCount`
- `IFeature.IGetChildren`
- `IFeature.IGetParentCount`
- `IFeature.IGetParents`
- `IFeatureManager.GetFeatureCount`
- `IFeatureManager.IGetFeatures`