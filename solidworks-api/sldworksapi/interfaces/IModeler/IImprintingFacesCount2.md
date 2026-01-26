---
type: method
interface: IModeler
member: IImprintingFacesCount2
returns: System.Boolean
parameters:
  -
    name: NTargetFaces
    type: System.Int32
    description: Number of faces in the target body
  -
    name: TargetFaceArray
    type: Face2
    description: Array of the faces that describe the target body
  -
    name: NToolFaces
    type: System.Int32
    description: Number of faces in the tool body
  -
    name: ToolFaceArray
    type: Face2
    description: Array of the faces that describe the tool body
  -
    name: Options
    type: System.Int32
    description: Options for this operation as defined in swImprintingFacesOpts_e
  -
    name: NTargetEdges
    type: System.Int32
    description: Number of edges returned from this operation
  -
    name: NtoolEdges
    type: System.Int32
    description: Number of tool edges returned from this operation
  -
    name: NtargetVertices
    type: System.Int32
    description: Number of target vertices returned from this operation
  -
    name: ToolVertices
    type: System.Int32
    description: Number of tool vertices returned from this operation
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IModeler.ImprintingFaces
keywords:
  - edge
  - see
  - also
  - iedge
  - imprinted
  - edges
  - vertices
  - vertex
  - ivertex
  - iimprintingfacescount2
  - imodeler
  - modeler
  - imprinting
  - faces
  - count2
  - target
  - int32
  - face
  - array
  - face2
  - tool
  - options
  - ntool
  - ntarget
  - boolean
---

# IModeler.IImprintingFacesCount2

Gets the number of imprinted edges and vertices in the model.

## Signature

```csharp
System.Boolean IImprintingFacesCount2( 
   System.Int32
NTargetFaces
,
   ref Face2
TargetFaceArray
,
   System.Int32
NToolFaces
,
   ref Face2
ToolFaceArray
,
   System.Int32
Options
,
   out System.Int32
NTargetEdges
,
   out System.Int32
NtoolEdges
,
   out System.Int32
NtargetVertices
,
   out System.Int32
ToolVertices
)
```
## Parameters

- `NTargetFaces` (System.Int32): Number of faces in the target body
- `TargetFaceArray` (Face2): Array of the faces that describe the target body
- `NToolFaces` (System.Int32): Number of faces in the tool body
- `ToolFaceArray` (Face2): Array of the faces that describe the tool body
- `Options` (System.Int32): Options for this operation as defined in swImprintingFacesOpts_e
- `NTargetEdges` (System.Int32): Number of edges returned from this operation
- `NtoolEdges` (System.Int32): Number of tool edges returned from this operation
- `NtargetVertices` (System.Int32): Number of target vertices returned from this operation
- `ToolVertices` (System.Int32): Number of tool vertices returned from this operation

## Return Value

True if the operation is successful, false if not

## Remarks

Call this method before calling
IModeler::IImprintingFaces
.

## See Also

- `IModeler.ImprintingFaces`