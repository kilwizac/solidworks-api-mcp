---
type: method
interface: IDrSection
member: ISetLineInfo
returns: System.Boolean
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of the point coordinates of the section line
  -
    name: PLineInfo
    type: System.Double
    description: in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDrSection.GetLineInfo
  - IDrSection.SetLineInfo
keywords:
  - lines
  - section
  - views
  - see
  - also
  - idrsection
  - isetlineinfo
  - dr
  - line
  - info
  - count
  - int32
  - double
  - boolean
---

# IDrSection.ISetLineInfo

Sets the location (both position and arrow heads) of the section line.

## Signature

```csharp
System.Boolean ISetLineInfo( 
   System.Int32
Count
,
   ref System.Double
PLineInfo
)
```
## Parameters

- `Count` (System.Int32): Number of the point coordinates of the section line
- `PLineInfo` (System.Double): in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

True if the location is set, false if not

## Remarks

The PLineInfo argument is an array consisting of several coordinate pairs and is of the same format as the array returned by
IDrSection::IGetLineInfo
. The number of coordinate pairs is determined by the number of line segments in the section line. Each coordinate pair consists of 6 doubles, the x,y,z coordinate of
each end point of the segment.
The formatted array should include the start point and end point of each line segment, including the z position even though the z position is irrelevant.
Any section line containing more than one segment contains at least one set of duplicate points. These points represent the end point of one line segment and the coincident start point of another line segment. If you change either set of points, then you must change the other set of points at the same time. These points must always be
coincident when calling this method.
To update the section view, call
IModelDoc2::EditRebuild3
after calling this method.

## See Also

- `IDrSection.GetLineInfo`
- `IDrSection.SetLineInfo`