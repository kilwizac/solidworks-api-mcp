---
type: method
interface: IFeatureManager
member: IInsertSheetMetalEdgeFlange2
returns: Feature
parameters:
  -
    name: EdgeCount
    type: System.Int32
    description: Number of edges for the flange
  -
    name: FlangeEdges
    type: Edge
    description: Array of edge to which to apply a flange
  -
    name: SketchFeatCount
    type: System.Int32
    description: Number of sketches for the flange
  -
    name: SketchFeat
    type: Feature
    description: Array of sketch features to use for the flange
  -
    name: BooleanOptions
    type: System.Int32
    description: Flange options as defined by swInsertEdgeFlangeOptions_e
  -
    name: FlangeAngle
    type: System.Double
    description: Flange angle
  -
    name: FlangeRadius
    type: System.Double
    description: Bend radius
  -
    name: BendPosition
    type: System.Int32
    description: Flange bend position as defined by swFlangePositionTypes_e
  -
    name: FlangeOffsetDist
    type: System.Double
    description: Length of flange
  -
    name: ReliefType
    type: System.Int32
    description: Relief type as defined by swSheetMetalReliefTypes_e
  -
    name: FlangeReliefRatio
    type: System.Double
    description: Relief ratio
  -
    name: FlangeReliefWidth
    type: System.Double
    description: Relief width
  -
    name: FlangeReliefDepth
    type: System.Double
    description: Relief depth
  -
    name: FlangeSharpType
    type: System.Int32
    description: Flange virtual sharp type as defined by swFlangeDimTypes_e
  -
    name: CustomBendAllowance
    type: CustomBendAllowance
    description: If... Then... non-NULL Pointer to ICustomBendAllowance object for which required values have been set NULL Parent bend's bend allowance is used
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
  - geometry
related:
  - IEdgeFlangeFeatureData
  - IModelDoc2.InsertSheetMetalEdgeFlange
keywords:
  - iinsertsheetmetaledgeflange2
  - ifeaturemanager
  - feature
  - manager
  - insert
  - sheet
  - metal
  - edge
  - flange2
  - count
  - int32
  - flange
  - edges
  - sketch
  - feat
  - boolean
  - options
  - angle
  - double
  - radius
  - bend
  - position
  - offset
  - dist
  - relief
  - type
  - ratio
  - width
  - depth
  - sharp
  - custom
  - allowance
---

# IFeatureManager.IInsertSheetMetalEdgeFlange2

Obsolete. Superseded by IFeatureManager::CreateDefinition and IFeatureManager::CreateFeature.

## Signature

```csharp
Feature IInsertSheetMetalEdgeFlange2( 
   System.Int32
EdgeCount
,
   ref Edge
FlangeEdges
,
   System.Int32
SketchFeatCount
,
   ref Feature
SketchFeat
,
   System.Int32
BooleanOptions
,
   System.Double
FlangeAngle
,
   System.Double
FlangeRadius
,
   System.Int32
BendPosition
,
   System.Double
FlangeOffsetDist
,
   System.Int32
ReliefType
,
   System.Double
FlangeReliefRatio
,
   System.Double
FlangeReliefWidth
,
   System.Double
FlangeReliefDepth
,
   System.Int32
FlangeSharpType
,
   CustomBendAllowance
CustomBendAllowance
)
```
## Parameters

- `EdgeCount` (System.Int32): Number of edges for the flange
- `FlangeEdges` (Edge): Array of edge to which to apply a flange
- `SketchFeatCount` (System.Int32): Number of sketches for the flange
- `SketchFeat` (Feature): Array of sketch features to use for the flange
- `BooleanOptions` (System.Int32): Flange options as defined by swInsertEdgeFlangeOptions_e
- `FlangeAngle` (System.Double): Flange angle
- `FlangeRadius` (System.Double): Bend radius
- `BendPosition` (System.Int32): Flange bend position as defined by swFlangePositionTypes_e
- `FlangeOffsetDist` (System.Double): Length of flange
- `ReliefType` (System.Int32): Relief type as defined by swSheetMetalReliefTypes_e
- `FlangeReliefRatio` (System.Double): Relief ratio
- `FlangeReliefWidth` (System.Double): Relief width
- `FlangeReliefDepth` (System.Double): Relief depth
- `FlangeSharpType` (System.Int32): Flange virtual sharp type as defined by swFlangeDimTypes_e
- `CustomBendAllowance` (CustomBendAllowance): If... Then... non-NULL Pointer to ICustomBendAllowance object for which required values have been set NULL Parent bend's bend allowance is used

## Return Value

Pointer to the IFeature object

## Remarks

Before calling this method, call
IModelDoc2::IInsertSketchForEdgeFlange
and create a profile for the flange. After creating the profile, call this method to create the flange.

## See Also

- `IEdgeFlangeFeatureData`
- `IModelDoc2.InsertSheetMetalEdgeFlange`