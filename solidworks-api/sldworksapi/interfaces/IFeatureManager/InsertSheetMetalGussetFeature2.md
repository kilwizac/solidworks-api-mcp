---
type: method
interface: IFeatureManager
member: InsertSheetMetalGussetFeature2
returns: Feature
parameters:
  -
    name: BOffset
    type: System.Boolean
    description: True to offset the gusset section plane from the selected reference point in ArrayRefPoints, false to not
  -
    name: DOffset
    type: System.Double
    description: Value by which to offset the gusset section plane from the selected reference point in ArrayRefPoints; valid only if BOffset is true
  -
    name: BFlipOffsetSide
    type: System.Boolean
    description: True to specify the gusset section plane offset on the opposite side of the selected reference point, false to not; valid only if BOffset is true
  -
    name: ProfDimType
    type: System.Int32
    description: Type of gusset profile dimensioning scheme as defined in swSheetMetalGussetProfileDimType_e (see Remarks )
  -
    name: DIndentDepth
    type: System.Double
    description: Gusset indent depth; valid only if ProfDimType = 0
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
    description: True to swap d1 and d2 legs in the dimensioning scheme, false to not; valid only if ProfDimType = 1 (see Remarks )
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
    description: Type of gusset as defined in swSheetMetalRibGussetType_e
  -
    name: BEdgeFillet
    type: System.Boolean
    description: True to fillet the edges of a flat back gusset, false to not; valid only if GussetType is flat
  -
    name: DEdgeFilletRadius
    type: System.Double
    description: Edge fillet radius for the flat back gusset; valid only if BEdgeFillet is true and GussetType is flat
  -
    name: ArrayOfFaces
    type: System.Object
    description: Array containing one or two IFace2 s that are the legs of the gusset feature: Two flat faces adjacent to a bend Two flat faces adjacent to a circular bend One cylindrical bend face One flat face and one non-planar face adjacent to a toroidal bend One toroidal bend face (see Remarks )
  -
    name: ArrayRefLines
    type: System.Object
    description: Array containing one of the following entities that is perpendicular to the gusset section plane: Linear IEdge ISketchSegment (see Remarks )
  -
    name: ArrayRefPoints
    type: System.Object
    description: Array containing one of the following to position the gusset section plane: IVertex ISketchPoint IRefPoint (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - ISMGussetFeatureData
keywords:
  - insertsheetmetalgussetfeature2
  - ifeaturemanager
  - feature
  - manager
  - insert
  - sheet
  - metal
  - gusset
  - feature2
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
  - array
  - faces
  - object
  - ref
  - lines
  - points
---

# IFeatureManager.InsertSheetMetalGussetFeature2

Obsolete. Superseded by IFeatureManager::InsertSheetMetalGussetFeature3.

## Signature

```csharp
Feature InsertSheetMetalGussetFeature2( 
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
,
   System.Object
ArrayOfFaces
,
   System.Object
ArrayRefLines
,
   System.Object
ArrayRefPoints
)
```
## Parameters

- `BOffset` (System.Boolean): True to offset the gusset section plane from the selected reference point in ArrayRefPoints, false to not
- `DOffset` (System.Double): Value by which to offset the gusset section plane from the selected reference point in ArrayRefPoints; valid only if BOffset is true
- `BFlipOffsetSide` (System.Boolean): True to specify the gusset section plane offset on the opposite side of the selected reference point, false to not; valid only if BOffset is true
- `ProfDimType` (System.Int32): Type of gusset profile dimensioning scheme as defined in swSheetMetalGussetProfileDimType_e (see Remarks )
- `DIndentDepth` (System.Double): Gusset indent depth; valid only if ProfDimType = 0
- `DLength` (System.Double): d1 gusset leg length; length of sheet metal from bend to intersection with first end of gusset; valid only if ProfDimType = 1 (see Remarks )
- `BUseAngle` (System.Boolean): True to dimension the angle that is formed by the intersection of the gusset with either face adjacent to the bend; valid only if ProfDimType = 1 (see Remarks )
- `DHeight` (System.Double): d2 gusset leg length; length of sheet metal from bend to intersection with second end of gusset; valid only if ProfDimType = 1 (see Remarks )
- `DAngle` (System.Double): Angle formed by intersection of gusset with one face adjacent to the bend; valid only if ProfDimType = 1 and BUseAngle is true (see Remarks )
- `BFlipSides` (System.Boolean): True to swap d1 and d2 legs in the dimensioning scheme, false to not; valid only if ProfDimType = 1 (see Remarks )
- `DWidth` (System.Double): Gusset width
- `DThickness` (System.Double): Gusset thickness
- `BDraft` (System.Boolean): True to draft gusset side faces, false to not
- `DDraftAngle` (System.Double): Angle by which to draft the gusset side faces; valid only if BDraft is true
- `BInnerCornerFillet` (System.Boolean): True to fillet the gusset inner corners, false to not
- `DInnerCornerFilletRadius` (System.Double): Inner corner fillet radius; valid only if BInnerCornerFillet is true
- `BOuterCornerFillet` (System.Boolean): True to fillet the gusset outer corners, false to not
- `DOuterCornerFilletRadius` (System.Double): Outer corner fillet radius; valid only if BOuterCornerFilletRadius is true
- `GussetType` (System.Int32): Type of gusset as defined in swSheetMetalRibGussetType_e
- `BEdgeFillet` (System.Boolean): True to fillet the edges of a flat back gusset, false to not; valid only if GussetType is flat
- `DEdgeFilletRadius` (System.Double): Edge fillet radius for the flat back gusset; valid only if BEdgeFillet is true and GussetType is flat
- `ArrayOfFaces` (System.Object): Array containing one or two IFace2 s that are the legs of the gusset feature: Two flat faces adjacent to a bend Two flat faces adjacent to a circular bend One cylindrical bend face One flat face and one non-planar face adjacent to a toroidal bend One toroidal bend face (see Remarks )
- `ArrayRefLines` (System.Object): Array containing one of the following entities that is perpendicular to the gusset section plane: Linear IEdge ISketchSegment (see Remarks )
- `ArrayRefPoints` (System.Object): Array containing one of the following to position the gusset section plane: IVertex ISketchPoint IRefPoint (see Remarks )

## Return Value

IFeature

## Remarks

If you pass an empty array to...
Then...
ArrayRefLines
This method assumes the reference line is the bend line adjacent to the entities in ArrayOfFaces.
ArrayRefPoints
You must set BOffset to true and specify DOffset for an assumed reference point.
For insertion of the first gusset, the assumed reference point is on the end of the sheet metal bend. For second and subsequent gusset insertions, the assumed reference point is on the edge of the gusset last inserted.
Instead of calling this method, you can call
IModelDocExtension::SelectByID2
to pre-select the references before calling
IFeatureManager::InsertSheetMetalGussetFeature
.
If ProfDimType = 1, to dimension the gusset profile using...
Specify...
Both faces of the bend
DLength of d1 leg
DHeight of d2 leg
BUseAngle = false
BFlipSides = true to swap d1 and d2 legs during dimensioning
One bend face and the angle it forms with the gusset
DLength of d1 leg
DAngle of angle formed by gusset intersecting d1 leg
BUseAngle = true
BFlipSides = true to swap d1 and d2 legs during dimensioning
Opposite bend face and the angle it forms with the gusset
DHeight of d2 leg
DAngle of angle formed by gusset intersecting d2 leg
BUseAngle = true
BFlipSides = true to swap d1 and d2 legs during dimensioning
See the SOLIDWORKS Help for more information about sheet metal gusset features.

## See Also

- `ISMGussetFeatureData`