---
type: method
interface: IDisplayDimension
member: SetDual2
returns: void
parameters:
  -
    name: UseDoc
    type: System.Boolean
    description: True uses the document setting, false uses the opposite of the document setting (see Remarks )
  -
    name: InwardRounding
    type: System.Boolean
    description: True for inward rounding of secondary unit tolerances, false for current document rounding (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.Split
keywords:
  - dimension
  - see
  - also
  - idimension
  - dual
  - setdual2
  - idisplaydimension
  - display
  - dual2
  - use
  - doc
  - boolean
  - inward
  - rounding
  - void
  - decimal
  - units
  - dimensions
  - vba
  - vb
  - net
---

# IDisplayDimension.SetDual2

Controls the display of dual dimensions of this display dimension.

## Signature

```csharp
void SetDual2( 
   System.Boolean
UseDoc
,
   System.Boolean
InwardRounding
)
```
## Parameters

- `UseDoc` (System.Boolean): True uses the document setting, false uses the opposite of the document setting (see Remarks )
- `InwardRounding` (System.Boolean): True for inward rounding of secondary unit tolerances, false for current document rounding (see Remarks )

## Return Value

Unknown.

## Remarks

Dual dimensions can use either the same top, bottom, right, or left setting as the document or an opposite top, bottom, right, or left setting. This method allows you to set a dual dimension to use the current document setting or the opposite setting.
If InwardRounding is false and an override unit is...
Then...
Not specified
Current document rounding prevails
Specified
Rounding setting under
Override Units
in the Dimensions PropertyManager page prevails
Use
IDisplayDimension::GetUseDocDual
to get the current value of this setting.
After using this method, use
IModelDoc2::GraphicsRedraw2
to redraw the graphics window to see your changes.

## Examples

- Set Rounding of Decimal Units in Display Dimensions (VBA) (Set_Rounding_of_Decimal_Units_in_Display_Dimensions_Example_VB.htm)
- Set Rounding of Decimal Units in Display Dimensions (VB.NET) (Set_Rounding_of_Decimal_Units_in_Display_Dimensions_Example_VBNET.htm)
- Set Rounding of Decimal Units in Display Dimensions (C#) (Set_Rounding_of_Decimal_Units_in_Display_Dimensions_Example_CSharp.htm)

## See Also

- `IDisplayDimension.Split`