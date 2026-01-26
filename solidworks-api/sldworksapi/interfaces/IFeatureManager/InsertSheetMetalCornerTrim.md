---
type: method
interface: IFeatureManager
member: InsertSheetMetalCornerTrim
returns: Feature
parameters:
  -
    name: InternalCornerFlag
    type: System.Int32
    description: Do internal corners only
  -
    name: BreakType
    type: System.Int32
    description: Type of break as defined in swBreakCornerTypes_e
  -
    name: BreakDist
    type: System.Double
    description: Distance to break from corner
  -
    name: ReliefType
    type: System.Int32
    description: Type of relief: 0 = circular 1 = square 2 = bend-waist
  -
    name: Param
    type: System.Double
    description: ReliefType dependent: circular, its diameter square, its side length bend-waist, its radius
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBreakCornerFeatureData
  - ISheetMetalFeatureData
keywords:
  - break
  - corners
  - see
  - ibreakcornerfeaturedata
  - corner
  - feature
  - also
  - ifeature
  - insertsheetmetalcornertrim
  - ifeaturemanager
  - manager
  - insert
  - sheet
  - metal
  - trim
  - internal
  - flag
  - int32
  - type
  - dist
  - double
  - relief
  - param
---

# IFeatureManager.InsertSheetMetalCornerTrim

Inserts a break corner trim in the sheet metal part.

## Signature

```csharp
Feature InsertSheetMetalCornerTrim( 
   System.Int32
InternalCornerFlag
,
   System.Int32
BreakType
,
   System.Double
BreakDist
,
   System.Int32
ReliefType
,
   System.Double
Param
)
```
## Parameters

- `InternalCornerFlag` (System.Int32): Do internal corners only
- `BreakType` (System.Int32): Type of break as defined in swBreakCornerTypes_e
- `BreakDist` (System.Double): Distance to break from corner
- `ReliefType` (System.Int32): Type of relief: 0 = circular 1 = square 2 = bend-waist
- `Param` (System.Double): ReliefType dependent: circular, its diameter square, its side length bend-waist, its radius

## Return Value

Pointer to the break corner trim feature in the sheet metal part

## See Also

- `IBreakCornerFeatureData`
- `ISheetMetalFeatureData`