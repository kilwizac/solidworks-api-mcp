---
type: method
interface: IFeatureManager
member: InsertEndCapFeature2
returns: Feature
parameters:
  -
    name: Depth
    type: System.Double
    description: Depth of the end cap
  -
    name: BIsGivenOffset
    type: System.Boolean
    description: True if end cap is offset, false if not
  -
    name: BIsChamfer
    type: System.Boolean
    description: True if end cap feature is chamfered, false If not
  -
    name: OffsetValue
    type: System.Double
    description: Value by which to offset the end cap
  -
    name: WallThicknessRatio
    type: System.Double
    description: Wall thickness ratio
  -
    name: ChamferValue
    type: System.Double
    description: Angle of the chamfer
  -
    name: Faces
    type: System.Object
    description: Array of Face2 objects
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IEndCapFeatureData
keywords:
  - feature
  - see
  - also
  - ifeature
  - end
  - cap
  - weldments
  - caps
  - insertendcapfeature2
  - ifeaturemanager
  - manager
  - insert
  - feature2
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
  - faces
  - object
  - weldment
  - features
  - vba
  - vb
  - net
---

# IFeatureManager.InsertEndCapFeature2

Inserts an end cap feature using the specified end faces of a structural member.

## Signature

```csharp
Feature InsertEndCapFeature2( 
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
   System.Object
Faces
)
```
## Parameters

- `Depth` (System.Double): Depth of the end cap
- `BIsGivenOffset` (System.Boolean): True if end cap is offset, false if not
- `BIsChamfer` (System.Boolean): True if end cap feature is chamfered, false If not
- `OffsetValue` (System.Double): Value by which to offset the end cap
- `WallThicknessRatio` (System.Double): Wall thickness ratio
- `ChamferValue` (System.Double): Angle of the chamfer
- `Faces` (System.Object): Array of Face2 objects

## Return Value

IFeature

## Remarks

Call
IFeatureManager::InsertEndCapFeature3
if you want to pre-select the faces to end-cap in the graphics area.

## Examples

- Insert Weldment Features (VBA) (Insert_Weldment_Features_Example_VB.htm)
- Insert Weldment Features (VB.NET) (Insert_Weldment_Features_Example_VBNET.htm)
- Insert Weldment Features (C#) (Insert_Weldment_Features_Example_CSharp.htm)

## See Also

- `IEndCapFeatureData`