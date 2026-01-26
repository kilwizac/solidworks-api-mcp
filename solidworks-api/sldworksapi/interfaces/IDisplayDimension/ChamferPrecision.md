---
type: property
interface: IDisplayDimension
member: ChamferPrecision
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: 0 for length, 1 for angle
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.GetChamferUnits
keywords:
  - chamferprecision
  - idisplaydimension
  - display
  - dimension
  - chamfer
  - precision
  - index
  - int32
  - vb
  - net
  - vba
readonly: null
---

# IDisplayDimension.ChamferPrecision

Gets or sets the precision of the length and angle values in a chamfer display dimension.

## Signature

```csharp
System.Int32 ChamferPrecision( 
   System.Int32
Index
) {get; set;}
```
## Parameters

- `Index` (System.Int32): 0 for length, 1 for angle

## Return Value

Number of decimal places to display for the value at the specified index

## Examples

- Get Chamfer Display Dimension (C#) (Get_Chamfer_Display_Dimension_Example_CSharp.htm)
- Get Chamfer Display Dimension (VB.NET) (Get_Chamfer_Display_Dimension_Example_VBNET.htm)
- Get Chamfer Display Dimension (VBA) (Get_Chamfer_Display_Dimension_Example_VB.htm)

## See Also

- `IDisplayDimension.GetChamferUnits`