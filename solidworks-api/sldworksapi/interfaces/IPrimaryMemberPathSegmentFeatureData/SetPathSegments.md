---
type: method
interface: IPrimaryMemberPathSegmentFeatureData
member: SetPathSegments
returns: System.Boolean
parameters:
  -
    name: PathSegments
    type: System.Object
    description: Array of ISketchSegment s, IReferenceCurve s, and/or IEdge s
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - setpathsegments
  - iprimarymemberpathsegmentfeaturedata
  - primary
  - member
  - path
  - segment
  - feature
  - data
  - segments
  - object
  - boolean
  - icornermanagementfolder
---

# IPrimaryMemberPathSegmentFeatureData.SetPathSegments

Gets the path segments, curves, and edges to create the structure system member.

## Signature

```csharp
System.Boolean SetPathSegments( 
   System.Object
PathSegments
)
```
## Parameters

- `PathSegments` (System.Object): Array of ISketchSegment s, IReferenceCurve s, and/or IEdge s

## Return Value

True if path segments successfully set, false if not

## Remarks

For .NET applications, you must marshal the PathSegments array to IDispatch object arrays before calling this method. See
IDispatch Object Arrays as Input in .NET
.

## Examples

- ICornerManagementFolder (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICornerManagementFolder)
- IPrimaryMemberPathSegmentFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPrimaryMemberPathSegmentFeatureData)