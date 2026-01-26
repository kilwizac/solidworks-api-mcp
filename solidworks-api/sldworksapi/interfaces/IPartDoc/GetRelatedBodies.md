---
type: method
interface: IPartDoc
member: GetRelatedBodies
returns: System.Object
parameters: []
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
  - IPartDoc.GetRelatedSectionedBodies
keywords:
  - enumerations
  - bodies
  - see
  - also
  - ibody2
  - enumeration
  - getrelatedbodies
  - ipartdoc
  - part
  - doc
  - related
  - object
---

# IPartDoc.GetRelatedBodies

Creates a list of all the related bodies in a part.

## Signature

```csharp
System.Object GetRelatedBodies()
```
## Parameters

None.

## Return Value

Array of related bodies

## Remarks

The list contains only those bodies associated with reference surfaces. What results is a list of bodies, which is related to the model, but it does not include the part body itself.
A reference surface feature can consist of one or more surfaces knitted together. Each reference surface feature has two
IBody2
objects:
One for the front faces
One for the back faces
Each IBody2 object has one or more faces depending on whether the reference surface feature is a set of knitted surfaces or a single underlying surface. The corresponding faces for each body pair should have normal vectors that are opposite.

## See Also

- `IPartDoc.EnumBodies3`
- `IPartDoc.EnumRelatedBodies2`
- `IPartDoc.EnumRelatedSectionedBodies2`
- `IPartDoc.GetRelatedSectionedBodies`