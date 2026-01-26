---
type: method
interface: IFeature
member: GetNameForSelection
returns: System.String
parameters:
  -
    name: Type
    type: System.String
    description: Type of feature as defined in swSelectType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IFeatureStatistics.FeatureNames
  - IFeatureStatistics.FeatureTypes
  - ISelectionMgr.GetSelectByIdSpecification
  - ISelectionMgr.GetSelectedObject6
  - ISelectionMgr.GetSelectionSpecification
keywords:
  - feature
  - see
  - also
  - ifeature
  - name
  - type
  - getnameforselection
  - selection
  - string
  - vb
  - net
  - vba
  - selections
  - reference
  - axis
---

# IFeature.GetNameForSelection

Gets the selected feature's type and name.

## Signature

```csharp
System.String GetNameForSelection( 
   out System.String
Type
)
```
## Parameters

- `Type` (System.String): Type of feature as defined in swSelectType_e

## Return Value

Name of feature

## Remarks

Call this method before calling
IModelDocExtension::SelectByID2
to get the type and name to pass to that method.
NOTE
:
IFeature::GetTypeName
,
IFeature::GetTypeName2
, and
IFeature::Name
do not return the type and name required by IModelDocExtension::SelectByID2.

## Examples

- Get Feature Type and Name (C#) (Get_Type_and_Name_of_Feature_Example_CSharp.htm)
- Get Feature Type and Name (VB.NET) (Get_Feature_Type_and_Name_Example_VBNET.htm)
- Get Feature Type and Name (VBA) (Get_Feature_Type_and_Name_Example_VB.htm)
- Get Selections for Reference Axis Feature (C#) (Get_Selections_for_Reference_Axis_Feature_Example_CSharp.htm)
- Get Selections for Reference Axis Feature (VB.NET) (Get_Selections_for_Reference_Axis_Feature_Example_VBNET.htm)
- Get Selections for Reference Axis Feature (VBA) (Get_Selections_for_Reference_Axis_Feature_Example_VB.htm)

## See Also

- `IFeatureStatistics.FeatureNames`
- `IFeatureStatistics.FeatureTypes`
- `ISelectionMgr.GetSelectByIdSpecification`
- `ISelectionMgr.GetSelectedObject6`
- `ISelectionMgr.GetSelectionSpecification`