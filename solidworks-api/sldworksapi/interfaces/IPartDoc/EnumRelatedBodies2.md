---
type: method
interface: IPartDoc
member: EnumRelatedBodies2
returns: EnumBodies2
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
  - IPartDoc.EnumRelatedSectionedBodies2
  - IPartDoc.GetRelatedBodies
  - IPartDoc.GetRelatedSectionedBodies
keywords:
  - enumerations
  - bodies
  - see
  - also
  - ibody2
  - enumeration
  - enumrelatedbodies2
  - ipartdoc
  - part
  - doc
  - related
  - bodies2
---

# IPartDoc.EnumRelatedBodies2

Creates an enumerated list of bodies.

## Signature

```csharp
EnumBodies2 EnumRelatedBodies2()
```
## Parameters

None.

## Return Value

Enumerated list of bodies

## Remarks

The list contains only those bodies associated with reference surfaces. The list does not include the part body itself.
A reference surface feature can consist of one or more surfaces sewn together. Each reference surface feature has two
IBody2
objects:
One represents the front face or faces
One
represents the back face or faces
Each IBody2 object has one or more faces depending on whether the reference surface feature is a set of knitted surfaces or a single underlying surface. The corresponding faces for each body pair should have normal vectors that are opposite.
To use the enumerated list, see
IEnumBodies2
functions.

## See Also

- `IPartDoc.EnumBodies3`
- `IPartDoc.EnumRelatedSectionedBodies2`
- `IPartDoc.GetRelatedBodies`
- `IPartDoc.GetRelatedSectionedBodies`