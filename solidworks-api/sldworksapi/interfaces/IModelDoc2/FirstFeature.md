---
type: method
interface: IModelDoc2
member: FirstFeature
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - features
  - ui
related:
  - IComponent2.FirstFeature
  - IModelDoc2.FeatureByPositionReverse
  - IModelDoc2.GetFeatureCount
  - IModelDoc2.IFeatureByPositionReverse
  - IModelDoc2.IFirstFeature
  - IPartDoc.FirstFeature
  - IPartDoc.IFirstFeature
keywords:
  - feature
  - see
  - also
  - ifeature
  - first
  - traverse
  - features
  - firstfeature
  - imodeldoc2
  - model
  - doc2
  - object
  - all
  - sheet
  - metal
  - data
  - vba
  - iterate
  - through
  - dimensions
  - select
  - plane
  - mid
  - tolerance
  - cosmetic
  - threads
  - assembly
  - hide
  - sketches
  - insert
  - change
  - deleteface
  - vb
  - net
  - roll
  - back
---

# IModelDoc2.FirstFeature

Gets the first feature in the document.

## Signature

```csharp
System.Object FirstFeature()
```
## Parameters

None.

## Return Value

First feature in the document

## Remarks

This method:
is identical to
IPartDoc::FirstFeature
, but is available on the IModelDoc2 interface to include access to assemblies and drawings.
can access the first feature even if it is suppressed.
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
To access the next feature in the FeatureManager design tree and subfeatures, use
IFeature::GetNextFeature
or
IFeature::IGetNextFeature
and
IFeature::GetFirstSubFeature
or
IFeature::IGetFirstSubFeature
methods, respectively.

## Examples

- Get All Sheet Metal Feature Data (VBA) (Get_All_Sheet_Metal_Feature_Data_Example_VB.htm)
- Iterate Through Dimensions in Model (VBA) (Iterate_Through_Dimensions_in_Model_Example_VB.htm)
- Select Plane (VBA) (Select_Plane_Example_VB.htm)
- Set Dimensions to Mid-Tolerance (VBA) (Set_Dimensions_to_Mid-Tolerance_Example_VB.htm)
- Traverse All Cosmetic Threads (VBA) (Traverse_All_Cosmetic_Threads_Example_VB.htm)
- Traverse Assembly and Hide All Sketches (VBA) (Traverse_Assembly_and_Hide_All_Sketches_Example_VB.htm)
- Insert and Change DeleteFace Feature (C#) (Insert_and_Change_DeleteFace_Feature_Example_CSharp.htm)
- Insert and Change DeleteFace Feature (VB.NET) (Insert_and_Change_DeleteFace_Feature_Example_VBNET.htm)
- Insert and Change DeleteFace Feature (VBA) (Insert_and_Change_DeleteFace_Feature_Example_VB.htm)
- Roll Back Model (C#) (Roll_Back_Model_Example_CSharp.htm)
- Roll Back Model (VB.NET) (Roll_Back_Model_Example_VBNET.htm)
- Roll Back Model (VBA) (Roll_Back_Model_Example_VB.htm)

## See Also

- `IComponent2.FirstFeature`
- `IModelDoc2.FeatureByPositionReverse`
- `IModelDoc2.GetFeatureCount`
- `IModelDoc2.IFeatureByPositionReverse`
- `IModelDoc2.IFirstFeature`
- `IPartDoc.FirstFeature`
- `IPartDoc.IFirstFeature`