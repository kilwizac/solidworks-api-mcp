---
type: method
interface: IView
member: IGetDisplayData3
returns: DisplayData
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetDisplayData3
keywords:
  - display
  - data
  - see
  - idisplaydata
  - igetdisplaydata3
  - iview
  - view
  - data3
---

# IView.IGetDisplayData3

Gets the the IDisplayData object for this drawing view containing only those model items that are visible in the view.

## Signature

```csharp
DisplayData IGetDisplayData3()
```
## Parameters

None.

## Return Value

IDisplayData object

## Remarks

The data kept with the
IDisplayData
object is strictly for display purposes and allows you to recreate unintelligent geometry. It does not provide associations or detailed information about the geometry.
This method supersedes the now obsolete
IView::IGetDisplayData2
and should be used in its place. The previous version of this method returned model items that were not imported to the drawing view and, therefore, not visible in the drawing view.

## See Also

- `IView.GetDisplayData3`