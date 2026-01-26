---
type: method
interface: IView
member: AlignDrawingView
returns: System.Boolean
parameters:
  -
    name: AlignViewType
    type: System.Int32
    description: Type of alignment as defined by swAlignDrawingViewTypes_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.AlignWithView
  - IView.GetAlignment
  - IView.RemoveAlignment
  - IView.UseDefaultAlignment
keywords:
  - alignment
  - drawing
  - views
  - see
  - also
  - iview
  - view
  - auxiliary
  - aligndrawingview
  - align
  - type
  - int32
  - boolean
  - vba
  - vb
  - net
---

# IView.AlignDrawingView

Specifies the alignment of this auxiliary drawing view.

## Signature

```csharp
System.Boolean AlignDrawingView( 
   System.Int32
AlignViewType
)
```
## Parameters

- `AlignViewType` (System.Int32): Type of alignment as defined by swAlignDrawingViewTypes_e

## Return Value

True if auxiliary drawing view alignment is set, false if not

## Examples

- Align Auxiliary Drawing View (VBA) (Align_Auxiliary_Drawing_View_Example_VB.htm)
- Align Auxiliary Drawing View (VB.NET) (Align_Auxiliary_Drawing_View_Example_VBNET.htm)
- Align Auxiliary Drawing View (C#) (Align_Auxiliary_Drawing_View_Example_CSharp.htm)

## See Also

- `IView.AlignWithView`
- `IView.GetAlignment`
- `IView.RemoveAlignment`
- `IView.UseDefaultAlignment`