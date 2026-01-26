---
type: method
interface: IDrSection
member: SetLineInfo
returns: System.Boolean
parameters:
  -
    name: VLineInfo
    type: System.Object
    description: Array (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDrSection.IGetLineInfo
keywords:
  - lines
  - section
  - views
  - see
  - also
  - idrsection
  - setlineinfo
  - dr
  - line
  - info
  - object
  - boolean
---

# IDrSection.SetLineInfo

Sets the location (both position and arrow heads) of the section line.

## Signature

```csharp
System.Boolean SetLineInfo( 
   System.Object
VLineInfo
)
```
## Parameters

- `VLineInfo` (System.Object): Array (see Remarks )

## Return Value

Unknown.

## Remarks

The VLineInfo argument is an array consisting of several coordinate pairs and is of the same format as the array returned by
IDrSection::GetLineInfo
. The number of coordinate pairs is determined by the number of line segments in the section line. Each coordinate pair consists of 6 doubles, the x,y,z coordinate of
each end point of the segment.
The formatted array should include the start point and end point of each line segment, including the z position even though the z position is irrelevant.
Any section line containing more than one segment contains at least one set of duplicate points. These points represent the end point of one line segment and the coincident start point of another line segment. If you change either set of points, then you must change the other set of points at the same time. These points must always be
coincident when calling this method.
To update the section view, call
IModelDoc2::EditRebuild3
after calling this method.

## See Also

- `IDrSection.IGetLineInfo`