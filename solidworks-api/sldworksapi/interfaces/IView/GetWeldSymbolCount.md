---
type: method
interface: IView
member: GetWeldSymbolCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetWeldSymbols
keywords:
  - getweldsymbolcount
  - iview
  - view
  - weld
  - symbol
  - count
  - int32
---

# IView.GetWeldSymbolCount

Gets the number of weld symbols on this drawing view.

## Signature

```csharp
System.Int32 GetWeldSymbolCount()
```
## Parameters

None.

## Return Value

Total number of weld symbols on this drawing view

## Remarks

Call this method before calling
IView::IGetWeldSymbols
to determine the size of the array for that method.

## See Also

- `IView.GetWeldSymbols`