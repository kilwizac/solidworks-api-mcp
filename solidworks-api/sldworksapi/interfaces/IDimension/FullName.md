---
type: property
interface: IDimension
member: FullName
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - documents
related: []
keywords:
  - fullname
  - idimension
  - dimension
  - full
  - name
  - string
  - determine
  - display
  - marked
  - drawing
  - vba
  - block
  - information
  - values
  - all
  - configurations
  - mate
  - definition
  - iterate
  - through
  - dimensions
  - model
  - mid
  - tolerance
readonly: true
---

# IDimension.FullName

Gets the full name of a dimension including the feature and the model.

## Signature

```csharp
System.String FullName {get;}
```
## Parameters

None.

## Return Value

Name of the dimension including the feature and model

## Remarks

The syntax of the name returned is:
<Dimension Name>@<Feature Name>@<Model>
where:
<Dimension Name>
is the name of the dimension as returned from
IDimension::Name
<Feature Name>
is the name of the feature that the dimension is on
<Model>
is the name of the model containing the feature
For example:
"D1@Sketch1@Part4.Part"

## Examples

- Determine if Display Dimension Marked for Drawing (VBA) (Determine_if_Display_Dimension_Marked_for_Drawing_Example_VB.htm)
- Get Block Information (VBA) (Get_Block_Information_Example_VB.htm)
- Get Dimension Values in All Configurations (VBA) (Get_Dimension_Values_in_All_Configurations_Example_VB.htm)
- Get Mate Definition (VBA) (Get_Mate_Definition_Example_VB.htm)
- Iterate Through Dimensions in Model (VBA) (Iterate_Through_Dimensions_in_Model_Example_VB.htm)
- Set Dimensions to Mid-tolerance (VBA) (Set_Dimensions_to_Mid-Tolerance_Example_VB.htm)