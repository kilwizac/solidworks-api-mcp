---
type: method
interface: IFeatureManager
member: MoldUndercutDetect2
returns: void
parameters:
  -
    name: ColUndercut1
    type: System.Int32
    description: Value (COLORREF type) that specifies the color for the faces invisible from one direction that form an undercut
  -
    name: ColUndercut2
    type: System.Int32
    description: Value (COLORREF type) that specifies the color for the faces invisible from a second direction that form an undercut
  -
    name: ColOccluded
    type: System.Int32
    description: Value (COLORREF type) that specifies the color for the faces invisible from both directions that form an undercut
  -
    name: ColStraddle
    type: System.Int32
    description: Value (COLORREF type) that specifies the color for the faces with draft in both directions that form an undercut
  -
    name: ColBase
    type: System.Int32
    description: Value (COLORREF type) that specifies the color for the faces that do not form undercuts; that is, all faces except the undercut faces
  -
    name: BCoordInput
    type: System.Boolean
    description: True to enable coordinate input to control the direction of pull, false to not
  -
    name: Dx
    type: System.Double
    description: x coordinate to control the direction of pull
  -
    name: Dy
    type: System.Double
    description: y coordinate to control the direction of pull
  -
    name: Dz
    type: System.Double
    description: z coordinate to control the direction of pull
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICavityFeatureData
  - ICoreFeatureData
  - IPartingLineFeatureData
  - IPartingSurfaceFeatureData
  - IRuledSurfaceFeatureData
  - IShutOffSurfaceFeatureData
  - IToolingSplitFeatureData
keywords:
  - mold
  - tools
  - undercut
  - areas
  - trapped
  - detection
  - moldundercutdetect2
  - ifeaturemanager
  - feature
  - manager
  - detect2
  - col
  - undercut1
  - int32
  - undercut2
  - occluded
  - straddle
  - base
  - coord
  - input
  - boolean
  - dx
  - double
  - dy
  - dz
  - void
---

# IFeatureManager.MoldUndercutDetect2

Detects trapped, also called undercut, areas in a model that cannot be ejected from the mold.

## Signature

```csharp
void MoldUndercutDetect2( 
   System.Int32
ColUndercut1
,
   System.Int32
ColUndercut2
,
   System.Int32
ColOccluded
,
   System.Int32
ColStraddle
,
   System.Int32
ColBase
,
   System.Boolean
BCoordInput
,
   System.Double
Dx
,
   System.Double
Dy
,
   System.Double
Dz
)
```
## Parameters

- `ColUndercut1` (System.Int32): Value (COLORREF type) that specifies the color for the faces invisible from one direction that form an undercut
- `ColUndercut2` (System.Int32): Value (COLORREF type) that specifies the color for the faces invisible from a second direction that form an undercut
- `ColOccluded` (System.Int32): Value (COLORREF type) that specifies the color for the faces invisible from both directions that form an undercut
- `ColStraddle` (System.Int32): Value (COLORREF type) that specifies the color for the faces with draft in both directions that form an undercut
- `ColBase` (System.Int32): Value (COLORREF type) that specifies the color for the faces that do not form undercuts; that is, all faces except the undercut faces
- `BCoordInput` (System.Boolean): True to enable coordinate input to control the direction of pull, false to not
- `Dx` (System.Double): x coordinate to control the direction of pull
- `Dy` (System.Double): y coordinate to control the direction of pull
- `Dz` (System.Double): z coordinate to control the direction of pull

## Return Value

Unknown.

## See Also

- `ICavityFeatureData`
- `ICoreFeatureData`
- `IPartingLineFeatureData`
- `IPartingSurfaceFeatureData`
- `IRuledSurfaceFeatureData`
- `IShutOffSurfaceFeatureData`
- `IToolingSplitFeatureData`