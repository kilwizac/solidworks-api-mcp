---
type: method
interface: IFeatureManager
member: InsertMoldPartingSurface
returns: Feature
parameters:
  -
    name: Radiate
    type: System.Int32
    description: Radiate mold parting surface as defined by swPartingSurfaceMoldParmType_e
  -
    name: ReverseAlignment
    type: System.Boolean
    description: True to reverse alignment, false to not; only available when radiate set to swPartingSurfaceMoldParmNormal and a parting line does not yet exist (see Remarks )
  -
    name: ReverseOffset
    type: System.Boolean
    description: True to reverse offset direction, false to not
  -
    name: OffsetDistance
    type: System.Double
    description: True to reverse offset direction, false to not
  -
    name: Angle
    type: System.Double
    description: Angle of mold parting surface; only available when radiate set to either swPartingSurfaceMoldParmTangent or swPartingSurfaceMoldParmNormal
  -
    name: Smooth
    type: System.Int32
    description: Smooth mold parting surface as defined by swPartingSurfaceSmoothingType_e
  -
    name: SmoothDistance
    type: System.Double
    description: Distance to smooth mold parting surface; only available when smooth set to swPartingSurfaceSmooth
  -
    name: Knit
    type: System.Boolean
    description: True to knit all surfaces, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related:
  - IFeatureManager.InsertMoldCoreCavitySolids
  - IFeatureManager.InsertMoldPartingLine
  - IFeatureManager.InsertMoldShutOffSurface
  - IPartingSurfaceFeatureData
keywords:
  - feature
  - see
  - also
  - ifeature
  - parting
  - surface
  - mold
  - tools
  - surfaces
  - ipartingsurfacefeaturedata
  - insertmoldpartingsurface
  - ifeaturemanager
  - manager
  - insert
  - radiate
  - int32
  - reverse
  - alignment
  - boolean
  - offset
  - distance
  - double
  - angle
  - smooth
  - knit
---

# IFeatureManager.InsertMoldPartingSurface

Inserts a mold parting surface feature.

## Signature

```csharp
Feature InsertMoldPartingSurface( 
   System.Int32
Radiate
,
   System.Boolean
ReverseAlignment
,
   System.Boolean
ReverseOffset
,
   System.Double
OffsetDistance
,
   System.Double
Angle
,
   System.Int32
Smooth
,
   System.Double
SmoothDistance
,
   System.Boolean
Knit
)
```
## Parameters

- `Radiate` (System.Int32): Radiate mold parting surface as defined by swPartingSurfaceMoldParmType_e
- `ReverseAlignment` (System.Boolean): True to reverse alignment, false to not; only available when radiate set to swPartingSurfaceMoldParmNormal and a parting line does not yet exist (see Remarks )
- `ReverseOffset` (System.Boolean): True to reverse offset direction, false to not
- `OffsetDistance` (System.Double): True to reverse offset direction, false to not
- `Angle` (System.Double): Angle of mold parting surface; only available when radiate set to either swPartingSurfaceMoldParmTangent or swPartingSurfaceMoldParmNormal
- `Smooth` (System.Int32): Smooth mold parting surface as defined by swPartingSurfaceSmoothingType_e
- `SmoothDistance` (System.Double): Distance to smooth mold parting surface; only available when smooth set to swPartingSurfaceSmooth
- `Knit` (System.Boolean): True to knit all surfaces, false to not

## Return Value

Pointer to IFeature object

## Remarks

f a parting line feature does not yet exist in the model, you must first select the direction of pull and the edges for the parting line using
IModelDocExtension::SelectByID2
. For example, a face (direction of pull) has a mark of 1 and edges (parting lines) a mark of 4.

## See Also

- `IFeatureManager.InsertMoldCoreCavitySolids`
- `IFeatureManager.InsertMoldPartingLine`
- `IFeatureManager.InsertMoldShutOffSurface`
- `IPartingSurfaceFeatureData`