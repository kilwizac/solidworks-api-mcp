---
type: method
interface: IView
member: IGetDimensionDisplayString4
returns: System.String
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
  - IView.GetDimensionDisplayString4
  - IView.GetDimensionIds4
  - IView.GetDimensionInfo6
  - IView.GetDimensionString4
  - IView.GetFirstDisplayDimension5
  - IView.IGetDimensionDisplayInfo5
  - IView.IGetDimensionIds4
  - IView.IGetDimensionInfo6
  - IView.IGetDimensionString4
  - IView.ProjectedDimensions
keywords:
  - dimension
  - see
  - also
  - idimension
  - drawing
  - sheets
  - views
  - view
  - iview
  - dimensions
  - sheet
  - isheet
  - igetdimensiondisplaystring4
  - display
  - string4
  - string
---

# IView.IGetDimensionDisplayString4

Gets all of the dimension text in the current drawing sheet or the current drawing view.

## Signature

```csharp
System.String IGetDimensionDisplayString4()
```
## Parameters

None.

## Return Value

Array of strings containing the dimension text (see Remarks )

## Remarks

For each dimension in the drawing sheet or drawing view, this method returns 10 strings. If any of the dimension strings are not used, then those strings are returned as empty strings.
[
value1, tolMax1 tolMin1, value2, tolMax2, tolMin2, prefix, suffix, callout1, callout2
]
This set of data is returned for each dimension in the view. See
IView::GetDimensionCount4
to determine the number of dimensions in the drawing sheet or drawing view.
NOTES:
A previous version of this method,
IView::GetDimensionDisplayString2
or
IView::IGetDimensionDisplayString2
, detects and overlooks dangling dimensions. These method, IView::GetDimensionDisplayString4 and
IView::IGetDimensionDisplayString4
, do not overlook nor do they indicate that any dimensions are dangling. Use IView::GetDimensionDisplayString2 if you need dangling dimensions detected and overlooked.
This method does not support
hole callouts
.

## See Also

- `IView.GetDimensionCount4`
- `IView.GetDimensionDisplayInfo5`
- `IView.GetDimensionDisplayInfoSize2`
- `IView.GetDimensionDisplayString4`
- `IView.GetDimensionIds4`
- `IView.GetDimensionInfo6`
- `IView.GetDimensionString4`
- `IView.GetFirstDisplayDimension5`
- `IView.IGetDimensionDisplayInfo5`
- `IView.IGetDimensionIds4`
- `IView.IGetDimensionInfo6`
- `IView.IGetDimensionString4`
- `IView.ProjectedDimensions`