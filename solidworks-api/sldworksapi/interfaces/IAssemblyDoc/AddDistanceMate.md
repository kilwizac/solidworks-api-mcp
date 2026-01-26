---
type: method
interface: IAssemblyDoc
member: AddDistanceMate
returns: Mate2
parameters:
  -
    name: AlignFromEnum
    type: System.Int32
    description: Type of alignment as defined in swMateAlign_e
  -
    name: Flip
    type: System.Boolean
    description: True to flip mate entities, false to not (see Remarks )
  -
    name: Distance
    type: System.Double
    description: Distance value (see Remarks )
  -
    name: DistanceAbsUpperLimit
    type: System.Double
    description: Absolute maximum distance value (see Remarks )
  -
    name: DistanceAbsLowerLimit
    type: System.Double
    description: Absolute minimum distance value (see Remarks )
  -
    name: FirstArcCondition
    type: System.Int32
    description: First arc condition as defined in swDistanceMateArcConditions_e ; valid only for cylindrical distance mates (see Remarks )
  -
    name: SecondArcCondition
    type: System.Int32
    description: Second arc condition as defined in swDistanceMateArcConditions_e; valid only for cylindrical distance mates (see Remarks )
  -
    name: ErrorStatus
    type: System.Int32
    description: Success or error as defined by swAddMateError_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.AddMate5
  - IAssemblyDoc.EditDistanceMate
  - IMate2.DistanceFirstArcCondition
  - IMate2.DistanceSecondArcCondition
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - mates
  - imate2
  - add
  - adddistancemate
  - assembly
  - doc
  - distance
  - mate
  - align
  - int32
  - flip
  - boolean
  - double
  - abs
  - upper
  - limit
  - lower
  - first
  - arc
  - condition
  - second
  - error
  - status
  - mate2
  - edit
  - vba
  - vb
  - net
---

# IAssemblyDoc.AddDistanceMate

Adds a distance mate to this assembly.

## Signature

```csharp
Mate2 AddDistanceMate( 
   System.Int32
AlignFromEnum
,
   System.Boolean
Flip
,
   System.Double
Distance
,
   System.Double
DistanceAbsUpperLimit
,
   System.Double
DistanceAbsLowerLimit
,
   System.Int32
FirstArcCondition
,
   System.Int32
SecondArcCondition
,
   out System.Int32
ErrorStatus
)
```
## Parameters

- `AlignFromEnum` (System.Int32): Type of alignment as defined in swMateAlign_e
- `Flip` (System.Boolean): True to flip mate entities, false to not (see Remarks )
- `Distance` (System.Double): Distance value (see Remarks )
- `DistanceAbsUpperLimit` (System.Double): Absolute maximum distance value (see Remarks )
- `DistanceAbsLowerLimit` (System.Double): Absolute minimum distance value (see Remarks )
- `FirstArcCondition` (System.Int32): First arc condition as defined in swDistanceMateArcConditions_e ; valid only for cylindrical distance mates (see Remarks )
- `SecondArcCondition` (System.Int32): Second arc condition as defined in swDistanceMateArcConditions_e; valid only for cylindrical distance mates (see Remarks )
- `ErrorStatus` (System.Int32): Success or error as defined by swAddMateError_e

## Return Value

IMate2

## Remarks

To specify a distance mate without limits, set the DistanceAbsUpperLimit and DistanceAbsLowerLimit parameters equal to the Distance parameter.
If the mate is applied to the closest position that meets the mate condition specified by Distance, then setting Flip to true moves the components to the other possible mate position.
For cylindrical distance mates only, the following FirstArcCondition-to-SecondArcCondition distance combinations are possible:
FirstArcCondition as defined in
swDistanceMateArcConditions_e
to
SecondArcCondition as defined in swDistanceMateArcConditions_e
swArcCondition_Center
swArcCondition_Center
swArcCondition_Center
swArcCondition_Minimum
swArcCondition_Center
swArcCondition_Maximum
swArcCondition_Minimum
swArcCondition_Center
swArcCondition_Minimum
swArcCondition_Minimum
swArcCondition_Minimum
swArcCondition_Maximum
swArcCondition_Maximum
swArcCondition_Center
swArcCondition_Maximum
swArcCondition_Minimum
swArcCondition_Maximum
swArcCondition_Maximum
To add a distance mate:
Call
IModelDocExtension::SelectByRay
and
ISelectionMgr::GetSelectedObject6
to get each mate entity. (For cylindrical distance mates, the selections must be two cylindrical faces or one cylindrical face and one axis.)
Call
IModelDoc2::ClearSelection2
.
Call
IEntity::Select4
to select each entity.
Call this method.
Call
IModelDoc2::EditRebuild3
after the mate is created.
If entities are not preselected, then ErrorStatus is swAddMateError_e.swAddMateError_IncorrectSelections, and nothing is returned.

## Examples

- Add and Edit Distance Mate (VBA) (Add_and_Edit_Distance_Mate_Example_VB.htm)
- Add and Edit Distance Mate (VB.NET) (Add_and_Edit_Distance_Mate_Example_VBNET.htm)
- Add and Edit Distance Mate (C#) (Add_and_Edit_Distance_Mate_Example_CSharp.htm)

## See Also

- `IAssemblyDoc.AddMate5`
- `IAssemblyDoc.EditDistanceMate`
- `IMate2.DistanceFirstArcCondition`
- `IMate2.DistanceSecondArcCondition`