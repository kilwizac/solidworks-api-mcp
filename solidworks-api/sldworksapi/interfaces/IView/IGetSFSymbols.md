---
type: method
interface: IView
member: IGetSFSymbols
returns: SFSymbol
parameters:
  -
    name: NumSFSymbol
    type: System.Int32
    description: Total number of surface finish symbols this drawing view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetSFSymbols
keywords:
  - surface
  - finish
  - symbols
  - see
  - isfsymbol
  - annotation
  - also
  - iannotation
  - view
  - iview
  - igetsfsymbols
  - sf
  - num
  - symbol
  - int32
---

# IView.IGetSFSymbols

Gets all of the surface finish symbols in this drawing view.

## Signature

```csharp
SFSymbol IGetSFSymbols( 
   System.Int32
NumSFSymbol
)
```
## Parameters

- `NumSFSymbol` (System.Int32): Total number of surface finish symbols this drawing view

## Return Value

in-process, unmanaged C++: Pointer to an array of surface finish symbols VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Use this method to obtain the array of multi-jog leaders all at once instead of calling
IView::GetFirstSFSymbol
and then repeatedly calling
ISFSymbol::GetNext
to obtain the remaining multi-jog leaders in the drawing view.
Before calling this method, call
IView::GetSFSymbolCount
to get the value for numSFSymbol.

## See Also

- `IView.GetSFSymbols`