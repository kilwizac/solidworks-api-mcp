---
type: method
interface: ISketchManager
member: CreateChamfer
returns: SketchSegment
parameters:
  -
    name: Type
    type: System.Int32
    description: Type of chamfer as defined in swSketchChamferType_e
  -
    name: Distance
    type: System.Double
    description: Distance of the chamfer
  -
    name: AngleORdist
    type: System.Double
    description: If Type = swSketchChamfer_DistanceDistance, then the second chamfer distance If Type = swSketchChamfer_DistanceAngle, then the second chamfer angle If Type = swSketchChamfer_DistanceEqual, then this argument is ignored because Distance is used for both edges
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - chamfers
  - see
  - also
  - ichamferfeaturedata2
  - sketch
  - tools
  - chamfer
  - isketch
  - createchamfer
  - isketchmanager
  - manager
  - create
  - type
  - int32
  - distance
  - double
  - angle
  - rdist
  - segment
---

# ISketchManager.CreateChamfer

Creates a chamfer between two selected sketch entities.

## Signature

```csharp
SketchSegment CreateChamfer( 
   System.Int32
Type
,
   System.Double
Distance
,
   System.Double
AngleORdist
)
```
## Parameters

- `Type` (System.Int32): Type of chamfer as defined in swSketchChamferType_e
- `Distance` (System.Double): Distance of the chamfer
- `AngleORdist` (System.Double): If Type = swSketchChamfer_DistanceDistance, then the second chamfer distance If Type = swSketchChamfer_DistanceAngle, then the second chamfer angle If Type = swSketchChamfer_DistanceEqual, then this argument is ignored because Distance is used for both edges

## Return Value

Sketch segment for the chamfer