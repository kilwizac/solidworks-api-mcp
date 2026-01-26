---
type: method
interface: IView
member: GetDisplayData3
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.IGetDisplayData3
keywords:
  - getdisplaydata3
  - iview
  - view
  - display
  - data3
  - object
---

# IView.GetDisplayData3

Obsolete. Superseded by IView::GetDisplayData4.

## Signature

```csharp
System.Object GetDisplayData3()
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
IView::GetDisplayData2
and should be used in its place. The previous version of this method returned model items that were not imported to the drawing view and, therefore, not visible in the drawing view.

## See Also

- `IView.IGetDisplayData3`