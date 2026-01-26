---
type: method
interface: IView
member: GetCenterLineCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetCenterLines
keywords:
  - centerlines
  - see
  - also
  - icenterline
  - number
  - getcenterlinecount
  - iview
  - view
  - center
  - line
  - count
  - int32
---

# IView.GetCenterLineCount

Gets the number of centerlines on this drawing view.

## Signature

```csharp
System.Int32 GetCenterLineCount()
```
## Parameters

None.

## Return Value

Number of centerlines

## Remarks

Call this method before calling
IView::IGetCenterLines
to determine the size of the array for that method.

## See Also

- `IView.GetCenterLines`