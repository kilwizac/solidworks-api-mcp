---
type: method
interface: IFeature
member: GetDefinition
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.IGetDefinition
  - IFeature.IModifyDefinition2
keywords:
  - feature
  - see
  - also
  - ifeature
  - definition
  - data
  - objects
  - getdefinition
  - object
  - change
  - bend
  - radius
  - sheet
  - metal
  - part
  - vba
  - create
  - thicken
  - constraint
  - dome
  - insert
  - reference
  - points
  - custom
  - allowance
  - traverse
  - all
  - cosmetic
  - threads
  - deleteface
  - vb
  - net
---

# IFeature.GetDefinition

Gets the feature data object for a feature, such as an advanced mate, extrusion, loft, fillet, chamfer, etc., in order to access the parameters that control the definition of this feature.

## Signature

```csharp
System.Object GetDefinition()
```
## Parameters

None.

## Return Value

Feature data object (see Remarks )

## Remarks

You can use this method to query the feature data object, and you can modify the feature data object using
IFeature::ModifyDefinition
. Set the feature data object to Nothing or null when it is no longer needed. Not all feature types are supported, so check to see that the returned object is valid.
To:
get the type of feature and the name of its associated interface, use
IFeature::GetTypeName
or
IFeature::GetTypeName2
.
see a complete list of interfaces for feature data objects (e.g., interfaces ending in FeatureData or FeatureData2, such as ISymmetricMateFeatureData, IExtrudeFeatureData2, ILoftFeatureData, ISimpleFilletFeatureData2, IChamferFeatureData2, etc.), see the
Features Interfaces
and
Assembly Interfaces - Mates
sections in
Functional Categories
.
get the object of a feature that is not a feature data object, use
IFeature::GetSpecificFeature2
.

## Examples

- Change Bend Radius of Sheet Metal Part (VBA) (Change_Bend_Radius_of_Sheet_Metal_Part_Example_VB.htm)
- Create Thicken Feature (VBA) (Create_Thicken_Feature_Example_VB.htm)
- Get and Set Constraint for Dome Feature (VBA) (Get_and_Set_Constraint_for_Dome_Feature_Example_VB.htm)
- Insert Reference Points (VBA) (Insert_Reference_Points_Example_VB.htm)
- Set Custom Bend Allowance (VBA) (Set_Custom_Bend_Deduction_Example_VB.htm)
- Traverse All Cosmetic Threads (VBA) (Traverse_All_Cosmetic_Threads_Example_VB.htm)
- Insert and Change DeleteFace Feature (C#) (Insert_and_Change_DeleteFace_Feature_Example_CSharp.htm)
- Insert and Change DeleteFace Feature (VB.NET) (Insert_and_Change_DeleteFace_Feature_Example_VBNET.htm)
- Insert and Change DeleteFace Feature (VBA) (Insert_and_Change_DeleteFace_Feature_Example_VB.htm)

## See Also

- `IFeature.IGetDefinition`
- `IFeature.IModifyDefinition2`