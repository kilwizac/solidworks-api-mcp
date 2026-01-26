---
type: method
interface: IFeature
member: GetFirstSubFeature
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IComponent2.FirstFeature
  - IFeature.GetNextSubFeature
  - IFeature.IGetNextFeature
  - IFeature.IGetNextSubFeature
  - IFeature.MakeSubFeature
  - IFeatureManager.GetFeatures
  - IFeatureManager.IGetFeatures
  - IModelDoc2.FirstFeature
  - IModelDoc2.IFirstFeature
  - IPartDoc.FirstFeature
  - IPartDoc.IFirstFeature
keywords:
  - traverse
  - features
  - subfeatures
  - getfirstsubfeature
  - ifeature
  - feature
  - first
  - sub
  - object
  - iterate
  - through
  - dimensions
  - model
  - vba
  - all
  - cosmetic
  - threads
  - assembly
  - component
  - levels
  - using
  - recursion
  - vb
  - net
---

# IFeature.GetFirstSubFeature

Gets the first sub-feature that belongs to this feature.

## Signature

```csharp
System.Object GetFirstSubFeature()
```
## Parameters

None.

## Return Value

First sub-feature of this feature

## Remarks

If no sub-features exist for this feature, then this method returns NULL.

## Examples

- Iterate Through Dimensions in Model (VBA) (Iterate_Through_Dimensions_in_Model_Example_VB.htm)
- Traverse All Cosmetic Threads (VBA) (Traverse_All_Cosmetic_Threads_Example_VB.htm)
- Traverse Subfeatures (VBA) (Traverse_SubFeatures_Example_VB.htm)
- Traverse Assembly at Component and Feature Levels Using Recursion (C#) (Traverse_Assembly_at_Component_and_Feature_Levels_Using_Recursion_Example_CSharp.htm)
- Traverse Assembly at Component and Feature Levels Using Recursion (VB.NET) (Traverse_Assembly_at_Component_and_Feature_Levels_Using_Recursion_Example_VBNET.htm)
- Traverse Assembly at Component and Feature Levels Using Recursion (VBA) (Traverse_Assembly_at_Component_and_Feature_Levels_Using_Recursion_Example_VB.htm)

## See Also

- `IComponent2.FirstFeature`
- `IFeature.GetNextSubFeature`
- `IFeature.IGetNextFeature`
- `IFeature.IGetNextSubFeature`
- `IFeature.MakeSubFeature`
- `IFeatureManager.GetFeatures`
- `IFeatureManager.IGetFeatures`
- `IModelDoc2.FirstFeature`
- `IModelDoc2.IFirstFeature`
- `IPartDoc.FirstFeature`
- `IPartDoc.IFirstFeature`