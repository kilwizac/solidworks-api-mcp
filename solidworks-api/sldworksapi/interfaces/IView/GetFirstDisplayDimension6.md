---
type: method
interface: IView
member: GetFirstDisplayDimension6
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - drawings
  - ui
related:
  - IView.GetDimensionCount4
  - IView.GetDimensionDisplayInfo5
  - IView.GetDimensionDisplayInfoSize2
  - IView.GetDimensionDisplayString5
  - IView.GetDimensionIds4
  - IView.GetDimensionInfo7
  - IView.GetDimensionString4
  - IView.GetDisplayDimensions
  - IView.ProjectedDimensions
keywords:
  - display
  - dimensions
  - see
  - also
  - idisplaydimension
  - drawing
  - views
  - iview
  - view
  - getfirstdisplaydimension6
  - first
  - dimension6
  - object
  - dimension
  - values
  - vba
---

# IView.GetFirstDisplayDimension6

Gets the first display dimension in this drawing view.

## Signature

```csharp
System.Object GetFirstDisplayDimension6()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

This method obsoletes IView::GetFirstDisplayDimension5 by supporting inactive sheets.
A SOLIDWORKS dimension can be displayed more than once. For example, the base-extrude dimension could be brought into three different views on a drawing. These three dimensions are referred to as display dimensions and are represented by the
IDisplayDimension
object in the SOLIDWORKS API. The original base-extrude dimension is represented by the
IDimension
object in the SOLIDWORKS API.
This method displays:
dimensions on both the sheet and sheet format.
suppressed dimensions.
Call
IDisplayDimension::GetNext5
to get the next display dimension on this drawing sheet.
Do not use
IAnnotation::Visible
property to modify this method's return value.

## Examples

- Get Dimension Values in Drawing (VBA) (Get_Dimension_Values_in_Drawing_Example_VB.htm)

## See Also

- `IView.GetDimensionCount4`
- `IView.GetDimensionDisplayInfo5`
- `IView.GetDimensionDisplayInfoSize2`
- `IView.GetDimensionDisplayString5`
- `IView.GetDimensionIds4`
- `IView.GetDimensionInfo7`
- `IView.GetDimensionString4`
- `IView.GetDisplayDimensions`
- `IView.ProjectedDimensions`