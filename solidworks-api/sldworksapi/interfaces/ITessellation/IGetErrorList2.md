---
type: method
interface: ITessellation
member: IGetErrorList2
returns: void
parameters:
  -
    name: FaceErrArray
    type: Face2
    description: in-process, unmanaged C++: Pointer to an array of faces that have errors VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: FacetErrArray
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array of longs or integers describing the facets with errors VBA, VB.NET, C#, and C++/CLI: Not supported
  -
    name: VertexPointErrArray
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array of longs or integers of vertex point IDs from FacetErrArray VBA, VB.NET, C#, and C++/CLI: Not supported
  -
    name: VertexNormalErrArray
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array of longs or integers of vertex normal IDs from FacetErrArray VBA, VB.NET, C#, and C++/CLI: Not supported
  -
    name: VertexParamsErrArray
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array of longs or integers of vertex parameters IDs from facetErrArray VBA, VB.NET, C#, and C++/CLI: Not supported
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ITessellation.GetErrorList
  - ITessellation.IGetErrorListCount
  - ITessellation.NeedErrorList
keywords:
  - igeterrorlist2
  - itessellation
  - tessellation
  - error
  - list2
  - face
  - err
  - array
  - face2
  - facet
  - int32
  - vertex
  - point
  - normal
  - params
  - void
---

# ITessellation.IGetErrorList2

Gets the tessellation error list.

## Signature

```csharp
void IGetErrorList2( 
   out Face2
FaceErrArray
,
   out System.Int32
FacetErrArray
,
   out System.Int32
VertexPointErrArray
,
   out System.Int32
VertexNormalErrArray
,
   out System.Int32
VertexParamsErrArray
)
```
## Parameters

- `FaceErrArray` (Face2): in-process, unmanaged C++: Pointer to an array of faces that have errors VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `FacetErrArray` (System.Int32): in-process, unmanaged C++: Pointer to an array of longs or integers describing the facets with errors VBA, VB.NET, C#, and C++/CLI: Not supported
- `VertexPointErrArray` (System.Int32): in-process, unmanaged C++: Pointer to an array of longs or integers of vertex point IDs from FacetErrArray VBA, VB.NET, C#, and C++/CLI: Not supported
- `VertexNormalErrArray` (System.Int32): in-process, unmanaged C++: Pointer to an array of longs or integers of vertex normal IDs from FacetErrArray VBA, VB.NET, C#, and C++/CLI: Not supported
- `VertexParamsErrArray` (System.Int32): in-process, unmanaged C++: Pointer to an array of longs or integers of vertex parameters IDs from facetErrArray VBA, VB.NET, C#, and C++/CLI: Not supported

## Return Value

Unknown.

## Remarks

Before using this method, make sure that you can retrieve the list for the tessellation data that you want to query error information from:
ITessellation::NeedVertexNormal
ITessellation::NeedVertexParams
ITessellation::NeedFaceFacetMap
ITessellation::NeedEdgeFinMap
ITessellation::NeedErrorList
After using an ITessellation function, you can return error information about any of the tessellation data.
The arrays returned by ITessellation::GetErrorList contains the tessellation entity IDs that have errors:
Face error: The specified face could not be faceted.
Facet error: The specified facet is disconnected from its neighboring facets.
Vertex error: The specified vertex does not match any vertices on adjacent faces. There may be gaps between facets.
Vertex normal error: The tessellate function could not calculate an accurate vertex normal.
Vertex parameter error: The tessellate function could not calculate accurate vertex parameters.

## See Also

- `ITessellation.GetErrorList`
- `ITessellation.IGetErrorListCount`
- `ITessellation.NeedErrorList`