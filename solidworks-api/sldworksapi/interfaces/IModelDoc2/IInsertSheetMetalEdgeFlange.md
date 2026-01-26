---
type: method
interface: IModelDoc2
member: IInsertSheetMetalEdgeFlange
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
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - geometry
  - ui
related: []
keywords:
  - iinsertsheetmetaledgeflange
  - imodeldoc2
  - model
  - doc2
  - insert
  - sheet
  - metal
  - edge
  - flange
  - sketch
  - feat
  - feature
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
---

# IModelDoc2.IInsertSheetMetalEdgeFlange

Obsolete. Superseded by IFeatureManager::InsertSheetMetalEdgeFlange2.

## Signature

```csharp
Feature IInsertSheetMetalEdgeFlange( 
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

## Return Value

Unknown.