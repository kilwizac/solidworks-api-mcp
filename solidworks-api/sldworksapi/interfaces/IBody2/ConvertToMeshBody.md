---
type: method
interface: IBody2
member: ConvertToMeshBody
returns: System.Object
parameters:
  -
    name: GroupFacetsIntoFaces
    type: System.Boolean
    description: True to group facets into multiple faces, false to convert the mesh into a single face; valid only for graphics bodies
  -
    name: KeepOriginalBody
    type: System.Boolean
    description: True to maintain a reference copy of the original solid or surface body; false to not
  -
    name: HideOriginalBody
    type: System.Boolean
    description: True to hide the original body, false to not; valid only of KeepOriginalBody is true
  -
    name: MeshRefinement
    type: System.Double
    description: 0.0 (larger mesh facets) <= Percent refinement <= 100.0 (smaller mesh facets); valid only if AdvancedMeshRefinement is false
  -
    name: AdvancedMeshRefinement
    type: System.Boolean
    description: True to specify maximum distance and angle, false to not
  -
    name: MaximumDistance
    type: System.Double
    description: Maximum distance deviation in meters
  -
    name: MaximumAngle
    type: System.Double
    description: Maximum angle deviation in radians
  -
    name: DefineMaxElementSize
    type: System.Boolean
    description: True to specify the maximum length of the fins, false to not
  -
    name: ElementSize
    type: System.Double
    description: Length of fins in meters; valid only if DefineMaxElementSize is true
  -
    name: ErrorCode
    type: System.Int32
    description: 0 if successful, -1 if errors
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - converttomeshbody
  - ibody2
  - body2
  - convert
  - mesh
  - body
  - group
  - facets
  - faces
  - boolean
  - keep
  - original
  - hide
  - refinement
  - double
  - advanced
  - maximum
  - distance
  - angle
  - define
  - max
  - element
  - size
  - error
  - code
  - int32
  - object
---

# IBody2.ConvertToMeshBody

Converts a solid body to a mesh BREP (boundary representation) body.

## Signature

```csharp
System.Object ConvertToMeshBody( 
   System.Boolean
GroupFacetsIntoFaces
,
   System.Boolean
KeepOriginalBody
,
   System.Boolean
HideOriginalBody
,
   System.Double
MeshRefinement
,
   System.Boolean
AdvancedMeshRefinement
,
   System.Double
MaximumDistance
,
   System.Double
MaximumAngle
,
   System.Boolean
DefineMaxElementSize
,
   System.Double
ElementSize
,
   out System.Int32
ErrorCode
)
```
## Parameters

- `GroupFacetsIntoFaces` (System.Boolean): True to group facets into multiple faces, false to convert the mesh into a single face; valid only for graphics bodies
- `KeepOriginalBody` (System.Boolean): True to maintain a reference copy of the original solid or surface body; false to not
- `HideOriginalBody` (System.Boolean): True to hide the original body, false to not; valid only of KeepOriginalBody is true
- `MeshRefinement` (System.Double): 0.0 (larger mesh facets) <= Percent refinement <= 100.0 (smaller mesh facets); valid only if AdvancedMeshRefinement is false
- `AdvancedMeshRefinement` (System.Boolean): True to specify maximum distance and angle, false to not
- `MaximumDistance` (System.Double): Maximum distance deviation in meters
- `MaximumAngle` (System.Double): Maximum angle deviation in radians
- `DefineMaxElementSize` (System.Boolean): True to specify the maximum length of the fins, false to not
- `ElementSize` (System.Double): Length of fins in meters; valid only if DefineMaxElementSize is true
- `ErrorCode` (System.Int32): 0 if successful, -1 if errors

## Return Value

Array of: One body (if this is a solid body) - or - Multiple surface bodies (if this is a graphics body)

## Remarks

Call this method for each body you want to convert.
This method creates
Body-Convert to Mesh Body
in the FeatureManager design tree.
This method is analogous to the
SOLIDWORKS menu Insert > Mesh > Convert To Mesh Body
. For more information, see the
SOLIDWORKS Design user-interface help > Parts and Features > Graphics Mesh and Mesh BREP Bodies > Converting Solid, Surface or Graphics Bodies to Mesh
topic.