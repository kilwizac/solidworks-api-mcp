---
type: property
interface: IMate2
member: DistanceSecondArcCondition
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IAssemblyDoc.AddDistanceMate
  - IAssemblyDoc.EditDistanceMate
  - IMate2.DistanceFirstArcCondition
keywords:
  - mates
  - see
  - also
  - imate2
  - distance
  - distancesecondarccondition
  - mate2
  - second
  - arc
  - condition
  - int32
  - add
  - edit
  - mate
  - vba
  - vb
  - net
readonly: true
---

# IMate2.DistanceSecondArcCondition

Gets the the second arc condition of this distance mate between cylindrical components.

## Signature

```csharp
System.Int32 DistanceSecondArcCondition {get;}
```
## Parameters

None.

## Return Value

Arc condition as defined by swDistanceMateArcConditions_e

## Remarks

This property is valid only for distance mates between:
two cylindrical faces
- or -
one cylindrical face and one axis.

## Examples

- Add and Edit Distance Mate (VBA) (Add_and_Edit_Distance_Mate_Example_VB.htm)
- Add and Edit Distance Mate (VB.NET) (Add_and_Edit_Distance_Mate_Example_VBNET.htm)
- Add and Edit Distance Mate (C#) (Add_and_Edit_Distance_Mate_Example_CSharp.htm)

## See Also

- `IAssemblyDoc.AddDistanceMate`
- `IAssemblyDoc.EditDistanceMate`
- `IMate2.DistanceFirstArcCondition`