---
type: method
interface: IModelDoc2
member: AddDimension2
returns: System.Object
parameters:
  -
    name: X
    type: System.Double
    description: Dimension text location in meters
  -
    name: Y
    type: System.Double
    description: Dimension text location in meters
  -
    name: Z
    type: System.Double
    description: Dimension text location in meters
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - dimensions
  - documents
  - ui
related:
  - IDrawingDoc.InsertChainDim
  - IModelDoc2.AddDiameterDimension2
  - IModelDoc2.AddHorizontalDimension2
  - IModelDoc2.AddRadialDimension2
  - IModelDoc2.AddVerticalDimension2
  - IModelDoc2.IAddDiameterDimension2
  - IModelDoc2.IAddDimension2
  - IModelDoc2.IAddHorizontalDimension2
  - IModelDoc2.IAddRadialDimension2
  - IModelDoc2.IAddVerticalDimension2
  - IModelDocExtension.AddSpecificDimension
keywords:
  - dimension
  - see
  - also
  - idimension
  - add
  - adddimension2
  - imodeldoc2
  - model
  - doc2
  - dimension2
  - double
  - object
---

# IModelDoc2.AddDimension2

Creates a display dimension at the specified location for selected entities.

## Signature

```csharp
System.Object AddDimension2( 
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

- `X` (System.Double): Dimension text location in meters
- `Y` (System.Double): Dimension text location in meters
- `Z` (System.Double): Dimension text location in meters

## Return Value

Newly created dimension

## Remarks

Before calling this method, you must select the entities for which to add a display dimension.
If extension lines are needed during dimensioning because the selected entities do not unambiguously define what needs to be dimensioned, call
IModelDocExtension::AddDimension
instead of this method.
To dimension, make selections based on location and not name. For example, creating an angular dimension between two lines gets different results based on which line endpoints are selected. Therefore, if you are using
IModelDocExtension::SelectByID2
to select the entities for dimensioning, then you should specify the X, Y,  and Z selection coordinates. You must also leave the object name argument empty, because if you pass the object name to IModelDocExtension::SelectByID2, then the selection routines use the object name instead of the coordinates to locate that item.
NOTE:
To change the angle in an angular dimension to its supplementary angle, use
IDisplayDimension::SupplementaryAngle
.
Because coordinates are ignored when the object name is passed, the dimensioning routines are not able to use a specific selection location for the dimension. This causes unpredictable results during dimension creation. IModelDocExtension::SelectByID2 randomly selects the line endpoint.
You should only use this method on visible documents. Before using this method, check to see if the document is visible by using
ISldWorks::Visible
.
When you use this method, you might also want to use
ISldWorks::SetUserPreferenceToggle
with swInputDimValOnCreate to suppress the dialog box that lets the user type a dimension value.

## See Also

- `IDrawingDoc.InsertChainDim`
- `IModelDoc2.AddDiameterDimension2`
- `IModelDoc2.AddHorizontalDimension2`
- `IModelDoc2.AddRadialDimension2`
- `IModelDoc2.AddVerticalDimension2`
- `IModelDoc2.IAddDiameterDimension2`
- `IModelDoc2.IAddDimension2`
- `IModelDoc2.IAddHorizontalDimension2`
- `IModelDoc2.IAddRadialDimension2`
- `IModelDoc2.IAddVerticalDimension2`
- `IModelDocExtension.AddSpecificDimension`