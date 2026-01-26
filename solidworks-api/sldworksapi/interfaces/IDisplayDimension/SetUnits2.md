---
type: method
interface: IDisplayDimension
member: SetUnits2
returns: System.Int32
parameters:
  -
    name: UseDoc
    type: System.Boolean
    description: True to use the document settings for units, false to use the setting values passed to this method (see Remarks )
  -
    name: UType
    type: System.Int32
    description: Unit display setting as defined in swLengthUnit_e or swAngleUnit_e ; valid only if UseDoc is false
  -
    name: FractBase
    type: System.Int32
    description: Decimal or fraction display setting as defined in swFractionDisplay_e ; valid only if UseDoc is false
  -
    name: FractDenom
    type: System.Int32
    description: Denominator for fraction display; valid only if UseDoc is false
  -
    name: RoundToFraction
    type: System.Boolean
    description: True to round values to the nearest fraction, false to display fractions only if the values are exact; valid only if UseDoc is false
  -
    name: DecimalRounding
    type: System.Int32
    description: Decimal rounding as defined by swUnitsDecimalRounding_e ; valid only if FractBase is swFractionDisplay_e.swDECIMAL and UseDoc is false
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.GetUnits
  - IDisplayDimension.GetUseDocUnits
keywords:
  - setunits2
  - idisplaydimension
  - display
  - dimension
  - units2
  - use
  - doc
  - boolean
  - type
  - int32
  - fract
  - base
  - denom
  - round
  - fraction
  - decimal
  - rounding
  - units
  - dimensions
  - vba
  - vb
  - net
---

# IDisplayDimension.SetUnits2

Sets the unit display characteristics of this display dimension.

## Signature

```csharp
System.Int32 SetUnits2( 
   System.Boolean
UseDoc
,
   System.Int32
UType
,
   System.Int32
FractBase
,
   System.Int32
FractDenom
,
   System.Boolean
RoundToFraction
,
   System.Int32
DecimalRounding
)
```
## Parameters

- `UseDoc` (System.Boolean): True to use the document settings for units, false to use the setting values passed to this method (see Remarks )
- `UType` (System.Int32): Unit display setting as defined in swLengthUnit_e or swAngleUnit_e ; valid only if UseDoc is false
- `FractBase` (System.Int32): Decimal or fraction display setting as defined in swFractionDisplay_e ; valid only if UseDoc is false
- `FractDenom` (System.Int32): Denominator for fraction display; valid only if UseDoc is false
- `RoundToFraction` (System.Boolean): True to round values to the nearest fraction, false to display fractions only if the values are exact; valid only if UseDoc is false
- `DecimalRounding` (System.Int32): Decimal rounding as defined by swUnitsDecimalRounding_e ; valid only if FractBase is swFractionDisplay_e.swDECIMAL and UseDoc is false

## Return Value

Return status (see Remarks )

## Remarks

The unit display settings of a display dimension are controlled by a value stored in one of two places: in the owning document or in the individual display dimension. This method allows you to determine which setting to use, the document default or the values specified by UType
,
FractBase
,
FractDenom
,
RoundToFraction, and DecimalRounding.
If UseDoc is true, then the display dimension unit information follows the document settings, and SOLIDWORKS ignores the remaining arguments. SOLIDWORKS also removes any local settings so that if you switch back to the local settings, they are set to default values.
UType indicates the units. Depending on the type of dimension (angular or linear), this parameter takes a value from
swLengthUnit_e
or
swAngleUnit_e
. If the specified value is invalid, SOLIDWORKS does not change the existing setting, and this method returns an error.
FractBase indicates whether the dimension is displayed as a fraction or a decimal. SOLIDWORKS displays the dimension as a fraction only if it can precisely represent the dimension as a fraction based on the FractDenom setting. However, if the RoundToFraction argument is true, then SOLIDWORKS displays the dimension rounded to the nearest fraction.
FractDenom indicates the fraction precision by specifying the largest fraction denominator used (for example, 4 for 1/4 or 32 for 1/32). Fraction display is valid only if UType is swINCHES or swFEETINCHES.
The return value indicates the success or failure of this method as follows:
If Return Value is...
Then this method...
2
Failed because UType is invalid
1
Failed for an unknown reason
0
Succeeded
After using this method, use
IModelDoc2::GraphicsRedraw2
to redraw the graphics window to see your changes.

## Examples

- Set Rounding of Decimal Units in Display Dimensions (VBA) (Set_Rounding_of_Decimal_Units_in_Display_Dimensions_Example_VB.htm)
- Set Rounding of Decimal Units in Display Dimensions (VB.NET) (Set_Rounding_of_Decimal_Units_in_Display_Dimensions_Example_VBNET.htm)
- Set Rounding of Decimal Units in Display Dimensions (C#) (Set_Rounding_of_Decimal_Units_in_Display_Dimensions_Example_CSharp.htm)

## See Also

- `IDisplayDimension.GetUnits`
- `IDisplayDimension.GetUseDocUnits`