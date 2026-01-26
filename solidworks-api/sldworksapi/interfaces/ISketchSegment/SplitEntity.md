---
type: method
interface: ISketchSegment
member: SplitEntity
returns: void
parameters:
  -
    name: X
    type: System.Double
    description: x coordinate where to split the selected entity
  -
    name: Y
    type: System.Double
    description: y coordinate where to split the selected entity
  -
    name: Z
    type: System.Double
    description: z coordinate where to split the selected entity
  -
    name: ClosedX
    type: System.Double
    description: x coordinate where to close the split entity
  -
    name: ClosedY
    type: System.Double
    description: y coordinate where to close the split entity
  -
    name: ClosedZ
    type: System.Double
    description: z coordinate where to close the split entity
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - split
  - entities
  - entity
  - see
  - also
  - ientity
  - sketch
  - isketch
  - tools
  - splitentity
  - isketchsegment
  - segment
  - double
  - closed
  - void
---

# ISketchSegment.SplitEntity

Splits the selected sketch entity at the specified point.

## Signature

```csharp
void SplitEntity( 
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
,
   System.Double
ClosedX
,
   System.Double
ClosedY
,
   System.Double
ClosedZ
)
```
## Parameters

- `X` (System.Double): x coordinate where to split the selected entity
- `Y` (System.Double): y coordinate where to split the selected entity
- `Z` (System.Double): z coordinate where to split the selected entity
- `ClosedX` (System.Double): x coordinate where to close the split entity
- `ClosedY` (System.Double): y coordinate where to close the split entity
- `ClosedZ` (System.Double): z coordinate where to close the split entity

## Return Value

Unknown.