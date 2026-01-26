---
type: method
interface: IDisplayDimension
member: GetChamferUnits
returns: System.Boolean
parameters:
  -
    name: LengthUnit
    type: System.Int32
    description: Unit of length as defined in swLengthUnit_e
  -
    name: AngularUnit
    type: System.Int32
    description: Unit of angle as defined in swAngleUnit_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.ChamferPrecision
  - IDisplayDimension.GetUnits
keywords:
  - getchamferunits
  - idisplaydimension
  - display
  - dimension
  - chamfer
  - units
  - length
  - unit
  - int32
  - angular
  - boolean
  - vb
  - net
  - vba
---

# IDisplayDimension.GetChamferUnits

Gets the local units of measurement for a chamfer display dimension.

## Signature

```csharp
System.Boolean GetChamferUnits( 
   out System.Int32
LengthUnit
,
   out System.Int32
AngularUnit
)
```
## Parameters

- `LengthUnit` (System.Int32): Unit of length as defined in swLengthUnit_e
- `AngularUnit` (System.Int32): Unit of angle as defined in swAngleUnit_e

## Return Value

True if successful, false if not

## Remarks

The unit display setting of a chamfer display dimension is controlled by a value stored in one of two places: on the owning document or on the individual display dimension. Use
IDisplayDimension::GetUseDocUnits
to determine whether the units settings are local or from the owning document. If IDisplayDimension::GetUseDocUnits returns true, then the units settings are from the owning document, and this API returns -1 for both length and angle units of measurement.
Local unit information for a chamfer display dimension is in force when Override Units is selected on the Other tab of the dimension's PropertyManager page. If Override Units is selected, then this API returns units as defined in swLengthUnit_e (length measurement) and swAngleUnit_e (angle measurement).

## Examples

- Get Chamfer Display Dimension (C#) (Get_Chamfer_Display_Dimension_Example_CSharp.htm)
- Get Chamfer Display Dimension (VB.NET) (Get_Chamfer_Display_Dimension_Example_VBNET.htm)
- Get Chamfer Display Dimension (VBA) (Get_Chamfer_Display_Dimension_Example_VB.htm)

## See Also

- `IDisplayDimension.ChamferPrecision`
- `IDisplayDimension.GetUnits`