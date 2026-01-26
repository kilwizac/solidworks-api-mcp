---
type: method
interface: IView
member: AlignWithView
returns: System.Boolean
parameters:
  -
    name: AlignType
    type: System.Int32
    description: Type of alignment to set as defined by swAlignViewTypes_e
  -
    name: BaseView
    type: View
    description: View with which to align, if aligning with another view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.AlignDrawingView
  - IView.GetAlignment
  - IView.RemoveAlignment
  - IView.UseDefaultAlignment
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - alignment
  - view
  - alignwithview
  - align
  - type
  - int32
  - base
  - boolean
  - vb
  - net
  - vba
---

# IView.AlignWithView

Sets view alignment.

## Signature

```csharp
System.Boolean AlignWithView( 
   System.Int32
AlignType
,
   View
BaseView
)
```
## Parameters

- `AlignType` (System.Int32): Type of alignment to set as defined by swAlignViewTypes_e
- `BaseView` (View): View with which to align, if aligning with another view

## Return Value

True if view alignment is set, false if not

## Remarks

AlignType tells how to align this view.
If AlignType is set to...
Then BaseView...
swAlignViewHorizontalCenter
must be specified as the view with which to align.
swAlignViewVerticalCenter
must be specified as the view with which to align.
swAlignViewHorizontalOrigin
must be specified as the view with which to align.
swAlignViewVerticalOrigin
must be specified as the view with which to align.
swNoViewAlignment
is ignored.
swDefaultViewAlignment
is ignored.

## Examples

- Align Drawing Views (C#) (Align_Drawing_Views_Example_CSharp.htm)
- Align Drawing Views (VB.NET) (Align_Drawing_Views_Example_VBNET.htm)
- Align Drawing Views (VBA) (Align_Drawing_Views_Example_VB.htm)

## See Also

- `IView.AlignDrawingView`
- `IView.GetAlignment`
- `IView.RemoveAlignment`
- `IView.UseDefaultAlignment`