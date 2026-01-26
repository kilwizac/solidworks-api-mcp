---
type: method
interface: IFeatureManager
member: InsertRib
returns: void
parameters:
  -
    name: Is2Sided
    type: System.Boolean
    description: True if the rib is double-sided, false if the rib is single sided; a double-sided rib thickens on both sides of the sketch
  -
    name: ReverseThicknessDir
    type: System.Boolean
    description: True to thicken the opposite side of the sketch normal, false to not; only valid for single-sided ribs
  -
    name: Thickness
    type: System.Double
    description: Rib thickness
  -
    name: ReferenceEdgeIndex
    type: System.Int32
    description: Edge in the sketch to use to determine the material direction and for draft reference; when the rib is drafted, the mid point of this edge maintains the thickness value; other points on the rib may have a different thicknesses due to the draft
  -
    name: ReverseMaterialDir
    type: System.Boolean
    description: True to flip the direction of the extrusion, false to not
  -
    name: IsDrafted
    type: System.Boolean
    description: True to draft the rib, false to not
  -
    name: DraftOutward
    type: System.Boolean
    description: True to draft the rib outward, false to not; only valid if IsDrafted is true
  -
    name: DraftAngle
    type: System.Double
    description: Draft angle of the rib; only valid if IsDrafted is true
  -
    name: IsNormToSketch
    type: System.Boolean
    description: True if extrusion direction is normal to sketch, false if parallel to sketch
  -
    name: IsDraftedFromWall
    type: System.Boolean
    description: True if draft is from wall, false if not; only valid if IsDrafted is true
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IRibFeatureData2
keywords:
  - ribs
  - see
  - also
  - iribfeaturedata2
  - insert
  - insertrib
  - ifeaturemanager
  - feature
  - manager
  - rib
  - is2
  - sided
  - boolean
  - reverse
  - thickness
  - dir
  - double
  - reference
  - edge
  - index
  - int32
  - material
  - drafted
  - draft
  - outward
  - angle
  - norm
  - sketch
  - wall
  - void
  - data
  - vba
  - vb
  - net
---

# IFeatureManager.InsertRib

Inserts a rib.

## Signature

```csharp
void InsertRib( 
   System.Boolean
Is2Sided
,
   System.Boolean
ReverseThicknessDir
,
   System.Double
Thickness
,
   System.Int32
ReferenceEdgeIndex
,
   System.Boolean
ReverseMaterialDir
,
   System.Boolean
IsDrafted
,
   System.Boolean
DraftOutward
,
   System.Double
DraftAngle
,
   System.Boolean
IsNormToSketch
,
   System.Boolean
IsDraftedFromWall
)
```
## Parameters

- `Is2Sided` (System.Boolean): True if the rib is double-sided, false if the rib is single sided; a double-sided rib thickens on both sides of the sketch
- `ReverseThicknessDir` (System.Boolean): True to thicken the opposite side of the sketch normal, false to not; only valid for single-sided ribs
- `Thickness` (System.Double): Rib thickness
- `ReferenceEdgeIndex` (System.Int32): Edge in the sketch to use to determine the material direction and for draft reference; when the rib is drafted, the mid point of this edge maintains the thickness value; other points on the rib may have a different thicknesses due to the draft
- `ReverseMaterialDir` (System.Boolean): True to flip the direction of the extrusion, false to not
- `IsDrafted` (System.Boolean): True to draft the rib, false to not
- `DraftOutward` (System.Boolean): True to draft the rib outward, false to not; only valid if IsDrafted is true
- `DraftAngle` (System.Double): Draft angle of the rib; only valid if IsDrafted is true
- `IsNormToSketch` (System.Boolean): True if extrusion direction is normal to sketch, false if parallel to sketch
- `IsDraftedFromWall` (System.Boolean): True if draft is from wall, false if not; only valid if IsDrafted is true

## Return Value

Unknown.

## Examples

- Get Rib Feature Data (VBA) (Get_Rib_Feature_Data_Example_VB.htm)
- Get Rib Feature Data (VB.NET) (Get_Rib_Feature_Data_Example_VBNET.htm)
- Get Rib Feature Data (C#) (Get_Rib_Feature_Data_Example_CSharp.htm)

## See Also

- `IRibFeatureData2`