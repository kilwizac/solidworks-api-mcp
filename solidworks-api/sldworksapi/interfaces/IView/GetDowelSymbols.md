---
type: method
interface: IView
member: GetDowelSymbols
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetDowelSymbolCount
  - IView.IGetDowelSymbols
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
  - getdowelsymbols
  - object
  - annotations
  - arrays
  - vba
  - vb
  - net
---

# IView.GetDowelSymbols

Gets all of the dowel symbols on this drawing view.

## Signature

```csharp
System.Object GetDowelSymbols()
```
## Parameters

None.

## Return Value

Array of dowel symbols

## Remarks

Use this method to obtain the array of dowel symbols all at once instead of calling
IView::GetFirstDowelSymbol
and then repeatedly calling
IDowelSymbol::GetNext
to obtain the remaining dowel symbols on this drawing view.

## Examples

- Get Annotations Arrays (VBA) (Get_Annotations_Array_Example_VB.htm)
- Get Annotations Arrays (VB.NET) (Get_Annotations_Arrays_Example_VBNET.htm)
- Get Annotations Arrays (C#) (Get_Annotations_Arrays_Example_CSharp.htm)

## See Also

- `IView.GetDowelSymbolCount`
- `IView.IGetDowelSymbols`