---
type: method
interface: IBody2
member: ICreateBlendSurface
returns: Surface
parameters:
  -
    name: Surface1
    type: Surface
    description: First side surface
  -
    name: Range1
    type: System.Double
    description: Signed offset of Surface1
  -
    name: Surface2
    type: Surface
    description: Second side surface
  -
    name: Range2
    type: System.Double
    description: Signed offset of Surface2
  -
    name: StartVec
    type: System.Double
    description: Array of 3 doubles representing a point close to the start of the blend spine
  -
    name: EndVec
    type: System.Double
    description: Array of 3 doubles representing a point close to the end of the blend spine
  -
    name: HaveHelpVec
    type: System.Int32
    description: Optional; True if help vector is provided
  -
    name: HelpVec
    type: System.Double
    description: Array of 3 doubles representing the direction of the help vector
  -
    name: HaveHelpBox
    type: System.Int32
    description: Optional; True if box is provided
  -
    name: HelpBox
    type: System.Double
    description: Array of 6 doubles bounding the area of interest
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.CreateBlendSurface
keywords:
  - surface
  - see
  - also
  - isurface
  - bodies
  - icreateblendsurface
  - ibody2
  - body2
  - create
  - blend
  - surface1
  - range1
  - double
  - surface2
  - range2
  - start
  - vec
  - end
  - have
  - help
  - int32
  - box
---

# IBody2.ICreateBlendSurface

Creates a constant radius rolling-ball blend surface (also known as a pipe surface) between two side surfaces.

## Signature

```csharp
Surface ICreateBlendSurface( 
   Surface
Surface1
,
   System.Double
Range1
,
   Surface
Surface2
,
   System.Double
Range2
,
   ref System.Double
StartVec
,
   ref System.Double
EndVec
,
   System.Int32
HaveHelpVec
,
   ref System.Double
HelpVec
,
   System.Int32
HaveHelpBox
,
   ref System.Double
HelpBox
)
```
## Parameters

- `Surface1` (Surface): First side surface
- `Range1` (System.Double): Signed offset of Surface1
- `Surface2` (Surface): Second side surface
- `Range2` (System.Double): Signed offset of Surface2
- `StartVec` (System.Double): Array of 3 doubles representing a point close to the start of the blend spine
- `EndVec` (System.Double): Array of 3 doubles representing a point close to the end of the blend spine
- `HaveHelpVec` (System.Int32): Optional; True if help vector is provided
- `HelpVec` (System.Double): Array of 3 doubles representing the direction of the help vector
- `HaveHelpBox` (System.Int32): Optional; True if box is provided
- `HelpBox` (System.Double): Array of 6 doubles bounding the area of interest

## Return Value

Newly created surface

## See Also

- `IBody2.CreateBlendSurface`