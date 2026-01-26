---
type: method
interface: IDisplayDimension
member: GetDimension2
returns: Dimension
parameters:
  -
    name: Index
    type: System.Int32
    description: 0 to get the first chamfer display dimension 1 to get the second chamfer display dimension
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getdimension2
  - idisplaydimension
  - display
  - dimension
  - dimension2
  - index
  - int32
  - sensor
  - vb
  - net
  - vba
---

# IDisplayDimension.GetDimension2

Gets the model dimension used to create this display dimension.

## Signature

```csharp
Dimension GetDimension2( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): 0 to get the first chamfer display dimension 1 to get the second chamfer display dimension

## Return Value

Dimension

## Remarks

The Index argument is valid for chamfer display dimensions only. If the display dimension is not a chamfer display dimension, then Index is ignored. To get both chamfer display dimensions, you must call this property twice; specify 0 for Index in the first call and 1 for Index in the second call.
SOLIDWORKS can display a dimension more than once. For example, a base-extrude dimension can be brought into three different views on a drawing. These three dimensions are referred to as display dimensions and are represented by the DisplayDimension object in the SOLIDWORKS API. The original base-extrude dimension is represented by the Dimension object in the SOLIDWORKS API.

## Examples

- Get and Set Sensor (C#) (Get_and_Set_Sensor_Example_CSharp.htm)
- Get and Set Sensor (VB.NET) (Get_and_Set_Sensor_Example_VBNET.htm)
- Get and Set Sensor (VBA) (Get_and_Set_Sensor_Example_VB.htm)