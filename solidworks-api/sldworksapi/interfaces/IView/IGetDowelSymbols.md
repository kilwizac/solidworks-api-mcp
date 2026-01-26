---
type: method
interface: IView
member: IGetDowelSymbols
returns: DowelSymbol
parameters:
  -
    name: NumDowelSymbol
    type: System.Int32
    description: Total number of dowel symbols on this drawing view
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
  - view
  - also
  - iview
  - annotation
  - iannotation
  - igetdowelsymbols
  - num
  - symbol
  - int32
---

# IView.IGetDowelSymbols

Gets all of the dowel symbols on this drawing view.

## Signature

```csharp
DowelSymbol IGetDowelSymbols( 
   System.Int32
NumDowelSymbol
)
```
## Parameters

- `NumDowelSymbol` (System.Int32): Total number of dowel symbols on this drawing view

## Return Value

in-process, unmanaged C++: Pointer to an array of dowel symbols VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Use this method to obtain the array of dowel symbols all at once instead of calling
IView::GetFirstDowelSymbol
and then repeatedly calling
IDowelSymbol::GetNext
to obtain the remaining dowel symbols on this drawing view.
Before calling this method, call
IView::GetDowelSymbolCount
to get the value for numDowelSymbol.

## See Also

- `IView.GetDowelSymbols`