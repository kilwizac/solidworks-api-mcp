---
type: method
interface: IComponent2
member: EnumBodies2
returns: EnumBodies2
parameters:
  -
    name: BodyType
    type: System.Int32
    description: Type of body as defined by swBodyType_e
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetBodies3
  - IComponent2.GetBody
  - IComponent2.IGetBody
keywords:
  - enumbodies2
  - icomponent2
  - component2
  - bodies2
  - body
  - type
  - int32
---

# IComponent2.EnumBodies2

Obsolete. Superseded by IComponent2::EnumBodies3.

## Signature

```csharp
EnumBodies2 EnumBodies2( 
   System.Int32
BodyType
)
```
## Parameters

- `BodyType` (System.Int32): Type of body as defined by swBodyType_e

## Return Value

Enumerated list of bodies

## Remarks

This method only supports solid and sheet (surface) body types.
The difference between this method and the now obsolete IComponent2::EnumBodies is that the new method supports lightweight components. The now obsolete IComponent2::EnumBodies does not.

## See Also

- `IComponent2.GetBodies3`
- `IComponent2.GetBody`
- `IComponent2.IGetBody`