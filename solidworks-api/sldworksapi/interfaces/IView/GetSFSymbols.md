---
type: method
interface: IView
member: GetSFSymbols
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetSFSymbolCount
  - IView.IGetSFSymbols
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
  - getsfsymbols
  - sf
  - object
  - annotations
  - arrays
  - vb
  - net
  - vba
---

# IView.GetSFSymbols

Gets all of the surface finish symbols in this drawing view.

## Signature

```csharp
System.Object GetSFSymbols()
```
## Parameters

None.

## Return Value

Array of surface finish symbols

## Remarks

Use this method to obtain the array of surface finish symbols all at once instead of calling
IView::GetFirstSFSymbol
and then repeatedly calling
ISFSymbol::GetNext
to obtain the remaining surface finish symbols in the drawing view.

## Examples

- Get Annotations Arrays (VB.NET) (Get_Annotations_Arrays_Example_VBNET.htm)
- Get Annotations Arrays (C#) (Get_Annotations_Arrays_Example_CSharp.htm)
- Get Annotations Arrays (VBA) (Get_Annotations_Array_Example_VB.htm)

## See Also

- `IView.GetSFSymbolCount`
- `IView.IGetSFSymbols`