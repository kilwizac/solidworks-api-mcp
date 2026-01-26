---
type: method
interface: IModelView
member: DrawHighlightedItems
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - highlight
  - draw
  - redraw
  - drawhighlighteditems
  - imodelview
  - model
  - view
  - highlighted
  - items
  - void
---

# IModelView.DrawHighlightedItems

Draws or redraws the highlighted items.

## Signature

```csharp
void DrawHighlightedItems()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

This method is useful in applications that handle repainting if you want highlighting
to be visible. When called, the currently highlighted items are painted.