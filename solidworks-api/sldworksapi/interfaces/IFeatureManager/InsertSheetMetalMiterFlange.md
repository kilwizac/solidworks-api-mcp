---
type: method
interface: IFeatureManager
member: InsertSheetMetalMiterFlange
returns: Feature
parameters:
  -
    name: UseDefaultRadius
    type: System.Boolean
    description: True to use default bend radius, false to use GlobalRadius
  -
    name: GlobalRadius
    type: System.Double
    description: Global bend radius
  -
    name: RipGap
    type: System.Double
    description: Rip-gap distance
  -
    name: UseDefaultRelief
    type: System.Boolean
    description: True to use parent bend's ratio, false to not
  -
    name: UseReliefRatio
    type: System.Boolean
    description: True to use custom relief ratio, false to not
  -
    name: ReliefRatio
    type: System.Double
    description: If useReliefRatio is True, then specify relief ratio
  -
    name: ReliefWidth
    type: System.Double
    description: If UseReliefRatio is True and ReliefType is swSheetMetalReliefRectangular or swSheetMetalReliefObround, then specify relief depth
  -
    name: ReliefDepth
    type: System.Double
    description: If UseReliefRatio is True and ReliefType is swSheetMetalReliefRectangular or swSheetMetalReliefObround, then specify relief depth
  -
    name: ReliefType
    type: System.Int32
    description: Relief type as defined by swSheetMetalReliefTypes_e ; valid selections: swSheetMetalRelievObround swSheetMetalReliefRectangular swSheetMetalReliefTear
  -
    name: TrimSideBends
    type: System.Boolean
    description: True to trim side bends, false to not
  -
    name: FlangePos
    type: System.Int32
    description: Flange position as defined by swFlangePositionTypes_e ; valid selections: swFlangePositionTypeMaterialInside swFlangePositionTypeMaterialOutside swFlangePositionTypeBendOutside
  -
    name: OffsetDist1
    type: System.Double
    description: Starting offset distance if partial flange
  -
    name: OffsetDist2
    type: System.Double
    description: Ending offset distance if partial flange
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
  - IMiterFlangeFeatureData
  - ISheetMetalFeatureData
keywords:
  - feature
  - see
  - also
  - ifeature
  - miter
  - flange
  - imiterflangefeaturedata
  - sheet
  - metal
  - isheetmetalfeaturedata
  - flanges
  - insertsheetmetalmiterflange
  - ifeaturemanager
  - manager
  - insert
  - use
  - default
  - radius
  - boolean
  - global
  - double
  - rip
  - gap
  - relief
  - ratio
  - width
  - depth
  - type
  - int32
  - trim
  - side
  - bends
  - pos
  - offset
  - dist1
  - dist2
  - pcba
  - custom
  - bend
  - allowance
---

# IFeatureManager.InsertSheetMetalMiterFlange

Inserts a meter flange in a sheet metal part.

## Signature

```csharp
Feature InsertSheetMetalMiterFlange( 
   System.Boolean
UseDefaultRadius
,
   System.Double
GlobalRadius
,
   System.Double
RipGap
,
   System.Boolean
UseDefaultRelief
,
   System.Boolean
UseReliefRatio
,
   System.Double
ReliefRatio
,
   System.Double
ReliefWidth
,
   System.Double
ReliefDepth
,
   System.Int32
ReliefType
,
   System.Boolean
TrimSideBends
,
   System.Int32
FlangePos
,
   System.Double
OffsetDist1
,
   System.Double
OffsetDist2
,
   CustomBendAllowance
PCBA
)
```
## Parameters

- `UseDefaultRadius` (System.Boolean): True to use default bend radius, false to use GlobalRadius
- `GlobalRadius` (System.Double): Global bend radius
- `RipGap` (System.Double): Rip-gap distance
- `UseDefaultRelief` (System.Boolean): True to use parent bend's ratio, false to not
- `UseReliefRatio` (System.Boolean): True to use custom relief ratio, false to not
- `ReliefRatio` (System.Double): If useReliefRatio is True, then specify relief ratio
- `ReliefWidth` (System.Double): If UseReliefRatio is True and ReliefType is swSheetMetalReliefRectangular or swSheetMetalReliefObround, then specify relief depth
- `ReliefDepth` (System.Double): If UseReliefRatio is True and ReliefType is swSheetMetalReliefRectangular or swSheetMetalReliefObround, then specify relief depth
- `ReliefType` (System.Int32): Relief type as defined by swSheetMetalReliefTypes_e ; valid selections: swSheetMetalRelievObround swSheetMetalReliefRectangular swSheetMetalReliefTear
- `TrimSideBends` (System.Boolean): True to trim side bends, false to not
- `FlangePos` (System.Int32): Flange position as defined by swFlangePositionTypes_e ; valid selections: swFlangePositionTypeMaterialInside swFlangePositionTypeMaterialOutside swFlangePositionTypeBendOutside
- `OffsetDist1` (System.Double): Starting offset distance if partial flange
- `OffsetDist2` (System.Double): Ending offset distance if partial flange
- `PCBA` (CustomBendAllowance): If... Then... non-NULL Pointer to ICustomBendAllowance object for which required values have been set NULL Parent bend's bend allowance is used

## Return Value

Pointer to the IFeature object or NULL

## See Also

- `IMiterFlangeFeatureData`
- `ISheetMetalFeatureData`