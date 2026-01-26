---
type: method
interface: IView
member: GetMultiJogLeaderCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetMultiJogLeaders
keywords:
  - multi
  - jog
  - leaders
  - see
  - also
  - imultijogleader
  - drawing
  - views
  - getmultijogleadercount
  - iview
  - view
  - leader
  - count
  - int32
---

# IView.GetMultiJogLeaderCount

Gets the number of multi-jog leaders on this drawing view.

## Signature

```csharp
System.Int32 GetMultiJogLeaderCount()
```
## Parameters

None.

## Return Value

Total number of multi-jog leaders on this drawing view

## Remarks

Call this method before calling
IView::IGetMultiJogLeaders
to determine the size of the array for that method.

## See Also

- `IView.GetMultiJogLeaders`