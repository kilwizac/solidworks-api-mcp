---
type: method
interface: IFeatureManager
member: SetNetBlendDirectionData
returns: Feature
parameters:
  -
    name: Direction
    type: System.Int16
    description: 0 = Direction 1 1 = Direction 2
  -
    name: InfluenceType
    type: System.Int16
    description: 0 = Global 1 = To Next Curve 2 = To Next Sharp 3 = To Next Edge
  -
    name: TrimCurves
    type: System.Int16
    description: 0 = False to trim curves 1 = True to trim curves
  -
    name: BlendClosed
    type: System.Boolean
    description: True closes this boundary feature or boundary surface feature, false leaves this boundary feature or boundary surface feature open
  -
    name: SplitSurfaces
    type: System.Boolean
    description: Not used
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.InsertNetBlend
  - IFeatureManager.SetNetBlendCurveData
keywords:
  - boundary
  - surface
  - feature
  - see
  - also
  - ifeature
  - isurface
  - setnetblenddirectiondata
  - ifeaturemanager
  - manager
  - net
  - blend
  - direction
  - data
  - int16
  - influence
  - type
  - trim
  - curves
  - closed
  - boolean
  - split
  - surfaces
  - insert
  - vba
  - vb
---

# IFeatureManager.SetNetBlendDirectionData

Sets the curve set data (one for each of the two directions) for this boundary feature or boundary surface feature.

## Signature

```csharp
Feature SetNetBlendDirectionData( 
   System.Int16
Direction
,
   System.Int16
InfluenceType
,
   System.Int16
TrimCurves
,
   System.Boolean
BlendClosed
,
   System.Boolean
SplitSurfaces
)
```
## Parameters

- `Direction` (System.Int16): 0 = Direction 1 1 = Direction 2
- `InfluenceType` (System.Int16): 0 = Global 1 = To Next Curve 2 = To Next Sharp 3 = To Next Edge
- `TrimCurves` (System.Int16): 0 = False to trim curves 1 = True to trim curves
- `BlendClosed` (System.Boolean): True closes this boundary feature or boundary surface feature, false leaves this boundary feature or boundary surface feature open
- `SplitSurfaces` (System.Boolean): Not used

## Return Value

Feature

## Examples

- Insert Boundary Surface Feature (VBA) (Insert_Boundary_Surface_Feature_Example_VB.htm)
- Insert Boundary Feature (C#) (Insert_Boundary_Feature_Example_CSharp.htm)
- Insert Boundary Feature (VB.NET) (Insert_Boundary_Feature_Example_VBNET.htm)
- Insert Boundary Feature (VBA) (Insert_Boundary_Feature_Example_VB.htm)

## See Also

- `IFeatureManager.InsertNetBlend`
- `IFeatureManager.SetNetBlendCurveData`