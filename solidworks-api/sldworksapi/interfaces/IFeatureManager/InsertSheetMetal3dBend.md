---
type: method
interface: IFeatureManager
member: InsertSheetMetal3dBend
returns: Feature
parameters:
  -
    name: Angle
    type: System.Double
    description: Angle of the bend in radians
  -
    name: BUseDefaultRadius
    type: System.Boolean
    description: True to use the default radius, false to use the value specified in radius
  -
    name: Radius
    type: System.Double
    description: Value for the radius of the bend if bUseDefaultRadius is false
  -
    name: FlipDir
    type: System.Boolean
    description: True to flip the bend direction, false to not
  -
    name: BendPos
    type: System.Int16
    description: Bend position: 0 = bend centerline 1 = material inside 2 = material outside 3 = bend outside
  -
    name: PCBA
    type: CustomBendAllowance
    description: If... Then... non-NULL Pointer to ICustomBendAllowance object for which required values have been set NULL Parent bend's bend allowance is used
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBendsFeatureData
  - ISheetMetalFeatureData
keywords:
  - sheet
  - metal
  - see
  - also
  - isheetmetalfeaturedata
  - 3d
  - bends
  - insertsheetmetal3dbend
  - ifeaturemanager
  - feature
  - manager
  - insert
  - metal3d
  - bend
  - angle
  - double
  - use
  - default
  - radius
  - boolean
  - flip
  - dir
  - pos
  - int16
  - pcba
  - custom
  - allowance
---

# IFeatureManager.InsertSheetMetal3dBend

Inserts a 3D bend in sheet metal part.

## Signature

```csharp
Feature InsertSheetMetal3dBend( 
   System.Double
Angle
,
   System.Boolean
BUseDefaultRadius
,
   System.Double
Radius
,
   System.Boolean
FlipDir
,
   System.Int16
BendPos
,
   CustomBendAllowance
PCBA
)
```
## Parameters

- `Angle` (System.Double): Angle of the bend in radians
- `BUseDefaultRadius` (System.Boolean): True to use the default radius, false to use the value specified in radius
- `Radius` (System.Double): Value for the radius of the bend if bUseDefaultRadius is false
- `FlipDir` (System.Boolean): True to flip the bend direction, false to not
- `BendPos` (System.Int16): Bend position: 0 = bend centerline 1 = material inside 2 = material outside 3 = bend outside
- `PCBA` (CustomBendAllowance): If... Then... non-NULL Pointer to ICustomBendAllowance object for which required values have been set NULL Parent bend's bend allowance is used

## Return Value

Pointer to the IFeature object

## See Also

- `IBendsFeatureData`
- `ISheetMetalFeatureData`