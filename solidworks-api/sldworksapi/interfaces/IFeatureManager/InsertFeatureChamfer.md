---
type: method
interface: IFeatureManager
member: InsertFeatureChamfer
returns: Feature
parameters:
  -
    name: Options
    type: System.Int32
    description: Options as defined by swFeatureChamferOption_e
  -
    name: ChamferType
    type: System.Int32
    description: Chamfer type as defined by swChamferType_e
  -
    name: Width
    type: System.Double
    description: If ChamferType is swChamferAngleDistance, then specify width of chamfer
  -
    name: Angle
    type: System.Double
    description: If ChamferType is swChamferAngleDistance, then specify the angle of the chamfer
  -
    name: OtherDist
    type: System.Double
    description: If ChamferType is swChamferEqualDistance, then you can specify a single value so that all distances are equal
  -
    name: VertexChamDist1
    type: System.Double
    description: If ChamferType is swChamferDistanceDistance or swChamferVertex, then specify a value for the distance on first side
  -
    name: VertexChamDist2
    type: System.Double
    description: If ChamferType is swChamferDistanceDistance or swChamferVertex, then specify a value for the distance on second side
  -
    name: VertexChamDist3
    type: System.Double
    description: If ChamferType is swChamferVertex, then specify a value for the distance on third side
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - insertfeaturechamfer
  - ifeaturemanager
  - feature
  - manager
  - insert
  - chamfer
  - options
  - int32
  - type
  - width
  - double
  - angle
  - other
  - dist
  - vertex
  - cham
  - dist1
  - dist2
  - dist3
  - ichamferfeaturedata2
---

# IFeatureManager.InsertFeatureChamfer

Inserts a chamfer.

## Signature

```csharp
Feature InsertFeatureChamfer( 
   System.Int32
Options
,
   System.Int32
ChamferType
,
   System.Double
Width
,
   System.Double
Angle
,
   System.Double
OtherDist
,
   System.Double
VertexChamDist1
,
   System.Double
VertexChamDist2
,
   System.Double
VertexChamDist3
)
```
## Parameters

- `Options` (System.Int32): Options as defined by swFeatureChamferOption_e
- `ChamferType` (System.Int32): Chamfer type as defined by swChamferType_e
- `Width` (System.Double): If ChamferType is swChamferAngleDistance, then specify width of chamfer
- `Angle` (System.Double): If ChamferType is swChamferAngleDistance, then specify the angle of the chamfer
- `OtherDist` (System.Double): If ChamferType is swChamferEqualDistance, then you can specify a single value so that all distances are equal
- `VertexChamDist1` (System.Double): If ChamferType is swChamferDistanceDistance or swChamferVertex, then specify a value for the distance on first side
- `VertexChamDist2` (System.Double): If ChamferType is swChamferDistanceDistance or swChamferVertex, then specify a value for the distance on second side
- `VertexChamDist3` (System.Double): If ChamferType is swChamferVertex, then specify a value for the distance on third side

## Return Value

Pointer to the IFeature object

## Remarks

Both swChamferType_e.swChamferAngleDistance and swChamferType_e.swChamferDistanceDistance are edge chamfers. This means that all measurements are from edges. An angle-distance chamfer requires an angle and a distance; a distance-distance chamfer requires two distances, one for each side of the chamfered edge.
A swChamferType_e.swChamferVertex chamfer only works on a vertex with three adjacent edges of the same convexity. A vertex chamfer requires three distances along three adjacent edges. For non-linear edges, this value is an arc length value; it is not a chordal value. See
IVertex::EnumEdgesOriented
to determine the edge order used by this method.

## Examples

- IChamferFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IChamferFeatureData2)