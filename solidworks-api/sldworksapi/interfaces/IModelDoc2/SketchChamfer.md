---
type: method
interface: IModelDoc2
member: SketchChamfer
returns: void
parameters:
  -
    name: AngleORdist
    type: System.Double
    description: Angle of the chamfer if using the Angle-Distance option or the distance of the second distance if using the Distance-Distance option
  -
    name: Dist1
    type: System.Double
    description: Distance of the chamfer
  -
    name: Options
    type: System.Int32
    description: 0 = Angle - Distance Chamfer 1 = Distance - Distance Chamfer
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - sketches
  - ui
related: []
keywords:
  - sketchchamfer
  - imodeldoc2
  - model
  - doc2
  - sketch
  - chamfer
  - angle
  - rdist
  - double
  - dist1
  - options
  - int32
  - void
---

# IModelDoc2.SketchChamfer

Obsolete. Superseded by ISketchManager::CreateChamfer.

## Signature

```csharp
void SketchChamfer( 
   System.Double
AngleORdist
,
   System.Double
Dist1
,
   System.Int32
Options
)
```
## Parameters

- `AngleORdist` (System.Double): Angle of the chamfer if using the Angle-Distance option or the distance of the second distance if using the Distance-Distance option
- `Dist1` (System.Double): Distance of the chamfer
- `Options` (System.Int32): 0 = Angle - Distance Chamfer 1 = Distance - Distance Chamfer

## Return Value

Unknown.