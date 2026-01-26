---
type: method
interface: IPartDoc
member: GetSectionedBody
returns: System.Object
parameters:
  -
    name: ViewIn
    type: System.Object
    description: Model view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - geometry
  - parts
  - ui
related:
  - IPartDoc.IGetSectionedBody2
keywords:
  - bodies
  - see
  - also
  - ibody2
  - sectioned
  - getsectionedbody
  - ipartdoc
  - part
  - doc
  - body
  - view
  - object
---

# IPartDoc.GetSectionedBody

Gets the sectioned body seen in the specified drawing view.

## Signature

```csharp
System.Object GetSectionedBody( 
   System.Object
ViewIn
)
```
## Parameters

- `ViewIn` (System.Object): Model view

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

## See Also

- `IPartDoc.IGetSectionedBody2`