---
type: method
interface: ISketchArc
member: SetRadius
returns: System.Boolean
parameters:
  -
    name: Radius
    type: System.Double
    description: Radius in meters of the arc
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchArc.GetRadius
keywords:
  - arcs
  - radius
  - setradius
  - isketcharc
  - sketch
  - arc
  - double
  - boolean
---

# ISketchArc.SetRadius

Sets the radius of the arc.

## Signature

```csharp
System.Boolean SetRadius( 
   System.Double
Radius
)
```
## Parameters

- `Radius` (System.Double): Radius in meters of the arc

## Return Value

True if successful, false if not

## See Also

- `ISketchArc.GetRadius`