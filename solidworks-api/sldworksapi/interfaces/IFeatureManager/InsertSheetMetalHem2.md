---
type: method
interface: IFeatureManager
member: InsertSheetMetalHem2
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
  -
    name: UseDefaultRelief
    type: System.Boolean
    description: True to use the default relief, false to use the relief specified by ReliefType
  -
    name: ReliefType
    type: System.Int32
    description: Type of relief as defined in swSheetMetalReliefTypes_e ; valid only if UseDefaultRelief is false
  -
    name: ReliefTearTypes
    type: System.Int32
    description: Type of relief tear as defined in swReliefTearTypes_e ; valid only when: UseDefaultRelief is false - and - ReliefType is swSheetMetalReliefTypes_e .swSheetMetalReliefTear
  -
    name: UseReliefRatio
    type: System.Boolean
    description: True to use ReliefRatio, false to use ReliefWidth/ReliefDepth; valid only when: UseDefaultRelief is false - and - ReliefType is either swSheetMetalReliefTypes_e .swSheetMetalReliefObround or swSheetMetalReliefTypes_e .swSheetMetalReliefRectangular
  -
    name: ReliefRatio
    type: System.Double
    description: Relief ratio; valid only when: UseDefaultRelief is false - and - UseReliefRatio is true - and - ReliefType is either swSheetMetalReliefTypes_e .swSheetMetalReliefObround or swSheetMetalReliefTypes_e .swSheetMetalReliefRectangular
  -
    name: ReliefWidth
    type: System.Double
    description: Width of the relief; valid only when: UseDefaultRelief is false - and - UseReliefRatio is false - and - ReliefType is either swSheetMetalReliefTypes_e .swSheetMetalReliefObround or swSheetMetalReliefTypes_e .swSheetMetalReliefRectangular
  -
    name: ReliefDepth
    type: System.Double
    description: Depth of the relief; valid only when: UseDefaultRelief is false - and - UseReliefRatio is false - and - ReliefType is either swSheetMetalReliefTypes_e .swSheetMetalReliefObround or swSheetMetalReliefTypes_e .swSheetMetalReliefRectangular
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IHemFeatureData
  - ISheetMetalFeatureData
keywords:
  - hems
  - see
  - ihemfeaturedata
  - sheet
  - metal
  - also
  - isheetmetalfeaturedata
  - feature
  - ifeature
  - hem
  - insertsheetmetalhem2
  - ifeaturemanager
  - manager
  - insert
  - hem2
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
  - use
  - default
  - relief
  - tear
  - types
  - ratio
  - width
  - depth
  - vba
  - vb
  - net
---

# IFeatureManager.InsertSheetMetalHem2

Inserts a hem of the specified relief type at the selected edges of the current sheet metal part.

## Signature

```csharp
Feature InsertSheetMetalHem2( 
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
,
   System.Boolean
UseDefaultRelief
,
   System.Int32
ReliefType
,
   System.Int32
ReliefTearTypes
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
- `UseDefaultRelief` (System.Boolean): True to use the default relief, false to use the relief specified by ReliefType
- `ReliefType` (System.Int32): Type of relief as defined in swSheetMetalReliefTypes_e ; valid only if UseDefaultRelief is false
- `ReliefTearTypes` (System.Int32): Type of relief tear as defined in swReliefTearTypes_e ; valid only when: UseDefaultRelief is false - and - ReliefType is swSheetMetalReliefTypes_e .swSheetMetalReliefTear
- `UseReliefRatio` (System.Boolean): True to use ReliefRatio, false to use ReliefWidth/ReliefDepth; valid only when: UseDefaultRelief is false - and - ReliefType is either swSheetMetalReliefTypes_e .swSheetMetalReliefObround or swSheetMetalReliefTypes_e .swSheetMetalReliefRectangular
- `ReliefRatio` (System.Double): Relief ratio; valid only when: UseDefaultRelief is false - and - UseReliefRatio is true - and - ReliefType is either swSheetMetalReliefTypes_e .swSheetMetalReliefObround or swSheetMetalReliefTypes_e .swSheetMetalReliefRectangular
- `ReliefWidth` (System.Double): Width of the relief; valid only when: UseDefaultRelief is false - and - UseReliefRatio is false - and - ReliefType is either swSheetMetalReliefTypes_e .swSheetMetalReliefObround or swSheetMetalReliefTypes_e .swSheetMetalReliefRectangular
- `ReliefDepth` (System.Double): Depth of the relief; valid only when: UseDefaultRelief is false - and - UseReliefRatio is false - and - ReliefType is either swSheetMetalReliefTypes_e .swSheetMetalReliefObround or swSheetMetalReliefTypes_e .swSheetMetalReliefRectangular

## Return Value

IFeature

## Remarks

Before calling this method:
Call
IFeatureManager::CreateCustomBendAllowance
to create an instance of ICustomBendAllowance.
Initialize the CustomBendAllowance object.
Assign PCBA to the initialized CustomBendAllowance object.
Select one or more edges in the sheet metal model to which to add the specified hem.

## Examples

- Insert Sheet Metal Hem (VBA) (Insert_Sheet_Metal_Hem_Example_VB.htm)
- Insert Sheet Metal Hem (VB.NET) (Insert_Sheet_Metal_Hem_Example_VBNET.htm)
- Insert Sheet Metal Hem (C#) (Insert_Sheet_Metal_Hem_Example_CSharp.htm)

## See Also

- `IHemFeatureData`
- `ISheetMetalFeatureData`