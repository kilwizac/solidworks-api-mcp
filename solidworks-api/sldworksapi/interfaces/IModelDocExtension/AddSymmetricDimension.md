---
type: method
interface: IModelDocExtension
member: AddSymmetricDimension
returns: System.Object
parameters:
  -
    name: X
    type: System.Double
    description: X coordinate of the symmetrical angular dimension
  -
    name: Y
    type: System.Double
    description: Y coordinate of the symmetrical angular dimension
  -
    name: Z
    type: System.Double
    description: Z coordinate of the symmetrical angular dimension
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - dimensions
  - ui
related:
  - IModelDoc2.AddDiameterDimension2
  - IModelDoc2.AddHorizontalDimension2
  - IModelDoc2.AddRadialDimension2
  - IModelDoc2.AddVerticalDimension2
  - IModelDoc2.IAddDiameterDimension2
  - IModelDoc2.IAddHorizontalDimension2
  - IModelDoc2.IAddRadialDimension2
  - IModelDoc2.IAddVerticalDimension2
  - IModelDocExtension.AddDimension
  - IModelDocExtension.AddSpecificDimension
keywords:
  - dimension
  - see
  - also
  - idimension
  - symmetrical
  - angular
  - add
  - addsymmetricdimension
  - imodeldocextension
  - model
  - doc
  - extension
  - symmetric
  - double
  - object
  - create
  - full
  - vb
  - net
  - vba
---

# IModelDocExtension.AddSymmetricDimension

Creates a full symmetrical angular dimension at the specified location for the selected entities.

## Signature

```csharp
System.Object AddSymmetricDimension( 
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
)
```
## Parameters

- `X` (System.Double): X coordinate of the symmetrical angular dimension
- `Y` (System.Double): Y coordinate of the symmetrical angular dimension
- `Z` (System.Double): Z coordinate of the symmetrical angular dimension

## Return Value

Symmetrical angular dimension

## Remarks

This type of dimensioning is helpful when you create a sketch for revolved geometry that requires a full angular dimension.
Before calling this method, you might want to call
ISldWorks::SetUserPreferenceToggle
with
swUserPreferenceToggle_e
.swInputDimValOnCreate to suppress the dialog box that allows the user to enter the dimension value.

## Examples

- Create Full Symmetrical Angular Dimension (C#) (Create_Full_Symmetrical_Angular_Dimension_Example_CSharp.htm)
- Create Full Symmetrical Angular Dimension (VB.NET) (Create_Full_Symmetrical_Angular_Dimension_Example_VBNET.htm)
- Create Full Symmetrical Angular Dimension (VBA) (Create_Full_Symmetrical_Angular_Dimension_Example_VB.htm)

## See Also

- `IModelDoc2.AddDiameterDimension2`
- `IModelDoc2.AddHorizontalDimension2`
- `IModelDoc2.AddRadialDimension2`
- `IModelDoc2.AddVerticalDimension2`
- `IModelDoc2.IAddDiameterDimension2`
- `IModelDoc2.IAddHorizontalDimension2`
- `IModelDoc2.IAddRadialDimension2`
- `IModelDoc2.IAddVerticalDimension2`
- `IModelDocExtension.AddDimension`
- `IModelDocExtension.AddSpecificDimension`