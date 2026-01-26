---
type: method
interface: IFeatureManager
member: InsertSheetMetalEdgeFlange
returns: Feature
parameters:
  -
    name: FlangeEdge
    type: Edge
    description: 
  -
    name: SketchFeat
    type: Feature
    description: 
  -
    name: BooleanOptions
    type: System.Int32
    description: 
  -
    name: DAngle
    type: System.Double
    description: 
  -
    name: DRadius
    type: System.Double
    description: 
  -
    name: BendPosition
    type: System.Int32
    description: 
  -
    name: DOffsetDist
    type: System.Double
    description: 
  -
    name: ReliefType
    type: System.Int32
    description: 
  -
    name: DReliefRatio
    type: System.Double
    description: 
  -
    name: DReliefWidth
    type: System.Double
    description: 
  -
    name: DReliefDepth
    type: System.Double
    description: 
  -
    name: FlangeSharpType
    type: System.Int32
    description: 
  -
    name: PCBA
    type: CustomBendAllowance
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - insertsheetmetaledgeflange
  - ifeaturemanager
  - feature
  - manager
  - insert
  - sheet
  - metal
  - edge
  - flange
  - sketch
  - feat
  - boolean
  - options
  - int32
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
  - pcba
  - custom
  - allowance
---

# IFeatureManager.InsertSheetMetalEdgeFlange

Obsolete. Superseded by IFeatureManager::InsertSheetMetalEdgeFlange2.

## Signature

```csharp
Feature InsertSheetMetalEdgeFlange( 
   Edge
FlangeEdge
,
   Feature
SketchFeat
,
   System.Int32
BooleanOptions
,
   System.Double
DAngle
,
   System.Double
DRadius
,
   System.Int32
BendPosition
,
   System.Double
DOffsetDist
,
   System.Int32
ReliefType
,
   System.Double
DReliefRatio
,
   System.Double
DReliefWidth
,
   System.Double
DReliefDepth
,
   System.Int32
FlangeSharpType
,
   CustomBendAllowance
PCBA
)
```
## Parameters

- `FlangeEdge` (Edge): 
- `SketchFeat` (Feature): 
- `BooleanOptions` (System.Int32): 
- `DAngle` (System.Double): 
- `DRadius` (System.Double): 
- `BendPosition` (System.Int32): 
- `DOffsetDist` (System.Double): 
- `ReliefType` (System.Int32): 
- `DReliefRatio` (System.Double): 
- `DReliefWidth` (System.Double): 
- `DReliefDepth` (System.Double): 
- `FlangeSharpType` (System.Int32): 
- `PCBA` (CustomBendAllowance): 

## Return Value

Unknown.