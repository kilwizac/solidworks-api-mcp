---
type: method
interface: IDisplayDimension
member: GetDimension
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.IGetDimension
  - IFeature.IParameter
  - IFeature.Parameter
  - IModelDoc2.IParameter
  - IModelDoc2.Parameter
keywords:
  - getdimension
  - idisplaydimension
  - display
  - dimension
  - object
  - block
  - information
  - vba
  - component
  - via
  - properties
  - iterate
  - through
  - dimensions
  - model
  - mid
  - tolerance
  - traverse
  - feature
  - unlink
---

# IDisplayDimension.GetDimension

Obsolete. Superseded by IDisplayDimension::GetDimension2.

## Signature

```csharp
System.Object GetDimension()
```
## Parameters

None.

## Return Value

Dimension

## Remarks

SOLIDWORKS can display a dimension more than once. For example, a base-extrude dimension can be brought into three different views on a drawing. These three dimensions are referred to as display dimensions and are represented by the
IDisplayDimension
object in the SOLIDWORKS API. The original base-extrude dimension is represented by the
IDimension
object in the SOLIDWORKS API.

## Examples

- Get Block Information (VBA) (Get_Block_Information_Example_VB.htm)
- Get Component Via Display Dimension (VBA) (Get_Component_Via_Display_Dimension_Example_VB.htm)
- Get Display Dimension Properties (VBA) (Get_Display_Dimension_Properties_Example_VB.htm)
- Iterate Through Dimensions in Model (VBA) (Iterate_Through_Dimensions_in_Model_Example_VB.htm)
- Set Dimensions to Mid-tolerance (VBA) (Set_Dimensions_to_Mid-Tolerance_Example_VB.htm)
- Traverse Feature Dimensions (VBA) (Traverse_Feature_Dimensions_Example_VB.htm)
- Unlink Dimensions (VBA) (Unlink_Dimensions_Example_VB.htm)

## See Also

- `IDisplayDimension.IGetDimension`
- `IFeature.IParameter`
- `IFeature.Parameter`
- `IModelDoc2.IParameter`
- `IModelDoc2.Parameter`