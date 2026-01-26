---
type: method
interface: IFeatureManager
member: InsertSheetMetalHem
returns: Feature
parameters:
  -
    name: Type
    type: System.Int32
    description: Type as defined in swHemTypes_e
  -
    name: Position
    type: System.Int32
    description: Position as defined in swHemPositionTypes_e
  -
    name: Reverse
    type: System.Boolean
    description: True reverses the direction, false does not
  -
    name: DLength
    type: System.Double
    description: Hem length; valid only for open or closed hems
  -
    name: DGap
    type: System.Double
    description: Gap distance; valid only for open hems
  -
    name: DAngle
    type: System.Double
    description: Hem angle; valid only for tear-drop or rolled hems
  -
    name: DRad
    type: System.Double
    description: Hem radius; valid only for tear-drop or rolled hems
  -
    name: DMiterGap
    type: System.Double
    description: Hem miter gap
  -
    name: PCBA
    type: CustomBendAllowance
    description: If... Then... non-NULL Pointer to ICustomBendAllowance object for which required values have been set NULL Parent bend's bend allowance is used
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IHemFeatureData
  - ISheetMetalFeatureData
keywords:
  - insertsheetmetalhem
  - ifeaturemanager
  - feature
  - manager
  - insert
  - sheet
  - metal
  - hem
  - type
  - int32
  - position
  - reverse
  - boolean
  - length
  - double
  - gap
  - angle
  - rad
  - miter
  - pcba
  - custom
  - bend
  - allowance
---

# IFeatureManager.InsertSheetMetalHem

Obsolete. Superseded by IFeatureManager::InsertSheetMetalHem2.

## Signature

```csharp
Feature InsertSheetMetalHem( 
   System.Int32
Type
,
   System.Int32
Position
,
   System.Boolean
Reverse
,
   System.Double
DLength
,
   System.Double
DGap
,
   System.Double
DAngle
,
   System.Double
DRad
,
   System.Double
DMiterGap
,
   CustomBendAllowance
PCBA
)
```
## Parameters

- `Type` (System.Int32): Type as defined in swHemTypes_e
- `Position` (System.Int32): Position as defined in swHemPositionTypes_e
- `Reverse` (System.Boolean): True reverses the direction, false does not
- `DLength` (System.Double): Hem length; valid only for open or closed hems
- `DGap` (System.Double): Gap distance; valid only for open hems
- `DAngle` (System.Double): Hem angle; valid only for tear-drop or rolled hems
- `DRad` (System.Double): Hem radius; valid only for tear-drop or rolled hems
- `DMiterGap` (System.Double): Hem miter gap
- `PCBA` (CustomBendAllowance): If... Then... non-NULL Pointer to ICustomBendAllowance object for which required values have been set NULL Parent bend's bend allowance is used

## Return Value

Pointer to the IFeature object

## See Also

- `IHemFeatureData`
- `ISheetMetalFeatureData`