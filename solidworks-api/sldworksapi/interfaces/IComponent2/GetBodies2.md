---
type: method
interface: IComponent2
member: GetBodies2
returns: System.Object
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
related: []
keywords:
  - getbodies2
  - icomponent2
  - component2
  - bodies2
  - body
  - type
  - int32
  - object
---

# IComponent2.GetBodies2

Obsolete. Superseded by IComponent2::GetBodies3.

## Signature

```csharp
System.Object GetBodies2( 
   System.Int32
BodyType
)
```
## Parameters

- `BodyType` (System.Int32): Type of body as defined by swBodyType_e

## Return Value

Array of bodies in the component

## Remarks

This method only supports solid and sheet (surface) types and part components.
The difference between this method and the now obsolete IComponent2::GetBodies is that the new method supports lightweight components. The now obsolete IComponent2::GetBodies does not.