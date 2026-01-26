---
type: method
interface: IDrawingDoc
member: HideShowDrawingViews
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.ActivateView
  - IDrawingDoc.ActiveDrawingView
  - IDrawingDoc.AutomaticViewUpdate
  - IDrawingDoc.HiddenViewsVisible
  - IDrawingDoc.IActiveDrawingView
  - IDrawingDoc.SuppressView
  - IDrawingDoc.UnsuppressView
  - IDrawingDoc.ViewDisplayHidden
  - IDrawingDoc.ViewDisplayHiddengreyed
  - IDrawingDoc.ViewDisplayShaded
  - IDrawingDoc.ViewDisplayWireframe
  - IDrawingDoc.ViewFullPage
  - IDrawingDoc.ViewHlrQuality
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - hidden
  - show
  - view
  - hideshowdrawingviews
  - idrawingdoc
  - doc
  - hide
  - void
  - display
  - lines
  - vba
  - vb
  - net
---

# IDrawingDoc.HideShowDrawingViews

Sets whether to hide or show hidden drawing views.

## Signature

```csharp
void HideShowDrawingViews()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

If this setting is enabled, then SOLIDWORKS shows drawing views that were hidden using
IDrawingDoc::SuppressView
with an
X
.

## Examples

- Display Hidden Lines in Drawing (VBA) (Display_Hidden_Lines_in_Drawing_Example_VB.htm)
- Display Hidden Lines in Drawing (VB.NET) (Display_Hidden_Lines_in_Drawing_Example_VBNET.htm)
- Display Hidden Lines in Drawing (C#) (Display_Hidden_Lines_in_Drawing_Example_CSharp.htm)

## See Also

- `IDrawingDoc.ActivateView`
- `IDrawingDoc.ActiveDrawingView`
- `IDrawingDoc.AutomaticViewUpdate`
- `IDrawingDoc.HiddenViewsVisible`
- `IDrawingDoc.IActiveDrawingView`
- `IDrawingDoc.SuppressView`
- `IDrawingDoc.UnsuppressView`
- `IDrawingDoc.ViewDisplayHidden`
- `IDrawingDoc.ViewDisplayHiddengreyed`
- `IDrawingDoc.ViewDisplayShaded`
- `IDrawingDoc.ViewDisplayWireframe`
- `IDrawingDoc.ViewFullPage`
- `IDrawingDoc.ViewHlrQuality`