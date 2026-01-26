---
type: method
interface: IView
member: GetDimensionString4
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
  - IView.GetDimensionDisplayString4
  - IView.GetDimensionIds4
  - IView.GetDimensionInfo6
  - IView.GetFirstDisplayDimension5
  - IView.IGetDimensionDisplayInfo5
  - IView.IGetDimensionDisplayString4
  - IView.IGetDimensionIds4
  - IView.IGetDimensionInfo6
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
  - sheets
  - view
  - iview
  - views
  - getdimensionstring4
  - string4
  - object
---

# IView.GetDimensionString4

Gets the strings containing the text associated with each dimension in the current drawing sheet or the current drawing view.

## Signature

```csharp
System.Object GetDimensionString4()
```
## Parameters

None.

## Return Value

Array of strings containing the text associated with each dimension

## Remarks

Use
IView::GetDimensionCount4
to determine the number of strings to be returned.
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
- `IView.GetFirstDisplayDimension5`
- `IView.IGetDimensionDisplayInfo5`
- `IView.IGetDimensionDisplayString4`
- `IView.IGetDimensionIds4`
- `IView.IGetDimensionInfo6`
- `IView.IGetDimensionString4`
- `IView.ProjectedDimensions`