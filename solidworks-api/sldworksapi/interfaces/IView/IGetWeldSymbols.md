---
type: method
interface: IView
member: IGetWeldSymbols
returns: WeldSymbol
parameters:
  -
    name: NumWeldSymbol
    type: System.Int32
    description: Total number of weld symbols on this drawing view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetWeldSymbols
keywords:
  - weld
  - symbols
  - see
  - iweldsymbol
  - annotation
  - also
  - iannotation
  - view
  - iview
  - igetweldsymbols
  - num
  - symbol
  - int32
---

# IView.IGetWeldSymbols

Gets all of the weld symbols on this drawing view.

## Signature

```csharp
WeldSymbol IGetWeldSymbols( 
   System.Int32
NumWeldSymbol
)
```
## Parameters

- `NumWeldSymbol` (System.Int32): Total number of weld symbols on this drawing view

## Return Value

in-process, unmanaged C++: Pointer to an array of weld symbols VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Use this method to obtain the array of weld symbols all at once instead of calling
IView::GetFirstWeldSymbol
and then repeatedly calling
IWeldSymbol::GetNext
to obtain the weld symbols in the drawing view.
Before calling this method, call
IView::GetWeldSymbolCount
to get the value for numWeldSymbol.

## See Also

- `IView.GetWeldSymbols`