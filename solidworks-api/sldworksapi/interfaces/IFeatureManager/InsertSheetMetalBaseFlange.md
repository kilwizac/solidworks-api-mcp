---
type: method
interface: IFeatureManager
member: InsertSheetMetalBaseFlange
returns: Feature
parameters:
  -
    name: Thickness
    type: System.Double
    description: Wall thickness of the sheet metal feature
  -
    name: ThickenDir
    type: System.Boolean
    description: Direction to thicken the sheet metal
  -
    name: Radius
    type: System.Double
    description: Global bend radius to insert at the corners
  -
    name: ExtrudeDist1
    type: System.Double
    description: Distance of the sheet metal extrusion for the Direction 1
  -
    name: ExtrudeDist2
    type: System.Double
    description: Distance of the sheet metal extrusion for the Direction 2
  -
    name: FlipExtruDir
    type: System.Boolean
    description: True to reverse the direction of the extrude, false to not
  -
    name: EndCondition1
    type: System.Int32
    description: End condition for first extrude distance
  -
    name: EndCondition2
    type: System.Int32
    description: End condition for second extrude distance
  -
    name: DirToUse
    type: System.Int32
    description: End condition type as defined in swEndConditions_e
  -
    name: PCBA
    type: CustomBendAllowance
    description: Pointer to the custom bend allowance object
  -
    name: UseDefaultRelief
    type: System.Boolean
    description: True to use the default relief, false to not
  -
    name: ReliefType
    type: System.Int32
    description: Relief type as defined in swSheetMetalReliefTypes_e
  -
    name: ReliefWidth
    type: System.Double
    description: Width of the relief
  -
    name: ReliefDepth
    type: System.Double
    description: Depth of the relief
  -
    name: ReliefRatio
    type: System.Double
    description: Value for the relief ratio
  -
    name: UseReliefRatio
    type: System.Boolean
    description: True to use the relief ratio, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IBaseFlangeFeatureData
  - ISheetMetalFeatureData
keywords:
  - insertsheetmetalbaseflange
  - ifeaturemanager
  - feature
  - manager
  - insert
  - sheet
  - metal
  - base
  - flange
  - thickness
  - double
  - thicken
  - dir
  - boolean
  - radius
  - extrude
  - dist1
  - dist2
  - flip
  - extru
  - end
  - condition1
  - int32
  - condition2
  - use
  - pcba
  - custom
  - bend
  - allowance
  - default
  - relief
  - type
  - width
  - depth
  - ratio
---

# IFeatureManager.InsertSheetMetalBaseFlange

Obsolete. Superseded by IFeatureManager::InsertSheetMetalBaseFlange2.

## Signature

```csharp
Feature InsertSheetMetalBaseFlange( 
   System.Double
Thickness
,
   System.Boolean
ThickenDir
,
   System.Double
Radius
,
   System.Double
ExtrudeDist1
,
   System.Double
ExtrudeDist2
,
   System.Boolean
FlipExtruDir
,
   System.Int32
EndCondition1
,
   System.Int32
EndCondition2
,
   System.Int32
DirToUse
,
   CustomBendAllowance
PCBA
,
   System.Boolean
UseDefaultRelief
,
   System.Int32
ReliefType
,
   System.Double
ReliefWidth
,
   System.Double
ReliefDepth
,
   System.Double
ReliefRatio
,
   System.Boolean
UseReliefRatio
)
```
## Parameters

- `Thickness` (System.Double): Wall thickness of the sheet metal feature
- `ThickenDir` (System.Boolean): Direction to thicken the sheet metal
- `Radius` (System.Double): Global bend radius to insert at the corners
- `ExtrudeDist1` (System.Double): Distance of the sheet metal extrusion for the Direction 1
- `ExtrudeDist2` (System.Double): Distance of the sheet metal extrusion for the Direction 2
- `FlipExtruDir` (System.Boolean): True to reverse the direction of the extrude, false to not
- `EndCondition1` (System.Int32): End condition for first extrude distance
- `EndCondition2` (System.Int32): End condition for second extrude distance
- `DirToUse` (System.Int32): End condition type as defined in swEndConditions_e
- `PCBA` (CustomBendAllowance): Pointer to the custom bend allowance object
- `UseDefaultRelief` (System.Boolean): True to use the default relief, false to not
- `ReliefType` (System.Int32): Relief type as defined in swSheetMetalReliefTypes_e
- `ReliefWidth` (System.Double): Width of the relief
- `ReliefDepth` (System.Double): Depth of the relief
- `ReliefRatio` (System.Double): Value for the relief ratio
- `UseReliefRatio` (System.Boolean): True to use the relief ratio, false to not

## Return Value

Pointer to the IFeature object

## See Also

- `IBaseFlangeFeatureData`
- `ISheetMetalFeatureData`