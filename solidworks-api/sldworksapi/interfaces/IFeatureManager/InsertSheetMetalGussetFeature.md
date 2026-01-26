---
type: method
interface: IFeatureManager
member: InsertSheetMetalGussetFeature
returns: Feature
parameters:
  -
    name: BOffset
    type: System.Boolean
    description: True to offset the gusset section plane from the selected reference point, false to not
  -
    name: DOffset
    type: System.Double
    description: Value by which to offset the gusset section plane from the selected reference point; valid only if BOffset is true
  -
    name: BFlipOffsetSide
    type: System.Boolean
    description: True to specify the gusset section plane offset on the opposite side of the selected reference point, false to not; valid only if BOffset is true
  -
    name: ProfDimType
    type: System.Int32
    description: Type of gusset profile dimensioning scheme: 0 = indent 1 = profile dimensioning (see Remarks )
  -
    name: DIndentDepth
    type: System.Double
    description: Gusset depth; valid only if ProfDimType = 0
  -
    name: DLength
    type: System.Double
    description: d1 gusset leg length; length of sheet metal from bend to intersection with first end of gusset; valid only if ProfDimType = 1 (see Remarks )
  -
    name: BUseAngle
    type: System.Boolean
    description: True to dimension the angle that is formed by the intersection of the gusset with either face adjacent to the bend; valid only if ProfDimType = 1 (see Remarks )
  -
    name: DHeight
    type: System.Double
    description: d2 gusset leg length; length of sheet metal from bend to intersection with second end of gusset; valid only if ProfDimType = 1 (see Remarks )
  -
    name: DAngle
    type: System.Double
    description: Angle formed by intersection of gusset with one face adjacent to the bend; valid only if ProfDimType = 1 and BUseAngle is true (see Remarks )
  -
    name: BFlipSides
    type: System.Boolean
    description: True to swap d1 and d2 in the dimensioning scheme, false to not; valid only if ProfDimType = 1 (see Remarks )
  -
    name: DWidth
    type: System.Double
    description: Gusset width
  -
    name: DThickness
    type: System.Double
    description: Gusset thickness
  -
    name: BDraft
    type: System.Boolean
    description: True to draft gusset side faces, false to not
  -
    name: DDraftAngle
    type: System.Double
    description: Angle by which to draft the gusset side faces; valid only if BDraft is true
  -
    name: BInnerCornerFillet
    type: System.Boolean
    description: True to fillet the gusset inner corners, false to not
  -
    name: DInnerCornerFilletRadius
    type: System.Double
    description: Inner corner fillet radius; valid only if BInnerCornerFillet is true
  -
    name: BOuterCornerFillet
    type: System.Boolean
    description: True to fillet the gusset outer corners, false to not
  -
    name: DOuterCornerFilletRadius
    type: System.Double
    description: Outer corner fillet radius; valid only if BOuterCornerFilletRadius is true
  -
    name: GussetType
    type: System.Int32
    description: Type of gusset: 0 = rounded back 1 = flat back
  -
    name: BEdgeFillet
    type: System.Boolean
    description: True to fillet the edges of a gusset, false to not; valid only if GussetType = 1
  -
    name: DEdgeFilletRadius
    type: System.Double
    description: Edge fillet radius; valid only if BEdgeFillet is true and GussetType = 1
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - ISMGussetFeatureData
keywords:
  - insertsheetmetalgussetfeature
  - ifeaturemanager
  - feature
  - manager
  - insert
  - sheet
  - metal
  - gusset
  - offset
  - boolean
  - double
  - flip
  - side
  - prof
  - dim
  - type
  - int32
  - indent
  - depth
  - length
  - use
  - angle
  - height
  - sides
  - width
  - thickness
  - draft
  - inner
  - corner
  - fillet
  - radius
  - outer
  - edge
---

# IFeatureManager.InsertSheetMetalGussetFeature

Obsolete. Superseded by IFeatureManager::InsertSheetMetalGussetFeature3.

## Signature

```csharp
Feature InsertSheetMetalGussetFeature( 
   System.Boolean
BOffset
,
   System.Double
DOffset
,
   System.Boolean
BFlipOffsetSide
,
   System.Int32
ProfDimType
,
   System.Double
DIndentDepth
,
   System.Double
DLength
,
   System.Boolean
BUseAngle
,
   System.Double
DHeight
,
   System.Double
DAngle
,
   System.Boolean
BFlipSides
,
   System.Double
DWidth
,
   System.Double
DThickness
,
   System.Boolean
BDraft
,
   System.Double
DDraftAngle
,
   System.Boolean
BInnerCornerFillet
,
   System.Double
DInnerCornerFilletRadius
,
   System.Boolean
BOuterCornerFillet
,
   System.Double
DOuterCornerFilletRadius
,
   System.Int32
GussetType
,
   System.Boolean
BEdgeFillet
,
   System.Double
DEdgeFilletRadius
)
```
## Parameters

- `BOffset` (System.Boolean): True to offset the gusset section plane from the selected reference point, false to not
- `DOffset` (System.Double): Value by which to offset the gusset section plane from the selected reference point; valid only if BOffset is true
- `BFlipOffsetSide` (System.Boolean): True to specify the gusset section plane offset on the opposite side of the selected reference point, false to not; valid only if BOffset is true
- `ProfDimType` (System.Int32): Type of gusset profile dimensioning scheme: 0 = indent 1 = profile dimensioning (see Remarks )
- `DIndentDepth` (System.Double): Gusset depth; valid only if ProfDimType = 0
- `DLength` (System.Double): d1 gusset leg length; length of sheet metal from bend to intersection with first end of gusset; valid only if ProfDimType = 1 (see Remarks )
- `BUseAngle` (System.Boolean): True to dimension the angle that is formed by the intersection of the gusset with either face adjacent to the bend; valid only if ProfDimType = 1 (see Remarks )
- `DHeight` (System.Double): d2 gusset leg length; length of sheet metal from bend to intersection with second end of gusset; valid only if ProfDimType = 1 (see Remarks )
- `DAngle` (System.Double): Angle formed by intersection of gusset with one face adjacent to the bend; valid only if ProfDimType = 1 and BUseAngle is true (see Remarks )
- `BFlipSides` (System.Boolean): True to swap d1 and d2 in the dimensioning scheme, false to not; valid only if ProfDimType = 1 (see Remarks )
- `DWidth` (System.Double): Gusset width
- `DThickness` (System.Double): Gusset thickness
- `BDraft` (System.Boolean): True to draft gusset side faces, false to not
- `DDraftAngle` (System.Double): Angle by which to draft the gusset side faces; valid only if BDraft is true
- `BInnerCornerFillet` (System.Boolean): True to fillet the gusset inner corners, false to not
- `DInnerCornerFilletRadius` (System.Double): Inner corner fillet radius; valid only if BInnerCornerFillet is true
- `BOuterCornerFillet` (System.Boolean): True to fillet the gusset outer corners, false to not
- `DOuterCornerFilletRadius` (System.Double): Outer corner fillet radius; valid only if BOuterCornerFilletRadius is true
- `GussetType` (System.Int32): Type of gusset: 0 = rounded back 1 = flat back
- `BEdgeFillet` (System.Boolean): True to fillet the edges of a gusset, false to not; valid only if GussetType = 1
- `DEdgeFilletRadius` (System.Double): Edge fillet radius; valid only if BEdgeFillet is true and GussetType = 1

## Return Value

IFeature

## Remarks

Before calling this method to create a sheet metal gusset feature, you must pre-select faces, lines, edges, vertices, or points as follows:
To...
Call
IModelDocExtension::SelectByID2
to select...
Specify the legs of the gusset feature
Two flat faces of a bend.
- or -
Two flat faces adjacent to a cylindrical bend face.
- or -
One cylindrical bend face.
- or -
One flat face and one non-planar face adjacent to a toroidal bend.
- or -
One toroidal bend face.
Optionally orient the gusset section plane
One linear edge or sketch segment that is perpendicular to the gusset section plane.
If you do not pre-select either entity, then the method uses the bend line adjacent to the gusset legs as the reference.
Optionally position the gusset section plane
One vertex, sketch point, or reference point.
If you do not pre-select any one of these entities, then you must set BOffset to true and specify DOffset for an assumed reference point. For insertion of the first gusset, the assumed reference point is on the end of the sheet metal bend. For second and subsequent gusset insertions, the assumed reference point is on the edge of the gusset last inserted.
Instead of pre-selecting the references and calling this method, you can pass the references as arrays to
IFeatureManager::InsertSheetMetalGussetFeature2
.
If ProfDimType = 1, to dimension the gusset profile using...
Specify...
Both legs of the gusset
DLength of d1 leg
DHeight of d2 leg
BUseAngle = false
BFlipSides = true to swap d1 and d2 legs during dimensioning
d1 leg and the angle it forms with the gusset
DLength of d1 leg
DAngle of angle formed by gusset intersecting d1 leg
BUseAngle = true
BFlipSides = true to swap d1 and d2 legs during dimensioning
d2 leg and the angle it forms with the gusset
DHeight of d2 leg
DAngle of angle formed by gusset intersecting d2 leg
BUseAngle = true
BFlipSides = true to swap d1 and d2 legs during dimensioning
See the SOLIDWORKS Help for more information about sheet metal gusset features.

## See Also

- `ISMGussetFeatureData`