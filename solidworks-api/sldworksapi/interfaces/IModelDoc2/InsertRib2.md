---
type: method
interface: IModelDoc2
member: InsertRib2
returns: void
parameters:
  -
    name: Is2Sided
    type: System.Boolean
    description: True if the rib is double-sided rib, false if the rib is single sided; a double-sided rib thickens on both sides of the sketch
  -
    name: ReverseThicknessDir
    type: System.Boolean
    description: For single-sided ribs, the direction thickened is the opposite side of the sketch normal
  -
    name: Thickness
    type: System.Double
    description: Rib thickness
  -
    name: ReferenceEdgeIndex
    type: System.Int32
    description: Edge in the sketch to us to determine the material direction and for draft reference; when the rib is drafted, the mid point of this edge maintains the thickness value; other points on the rib may have a different thickness due to the draft
  -
    name: ReverseMaterialDir
    type: System.Boolean
    description: Which direction the rib has material; it is on one side or the order side of the reference edge base on this flag
  -
    name: IsDrafted
    type: System.Boolean
    description: True if the rib is drafted, false if not
  -
    name: DraftOutward
    type: System.Boolean
    description: True to draft outwards, false to not
  -
    name: DraftAngle
    type: System.Double
    description: Draft angle to apply to the rib
  -
    name: IsNormToSketch
    type: System.Boolean
    description: True if the rib is normal to the sketch, false if the rib is parallel to the sketch
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - insertrib2
  - imodeldoc2
  - model
  - doc2
  - insert
  - rib2
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
  - void
---

# IModelDoc2.InsertRib2

Obsolete. Superseded by IFeatureManager::InsertRib.

## Signature

```csharp
void InsertRib2( 
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
)
```
## Parameters

- `Is2Sided` (System.Boolean): True if the rib is double-sided rib, false if the rib is single sided; a double-sided rib thickens on both sides of the sketch
- `ReverseThicknessDir` (System.Boolean): For single-sided ribs, the direction thickened is the opposite side of the sketch normal
- `Thickness` (System.Double): Rib thickness
- `ReferenceEdgeIndex` (System.Int32): Edge in the sketch to us to determine the material direction and for draft reference; when the rib is drafted, the mid point of this edge maintains the thickness value; other points on the rib may have a different thickness due to the draft
- `ReverseMaterialDir` (System.Boolean): Which direction the rib has material; it is on one side or the order side of the reference edge base on this flag
- `IsDrafted` (System.Boolean): True if the rib is drafted, false if not
- `DraftOutward` (System.Boolean): True to draft outwards, false to not
- `DraftAngle` (System.Double): Draft angle to apply to the rib
- `IsNormToSketch` (System.Boolean): True if the rib is normal to the sketch, false if the rib is parallel to the sketch

## Return Value

Unknown.

## Remarks

This method supports multibody parts. You must select the input body by calling
IModelDocExtension::SelectByID2
and setting its Mark argument to 1 before calling this method.