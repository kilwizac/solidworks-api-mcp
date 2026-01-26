---
type: method
interface: ISketchParabola
member: SetPoints
returns: System.Boolean
parameters:
  -
    name: CenterX
    type: System.Double
    description: x coordinate of center (focal) sketch point
  -
    name: CenterY
    type: System.Double
    description: y coordinate of center (focal) sketch point
  -
    name: CenterZ
    type: System.Double
    description: z coordinate of center (focal) sketch point
  -
    name: ApexX
    type: System.Double
    description: x coordinate of apex sketch point
  -
    name: ApexY
    type: System.Double
    description: y coordinate of apex sketch point
  -
    name: ApexZ
    type: System.Double
    description: z coordinate of apex sketch point
  -
    name: StartX
    type: System.Double
    description: x coordinate of start sketch point
  -
    name: StartY
    type: System.Double
    description: y coordinate of start sketch point
  -
    name: StartZ
    type: System.Double
    description: z coordinate of start sketch point
  -
    name: EndX
    type: System.Double
    description: x coordinate of end sketch point
  -
    name: EndY
    type: System.Double
    description: y coordinate of end sketch point
  -
    name: EndZ
    type: System.Double
    description: z coordinate of end sketch point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - points
  - parabolas
  - setpoints
  - isketchparabola
  - sketch
  - parabola
  - center
  - double
  - apex
  - start
  - end
  - boolean
---

# ISketchParabola.SetPoints

Sets all four sketch points for a parabola.

## Signature

```csharp
System.Boolean SetPoints( 
   System.Double
CenterX
,
   System.Double
CenterY
,
   System.Double
CenterZ
,
   System.Double
ApexX
,
   System.Double
ApexY
,
   System.Double
ApexZ
,
   System.Double
StartX
,
   System.Double
StartY
,
   System.Double
StartZ
,
   System.Double
EndX
,
   System.Double
EndY
,
   System.Double
EndZ
)
```
## Parameters

- `CenterX` (System.Double): x coordinate of center (focal) sketch point
- `CenterY` (System.Double): y coordinate of center (focal) sketch point
- `CenterZ` (System.Double): z coordinate of center (focal) sketch point
- `ApexX` (System.Double): x coordinate of apex sketch point
- `ApexY` (System.Double): y coordinate of apex sketch point
- `ApexZ` (System.Double): z coordinate of apex sketch point
- `StartX` (System.Double): x coordinate of start sketch point
- `StartY` (System.Double): y coordinate of start sketch point
- `StartZ` (System.Double): z coordinate of start sketch point
- `EndX` (System.Double): x coordinate of end sketch point
- `EndY` (System.Double): y coordinate of end sketch point
- `EndZ` (System.Double): z coordinate of end sketch point

## Return Value

True if all four sketch points are set, false if not