---
type: method
interface: IPartDoc
member: GetRelatedSectionedBodies
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
  - parts
  - ui
related:
  - IPartDoc.EnumBodies3
  - IPartDoc.EnumRelatedBodies2
  - IPartDoc.EnumRelatedSectionedBodies2
  - IPartDoc.GetRelatedBodies
keywords:
  - enumerations
  - bodies
  - see
  - also
  - ibody2
  - enumeration
  - getrelatedsectionedbodies
  - ipartdoc
  - part
  - doc
  - related
  - sectioned
  - view
  - object
---

# IPartDoc.GetRelatedSectionedBodies

Gets all of the related sectioned bodies in a part.

## Signature

```csharp
System.Object GetRelatedSectionedBodies( 
   System.Object
ViewIn
)
```
## Parameters

- `ViewIn` (System.Object): Model view

## Return Value

Array of related sectioned bodies.

## See Also

- `IPartDoc.EnumBodies3`
- `IPartDoc.EnumRelatedBodies2`
- `IPartDoc.EnumRelatedSectionedBodies2`
- `IPartDoc.GetRelatedBodies`