---
type: method
interface: IFeatureManager
member: InsertMoldCoreCavitySolids
returns: Feature
parameters:
  -
    name: Dist1
    type: System.Double
    description: Length of the extrusion in Direction 1
  -
    name: Dist2
    type: System.Double
    description: Length of the extrusion in Direction 2
  -
    name: Setback
    type: System.Boolean
    description: True to enable setback surface, false to not
  -
    name: Angle
    type: System.Double
    description: Draft angle for the setback surface
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICavityFeatureData
  - ICoreFeatureData
  - IFeatureManager.InsertMoldPartingLine
  - IFeatureManager.InsertMoldPartingSurface
  - IFeatureManager.InsertMoldShutOffSurface
keywords:
  - cavities
  - see
  - also
  - icavityfeaturedata
  - drafts
  - features
  - feature
  - ifeature
  - cavity
  - core
  - mold
  - tools
  - cores
  - insertmoldcorecavitysolids
  - ifeaturemanager
  - manager
  - insert
  - solids
  - dist1
  - double
  - dist2
  - setback
  - boolean
  - angle
---

# IFeatureManager.InsertMoldCoreCavitySolids

Creates a core/cavity solid feature.

## Signature

```csharp
Feature InsertMoldCoreCavitySolids( 
   System.Double
Dist1
,
   System.Double
Dist2
,
   System.Boolean
Setback
,
   System.Double
Angle
)
```
## Parameters

- `Dist1` (System.Double): Length of the extrusion in Direction 1
- `Dist2` (System.Double): Length of the extrusion in Direction 2
- `Setback` (System.Boolean): True to enable setback surface, false to not
- `Angle` (System.Double): Draft angle for the setback surface

## Return Value

Pointer to the IFeature object

## Remarks

To use this method:
The Parting Line feature must exist.
The parting surface must be generated.
The part must be separated into core and cavity (sheet bodies).
A sketch describing the outline of the mold block must exist. The sketch must be perpendicular to the pull direction. Usually, the sketch is a rectangle that includes the part (core and cavity).
The location of the sketch plane specifies the parting plane in the setback surface option.
Without the setback surface option, the parting surface must extend beyond the block sketch so that the parting surface is cut off by the block.
With the setback surface option, the parting surface should be included within the block sketch. The parting plane (sketch plane) cannot intersect with the parting surface. Therefore, the parting plane must be either higher or lower than the parting surface. From the parting surface, a set of ruled surfaces is generated to be trimmed by the parting plane.

## See Also

- `ICavityFeatureData`
- `ICoreFeatureData`
- `IFeatureManager.InsertMoldPartingLine`
- `IFeatureManager.InsertMoldPartingSurface`
- `IFeatureManager.InsertMoldShutOffSurface`