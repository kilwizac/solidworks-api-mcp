---
type: method
interface: IView
member: GetDimensionDisplayString4
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
  - drawings
  - ui
related:
  - IView.GetDimensionDisplayInfo5
  - IView.GetDimensionDisplayInfoSize2
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
  - getdimensiondisplaystring4
  - iview
  - view
  - dimension
  - display
  - string4
  - object
---

# IView.GetDimensionDisplayString4

Obsolete. Superseded by IView::GetDimensionDisplayString5.

## Signature

```csharp
System.Object GetDimensionDisplayString4()
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

- `IView.GetDimensionDisplayInfo5`
- `IView.GetDimensionDisplayInfoSize2`
- `IView.GetDimensionIds4`
- `IView.GetDimensionInfo6`
- `IView.GetDimensionString4`
- `IView.GetFirstDisplayDimension5`
- `IView.IGetDimensionDisplayInfo5`
- `IView.IGetDimensionIds4`
- `IView.IGetDimensionInfo6`
- `IView.IGetDimensionString4`
- `IView.ProjectedDimensions`