---
type: method
interface: IView
member: IGetDimensionIds4
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
  - IView.GetDimensionDisplayInfo5
  - IView.GetDimensionDisplayInfoSize2
  - IView.GetDimensionDisplayString4
  - IView.GetDimensionInfo6
  - IView.GetDimensionString4
  - IView.GetFirstDisplayDimension5
  - IView.IGetDimensionDisplayInfo5
  - IView.IGetDimensionDisplayString4
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
  - igetdimensionids4
  - ids4
  - string
---

# IView.IGetDimensionIds4

Gets the dimension names from the current drawing sheet or the current drawing view.

## Signature

```csharp
System.String IGetDimensionIds4()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of strings; each string represents one dimension name from the current drawing sheet or current drawing view VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

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
- `IView.GetDimensionInfo6`
- `IView.GetDimensionString4`
- `IView.GetFirstDisplayDimension5`
- `IView.IGetDimensionDisplayInfo5`
- `IView.IGetDimensionDisplayString4`
- `IView.IGetDimensionInfo6`
- `IView.IGetDimensionString4`
- `IView.ProjectedDimensions`