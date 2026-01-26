---
type: method
interface: IFeatureManager
member: CreateCoordinateSystemUsingNumericalValues
returns: Feature
parameters:
  -
    name: UseLocation
    type: System.Boolean
    description: True to define the position of the coordinate system using numerical values, false to not
  -
    name: DeltaX
    type: System.Double
    description: Distance in meters along the x-axis of the global coordinate system; valid only if UseLocation is true
  -
    name: DeltaY
    type: System.Double
    description: Distance in meters along the y-axis of the global coordinate system; valid only if UseLocation is true
  -
    name: DeltaZ
    type: System.Double
    description: Distance in meters along the z-axis of the global coordinate system; valid only if UseLocation is true
  -
    name: UseRotation
    type: System.Boolean
    description: True to define the orientation of the coordinate system using numerical values, false to not
  -
    name: AngleX
    type: System.Double
    description: 0 <= Rotation in radians from the x-axis of the global coordinate system <= 6.283 radians; valid only if UseRotation is true
  -
    name: AngleY
    type: System.Double
    description: 0 <= Rotation in radians from the y-axis of the global coordinate system <= 6.283 radians; valid only if UseRotation is true
  -
    name: AngleZ
    type: System.Double
    description: 0 <= Rotation in radians from the z-axis of the global coordinate system <= 6.283 radians; valid only if UseRotation is true
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICoordinateSystemFeatureData
  - IFeatureManager.CreateCoordinateSystem
  - IFeatureManager.InsertCoordinateSystem
keywords:
  - coordinate
  - createcoordinatesystemusingnumericalvalues
  - ifeaturemanager
  - feature
  - manager
  - create
  - using
  - numerical
  - values
  - use
  - location
  - boolean
  - delta
  - double
  - rotation
  - angle
---

# IFeatureManager.CreateCoordinateSystemUsingNumericalValues

Creates a coordinate system feature using the specified numerical values for position and orientation with respect to the global coordinate system.

## Signature

```csharp
Feature CreateCoordinateSystemUsingNumericalValues( 
   System.Boolean
UseLocation
,
   System.Double
DeltaX
,
   System.Double
DeltaY
,
   System.Double
DeltaZ
,
   System.Boolean
UseRotation
,
   System.Double
AngleX
,
   System.Double
AngleY
,
   System.Double
AngleZ
)
```
## Parameters

- `UseLocation` (System.Boolean): True to define the position of the coordinate system using numerical values, false to not
- `DeltaX` (System.Double): Distance in meters along the x-axis of the global coordinate system; valid only if UseLocation is true
- `DeltaY` (System.Double): Distance in meters along the y-axis of the global coordinate system; valid only if UseLocation is true
- `DeltaZ` (System.Double): Distance in meters along the z-axis of the global coordinate system; valid only if UseLocation is true
- `UseRotation` (System.Boolean): True to define the orientation of the coordinate system using numerical values, false to not
- `AngleX` (System.Double): 0 <= Rotation in radians from the x-axis of the global coordinate system <= 6.283 radians; valid only if UseRotation is true
- `AngleY` (System.Double): 0 <= Rotation in radians from the y-axis of the global coordinate system <= 6.283 radians; valid only if UseRotation is true
- `AngleZ` (System.Double): 0 <= Rotation in radians from the z-axis of the global coordinate system <= 6.283 radians; valid only if UseRotation is true

## Return Value

IFeature

## Remarks

This method is valid only for parts and assemblies.

## See Also

- `ICoordinateSystemFeatureData`
- `IFeatureManager.CreateCoordinateSystem`
- `IFeatureManager.InsertCoordinateSystem`