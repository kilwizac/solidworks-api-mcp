---
type: method
interface: IComponent2
member: EnumBodies3
returns: EnumBodies2
parameters:
  -
    name: BodyType
    type: System.Int32
    description: Type of body as defined by swBodyType_e
  -
    name: VisibleOnly
    type: System.Boolean
    description: True to get visible bodies only, false to get all bodies
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.EnumRelatedBodies
  - IComponent2.EnumSectionedBodies
  - IComponent2.GetBodies3
  - IComponent2.GetBody
  - IComponent2.IGetBody
  - IPartDoc.EnumBodies3
keywords:
  - bodies
  - see
  - also
  - ibody2
  - enumeration
  - enumerations
  - enumbodies3
  - icomponent2
  - component2
  - bodies3
  - body
  - type
  - int32
  - visible
  - only
  - boolean
  - bodies2
---

# IComponent2.EnumBodies3

Gets the bodies in the component in a multibody part.

## Signature

```csharp
EnumBodies2 EnumBodies3( 
   System.Int32
BodyType
,
   System.Boolean
VisibleOnly
)
```
## Parameters

- `BodyType` (System.Int32): Type of body as defined by swBodyType_e
- `VisibleOnly` (System.Boolean): True to get visible bodies only, false to get all bodies

## Return Value

Enumerated list of bodies

## Remarks

This method only supports solid and sheet (surface) types.

## See Also

- `IComponent2.EnumRelatedBodies`
- `IComponent2.EnumSectionedBodies`
- `IComponent2.GetBodies3`
- `IComponent2.GetBody`
- `IComponent2.IGetBody`
- `IPartDoc.EnumBodies3`