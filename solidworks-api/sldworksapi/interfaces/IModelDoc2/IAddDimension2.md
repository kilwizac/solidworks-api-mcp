---
type: method
interface: IModelDoc2
member: IAddDimension2
returns: DisplayDimension
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
deprecated: true
since_version: unknown
categories:
  - core
  - dimensions
  - documents
  - ui
related:
  - IModelDoc2.AddDiameterDimension2
  - IModelDoc2.AddDimension2
  - IModelDoc2.AddHorizontalDimension2
  - IModelDoc2.AddRadialDimension2
  - IModelDoc2.AddVerticalDimension2
  - IModelDoc2.IAddDiameterDimension2
  - IModelDoc2.IAddHorizontalDimension2
  - IModelDoc2.IAddRadialDimension2
  - IModelDoc2.IAddVerticalDimension2
keywords:
  - iadddimension2
  - imodeldoc2
  - model
  - doc2
  - add
  - dimension2
  - double
  - display
  - dimension
---

# IModelDoc2.IAddDimension2

Obsolete. Superseded by IModelDocExtension::AddDimension.

## Signature

```csharp
DisplayDimension IAddDimension2( 
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

You should only use this method on the visible document. Before using this method, you can check to see if the document is visible by using
ISldWorks::Visible
.
Dimensions are created based on selection location. For example, creating an angular dimension between two lines gets different results based on which line endpoints are selected. Therefore, if you are using
IModelDocExtension::SelectByID2
to select the entities for dimensioning, then you should specify the XYZ selection coordinates. You must also leave the object name argument empty, because if you pass the object name to IModelDocExtension::SelectByID2, then the selection routines tries to locate that item without using the coordinates.
Because coordinates are ignored when the object name is passed, the dimensioning routines are not able to use a specific selection location for the dimension. This causes unpredictable results in your dimension creation because you cannot be sure which line endpoint is selected by IModelDocExtension::SelectByID2.
When you use this method, you might also want to use
ISldWorks::SetUserPreferenceToggle
swInputDimValOnCreate to suppress the dialog box that lets the user enter the dimension value.

## See Also

- `IModelDoc2.AddDiameterDimension2`
- `IModelDoc2.AddDimension2`
- `IModelDoc2.AddHorizontalDimension2`
- `IModelDoc2.AddRadialDimension2`
- `IModelDoc2.AddVerticalDimension2`
- `IModelDoc2.IAddDiameterDimension2`
- `IModelDoc2.IAddHorizontalDimension2`
- `IModelDoc2.IAddRadialDimension2`
- `IModelDoc2.IAddVerticalDimension2`