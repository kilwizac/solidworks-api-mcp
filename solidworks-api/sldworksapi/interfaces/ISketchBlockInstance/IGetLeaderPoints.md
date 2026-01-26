---
type: method
interface: ISketchBlockInstance
member: IGetLeaderPoints
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchBlockInstance.GetLeaderPoints
  - ISketchBlockInstance.SetLeader
keywords:
  - leaders
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - igetleaderpoints
  - sketch
  - block
  - instance
  - leader
  - points
  - double
---

# ISketchBlockInstance.IGetLeaderPoints

Gets the coordinate information for the leader on this block instance.

## Signature

```csharp
System.Double IGetLeaderPoints()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array containing leader point information (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

For the COM interface, you must specify an array size of 9. Depending on the number of points in the leader, this array might only be partially filled upon return from the API. For the OLE Automation interface, the returned SafeArray is sized appropriately for the number of points returned.
You must determine the number of points in the leader to use the data returned by this method. The number of points is a function of the number of segments in the leader. The leader line can have one or two segments depending on whether it is straight or bent. Use
ISketchBlockInstnace::GetLeaderStyle
to determine the number of points in the leader.
If SketchBlockInstance::GetLeaderStyle returns...
Then the number of points equals...
swNO_LEADER
0
swSTRAIGHT
2
swBENT
3
The format of the return array is:
retval
[0] = X-coordinate of first leader point
retval
[1] = Y-coordinate of first leader point
retval
[2] = Z-coordinate of first leader point
retval
[3] = X-coordinate of second leader point
retval
[4] = Y-coordinate of second leader point
retval
[5] = Z-coordinate of second leader point
retval
[6] = X-coordinate of third leader point
retval
[7] = Y-coordinate of third leader point
retval
[8] = Z-coordinate of third leader point

## See Also

- `ISketchBlockInstance.GetLeaderPoints`
- `ISketchBlockInstance.SetLeader`