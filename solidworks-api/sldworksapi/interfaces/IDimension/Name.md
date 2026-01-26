---
type: property
interface: IDimension
member: Name
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - documents
related:
  - IDimension.FullName
keywords:
  - name
  - idimension
  - dimension
  - string
  - block
  - information
  - vba
  - component
  - via
  - display
  - values
  - all
  - configurations
  - drawing
readonly: null
---

# IDimension.Name

Gets or sets the name of a dimension.

## Signature

```csharp
System.String Name {get; set;}
```
## Parameters

None.

## Return Value

Name of the dimension

## Remarks

If setting the name of a dimension, do not include any of the special characters reserved by SOLIDWORKS.

## Examples

- Get Block Information (VBA) (Get_Block_Information_Example_VB.htm)
- Get Component Via Display Dimension (VBA) (Get_Component_Via_Display_Dimension_Example_VB.htm)
- Get Dimension Values in All Configurations (VBA) (Get_Dimension_Values_in_All_Configurations_Example_VB.htm)
- Get Dimension Values in Drawing (VBA) (Get_Dimension_Values_in_Drawing_Example_VB.htm)

## See Also

- `IDimension.FullName`