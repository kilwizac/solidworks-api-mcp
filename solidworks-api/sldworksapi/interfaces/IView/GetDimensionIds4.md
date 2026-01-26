---
type: method
interface: IView
member: GetDimensionIds4
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
  - IView.GetDimensionDisplayInfo5
  - IView.GetDimensionDisplayInfoSize2
  - IView.GetDimensionDisplayString4
  - IView.GetDimensionString4
  - IView.GetFirstDisplayDimension5
  - IView.IGetDimensionDisplayInfo5
  - IView.IGetDimensionDisplayString4
  - IView.IGetDimensionIds4
  - IView.IGetDimensionString4
  - IView.ProjectedDimensions
keywords:
  - sheet
  - see
  - also
  - isheet
  - dimensions
  - dimension
  - idimension
  - drawing
  - views
  - view
  - iview
  - sheets
  - getdimensionids4
  - ids4
  - object
---

# IView.GetDimensionIds4

Gets the dimension names from the current drawing sheet or the current drawing view.

## Signature

```csharp
System.Object GetDimensionIds4()
```
## Parameters

None.

## Return Value

Array of strings; each string represents one dimension name from the current drawing sheet or current drawing view

## Remarks

The order of the dimension names returned align with the order of information returned from
IView::GetDimensionInfo6
or
IView::IGetDimensionInfo6
. This alignment of information is valid as long as the calls to this method and IView::GetDimensionInfo6 or IView::IGetDimensionInfo6 are made consecutively.
One string is returned for each dimension in the view. See
IView::GetDimensionCount4
to determine the number of dimensions in the view.

## See Also

- `IView.GetDimensionDisplayInfo5`
- `IView.GetDimensionDisplayInfoSize2`
- `IView.GetDimensionDisplayString4`
- `IView.GetDimensionString4`
- `IView.GetFirstDisplayDimension5`
- `IView.IGetDimensionDisplayInfo5`
- `IView.IGetDimensionDisplayString4`
- `IView.IGetDimensionIds4`
- `IView.IGetDimensionString4`
- `IView.ProjectedDimensions`