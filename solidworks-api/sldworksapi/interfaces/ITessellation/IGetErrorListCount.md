---
type: method
interface: ITessellation
member: IGetErrorListCount
returns: void
parameters:
  -
    name: FaceErrArrayCount
    type: System.Int32
    description: Number of face errors
  -
    name: FacetErrArrayCount
    type: System.Int32
    description: Number of facet errors
  -
    name: VertexPointErrArrayCount
    type: System.Int32
    description: Number of vertex point errors
  -
    name: VertexNormalErrArrayCount
    type: System.Int32
    description: Number of vertex point errors
  -
    name: VertexParamsErrArrayCount
    type: System.Int32
    description: Number of vertex parameter errors
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ITessellation.GetErrorList
  - ITessellation.IGetErrorList2
  - ITessellation.NeedErrorList
keywords:
  - igeterrorlistcount
  - itessellation
  - tessellation
  - error
  - list
  - count
  - face
  - err
  - array
  - int32
  - facet
  - vertex
  - point
  - normal
  - params
  - void
---

# ITessellation.IGetErrorListCount

Gets number of tessellation errors by error type.

## Signature

```csharp
void IGetErrorListCount( 
   out System.Int32
FaceErrArrayCount
,
   out System.Int32
FacetErrArrayCount
,
   out System.Int32
VertexPointErrArrayCount
,
   out System.Int32
VertexNormalErrArrayCount
,
   out System.Int32
VertexParamsErrArrayCount
)
```
## Parameters

- `FaceErrArrayCount` (System.Int32): Number of face errors
- `FacetErrArrayCount` (System.Int32): Number of facet errors
- `VertexPointErrArrayCount` (System.Int32): Number of vertex point errors
- `VertexNormalErrArrayCount` (System.Int32): Number of vertex point errors
- `VertexParamsErrArrayCount` (System.Int32): Number of vertex parameter errors

## Return Value

Unknown.

## See Also

- `ITessellation.GetErrorList`
- `ITessellation.IGetErrorList2`
- `ITessellation.NeedErrorList`