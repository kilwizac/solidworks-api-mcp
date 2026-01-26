---
type: method
interface: ITessellation
member: GetErrorList
returns: void
parameters:
  -
    name: FaceErrArray
    type: System.Object
    description: Array of tessellation faces that have errors
  -
    name: FacetErrArray
    type: System.Object
    description: Array of tessellation facets that have errors
  -
    name: VertexPointErrArray
    type: System.Object
    description: Array of tessellation vertex points that have errors
  -
    name: VertexNormalErrArray
    type: System.Object
    description: Array of tessellation vertex normals that have errors
  -
    name: VertexParamsErrArray
    type: System.Object
    description: Array of tessellation vertex parameters that have errors
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ITessellation.IGetErrorList2
  - ITessellation.IGetErrorListCount
  - ITessellation.NeedErrorList
keywords:
  - geterrorlist
  - itessellation
  - tessellation
  - error
  - list
  - face
  - err
  - array
  - object
  - facet
  - vertex
  - point
  - normal
  - params
  - void
---

# ITessellation.GetErrorList

Gets the tessellation error list.

## Signature

```csharp
void GetErrorList( 
   out System.Object
FaceErrArray
,
   out System.Object
FacetErrArray
,
   out System.Object
VertexPointErrArray
,
   out System.Object
VertexNormalErrArray
,
   out System.Object
VertexParamsErrArray
)
```
## Parameters

- `FaceErrArray` (System.Object): Array of tessellation faces that have errors
- `FacetErrArray` (System.Object): Array of tessellation facets that have errors
- `VertexPointErrArray` (System.Object): Array of tessellation vertex points that have errors
- `VertexNormalErrArray` (System.Object): Array of tessellation vertex normals that have errors
- `VertexParamsErrArray` (System.Object): Array of tessellation vertex parameters that have errors

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

- `ITessellation.IGetErrorList2`
- `ITessellation.IGetErrorListCount`
- `ITessellation.NeedErrorList`