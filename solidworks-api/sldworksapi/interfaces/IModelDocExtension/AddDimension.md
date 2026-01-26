---
type: method
interface: IModelDocExtension
member: AddDimension
returns: System.Object
parameters:
  -
    name: X
    type: System.Double
    description: X coordinate of display dimension text
  -
    name: Y
    type: System.Double
    description: Y coordinate of display dimension text
  -
    name: Z
    type: System.Double
    description: Z coordinate of display dimension text
  -
    name: Direction
    type: System.Int32
    description: Direction of dimensioning extension line or rapid dimensioning quadrant as defined in swSmartDimensionDirection_e (see Remarks )
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
  - IModelDocExtension.AddSpecificDimension
  - IModelDocExtension.AddSymmetricDimension
keywords:
  - dimension
  - see
  - also
  - idimension
  - add
  - adddimension
  - imodeldocextension
  - model
  - doc
  - extension
  - double
  - direction
  - int32
  - object
  - create
  - angular
  - vba
  - vb
  - net
---

# IModelDocExtension.AddDimension

Creates a display dimension at the specified location for selected entities.

## Signature

```csharp
System.Object AddDimension( 
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
,
   System.Int32
Direction
)
```
## Parameters

- `X` (System.Double): X coordinate of display dimension text
- `Y` (System.Double): Y coordinate of display dimension text
- `Z` (System.Double): Z coordinate of display dimension text
- `Direction` (System.Int32): Direction of dimensioning extension line or rapid dimensioning quadrant as defined in swSmartDimensionDirection_e (see Remarks )

## Return Value

IDisplayDimension

## Remarks

The X, Y, and Z coordinates of the display dimension text must be appropriate for the specified Direction, or this method fails to add the display dimension.
For parts, Direction specifies the dimensioning manipulator direction that appears in the user interface when an extension line is needed to unambiguously define what to dimension.
For drawings, Direction specifies the rapid dimensioning selector quadrant to which to add the display dimension.
Before calling this method, you must select the entities for which to add a display dimension. Entities must be selected by location and not name. If you specify line names instead of coordinates, the dimensioning routines randomly pick locations on the lines, which can yield unpredictable results during angular dimension creation.
For example, to create an angular dimension between two lines:
Call
IModelDocExtension::SelectByID2
to select a sketch segment of the angle you want to dimension, specifying the line's X, Y, and Z coordinates.
Call IModelDocExtension::SelectByID2 to select the vertex of the angle you want to dimension, specifying the vertex's X, Y, and Z coordinates.
Call this method, specifying the X, Y, Z coordinates of the display dimension text and the Direction of the extension line that is needed to unambiguously define the angle to dimension.
If the pre-selected entities unambiguously define what you wish to dimension, then no extension lines are needed. In that case, call
IModelDoc2::AddDimension2
instead of this method.
NOTE:
To change the angle in an angular dimension to its supplementary angle, use
IDisplayDimension::SupplementaryAngle
.
You should only use this method on visible documents. Before using this method, use
ISldWorks::Visible
to check whether a document is visible.
Before calling this method, you might want to call
ISldWorks::SetUserPreferenceToggle
with
swUserPreferenceToggle_e
.swInputDimValOnCreate to suppress the dialog box that allows the user to type the dimension value.

## Examples

- Create Angular Dimension (VBA) (Create_Angular_Dimension_Example_VB.htm)
- Create Angular Dimension (VB.NET) (Create_Angular_Dimension_Example_VBNET.htm)
- Create Angular Dimension (C#) (Create_Angular_Dimension_Example_CSharp.htm)

## See Also

- `IModelDoc2.AddDiameterDimension2`
- `IModelDoc2.AddHorizontalDimension2`
- `IModelDoc2.AddRadialDimension2`
- `IModelDoc2.AddVerticalDimension2`
- `IModelDoc2.IAddDiameterDimension2`
- `IModelDoc2.IAddHorizontalDimension2`
- `IModelDoc2.IAddRadialDimension2`
- `IModelDoc2.IAddVerticalDimension2`
- `IModelDocExtension.AddSpecificDimension`
- `IModelDocExtension.AddSymmetricDimension`