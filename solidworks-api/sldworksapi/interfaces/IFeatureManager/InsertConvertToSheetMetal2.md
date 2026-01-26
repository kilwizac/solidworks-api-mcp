---
type: method
interface: IFeatureManager
member: InsertConvertToSheetMetal2
returns: System.Boolean
parameters:
  -
    name: Thickness
    type: System.Double
    description: Sheet thickness
  -
    name: ReverseThickDir
    type: System.Boolean
    description: True to reverse the direction of the sheet thickness, false to not
  -
    name: FindBends
    type: System.Boolean
    description: True to find pre-made bends and part thickness, false to not
  -
    name: Radius
    type: System.Double
    description: Radius for the bends
  -
    name: Gap
    type: System.Double
    description: Gap for all rips
  -
    name: ReliefType
    type: System.Int32
    description: Relief type as defined by swSheetMetalReliefTypes_e
  -
    name: ReliefRatio
    type: System.Double
    description: Relief ratio
  -
    name: OverlapType
    type: System.Int32
    description: Overlap type for all rips 1=Open butt 2=Overlap 3=Underlap
  -
    name: OverlapRatio
    type: System.Double
    description: Overlap ratio for all rips
  -
    name: KeepBody
    type: System.Boolean
    description: True to keep bodies, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related: []
keywords:
  - sheet
  - metal
  - see
  - also
  - isheetmetalfeaturedata
  - solid
  - bodies
  - surface
  - ibody2
  - isurface
  - parts
  - insertconverttosheetmetal2
  - ifeaturemanager
  - feature
  - manager
  - insert
  - convert
  - metal2
  - thickness
  - double
  - reverse
  - thick
  - dir
  - boolean
  - find
  - bends
  - radius
  - gap
  - relief
  - type
  - int32
  - ratio
  - overlap
  - keep
  - body
---

# IFeatureManager.InsertConvertToSheetMetal2

Obsolete. Superseded by IFeatureManager::CreateDefinition and IFeatureManager::CreateFeature.

## Signature

```csharp
System.Boolean InsertConvertToSheetMetal2( 
   System.Double
Thickness
,
   System.Boolean
ReverseThickDir
,
   System.Boolean
FindBends
,
   System.Double
Radius
,
   System.Double
Gap
,
   System.Int32
ReliefType
,
   System.Double
ReliefRatio
,
   System.Int32
OverlapType
,
   System.Double
OverlapRatio
,
   System.Boolean
KeepBody
)
```
## Parameters

- `Thickness` (System.Double): Sheet thickness
- `ReverseThickDir` (System.Boolean): True to reverse the direction of the sheet thickness, false to not
- `FindBends` (System.Boolean): True to find pre-made bends and part thickness, false to not
- `Radius` (System.Double): Radius for the bends
- `Gap` (System.Double): Gap for all rips
- `ReliefType` (System.Int32): Relief type as defined by swSheetMetalReliefTypes_e
- `ReliefRatio` (System.Double): Relief ratio
- `OverlapType` (System.Int32): Overlap type for all rips 1=Open butt 2=Overlap 3=Underlap
- `OverlapRatio` (System.Double): Overlap ratio for all rips
- `KeepBody` (System.Boolean): True to keep bodies, false to not

## Return Value

True if a Convert-Solid sheet metal feature is created, false if not

## Remarks

Read the SOLIDWORKS Help to learn more about converting to sheet metal.