---
type: method
interface: IFeatureManager
member: InsertConvertToSheetMetal
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
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related: []
keywords:
  - insertconverttosheetmetal
  - ifeaturemanager
  - feature
  - manager
  - insert
  - convert
  - sheet
  - metal
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
---

# IFeatureManager.InsertConvertToSheetMetal

Obsolete. Superseded by IFeatureManager::InsertConvertToSheetMetal2.

## Signature

```csharp
System.Boolean InsertConvertToSheetMetal( 
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

## Return Value

True if a Convert-Solid sheet metal feature is created, false if not