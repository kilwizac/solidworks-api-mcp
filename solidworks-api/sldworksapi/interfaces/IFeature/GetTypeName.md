---
type: method
interface: IFeature
member: GetTypeName
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.GetNameForSelection
  - IFeature.Name
keywords:
  - instant3d
  - feature
  - see
  - also
  - ifeature
  - gettypename
  - type
  - name
  - string
  - faces
  - associated
  - vba
  - select
  - origin
  - assembly
  - component
  - custom
  - bend
  - deduction
  - traverse
  - all
  - cosmetic
  - threads
  - level
  - info
  - plane
  - axis
  - parent
  - features
  - selected
  - vb
  - net
---

# IFeature.GetTypeName

Gets the type of feature.

## Signature

```csharp
System.String GetTypeName()
```
## Parameters

None.

## Return Value

String identifying the type of feature (see Remarks )

## Remarks

Use
IFeature::GetDefinition
to get a feature data object (i.e., an object whose interface name ends in FeatureData or FeatureData2, such as ISymmetricMateFeatureData, IExtrudeFeatureData2, ILoftFeatureData, ISimpleFilletFeatureData2, IChamferFeatureData2, etc.); otherwise, use
IFeature::GetSpecificFeature2
to get an object for a feature.
Type of feature
String returned by this method
Interface
Assembly
AsmExploder
None (Assembly exploded view in ConfigurationManager)
CompExplodeStep
None (Explode step in assembly exploded view)
ExplodeLineProfileFeature
ISketch
InContextFeatHolder
IFeature
MagneticGroundPlane
IFeature
MateCamTangent
ICamFollowerMateFeatureData
MateCoincident
ICoincidentMateFeatureData
MateConcentric
IConcentricMateFeatureData
MateDistanceDim
IDistanceMateFeatureData
MateGearDim
IGearMateFeatureData
MateHinge
IHingeMateFeatureData
MateInPlace
IMate2
MateLimitDistanceDim
IDistanceMateFeatureData
MateLinearCoupler
ILinearCouplerMateFeatureData
MateLock
ILockMateFeatureData
MateParallel
IParallelMateFeatureData
MatePerpendicular
IPerpendicularMateFeatureData
MatePlanarAngleDim
IAngleMateFeatureData
MateProfileCenter
IProfileCenterMateFeatureData
MateRackPinionDim
IRackPinionMateFeatureData
MateScrew
IScrewMateFeatureData
MateSlot
ISlotMateFeatureData
MateSymmetric
ISymmetricMateFeatureData
MateTangent
ITangentMateFeatureData
MateUniversalJoint
IUniversalJointMateFeatureData
MateWidth
IWidthMateFeatureData
PosGroupFolder
IMateReference
Reference
IComponent2
ReferencePattern
IComponent2
SmartComponentFeature
ISmartComponentFeatureData
Body
AdvHoleWzd
IAdvancedHoleFeatureData
APattern
IFillPatternFeatureData
BaseBody
IExtrudeFeatureData2
Bending
None (
Flex
feature)
Blend
ILoftFeatureData
BlendCut
ILoftFeatureData
BodyExplodeStep
None (Explode step of multi-body part exploded view)
Boss
IExtrudeFeatureData2
BossThin
IExtrudeFeatureData2
Chamfer
IChamferFeatureData2
CirPattern
ICircularPatternFeatureData
CombineBodies
ICombineBodiesFeatureData
CosmeticThread
ICosmeticThreadFeatureData
CosmeticWeldBead
ICosmeticWeldBeadFeatureData
CreateAssemFeat
ISaveBodyFeatureData
CurvePattern
ICurveDrivenPatternFeatureData
Cut
IExtrudeFeatureData2
CutThin
IExtrudeFeatureData2
Deform
None (
Deform
feature)
DeleteBody
IDeleteBodyFeatureData
DelFace
IDeleteFaceFeatureData
DerivedCirPattern
IDerivedPatternFeatureData
DerivedHolePattern
IDerivedPatternFeatureData
DerivedLPattern
IDerivedPatternFeatureData
DimPattern
IDimPatternFeatureData
Dome
IDomeFeatureData2
Draft
IDraftFeatureData2
EdgeMerge
IHealEdgesFeatureData
Emboss
IWrapSketchFeatureData
Extrusion
IExtrudeFeatureData2
Fillet
ISimpleFilletFeatureData2
Helix
IHelixFeatureData
HoleSeries
IHoleSeriesFeatureData2
HoleWzd
IWizardHoleFeatureData2
Imported
None (
Imported
feature)
LocalChainPattern
IChainPatternFeatureData
LocalCirPattern
ILocalCircularPatternFeatureData
LocalCurvePattern
ILocalCurvePatternFeatureData
LocalLPattern
ILocalLinearPatternFeatureData
LocalSketchPattern
ILocalSketchPatternFeatureData
LPattern
ILinearPatternFeatureData
MacroFeature
IMacroFeatureData
MirrorCompFeat
IMirrorComponentFeatureData
MirrorPattern
IMirrorPatternFeatureData
MirrorSolid
IMirrorSolidFeatureData
MirrorStock
IMirrorPartFeatureData
MoveCopyBody
IMoveCopyBodyFeatureData
NetBlend
IBoundaryBossFeatureData
PrtExploder
None (Multi-body part exploded view)
Punch
IIndentFeatureData
ReplaceFace
IReplaceFaceFeatureData
RevCut
IRevolveFeatureData2
Revolution
IRevolveFeatureData2
RevolutionThin
IRevolveFeatureData2
Rib
IRibFeatureData2
Rip
IRipFeatureData
Round fillet corner
ISimpleFilletFeatureData2
Sculpt
IIntersectFeatureData
Shape
Obsolete
Shell
IShellFeatureData
SketchHole
ISimpleHoleFeatureData2
SketchPattern
ISketchPatternFeatureData
Split
ISplitBodyFeatureData
for a feature that was created by splitting a part into multiple parts using either
IFeatureManager::PostSplitBody
or the
Split
feature in the user interface
SplitBody
None; returned for a body created by splitting a part and saving the body to a part; you cannot access the data of a split body saved to a part
Stock
IDerivedPartFeatureData
Sweep
ISweepFeatureData
SweepCut
ISweepFeatureData
SweepThread
IThreadFeatureData
TablePattern
ITablePatternFeatureData
Thicken
IThickenFeatureData
ThickenCut
IThickenFeatureData
VarFillet
IVariableFilletFeatureData2
Drawing
BendTableAchor
ITableAnchor
BomFeat
IBomFeature
BomTemplate
ITableAnchor
DetailCircle
IDetailCircle
DrBreakoutSectionLine
IDrSection
or
IBrokenOutSectionFeatureData
DrSectionLine
IDrSection
GeneralTableAnchor
ITableAnchor
HoleTableAnchor
ITableAnchor
LiveSection
IRefPlane
PunchTableAnchor
ITableAnchor
RevisionTableAnchor
ITableAnchor
WeldmentTableAnchor
ITableAnchor
WeldTableAnchor
ITableAnchor
Folder
BlockFolder
Obsolete
CommentsFolder
ICommentFolder
CosmeticWeldSubFolder
ICosmeticWeldBeadFolder
CutListFolder
IBodyFolder
FeatSolidBodyFolder
IBodyFolder
FeatSurfaceBodyFolder
IBodyFolder
FtrFolder
IFeatureFolder
InsertedFeatureFolder
IFeatureFolder
MateReferenceGroupFolder
IFeatureFolder
ProfileFtrFolder
IFeatureFolder
RefAxisFtrFolder
IFeatureFolder
RefPlaneFtrFolder
IFeatureFolder
SketchSliceFolder
IFeatureFolder
SolidBodyFolder
IBodyFolder
SubAtomFolder
IBodyFolder
if a body
SubWeldFolder
IBodyFolder
SurfaceBodyFolder
IBodyFolder
TemplateFlatPattern
IFlatPatternFolder
Imported File
MBimport
IImport3DInterconnectData
Miscellaneous
Attribute
IAttribute
BlockDef
Obsolete
CurveInFile
IFreePointCurveFeatureData
GridFeature
None (
Grid
feature)
LibraryFeature
ILibraryFeatureData
Scale
IScaleFeatureData
Sensor
ISensor
ViewBodyFeature
Obsolete
Mold
Cavity
ICavityFeatureData
MoldCoreCavitySolids
IToolingSplitFeatureData
MoldPartingGeom
IPartingSurfaceFeatureData
MoldPartLine
IPartingLineFeatureData
MoldShutOffSrf
IShutOffSurfaceFeatureData
SideCore
ICoreFeatureData
XformStock
DerivedPartFeatureData
Motion and Simulation
AEM3DContact
ISimulation3DContactFeatureData
AEMGravity
ISimulationGravityFeatureData
AEMLinearDamper
ISimulationDamperFeatureData
AEMLinearMotor
ISimulationMotorFeatureData
AEMLinearSpring
ISimulationLinearSpringFeatureData
AEMRotationalMotor
ISimulationMotorFeatureData
AEMTorque
ISimulationForceFeatureData
AEMTorsionalDamper
ISimulationDamperFeatureData
AEMTorsionalSpring
None (
TorsionalSpring
feature)
SimPlotFeature
IMotionPlotFeatureData
SimPlotXAxisFeature
IMotionPlotAxisFeatureData
SimPlotYAxisFeature
IMotionPlotAxisFeatureData
SimResultFolder
IMotionStudyResults
Reference Geometry
BoundingBox
IBoundingBoxFeatureData
CenterOfMass
ICenterOfMass
CoordSys
ICoordinateSystemFeatureData
GroundPlane
IGroundPlaneFeatureData
RefAxis
IRefAxis
or
IRefAxisFeatureData
RefPlane
IRefPlane
or
IRefPlaneFeatureData
Scenes, Lights, and Cameras
AmbientLight
ILight
CameraFeature
ICamera
DirectionLight
ILight
PointLight
ILight
SpotLight
ILight
Sheet Metal
SMBaseFlange
IBaseFlangeFeatureData
BreakCorner
IBreakCornerFeatureData
CornerTrim
IBreakCornerFeatureData
CrossBreak
ICrossBreakFeatureData
EdgeFlange
IEdgeFlangeFeatureData
FlatPattern
IFlatPatternFeatureData
FlattenBends
IBendsFeatureData
Fold
IFoldsFeatureData
FormToolInstance
None (
FormTool
feature)
Hem
IHemFeatureData
Jog
IJogFeatureData
LoftedBend
ILoftedBendsFeatureData
Normal Cut
ISMNormalCutFeatureData2
OneBend
IOneBendFeatureData
ProcessBends
IBendsFeatureData
SheetMetal
ISheetMetalFeatureData
SketchBend
IOneBendFeatureData
SM3dBend
ISketchedBendFeatureData
SMGusset
ISMGussetFeatureData
SMMiteredFlange
IMiterFlangeFeatureData
SolidToSheetMetal
IConvertSolidFeatureData
TemplateSheetMetal
ISheetMetalFolder
ToroidalBend
IOneBendFeatureData
UnFold
IFoldsFeatureData
Sketch
3DProfileFeature
ISketch
3DSplineCurve
IReferenceCurve
or
IReferencePointCurveFeatureData
CompositeCurve
IReferenceCurve
or
ICompositeCurveFeatureData
ImportedCurve
IReferenceCurve
or
IImportedCurveFeatureData
PLine
ISplitLineFeatureData
ProfileFeature
ISketch
RefCurve
IReferenceCurve
or
IProjectionCurveFeatureData
RefPoint
IRefPoint
or
IRefPointFeatureData
SketchBlockDef
ISketchBlockDefinition
SketchBlockInst
ISketchBlockInstance
SketchBitmap
ISketchPicture
Surface
BlendRefSurface
None (
Surface-Loft
feature)
ExtendRefSurface
ISurfaceExtendFeatureData
ExtruRefSurface
ISurfExtrudeFeatureData
FillRefSurface
IFillSurfaceFeatureData
FlattenSurface
ISurfaceFlattenFeatureData
MidRefSurface
IMidSurface3
OffsetRefSuface
ISurfaceOffsetFeatureData
PlanarSurface
ISurfacePlanarFeatureData
RadiateRefSurface
ISurfaceRadiateFeatureData
RefSurface
None (
Surface-Imported
feature)
RevolvRefSurf
ISurfRevolveFeatureData
RuledSrfFromEdge
IRuledSurfaceFeatureData
SewRefSurface
ISurfaceKnitFeatureData
SurfCut
ISurfaceCutFeatureData
SweepRefSurface
ISweepFeatureData
TrimRefSurface
ISurfaceTrimFeatureData
UnTrimRefSurf
None (
Surface-Untrim
feature)
Weldment and Structure System
EndCap
IEndCapFeatureData
StrctSysBtwPtsMbrFeat
ISecondaryMemberBetweenPointsFeatureData
StrctSysCnrFeat
ICornerMember
StrctSysCnrGrpFeat
ICornerTreatmentGroupFolder
StrctSysCnrMgmtFeat
ICornerManagementFolder
StrctSysFeat
IStructureSystemFolder
StrctSysGrpFeat
IProfileGroupFolder
StrctSysPathSegMbrFeat
IPrimaryMemberPathSegmentFeatureData
StrctSysPtToMem
ISecondaryMemberUpToMembersFeatureData
StrctSysRefPlnMbrFeat
IPrimaryMemberRefPlaneFeatureData
StrctSysSkPtLenMbrFeat
IPrimaryMemberPointLengthFeatureData
StrctSysSupPlnMbrFeat
ISecondaryMemberSupportPlaneFeatureData
StrctSysSurfPlnMbrFeat
IPrimaryMemberFacePlaneIntersectionFeatureData
AdvStructMember
IStructureSystemMemberFeatureData
Gusset
IGussetFeatureData
WeldBeadFeat
IWeldmentBeadFeatureData
WeldCornerFeat
IWeldmentTrimExtendFeatureData
WeldMemberFeat
IStructuralMemberFeatureData
WeldmentFeature
IStructuralMemberFeatureData
WeldmentTableFeat
IWeldmentCutListFeature
NOTE:
This method returns strings for some features shown in the FeatureManager design (e.g.,
MateGroup
,
Weldment
, etc.) that set up the design functionality environment and, thus, do not have interfaces.

## Examples

- Get Faces Associated with Feature (VBA) (Get_Faces_Associated_with_Feature_Example_VB.htm)
- Select Origin of Assembly Component (VBA) (Select_Origin_of_Assembly_Component_Example_VB.htm)
- Set Custom Bend Deduction (VBA) (Set_Custom_Bend_Deduction_Example_VB.htm)
- Traverse All Cosmetic Threads (VBA) (Traverse_All_Cosmetic_Threads_Example_VB.htm)
- Traverse Assembly at Component and Feature Level (VBA) (Traverse_Assembly_at_Component_and_Feature_Level_Example_VB.htm)
- Get Info on Plane-Axis (C++) (Get_Info_on_Plane_Axis_Example_CPlusPlus_COM.htm)
- Get Parent Features (C++) (Get_Parent_Features_Example_CPlusPlus_COM.htm)
- Get Selected Feature (C++) (Get_Selected_Feature_Example_CPlusPlus_COM.htm)
- Get Type of Instant3D Feature (C#) (Get_Type_of_Instant3D_Feature_Example_CSharp.htm)
- Get Type of Instant3D Feature (VB.NET) (Get_Type_of_Instant3D_Feature_Example_VBNET.htm)
- Get Type of Instant3D Feature (VBA) (Get_Type_of_Instant3D_Feature_Example_VB.htm)

## See Also

- `IFeature.GetNameForSelection`
- `IFeature.Name`