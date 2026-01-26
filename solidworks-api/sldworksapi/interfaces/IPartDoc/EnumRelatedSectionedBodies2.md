---
type: method
interface: IPartDoc
member: EnumRelatedSectionedBodies2
returns: EnumBodies2
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
  - parts
  - ui
related:
  - IBody2
  - IPartDoc.EnumBodies3
  - IPartDoc.EnumRelatedBodies2
  - IPartDoc.GetRelatedBodies
  - IPartDoc.GetRelatedSectionedBodies
keywords:
  - enumerations
  - bodies
  - see
  - also
  - ibody2
  - enumeration
  - enumrelatedsectionedbodies2
  - ipartdoc
  - part
  - doc
  - related
  - sectioned
  - bodies2
  - view
  - model
---

# IPartDoc.EnumRelatedSectionedBodies2

Gets an enumeration of the related sectioned bodies in a part.

## Signature

```csharp
EnumBodies2 EnumRelatedSectionedBodies2( 
   ModelView
ViewIn
)
```
## Parameters

- `ViewIn` (ModelView): Model view

## Return Value

Enumeration of the related sectioned bodies

## See Also

- `IBody2`
- `IPartDoc.EnumBodies3`
- `IPartDoc.EnumRelatedBodies2`
- `IPartDoc.GetRelatedBodies`
- `IPartDoc.GetRelatedSectionedBodies`