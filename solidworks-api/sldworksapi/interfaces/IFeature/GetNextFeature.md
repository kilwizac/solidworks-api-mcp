---
type: method
interface: IFeature
member: GetNextFeature
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
  - IModelDoc2.FirstFeature
  - IModelDoc2.IFirstFeature
  - IPartDoc.FirstFeature
  - IPartDoc.IFirstFeature
keywords:
  - traverse
  - features
  - getnextfeature
  - ifeature
  - feature
  - next
  - object
  - iterate
  - through
  - dimensions
  - model
  - vba
  - select
  - plane
  - mid
  - tolerance
  - suppress
  - unsuppress
  - all
  - cosmetic
  - threads
  - assembly
  - component
  - level
  - subfeatures
  - levels
  - using
  - recursion
  - vb
  - net
---

# IFeature.GetNextFeature

Gets the next feature in the part.

## Signature

```csharp
System.Object GetNextFeature()
```
## Parameters

None.

## Return Value

Next feature

## Remarks

This method:
allows you to access suppressed features.
returns features in the current order for the model, and this order changes when the model is edited.
Your application should not assume that:
features retain the same relative or absolute position throughout the model’s lifetime. For example, you should not assume that Sketch1 always appears before Sketch2.
any feature has a specific name. Because features can be renamed, you cannot assume that the first reference plane feature is named Plane1.
When traversing the FeatureManager design tree, your application should use
IFeature::GetTypeName2
and
IFeature::GetSpecificFeature2
to identify specific features instead of relying solely on
IFeature::Name
.
This method returns features in the model definition order, which is not the same as the order displayed in the user interface. See
ITreeControlItem
for details.
IFeature::GetFirstSubFeature
and
IFeature::IGetFirstSubFeature
provide access to subfeatures.

## Examples

- Iterate through Dimensions in Model (VBA) (Iterate_Through_Dimensions_in_Model_Example_VB.htm)
- Select Plane (VBA) (Select_Plane_Example_VB.htm)
- Set Dimensions to Mid-tolerance (VBA) (Set_Dimensions_to_Mid-Tolerance_Example_VB.htm)
- Suppress or Unsuppress Feature (VBA) (Feature_Suppression_Example_VB.htm)
- Traverse All Cosmetic Threads (VBA) (Traverse_All_Cosmetic_Threads_Example_VB.htm)
- Traverse Assembly at Component and Feature Level (VBA) (Traverse_Assembly_at_Component_and_Feature_Level_Example_VB.htm)
- Traverse Subfeatures (VBA) (Traverse_SubFeatures_Example_VB.htm)
- Traverse Assembly at Component and Feature Levels Using Recursion (C#) (Traverse_Assembly_at_Component_and_Feature_Levels_Using_Recursion_Example_CSharp.htm)
- Traverse Assembly at Component and Feature Levels Using Recursion (VB.NET) (Traverse_Assembly_at_Component_and_Feature_Levels_Using_Recursion_Example_VBNET.htm)
- Traverse Assembly at Component and Feature Levels Using Recursion (VBA) (Traverse_Assembly_at_Component_and_Feature_Levels_Using_Recursion_Example_VB.htm)

## See Also

- `IComponent2.FirstFeature`
- `IFeature.GetNextSubFeature`
- `IFeature.IGetNextFeature`
- `IFeature.IGetNextSubFeature`
- `IModelDoc2.FirstFeature`
- `IModelDoc2.IFirstFeature`
- `IPartDoc.FirstFeature`
- `IPartDoc.IFirstFeature`