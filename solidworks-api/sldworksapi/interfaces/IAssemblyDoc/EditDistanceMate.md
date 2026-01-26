---
type: method
interface: IAssemblyDoc
member: EditDistanceMate
returns: void
parameters:
  -
    name: AlignFromEnum
    type: System.Int32
    description: Type of alignment as defined in swMateAlign_e
  -
    name: Flip
    type: System.Boolean
    description: True to flip the mate entities, false to not (see Remarks )
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
  - IAssemblyDoc.EditMate4
  - IMate2.DistanceFirstArcCondition
  - IMate2.DistanceSecondArcCondition
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - mates
  - imate2
  - edit
  - editdistancemate
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
  - void
  - add
  - vba
  - vb
  - net
---

# IAssemblyDoc.EditDistanceMate

Edits a distance mate.

## Signature

```csharp
void EditDistanceMate( 
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
- `Flip` (System.Boolean): True to flip the mate entities, false to not (see Remarks )
- `Distance` (System.Double): Distance value (see Remarks )
- `DistanceAbsUpperLimit` (System.Double): Absolute maximum distance value (see Remarks )
- `DistanceAbsLowerLimit` (System.Double): Absolute minimum distance value (see Remarks )
- `FirstArcCondition` (System.Int32): First arc condition as defined in swDistanceMateArcConditions_e ; valid only for cylindrical distance mates (see Remarks )
- `SecondArcCondition` (System.Int32): Second arc condition as defined in swDistanceMateArcConditions_e; valid only for cylindrical distance mates (see Remarks )
- `ErrorStatus` (System.Int32): Success or error as defined by swAddMateError_e

## Return Value

Unknown.

## Remarks

Select these entities before calling this method:
Two entities that define the distance mate (use
IEntity::Select4
with Data = Nothing)
Distance mate feature (use
IFeature::Select2
with Mark = 0)
If the mate is applied to the closest position that meets the mate condition specified by Distance, then setting Flip to true moves the components to the other possible mate position.
Call
IModelDoc2::EditRebuild3
after calling this method.
See
IAssemblyDoc::AddDistanceMate
Remarks.

## Examples

- Add and Edit Distance Mate (VBA) (Add_and_Edit_Distance_Mate_Example_VB.htm)
- Add and Edit Distance Mate (VB.NET) (Add_and_Edit_Distance_Mate_Example_VBNET.htm)
- Add and Edit Distance Mate (C#) (Add_and_Edit_Distance_Mate_Example_CSharp.htm)

## See Also

- `IAssemblyDoc.EditMate4`
- `IMate2.DistanceFirstArcCondition`
- `IMate2.DistanceSecondArcCondition`