---
type: method
interface: IMeshBody
member: SurfaceFromMesh
returns: System.Object
parameters:
  -
    name: SurfaceType
    type: System.Int32
    description: Type of surface to create as defined by swSurfaceTypes_e (see Remarks )
  -
    name: FacetTolerance
    type: System.Double
    description: 0.0 (High tolerance) <= Percent facet selection <= 100.0 (Low tolerance)
  -
    name: ExtendSurfaceSize
    type: System.Double
    description: Extension in meters of the surface body to fit the selected facets and geometric shape
  -
    name: ErrorCode
    type: System.Int32
    description: 0 if successful, -1 if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - surfacefrommesh
  - imeshbody
  - mesh
  - body
  - surface
  - type
  - int32
  - facet
  - tolerance
  - double
  - extend
  - size
  - error
  - code
  - object
  - ibody2
  - converttomeshbody
---

# IMeshBody.SurfaceFromMesh

Creates a surface from the selected facets in this mesh body.

## Signature

```csharp
System.Object SurfaceFromMesh( 
   System.Int32
SurfaceType
,
   System.Double
FacetTolerance
,
   System.Double
ExtendSurfaceSize
,
   out System.Int32
ErrorCode
)
```
## Parameters

- `SurfaceType` (System.Int32): Type of surface to create as defined by swSurfaceTypes_e (see Remarks )
- `FacetTolerance` (System.Double): 0.0 (High tolerance) <= Percent facet selection <= 100.0 (Low tolerance)
- `ExtendSurfaceSize` (System.Double): Extension in meters of the surface body to fit the selected facets and geometric shape
- `ErrorCode` (System.Int32): 0 if successful, -1 if not

## Return Value

IBody2

## Remarks

This method:
is analogous to the
Insert menu > Mesh > Surface From Mesh
functionality in the user interface.
creates a
Surface-From-Mesh
X
feature in the FeatureManager design tree.
Before calling this method, select as many facets in the mesh body as are needed to create the type of surface.
SurfaceType can be one of only swSurfaceTypes_e.:
PLANE_TYPE
SPHERE_TYPE
CYLINDER_TYPE
CONE_TYPE
For more information, see the
SOLIDWORKS Design user-interface help > Parts and Features > Graphics Mesh and Mesh BREP Bodies > Creating a Surface from Mesh Featur
e topic.

## Examples

- IBody2::ConvertToMeshBody (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBody2~ConvertToMeshBody)