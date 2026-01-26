---
type: method
interface: IPartDoc
member: IGetSectionedBody2
returns: Body2
parameters:
  -
    name: ViewIn
    type: ModelView
    description: Model view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - geometry
  - parts
  - ui
related: []
keywords:
  - bodies
  - see
  - also
  - ibody2
  - sectioned
  - igetsectionedbody2
  - ipartdoc
  - part
  - doc
  - body2
  - view
  - model
---

# IPartDoc.IGetSectionedBody2

Gets the sectioned body seen in the specified drawing view.

## Signature

```csharp
Body2 IGetSectionedBody2( 
   ModelView
ViewIn
)
```
## Parameters

- `ViewIn` (ModelView): Model view

## Return Value

Sectioned body

## Remarks

To determine if the desired model view is currently displaying a sectioned view, use
IModelView::GetDisplayState
.
If you need the full body representation, use
IPartDoc::GetBodies2
or
IPartDoc::EnumBodies3
, which ignores the sectioning operation.