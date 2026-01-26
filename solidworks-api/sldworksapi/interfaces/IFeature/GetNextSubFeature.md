---
type: method
interface: IFeature
member: GetNextSubFeature
returns: System.Object
parameters: []
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
  - IFeature.GetOwnerFeature
  - IFeature.IGetFirstSubFeature
  - IFeature.IGetNextFeature
  - IFeature.IGetNextSubFeature
  - IFeature.MakeSubFeature
  - IModelDoc2.FirstFeature
  - IModelDoc2.IFirstFeature
  - IPartDoc.FirstFeature
  - IPartDoc.IFirstFeature
keywords:
  - traverse
  - features
  - subfeatures
  - getnextsubfeature
  - ifeature
  - feature
  - next
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

# IFeature.GetNextSubFeature

Gets the next sub-feature from the owner of this sub-feature.

## Signature

```csharp
System.Object GetNextSubFeature()
```
## Parameters

None.

## Return Value

Next sub- feature

## Remarks

If no sub-feature exists, then this method returns NULL.

## Examples

- Iterate Through Dimensions in Model (VBA) (Iterate_Through_Dimensions_in_Model_Example_VB.htm)
- Traverse All Cosmetic Threads (VBA) (Traverse_All_Cosmetic_Threads_Example_VB.htm)
- Traverse Assembly at Component and Feature Levels (VBA) (Traverse_Assembly_at_Component_and_Feature_Level_Example_VB.htm)
- Traverse Subfeatures (VBA) (Traverse_SubFeatures_Example_VB.htm)
- Traverse Assembly at Component and Feature Levels Using Recursion (VBA) (Traverse_Assembly_at_Component_and_Feature_Levels_Using_Recursion_Example_VB.htm)
- Traverse Assembly at Component and Feature Levels Using Recursion (VB.NET) (Traverse_Assembly_at_Component_and_Feature_Levels_Using_Recursion_Example_VBNET.htm)
- Traverse Assembly at Component and Feature Levels Using Recursion (C#) (Traverse_Assembly_at_Component_and_Feature_Levels_Using_Recursion_Example_CSharp.htm)

## See Also

- `IComponent2.FirstFeature`
- `IFeature.GetChildren`
- `IFeature.GetFirstSubFeature`
- `IFeature.GetNextFeature`
- `IFeature.GetOwnerFeature`
- `IFeature.IGetFirstSubFeature`
- `IFeature.IGetNextFeature`
- `IFeature.IGetNextSubFeature`
- `IFeature.MakeSubFeature`
- `IModelDoc2.FirstFeature`
- `IModelDoc2.IFirstFeature`
- `IPartDoc.FirstFeature`
- `IPartDoc.IFirstFeature`