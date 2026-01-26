---
type: method
interface: IDisplayDimension
member: GetUseDocUnits
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.GetUnits
keywords:
  - getusedocunits
  - idisplaydimension
  - display
  - dimension
  - use
  - doc
  - units
  - boolean
  - chamfer
  - vb
  - net
  - vba
---

# IDisplayDimension.GetUseDocUnits

Gets whether this display dimension uses the document default setting for units.

## Signature

```csharp
System.Boolean GetUseDocUnits()
```
## Parameters

None.

## Return Value

True if this display dimension uses the document setting, false if it uses the local display dimension setting

## Remarks

The unit display settings of a display dimension are controlled by a value stored in one of two places: on the owning document or on the individual display dimension. This method determines whether this display dimension uses the default document setting for units.
Use
IDisplayDimension::SetUnits
to set this value.

## Examples

- Get Chamfer Display Dimension (C#) (Get_Chamfer_Display_Dimension_Example_CSharp.htm)
- Get Chamfer Display Dimension (VB.NET) (Get_Chamfer_Display_Dimension_Example_VBNET.htm)
- Get Chamfer Display Dimension (VBA) (Get_Chamfer_Display_Dimension_Example_VB.htm)

## See Also

- `IDisplayDimension.GetUnits`