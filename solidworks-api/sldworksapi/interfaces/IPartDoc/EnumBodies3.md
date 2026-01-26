---
type: method
interface: IPartDoc
member: EnumBodies3
returns: EnumBodies2
parameters:
  -
    name: BodyType
    type: System.Int32
    description: Type of body as defined in swBodyType_e
  -
    name: BVisibleOnly
    type: System.Boolean
    description: True gets only visible bodies, false gets all bodies
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - parts
  - ui
related:
  - IBody2
  - IPartDoc.EnumRelatedBodies2
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
  - enumbodies3
  - ipartdoc
  - part
  - doc
  - bodies3
  - body
  - type
  - int32
  - visible
  - only
  - boolean
  - bodies2
---

# IPartDoc.EnumBodies3

Enumerates the bodies in this part.

## Signature

```csharp
EnumBodies2 EnumBodies3( 
   System.Int32
BodyType
,
   System.Boolean
BVisibleOnly
)
```
## Parameters

- `BodyType` (System.Int32): Type of body as defined in swBodyType_e
- `BVisibleOnly` (System.Boolean): True gets only visible bodies, false gets all bodies

## Return Value

Enumerated list of bodies

## Remarks

To use the enumerated list, see
IEnumBodies2
functions.

## See Also

- `IBody2`
- `IPartDoc.EnumRelatedBodies2`
- `IPartDoc.EnumRelatedSectionedBodies2`
- `IPartDoc.GetRelatedBodies`
- `IPartDoc.GetRelatedSectionedBodies`