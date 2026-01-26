---
type: method
interface: IAnnotation
member: GetLeaderPointsAtIndex
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of leader within this annotation (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.BentLeaderLength
  - IAnnotation.GetDashedLeader
  - IAnnotation.GetLeaderAllAround
  - IAnnotation.GetLeaderPerpendicular
  - IAnnotation.GetLeaderSide
  - IAnnotation.GetMultiJogLeaderCount
  - IAnnotation.GetMultiJogLeaders
  - IAnnotation.IGetLeaderPointsAtIndex
  - IAnnotation.LeaderLineStyle
  - IAnnotation.LeaderThickness
  - IAnnotation.LeaderThicknessCustom
  - IAnnotation.SetLeader3
  - IAnnotation.SetLeaderAttachmentPointAtIndex
  - IAnnotation.UseDocDispLeader
keywords:
  - leaders
  - annotations
  - annotation
  - see
  - also
  - iannotation
  - getleaderpointsatindex
  - leader
  - points
  - index
  - int32
  - object
  - display
  - dimensions
  - gtols
  - surface
  - finish
  - symbols
  - vba
---

# IAnnotation.GetLeaderPointsAtIndex

Gets coordinate information about a specified leader on this annotation.

## Signature

```csharp
System.Object GetLeaderPointsAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of leader within this annotation (see Remarks )

## Return Value

Array of objects (see Remarks )

## Remarks

The index value is 0-based. Therefore, a valid index value is >= 0 < number of leaders on this annotation.
Use
IAnnotation::GetLeaderCount
to find out how many leaders are on this annotation. If the index value is invalid in Visual Basic for Applications (VBA), SOLIDWORKS returns an empty SafeArray or S_false.
You must determine the number of points in the leader to use the data returned by this method. The number of points is a function of the number of segments in the leader. There can be one or two segments in a leader line, depending on whether or not it is a straight, bent, or underlined leader. Use
IAnnotation::GetLeaderStyle
to determine the number of points in the leader.
If IAnnotation::GetLeaderStyle returns swNO_LEADER, then the number of points = 0.
If IAnnotation::GetLeaderStyle returns swSTRAIGHT and swUNDERLINED then the number
of points = 2.
If IAnnotation::GetLeaderStyle returns swBENT, then the number of points = 3.
Additionally, for the COM interface, you must determine the number of points to allocate the appropriate size array for the return value. The number of points must also be passed to the method to help prevent overwrite problems if you have not allocated an array that is the correct size. If the number of points passed does not match what is found, SOLIDWORKS does not return any point information and returns S_false.
The format of the return array is:
retval[0] = X-coordinate of first leader point
retval[1] = Y-coordinate of first leader point
retval[2] = Z-coordinate of first leader point
retval[3] = X-coordinate of second leader point
retval[4] = Y-coordinate of second leader point
retval[5] = Z-coordinate of second leader point
retval[6] = X-coordinate of third leader point
retval[7] = Y-coordinate of third leader point
retval[8] = Z-coordinate of third leader point
You cannot directly set the leader coordinate information. The leader coordinates are computed based on the annotations text and attachment points. Use
IAnnotation::GetPosition
and
IAnnotation::SetPosition
to get and set the text point.

## Examples

- Get Display Dimensions, GTols, and Surface-finish Symbols (VBA) (Get_Display_Dimensions,_Gtols,_and_Surface-Finish_Symbols_Example_VB.htm)

## See Also

- `IAnnotation.BentLeaderLength`
- `IAnnotation.GetDashedLeader`
- `IAnnotation.GetLeaderAllAround`
- `IAnnotation.GetLeaderPerpendicular`
- `IAnnotation.GetLeaderSide`
- `IAnnotation.GetMultiJogLeaderCount`
- `IAnnotation.GetMultiJogLeaders`
- `IAnnotation.IGetLeaderPointsAtIndex`
- `IAnnotation.LeaderLineStyle`
- `IAnnotation.LeaderThickness`
- `IAnnotation.LeaderThicknessCustom`
- `IAnnotation.SetLeader3`
- `IAnnotation.SetLeaderAttachmentPointAtIndex`
- `IAnnotation.UseDocDispLeader`