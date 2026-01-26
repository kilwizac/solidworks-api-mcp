---
type: method
interface: IFeatureManager
member: GetFeatureCount
returns: System.Int32
parameters:
  -
    name: ToplevelOnly
    type: System.Boolean
    description: True to get only the number of features at the top level of the FeatureManager design tree, false to get the number of top-level features and all child features in the FeatureManager design tree
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IComponent2.FirstFeature
  - IFeature.GetChildren
  - IFeature.GetFirstSubFeature
  - IFeature.GetNextFeature
  - IFeature.GetNextSubFeature
  - IFeature.GetOwnerFeature
  - IFeature.GetParents
  - IFeature.IGetChildCount
  - IFeature.IGetChildren
  - IFeature.IGetFirstSubFeature
  - IFeature.IGetNextFeature
  - IFeature.IGetNextSubFeature
  - IFeature.IGetParentCount
  - IFeature.IGetParents
  - IFeatureManager.GetFeatures
  - IModelDoc2.FirstFeature
  - IModelDoc2.GetFeatureCount
  - IModelDoc2.IFirstFeature
  - IPartDoc.FirstFeature
  - IPartDoc.IFirstFeature
keywords:
  - feature
  - see
  - also
  - ifeature
  - number
  - getfeaturecount
  - ifeaturemanager
  - manager
  - count
  - toplevel
  - only
  - boolean
  - int32
  - create
  - loft
  - body
  - vb
  - net
  - vba
---

# IFeatureManager.GetFeatureCount

Gets the number of features in this document.

## Signature

```csharp
System.Int32 GetFeatureCount( 
   System.Boolean
ToplevelOnly
)
```
## Parameters

- `ToplevelOnly` (System.Boolean): True to get only the number of features at the top level of the FeatureManager design tree, false to get the number of top-level features and all child features in the FeatureManager design tree

## Return Value

Number of features

## Remarks

Call this method before calling
IFeatureManager::IGetFeatures
to determine the size of the array to pass into that method.
If TopLevelOnly is false, then this method counts all of the feature and child features in this document.
It does not count features in components.

## Examples

- Create Loft Body (VB.NET) (Create_Loft_Body_Example_VBNET.htm)
- Create Loft Body (VBA) (Create_Loft_Body_Example_VB.htm)
- Create Loft Body (C#) (Create_Loft_Body_Example_CSharp.htm)

## See Also

- `IComponent2.FirstFeature`
- `IFeature.GetChildren`
- `IFeature.GetFirstSubFeature`
- `IFeature.GetNextFeature`
- `IFeature.GetNextSubFeature`
- `IFeature.GetOwnerFeature`
- `IFeature.GetParents`
- `IFeature.IGetChildCount`
- `IFeature.IGetChildren`
- `IFeature.IGetFirstSubFeature`
- `IFeature.IGetNextFeature`
- `IFeature.IGetNextSubFeature`
- `IFeature.IGetParentCount`
- `IFeature.IGetParents`
- `IFeatureManager.GetFeatures`
- `IModelDoc2.FirstFeature`
- `IModelDoc2.GetFeatureCount`
- `IModelDoc2.IFirstFeature`
- `IPartDoc.FirstFeature`
- `IPartDoc.IFirstFeature`