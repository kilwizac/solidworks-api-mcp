---
type: method
interface: IView
member: GetFirstDisplayDimension5
returns: DisplayDimension
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
  - drawings
  - ui
related:
  - IView.GetDimensionCount4
  - IView.GetDimensionDisplayInfo5
  - IView.GetDimensionDisplayInfoSize2
  - IView.GetDimensionDisplayString4
  - IView.GetDimensionIds4
  - IView.GetDimensionInfo6
  - IView.GetDimensionString4
  - IView.GetDisplayDimensions
  - IView.IGetDimensionDisplayInfo5
  - IView.IGetDimensionDisplayString4
  - IView.IGetDimensionIds4
  - IView.IGetDimensionInfo6
  - IView.IGetDisplayDimensions
  - IView.ProjectedDimensions
keywords:
  - getfirstdisplaydimension5
  - iview
  - view
  - first
  - display
  - dimension5
  - dimension
---

# IView.GetFirstDisplayDimension5

Obsolete. Superseded by IView::GetFirstDisplayDimension6.

## Signature

```csharp
DisplayDimension GetFirstDisplayDimension5()
```
## Parameters

None.

## Return Value

First display dimension

## Remarks

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

## See Also

- `IView.GetDimensionCount4`
- `IView.GetDimensionDisplayInfo5`
- `IView.GetDimensionDisplayInfoSize2`
- `IView.GetDimensionDisplayString4`
- `IView.GetDimensionIds4`
- `IView.GetDimensionInfo6`
- `IView.GetDimensionString4`
- `IView.GetDisplayDimensions`
- `IView.IGetDimensionDisplayInfo5`
- `IView.IGetDimensionDisplayString4`
- `IView.IGetDimensionIds4`
- `IView.IGetDimensionInfo6`
- `IView.IGetDisplayDimensions`
- `IView.ProjectedDimensions`