---
type: method
interface: IFeatureManager
member: HoleWizard5
returns: Feature
parameters:
  -
    name: GenericHoleType
    type: System.Int32
    description: Type of hole or slot as defined in swWzdGeneralHoleTypes_e
  -
    name: StandardIndex
    type: System.Int32
    description: Hole or slot standard property as defined in swWzdHoleStandards_e (see Remarks for legacy holes)
  -
    name: FastenerTypeIndex
    type: System.Int32
    description: Hole or slot fastener type as defined in swWzdHoleStandardFastenerTypes_e (see Remarks )
  -
    name: SSize
    type: System.String
    description: Size of the hole or slot (see Remarks )
  -
    name: EndType
    type: System.Int16
    description: Hole or slot end type as defined in swEndConditions_e (see Remarks )
  -
    name: Diameter
    type: System.Double
    description: Diameter of the hole or slot
  -
    name: Depth
    type: System.Double
    description: Depth of the hole or slot
  -
    name: Length
    type: System.Double
    description: Length of slot; valid only if GenericHoleType set to: swWzdGeneralHoleTypes_e.swWzdCounterBoreSlot swWzdGeneralHoleTypes_e.swWzdCounterSinkSlot swWzdGeneralHoleTypes_e.swWzdHoleSlot For both straight/pipe and tapered tap holes, the macro recorder fails to properly record this parameter. Before running a macro recording, you must add -1 at this position and delete a -1 before ThreadClass.
  -
    name: Value1
    type: System.Double
    description: Hole or slot parameter
  -
    name: Value2
    type: System.Double
    description: Hole or slot parameter
  -
    name: Value3
    type: System.Double
    description: Hole or slot parameter
  -
    name: Value4
    type: System.Double
    description: Hole or slot parameter
  -
    name: Value5
    type: System.Double
    description: Hole or slot parameter
  -
    name: Value6
    type: System.Double
    description: Hole or slot parameter
  -
    name: Value7
    type: System.Double
    description: Hole or slot parameter
  -
    name: Value8
    type: System.Double
    description: Hole or slot parameter
  -
    name: Value9
    type: System.Double
    description: Hole or slot parameter
  -
    name: Value10
    type: System.Double
    description: Hole or slot parameter
  -
    name: Value11
    type: System.Double
    description: Hole or slot parameter
  -
    name: Value12
    type: System.Double
    description: Hole or slot parameter
  -
    name: ThreadClass
    type: System.String
    description: One of the following thread classes: 1B 2B 3B NOTE : Applies to ANSI inch standard only.
  -
    name: RevDir
    type: System.Boolean
    description: True to reverse the direction of the hole or slot, false to not
  -
    name: FeatureScope
    type: System.Boolean
    description: True if the feature only affects selected bodies, false if the feature affects all bodies
  -
    name: AutoSelect
    type: System.Boolean
    description: True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects
  -
    name: AssemblyFeatureScope
    type: System.Boolean
    description: True if the assembly feature only affects selected components in the assembly, false if the assembly feature affects all components in the assembly
  -
    name: AutoSelectComponents
    type: System.Boolean
    description: True to automatically select all affected components, false to only use the selected components
  -
    name: PropagateFeatureToParts
    type: System.Boolean
    description: True to propagate the assembly feature to the components that the assembly feature affects in the model, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IWizardHoleFeatureData2
keywords:
  - holewizard5
  - ifeaturemanager
  - feature
  - manager
  - hole
  - wizard5
  - generic
  - type
  - int32
  - standard
  - index
  - fastener
  - size
  - string
  - end
  - int16
  - diameter
  - double
  - depth
  - length
  - value1
  - value2
  - value3
  - value4
  - value5
  - value6
  - value7
  - value8
  - value9
  - value10
  - value11
  - value12
  - thread
  - rev
  - dir
  - boolean
  - scope
  - auto
  - select
  - assembly
  - components
  - propagate
  - parts
  - create
  - wizard
  - vb
  - net
  - vba
  - insert
  - slot
---

# IFeatureManager.HoleWizard5

Creates customized holes of various kinds.

## Signature

```csharp
Feature HoleWizard5( 
   System.Int32
GenericHoleType
,
   System.Int32
StandardIndex
,
   System.Int32
FastenerTypeIndex
,
   System.String
SSize
,
   System.Int16
EndType
,
   System.Double
Diameter
,
   System.Double
Depth
,
   System.Double
Length
,
   System.Double
Value1
,
   System.Double
Value2
,
   System.Double
Value3
,
   System.Double
Value4
,
   System.Double
Value5
,
   System.Double
Value6
,
   System.Double
Value7
,
   System.Double
Value8
,
   System.Double
Value9
,
   System.Double
Value10
,
   System.Double
Value11
,
   System.Double
Value12
,
   System.String
ThreadClass
,
   System.Boolean
RevDir
,
   System.Boolean
FeatureScope
,
   System.Boolean
AutoSelect
,
   System.Boolean
AssemblyFeatureScope
,
   System.Boolean
AutoSelectComponents
,
   System.Boolean
PropagateFeatureToParts
)
```
## Parameters

- `GenericHoleType` (System.Int32): Type of hole or slot as defined in swWzdGeneralHoleTypes_e
- `StandardIndex` (System.Int32): Hole or slot standard property as defined in swWzdHoleStandards_e (see Remarks for legacy holes)
- `FastenerTypeIndex` (System.Int32): Hole or slot fastener type as defined in swWzdHoleStandardFastenerTypes_e (see Remarks )
- `SSize` (System.String): Size of the hole or slot (see Remarks )
- `EndType` (System.Int16): Hole or slot end type as defined in swEndConditions_e (see Remarks )
- `Diameter` (System.Double): Diameter of the hole or slot
- `Depth` (System.Double): Depth of the hole or slot
- `Length` (System.Double): Length of slot; valid only if GenericHoleType set to: swWzdGeneralHoleTypes_e.swWzdCounterBoreSlot swWzdGeneralHoleTypes_e.swWzdCounterSinkSlot swWzdGeneralHoleTypes_e.swWzdHoleSlot For both straight/pipe and tapered tap holes, the macro recorder fails to properly record this parameter. Before running a macro recording, you must add -1 at this position and delete a -1 before ThreadClass.
- `Value1` (System.Double): Hole or slot parameter
- `Value2` (System.Double): Hole or slot parameter
- `Value3` (System.Double): Hole or slot parameter
- `Value4` (System.Double): Hole or slot parameter
- `Value5` (System.Double): Hole or slot parameter
- `Value6` (System.Double): Hole or slot parameter
- `Value7` (System.Double): Hole or slot parameter
- `Value8` (System.Double): Hole or slot parameter
- `Value9` (System.Double): Hole or slot parameter
- `Value10` (System.Double): Hole or slot parameter
- `Value11` (System.Double): Hole or slot parameter
- `Value12` (System.Double): Hole or slot parameter
- `ThreadClass` (System.String): One of the following thread classes: 1B 2B 3B NOTE : Applies to ANSI inch standard only.
- `RevDir` (System.Boolean): True to reverse the direction of the hole or slot, false to not
- `FeatureScope` (System.Boolean): True if the feature only affects selected bodies, false if the feature affects all bodies
- `AutoSelect` (System.Boolean): True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects
- `AssemblyFeatureScope` (System.Boolean): True if the assembly feature only affects selected components in the assembly, false if the assembly feature affects all components in the assembly
- `AutoSelectComponents` (System.Boolean): True to automatically select all affected components, false to only use the selected components
- `PropagateFeatureToParts` (System.Boolean): True to propagate the assembly feature to the components that the assembly feature affects in the model, false to not

## Return Value

Feature

## Remarks

To create simple holes and slots, read
Hole Wizard Features and WizardHoleFeatureData2 Objects
. To create Advanced Holes of stacked hole elements, use
IFeatureManager::AdvancedHole
.
Valid types of slots are counterbore, countersink, or straight.
To add a hole or slot at one or more locations, call
IModelDocExtension::SelectByRay
with Mark = 0 for each location.
Before creating a hole or slot using a reference plane and this method, determine the value of the RevDir parameter as follows:
If the material is on one side of the reference plane, then RevDir is false.
If the material is on both sides of the reference plane, then compare the distances between the reference plane and the material on both sides. If the distance between the reference plane and the material along its normal direction is bigger, then RevDir is true; otherwise, RevDir is false.
You can also use
IModelDoc2::RayIntersections
and
IModelDoc2::GetRayIntersectionsPoints
to find out if the material is on one side or both sides and to compare the distances.
Parameters for this method:
The FastenerTypeIndex parameter has to match the standard and be valid for that hole or slot type, or an error occurs.
The SSize parameter must be a valid size for the fastener type, or an error occurs.
If EndType is 10 = swEndCondUpToSelection (supersedes swEndCondUpToSurface and swEndCondUpToVertex), then you must use
IModelDocExtension::SelectByID2
with Mark = 2 to pre-select the surface or vertex. The macro recorder fails to properly record EndType for Up To Surface and Up To Vertex end conditions. Instead of swEndCondUpToSelection=10, it records 4 and 3. Before running an Up to Surface or Vertex macro recording, you must change EndType to 10. The macro recorder also fails to properly record the Up To Next end condition. Instead of swEndCondUpToNext=11, it records swEndCondThroughNext=2. It is advisable to record only Blind or Through All end conditions.
Screw fit is defined as
swWzdHoleScrewClearanceTypes_e
and is only used if a hole or slot diameter is not specified; default value is NORMAL_FIT.
Drill angle defaults to 118 degrees (2.05948851735331 radians)
,
if not specified.
Input angles are in radians; input values are in meters.
The Value1 through Value12 parameters are different for each type of hole or slot. The possible values are as follows, organized by hole and slot type. SOLIDWORKS ignores parameters set to -1.
Counterbore Holes and Slots
Head Clearance
- Added to either the input counterbore depth or the counterbore depth in the standard.
Screw Fit
- Value from swWzdHoleScrewClearanceTypes_e
Parameters for all counterbore holes and counterbore slots:
CounterBore Diameter
CounterBore Depth
Head Clearance
Screw Fit
Drill Angle at Bottom (valid only if EndType is *not* swEndCondUpToNext or swEndCondThroughAll)
Near Csink Diameter
Near Csink Angle
Underhead Csink Diameter
Underhead Csink Angle
Far Csink Diameter
Far Csink Angle
Offset (valid only if EndType is swEndCondOffsetFromSurface)
Countersink Holes and Slots
Head Clearance Type
- Value from
swWzdHoleCounterSinkHeadClearanceTypes_e
, which represents how to add the head clearance values to the hole or slot.
Screw Fit
- Value from
swWzdHoleScrewClearanceTypes_e
Parameters for all countersink holes and countersink slots:
Near Csink Diameter
Near Csink Angle
Head Clearance
Screw Fit
Drill Angle at Bottom (valid only if EndType is *not* swEndCondUpToNext or swEndCondThroughAll)
Far Csink Diameter
Far Csink Angle
Offset (valid only if EndType is swEndCondOffsetFromSurface)
Head Clearance Type
-1
-1
-1
Regular Holes and Straight Slots
Screw Fit
- Value from
swWzdHoleScrewClearanceTypes_e
Parameters for all regular holes and straight slots:
Screw Fit
Drill Angle at Bottom (valid only if EndType is *not* swEndCondUpToNext or swEndCondThroughAll)
Near Csink Diameter
Near Csink Angle
Far Csink Diameter
Far Csink Angle
Offset (valid only if EndType is swEndCondOffsetFromSurface)
-1
-1
-1
-1
-1
Pipe/Straight Tap Holes
Tap Thread Depth
- If the user specifies thread depth, SOLIDWORKS always uses this depth. Tap thread depths can be calculated:
Helicoil holes: calculated based on a constant (determined by hole type; i.e., insert = 1.0 * diameter) + thread depth from the standard * thread major diameter.
Tapped holes: calculated based on 2 * thread diameter.
Cosmetic Thread Type
- Value from
swWzdHoleCosmeticThreadTypes_e
; defaults to swCosmeticThreadNone
Near Countersink Angle
- Can be calculated from standard data as a default
Hcoil Tap Type
- Value from
swWzdHoleHcoilTapTypes_e
; defaults to swTapTypePlug
Thread End Condition
- Value from
swWzdHoleThreadEndCondition_e
; defaults to swEndThreadTypeBLIND
Parameters for all pipe/straight tap holes:
Tap Thread Depth
Near Csink Diameter
Near Csink Angle
Far Csink Diameter
Far Csink Angle
Drill Angle at Bottom (valid only if EndType is *not* swEndCondUpToNext or swEndCondThroughAll)
Cosmetic Thread Type
Thread End Condition (not valid if StandardIndex is swStandardHelicoilInch or swStandardHelicoilMetric)
Helicoil Tap Type (valid only if StandardIndex is swStandardHelicoilInch or swStandardHelicoilMetric)
Offset (valid only if EndType is swEndCondOffsetFromSurface)
-1
-1
Tapered Tap Holes
NOTE: The macro recorder fails to properly record tapered tap hole parameters. Follow the instructions in this help to correct recordings before playing them.
Cosmetic Thread Type
- Specified as defined in swWzdHoleCosmeticThreadTypes_e; defaults to swCosmeticThreadNone
Parameters for all tapered tap holes:
Tap Thread Depth
Near Csink Diameter
Near Csink Angle
Far Csink Diameter
Far Csink Angle
Drill Angle at Bottom (valid only if EndType is *not* swEndCondUpToNext or swEndCondThroughAll)
Cosmetic Thread Type
Offset (valid only if EndType is swEndCondOffsetFromSurface)
-1
-1
-1
-1
Legacy Holes
StandardIndex, FastenerTypeIndex, and SSize are:
Not relevant
SOLIDWORKS ignores them
Value1 - Value12 for different types of legacy holes. Use -1 for unused values:
Simple
Diameter
Depth
Sketch ID
Tapered
Minor Diameter
Depth
Sketch ID
Major Diameter
Counterbored
Diameter
Depth
Sketch ID
C-Bore Diameter
C-Bore Depth
Countersunk
Diameter
Depth
Sketch ID
C-Sink Angle
C-Sink Diameter
Counterdrilled
Diameter
Depth
Sketch ID
C-Drill Diameter
C-Drill Depth
C-Drill Angle
Simple Drilled
Diameter
Depth
Sketch ID
Drill Angle
Tapered Drilled
Minor Diameter
Depth
Sketch ID
Major Diameter
Drill Angle
C-Bored Drilled
Diameter
Depth
Sketch ID
C-Bore Diameter
C-Bore Depth
Drill Angle
C-Sunk Drilled
Diameter
Depth
Sketch ID
C-Sink Diameter
C-Sink Angle
Drill Angle
C-Drilled Drilled
Diameter
Depth
Sketch ID
C-Drill Diameter
C-Drill Depth
Drill Angle
C-Drill Angle

## Examples

- Create Hole Wizard Hole (C#) (Create_Hole_Wizard_Hole_Example_CSharp.htm)
- Create Hole Wizard Hole (VB.NET) (Create_Hole_Wizard_Hole_Example_VBNET.htm)
- Create Hole Wizard Hole (VBA) (Create_Hole_Wizard_Hole_Example_VB.htm)
- Insert Hole Wizard Slot and Hole (C#) (Insert_Hole_Wizard_Slot_and_Hole_Example_CSharp.htm)
- Insert Hole Wizard Slot and Hole (VB.NET) (Insert_Hole_Wizard_Slot_and_Hole_Example_VBNET.htm)
- Insert Hole Wizard Slot and Hole (VBA) (Insert_Hole_Wizard_Slot_and_Hole_Example_VB.htm)

## See Also

- `IWizardHoleFeatureData2`