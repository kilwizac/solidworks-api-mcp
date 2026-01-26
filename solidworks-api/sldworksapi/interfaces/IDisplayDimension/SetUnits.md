---
type: method
interface: IDisplayDimension
member: SetUnits
returns: System.Int32
parameters:
  -
    name: UseDoc
    type: System.Boolean
    description: True uses the document settings for units, false uses the setting values passed to the arguments (see Remarks )
  -
    name: UType
    type: System.Int32
    description: Unit display setting as defined in swLengthUnits_e or swAngleUnits_e
  -
    name: FractBase
    type: System.Int32
    description: Decimal or fraction display setting as defined in swFractionDisplay_e
  -
    name: FractDenom
    type: System.Int32
    description: Denominator for fraction display
  -
    name: RoundToFraction
    type: System.Boolean
    description: True rounds values to the nearest fraction, false displays fractions only if the values are exact
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.GetUnits
  - IDisplayDimension.GetUseDocUnits
keywords:
  - setunits
  - idisplaydimension
  - display
  - dimension
  - units
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
---

# IDisplayDimension.SetUnits

Obsolete. Superseded by IDisplayDimension::SetUnits2.

## Signature

```csharp
System.Int32 SetUnits( 
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
)
```
## Parameters

- `UseDoc` (System.Boolean): True uses the document settings for units, false uses the setting values passed to the arguments (see Remarks )
- `UType` (System.Int32): Unit display setting as defined in swLengthUnits_e or swAngleUnits_e
- `FractBase` (System.Int32): Decimal or fraction display setting as defined in swFractionDisplay_e
- `FractDenom` (System.Int32): Denominator for fraction display
- `RoundToFraction` (System.Boolean): True rounds values to the nearest fraction, false displays fractions only if the values are exact

## Return Value

Return status (see Remarks )

## Remarks

The unit display settings of a display dimension are controlled by a value stored in one of two places: on the owning document, or on the individual display dimension. This method allows you to determine which setting to use, the document default or the values specified by UType
,
FractBase
,
FractDenom
,
and RoundToFraction.
If the UseDoc argument is true, then the display dimension unit information follows the document settings, and SOLIDWORKS ignores the remaining arguments. SOLIDWORKS also removes any local settings so that if you switch back to the local settings, they are set to default values.
The UType argument indicates the units. Depending on the type of dimension (angular or linear), this parameter takes a value from
swLengthUnits_e
or
swAngleUnits_e
. If the specified value is invalid, SOLIDWORKS does not change the existing setting and returns an error in the return value.
The FractBase argument indicates whether the dimension is displayed as a fraction or a decimal. This must take a value from
swFractionDisplay_e
. SOLIDWORKS displays this value as a fraction only if it can be precisely represented as a fraction based on the fraction denominator setting specified in FractDenom. However, if the RoundToFraction argument is true, then SOLIDWORKS forces fraction display by rounding the value to the nearest fraction.
The FractDenom argument indicates the fraction precision by specifying the largest fraction denominator used (for example, 4 for 1/4 or 32 for 1/32). Fraction display is valid only if UType is swINCHES or swFEETINCHES.
The return value indicates the success or failure of this function. It may take one of the following values:
-2
Command failed because UType is invalid
-1
Command failed for an unknown reason
0
Command was successful
After using this method, use
IModelDoc2::GraphicsRedraw2
to redraw the graphics window to see your changes.

## See Also

- `IDisplayDimension.GetUnits`
- `IDisplayDimension.GetUseDocUnits`