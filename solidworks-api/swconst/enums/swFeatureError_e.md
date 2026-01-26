---
type: enum
name: swFeatureError_e
description: Feature error codes.
member_count: 55
docset: swconst
categories:
  - constants
used_by: []
---

# swFeatureError_e

Feature error codes.

## Values

| Member | Value | Description |
|---|---|---|
| `swFeatureErrorCutNotIntersectModel` | 71 |  |
| `swFeatureErrorExtrusionBadGeometricConditions` | 32 | = Unable to create this extruded feature due to geometric conditions |
| `swFeatureErrorExtrusionBossContourInvalid` | 37 | = Bosses require one or more closed contours that do not self-intersect |
| `swFeatureErrorExtrusionBossContourOpenAndClosed` | 36 | = Bosses cannot have both open and closed contours |
| `swFeatureErrorExtrusionCutContourInvalid` | 34 | = Extruded cuts require at least one closed or open contour that does not self-intersect |
| `swFeatureErrorExtrusionCutContourOpenAndClosed` | 33 | = Extruded cuts cannot have both open and closed contours |
| `swFeatureErrorExtrusionDisjoint` | 30 | = Feature would create a disjoint body; direction may be wrong |
| `swFeatureErrorExtrusionNoEndFound` | 31 | = Cannot locate end of feature |
| `swFeatureErrorExtrusionOpenCutContourInvalid` | 35 | = Open extruded cuts require a single open contour that does not self-intersect |
| `swFeatureErrorFeatureDeprecated` | 49 |  |
| `swFeatureErrorFeatureObsolete` | 50 |  |
| `swFeatureErrorFilletCannotExtend` | 16 | = Selected elements cannot be extended to intersect |
| `swFeatureErrorFilletInvalidRadius` | 12 | = Invalid fillet radius or a face blend fillet recommended |
| `swFeatureErrorFilletModelGeometry` | 14 | = Failed to create fillet due to model geometry |
| `swFeatureErrorFilletNoEdge` | 13 | = Edge for fillet/chamfer does not exist |
| `swFeatureErrorFilletNoFace` | 11 | = Face for fillet/chamfer does not exist |
| `swFeatureErrorFilletNoLoop` | 10 | = Loop for fillet/chamfer does not exist |
| `swFeatureErrorFilletRadiusEliminateElement` | 17 | = Specified radius would eliminate one of the elements |
| `swFeatureErrorFilletRadiusTooBig` | 18 | = Radius is too big or the elements are tangent or nearly tangent |
| `swFeatureErrorFilletRadiusTooBig2` | 19 | = Not used |
| `swFeatureErrorFilletRadiusTooSmall` | 15 | = Radius too small |
| `swFeatureErrorMateBroken` | 48 | = One or more mate entities were suppressed |
| `swFeatureErrorMateDanglingGeometry` | 43 | = Mate points to dangling geometry |
| `swFeatureErrorMateEntityFailed` | 45 | = Mating is not supported for one of the components or one of the components cannot currently be modified |
| `swFeatureErrorMateEntityNotLinear` | 44 | = Non-linear edges cannot be used for mating |
| `swFeatureErrorMateFailedCreatingSurface` | 40 | = Mating surface type is not supported |
| `swFeatureErrorMateIlldefined` | 47 | = This mate cannot be solved. Consider: Deleting this mate. Moving the assembly closer to the desired solution with dragging. Adding more mates to further define the assembly. Changing the mating scheme |
| `swFeatureErrorMateInvalidEdge` | 38 | = One of the edges of this mate is suppressed, invalid, or no longer present |
| `swFeatureErrorMateInvalidEntity` | 41 | = One of the entities of this mate is suppressed, invalid, or no longer present |
| `swFeatureErrorMateInvalidFace` | 39 | = One of the faces of this mate is suppressed, invalid, or no longer present |
| `swFeatureErrorMateOverdefined` | 46 | = This mate is over-defining the assembly; consider deleting some of the over-defining mates |
| `swFeatureErrorMateUnknownTangent` | 42 | = Tangent not satisfied |
| `swFeatureErrorNone` | 0 | = No error |
| `swFeatureErrorPartialEdgeFilletCrossOverEndCondition` | 62 | = End points cross over and result in a zero thickness fillet |
| `swFeatureErrorPartialEdgeFilletFailedToRepair` | 68 | = There are no references to repair |
| `swFeatureErrorPartialEdgeFilletInvalidOffsetValue` | 61 | = Total offset from start point and end point must be less than 100% |
| `swFeatureErrorPartialEdgeFilletInvalidReferenceEntity` | 64 | = Reference entity is invalid |
| `swFeatureErrorPartialEdgeFilletMissingReferenceEntity` | 63 | = Reference entity is missing |
| `swFeatureErrorPartialEdgeFilletMultiProjectionPoint` | 67 | = Failed to find a unique point for projection of reference offset |
| `swFeatureErrorPartialEdgeFilletNoEndEdge` | 56 | = Failed to find end edge |
| `swFeatureErrorPartialEdgeFilletNoIntersection` | 52 | = No intersection between reference entity and fillet edge |
| `swFeatureErrorPartialEdgeFilletNoMainEdge` | 57 | = Failed to find the fillet/chamfer edge |
| `swFeatureErrorPartialEdgeFilletNoPropagateEdges` | 54 | = Failed to find propagate edges |
| `swFeatureErrorPartialEdgeFilletNoReferenceEntity` | 59 | = Select a sketch point, reference point, reference plane, or planar face |
| `swFeatureErrorPartialEdgeFilletNoStartEdge` | 55 | = Failed to find a start edge |
| `swFeatureErrorPartialEdgeFilletNotSupported` | 65 | = Partial edge fillet is not supported |
| `swFeatureErrorPartialEdgeFilletNotSupportedForClosedLoop` | 66 | = Some edges form closed loops; partial edge fillet does not support closed loops |
| `swFeatureErrorPartialEdgeFilletOffsetTooBig` | 58 | = The fillet offset is too large |
| `swFeatureErrorPartialEdgeFilletTooManyRefEntities` | 60 | = Too many reference entities selected |
| `swFeatureErrorPartialEdgeFilletUpdateFailed` | 53 | = Failed to update the partial edge data |
| `swFeatureErrorSketchContainsSelfIntersectingContour` | 72 |  |
| `swFeatureErrorSweptFlangeInvalidProfileOrPath` | 69 |  |
| `swFeatureErrorSweptFlangeSelfIntersectingGeometry` | 70 |  |
| `swFeatureErrorUnknown` | 1 | = Unknown error |
| `swSketchErrorExtRefFail` | 51 | = Sketch error |