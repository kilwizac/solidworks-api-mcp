---
type: method
interface: IModeler
member: ImprintingFaces
returns: System.Boolean
parameters:
  -
    name: TargetFaceArray
    type: System.Object
    description: Array of faces that describe the target body
  -
    name: ToolFaceArray
    type: System.Object
    description: Array of faces that describe the tool body
  -
    name: Options
    type: System.Int32
    description: Options for this operation as defined in swImprintingFacesOpts_e
  -
    name: TargetEdges
    type: System.Object
    description: Array target edges
  -
    name: ToolEdges
    type: System.Object
    description: Array of tool edges
  -
    name: TargetVertices
    type: System.Object
    description: Array of target vertices
  -
    name: ToolVertices
    type: System.Object
    description: Array of tool vertices
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IModeler.IImprintingFaces
  - IModeler.IImprintingFacesCount2
keywords:
  - face
  - see
  - also
  - iface2
  - imprinted
  - faces
  - imprintingfaces
  - imodeler
  - modeler
  - imprinting
  - target
  - array
  - object
  - tool
  - options
  - int32
  - edges
  - vertices
  - boolean
---

# IModeler.ImprintingFaces

Imprints the specified tool faces onto the specified target faces.

## Signature

```csharp
System.Boolean ImprintingFaces( 
   System.Object
TargetFaceArray
,
   System.Object
ToolFaceArray
,
   System.Int32
Options
,
   out System.Object
TargetEdges
,
   out System.Object
ToolEdges
,
   out System.Object
TargetVertices
,
   out System.Object
ToolVertices
)
```
## Parameters

- `TargetFaceArray` (System.Object): Array of faces that describe the target body
- `ToolFaceArray` (System.Object): Array of faces that describe the tool body
- `Options` (System.Int32): Options for this operation as defined in swImprintingFacesOpts_e
- `TargetEdges` (System.Object): Array target edges
- `ToolEdges` (System.Object): Array of tool edges
- `TargetVertices` (System.Object): Array of target vertices
- `ToolVertices` (System.Object): Array of tool vertices

## Return Value

True if the operation was successful, false if not

## Remarks

The target and tool faces must:
belong to different bodies.
intersect each other.

## See Also

- `IModeler.IImprintingFaces`
- `IModeler.IImprintingFacesCount2`