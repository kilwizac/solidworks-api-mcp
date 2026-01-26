---
type: method
interface: IFeatureManager
member: InsertEndCapFeature3
returns: Feature
parameters:
  -
    name: Depth
    type: System.Double
    description: Thickness of the end cap
  -
    name: BIsGivenOffset
    type: System.Boolean
    description: True to provide an offset value, false to provide a thickness ratio
  -
    name: BIsChamfer
    type: System.Boolean
    description: True if end cap feature is chamfered, false if end cap is filleted
  -
    name: OffsetValue
    type: System.Double
    description: Edge offset value; valid only if BIsGivenOffset is true
  -
    name: WallThicknessRatio
    type: System.Double
    description: Wall thickness ratio; valid only if BIsGivenOffset is false
  -
    name: ChamferValue
    type: System.Double
    description: Chamfer distance if BIsChamfer is true, fillet radius if BIsChamfer is false
  -
    name: BIsCornerTreatment
    type: System.Boolean
    description: True to chamfer or fillet the end cap corners, false to not; valid only if BIsGivenOffset is false
  -
    name: DepthOffset
    type: System.Double
    description: Inset distance; valid only if BIsEndCapInward = 2
  -
    name: BIsReverse
    type: System.Boolean
    description: True to reverse the offset or thickness ratio, false to not
  -
    name: BIsEndCapInward
    type: System.Int32
    description: Thickness direction as defined in swEndCapThicknessDirection_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IEndCapFeatureData
keywords:
  - end
  - caps
  - see
  - iendcapfeaturedata
  - feature
  - also
  - ifeature
  - cap
  - weldments
  - insertendcapfeature3
  - ifeaturemanager
  - manager
  - insert
  - feature3
  - depth
  - double
  - given
  - offset
  - boolean
  - chamfer
  - value
  - wall
  - thickness
  - ratio
  - corner
  - treatment
  - reverse
  - inward
  - int32
  - weldment
  - vba
  - vb
  - net
---

# IFeatureManager.InsertEndCapFeature3

Inserts an end cap feature for one or more pre-selected open ends of a structural member.

## Signature

```csharp
Feature InsertEndCapFeature3( 
   System.Double
Depth
,
   System.Boolean
BIsGivenOffset
,
   System.Boolean
BIsChamfer
,
   System.Double
OffsetValue
,
   System.Double
WallThicknessRatio
,
   System.Double
ChamferValue
,
   System.Boolean
BIsCornerTreatment
,
   System.Double
DepthOffset
,
   System.Boolean
BIsReverse
,
   System.Int32
BIsEndCapInward
)
```
## Parameters

- `Depth` (System.Double): Thickness of the end cap
- `BIsGivenOffset` (System.Boolean): True to provide an offset value, false to provide a thickness ratio
- `BIsChamfer` (System.Boolean): True if end cap feature is chamfered, false if end cap is filleted
- `OffsetValue` (System.Double): Edge offset value; valid only if BIsGivenOffset is true
- `WallThicknessRatio` (System.Double): Wall thickness ratio; valid only if BIsGivenOffset is false
- `ChamferValue` (System.Double): Chamfer distance if BIsChamfer is true, fillet radius if BIsChamfer is false
- `BIsCornerTreatment` (System.Boolean): True to chamfer or fillet the end cap corners, false to not; valid only if BIsGivenOffset is false
- `DepthOffset` (System.Double): Inset distance; valid only if BIsEndCapInward = 2
- `BIsReverse` (System.Boolean): True to reverse the offset or thickness ratio, false to not
- `BIsEndCapInward` (System.Int32): Thickness direction as defined in swEndCapThicknessDirection_e

## Return Value

IFeature

## Remarks

Before calling this method, select one or more end
faces
of a structural member in the graphics area.
Instead of using this method, you can pass the faces in an argument array of
IFeatureManager::InsertEndCapFeature2
.

## Examples

- Insert Weldment End Cap (VBA) (Insert_Weldment_End_Cap_Example_VB.htm)
- Insert Weldment End Cap (VB.NET) (Insert_Weldment_End_Cap_Example_VBNET.htm)
- Insert Weldment End Cap (C#) (Insert_Weldment_End_Cap_Example_CSharp.htm)

## See Also

- `IEndCapFeatureData`