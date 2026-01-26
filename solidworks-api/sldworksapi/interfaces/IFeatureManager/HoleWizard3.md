---
type: method
interface: IFeatureManager
member: HoleWizard3
returns: Feature
parameters:
  -
    name: GenericHoleType
    type: System.Int32
    description: Hole type as defined in swWzdGeneralHoleTypes_e
  -
    name: StandardIndex
    type: System.Int32
    description: Standard property as defined in swWzdHoleStandards_e
  -
    name: FastenerTypeIndex
    type: System.Int32
    description: Screw type as defined in swWzdHoleStandardFastenerTypes_e
  -
    name: SSize
    type: System.String
    description: Size of the hole
  -
    name: EndType
    type: System.Int16
    description: End type as defined in swEndConditions_e
  -
    name: Diameter
    type: System.Double
    description: Diameter of the hole in meters
  -
    name: Depth
    type: System.Double
    description: Depth of the hole in meters
  -
    name: Value1
    type: System.Double
    description: Hole-related parameter
  -
    name: Value2
    type: System.Double
    description: Hole-related parameter
  -
    name: Value3
    type: System.Double
    description: Hole-related parameter
  -
    name: Value4
    type: System.Double
    description: Hole-related parameter
  -
    name: Value5
    type: System.Double
    description: Hole-related parameter
  -
    name: Value6
    type: System.Double
    description: Hole-related parameter
  -
    name: Value7
    type: System.Double
    description: Hole-related parameter
  -
    name: Value8
    type: System.Double
    description: Hole-related parameter
  -
    name: Value9
    type: System.Double
    description: Hole-related parameter
  -
    name: Value10
    type: System.Double
    description: Hole-related parameter
  -
    name: Value11
    type: System.Double
    description: Hole-related parameter
  -
    name: Value12
    type: System.Double
    description: Hole-related parameter
  -
    name: ThreadClass
    type: System.String
    description: One of the following thread classes: 1B 2B 3B Applies to ANSI inch standard only
  -
    name: RevDir
    type: System.Boolean
    description: True to reverse the direction of the hole, false to not
  -
    name: UseFeatScope
    type: System.Boolean
    description: True if the feature only affects selected bodies, false if the feature affects all bodies
  -
    name: UseAutoSelect
    type: System.Boolean
    description: True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects
  -
    name: AssemblyFeatureScope
    type: System.Boolean
    description: True if the assembly feature only affects selected bodies in the assembly, false if the assembly feature affects all bodies in the assembly
  -
    name: AutoSelectComponents
    type: System.Boolean
    description: True to auto-select all affected components, false to only use the selected components
  -
    name: PropagateFeatureToParts
    type: System.Boolean
    description: True to propagate the assembly feature to the components, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related: []
keywords:
  - holewizard3
  - ifeaturemanager
  - feature
  - manager
  - hole
  - wizard3
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
  - use
  - feat
  - scope
  - auto
  - select
  - assembly
  - components
  - propagate
  - parts
---

# IFeatureManager.HoleWizard3

Obsolete. Superseded by IFeatureManager::HoleWizard4.

## Signature

```csharp
Feature HoleWizard3( 
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
UseFeatScope
,
   System.Boolean
UseAutoSelect
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

- `GenericHoleType` (System.Int32): Hole type as defined in swWzdGeneralHoleTypes_e
- `StandardIndex` (System.Int32): Standard property as defined in swWzdHoleStandards_e
- `FastenerTypeIndex` (System.Int32): Screw type as defined in swWzdHoleStandardFastenerTypes_e
- `SSize` (System.String): Size of the hole
- `EndType` (System.Int16): End type as defined in swEndConditions_e
- `Diameter` (System.Double): Diameter of the hole in meters
- `Depth` (System.Double): Depth of the hole in meters
- `Value1` (System.Double): Hole-related parameter
- `Value2` (System.Double): Hole-related parameter
- `Value3` (System.Double): Hole-related parameter
- `Value4` (System.Double): Hole-related parameter
- `Value5` (System.Double): Hole-related parameter
- `Value6` (System.Double): Hole-related parameter
- `Value7` (System.Double): Hole-related parameter
- `Value8` (System.Double): Hole-related parameter
- `Value9` (System.Double): Hole-related parameter
- `Value10` (System.Double): Hole-related parameter
- `Value11` (System.Double): Hole-related parameter
- `Value12` (System.Double): Hole-related parameter
- `ThreadClass` (System.String): One of the following thread classes: 1B 2B 3B Applies to ANSI inch standard only
- `RevDir` (System.Boolean): True to reverse the direction of the hole, false to not
- `UseFeatScope` (System.Boolean): True if the feature only affects selected bodies, false if the feature affects all bodies
- `UseAutoSelect` (System.Boolean): True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects
- `AssemblyFeatureScope` (System.Boolean): True if the assembly feature only affects selected bodies in the assembly, false if the assembly feature affects all bodies in the assembly
- `AutoSelectComponents` (System.Boolean): True to auto-select all affected components, false to only use the selected components
- `PropagateFeatureToParts` (System.Boolean): True to propagate the assembly feature to the components, false to not

## Return Value

Feature

## Remarks

To add a hole at multiple locations, preselect the sketch points and do not specify any selection marks.
Screw Fit
- As defined in
swWzdHoleScrewClearanceTypes_e
and only used if user does not specify a hole diameter; default value is NORMAL_FIT
Drill Angle
- defaults to 118 degrees if not specified
Input Metrics
- Input angles in radians; input values in meters
Parameters for this method:
The FastenerTypeIndex parameter has to match the standard and be valid for that hole type, or an error occurs.
The SSize parameter must be a valid size for fastener type, or an error occurs.
The Value1 through Value12 parameters are different for each type of hole. The possible values are as follows, organized by hole type. SOLIDWORKS ignores parameters set to -1.
Value1 through Value12 for different types of holes:
Counterbore Holes
Head clearance
- Added to either the input counterbore depth or the counterbore depth in the standard.
Parameters for all counterbore holes:
CounterBore Diameter
CounterBore Depth
HeadClearance
Screw Fit
Drill Angle
Near Csink Diameter
Near Csink Angle
Bot Csink Diameter
Bot Csink Angle
Far Csink Diameter
Far Csink Angle
Offset
Countersink Holes
Head clearance type
- Value from
swWzdHoleCounterSinkHeadClearanceTypes_e
, which represents how to add the head clearance values to the hole.
Parameters for all countersink holes:
Near Csink Diameter
Near Csink Angle
Head Clearance
Screw Fit
Drill Angle
Far Csink Diameter
Far Csink Angle
Offset
Head Clearance Type
Regular Holes
Parameters for all holes:
Screw Fit
Drill Angle
Near Csink Diameter
Near Csink Angle
Far Csink Diameter
Far Csink Angle
Offset
Pipe Tapped Holes
Tap Drill Depth
- Depth can be set up as a ratio from the standard thread depth or the input thread depth. If the user does specify a tap drill depth, then the calculation from the thread depth is replaced with the specified depth.
Cosmetic Thread Type
- Defaults to swCosmeticThreadNone from
swWzdHoleCosmeticThreadTypes_e
.
Near countersink angle
- Can be calculated from standard data as a default.
Parameters for all ptap holes:
Thread Depth
Near Csink Diameter
Near Csink Angle
Far Csink Diameter
Far Csink Angle
Drill Angle
Cosmetic Thread Type
Offset
Tap Holes
Tap Drill Depth
- If the user specifies a tap drill depth, then SOLIDWORKS always uses this depth. Tap drill depths can be calculated:
For helicoil holes: Tap drill depth is calculated based on a constant * tap drill diameter + allowance for tap type (bottoming or plug).
For tapped holes: Tap drill depth is calculated from the thread length + advance + allowance for tap type (bottoming or plug).
Thread Depth
- If the user specifies thread depth, then SOLIDWORKS always uses this depth. Tap drill depths can be calculated:
For helicoil holes: Thread depth is calculated based on a constant (determined by hole type i.e. Insert = 1.0 * Dia) + thread depth from the standard * thread major diameter.
For tapped holes: based on 2 * thread diameter.
Cosmetic Thread Type
- Specified as defined in swWzdHoleCosmeticThreadTypes_e.
Hcoil Tap Type
- Defaults to swTapTypePlug as defined in
swWzdHoleHcoilTapTypes_e
; used only for the helicoil standard holes.
Thread end condition
- Defaults to swEndThreadTypeBLIND as defined in
swWzdHoleThreadEndCondition_e
.
Parameters for all ptap holes:
Tap drill diameter
Tap drill depth
Thread Depth
Near Csink Diameter
Near Csink Angle
Far Csink Diameter
Far Csink Angle
Drill Angle
Cosmetic Thread Type
Thread End Condition
Helicoil Tap Type
Offset
Legacy Holes
For legacy types of holes StandardIndex, FastenerTypeIndex, and SSize are not relevant, and SOLIDWORKS ignores them.
The sequence of parameters 6 to 19 for different types of legacy holes is as follows:
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