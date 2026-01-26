---
type: method
interface: ITessellation
member: IGetErrorList
returns: void
parameters:
  -
    name: FaceErrArray
    type: Face
    description: 
  -
    name: FacetErrArray
    type: System.Int32
    description: 
  -
    name: VertexPointErrArray
    type: System.Int32
    description: 
  -
    name: VertexNormalErrArray
    type: System.Int32
    description: 
  -
    name: VertexParamsErrArray
    type: System.Int32
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related: []
keywords:
  - igeterrorlist
  - itessellation
  - tessellation
  - error
  - list
  - face
  - err
  - array
  - facet
  - int32
  - vertex
  - point
  - normal
  - params
  - void
---

# ITessellation.IGetErrorList

Obsolete. Superseded by ITessellation::IGetErrorList2.

## Signature

```csharp
void IGetErrorList( 
   out Face
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

- `FaceErrArray` (Face): 
- `FacetErrArray` (System.Int32): 
- `VertexPointErrArray` (System.Int32): 
- `VertexNormalErrArray` (System.Int32): 
- `VertexParamsErrArray` (System.Int32): 

## Return Value

Unknown.