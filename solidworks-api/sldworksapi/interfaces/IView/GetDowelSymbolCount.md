---
type: method
interface: IView
member: GetDowelSymbolCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetDowelSymbols
keywords:
  - dowel
  - pin
  - symbols
  - see
  - idowelsymbol
  - getdowelsymbolcount
  - iview
  - view
  - symbol
  - count
  - int32
---

# IView.GetDowelSymbolCount

Gets the number of dowel symbols in this drawing view.

## Signature

```csharp
System.Int32 GetDowelSymbolCount()
```
## Parameters

None.

## Return Value

Number of dowel symbols

## Remarks

Call this method before calling
IView::IGetDowelSymbols
to determine the size of the array for that method.

## See Also

- `IView.GetDowelSymbols`