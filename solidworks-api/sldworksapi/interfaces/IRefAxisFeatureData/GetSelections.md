---
type: method
interface: IRefAxisFeatureData
member: GetSelections
returns: System.Object
parameters:
  -
    name: EntitiesTypeVar
    type: System.Object
    description: Array of the types of selected entities for this reference axis feature as defined by swSelectType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IRefAxisFeatureData.GetSelectionsCount
  - IRefAxisFeatureData.IGetSelections
  - IRefAxisFeatureData.ISetSelections
  - IRefAxisFeatureData.SetSelections
keywords:
  - getselections
  - irefaxisfeaturedata
  - ref
  - axis
  - feature
  - data
  - selections
  - entities
  - type
  - var
  - object
  - reference
  - vb
  - net
  - vba
---

# IRefAxisFeatureData.GetSelections

Gets the selected entities for this reference axis feature.

## Signature

```csharp
System.Object GetSelections( 
   out System.Object
EntitiesTypeVar
)
```
## Parameters

- `EntitiesTypeVar` (System.Object): Array of the types of selected entities for this reference axis feature as defined by swSelectType_e

## Return Value

Array of the selected entities

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## Examples

- Get Selections for Reference Axis Feature (C#) (Get_Selections_for_Reference_Axis_Feature_Example_CSharp.htm)
- Get Selections for Reference Axis Feature (VB.NET) (Get_Selections_for_Reference_Axis_Feature_Example_VBNET.htm)
- Get Selections for Reference Axis Feature (VBA) (Get_Selections_for_Reference_Axis_Feature_Example_VB.htm)

## See Also

- `IRefAxisFeatureData.GetSelectionsCount`
- `IRefAxisFeatureData.IGetSelections`
- `IRefAxisFeatureData.ISetSelections`
- `IRefAxisFeatureData.SetSelections`