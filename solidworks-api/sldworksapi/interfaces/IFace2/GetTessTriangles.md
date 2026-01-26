---
type: method
interface: IFace2
member: GetTessTriangles
returns: System.Object
parameters:
  -
    name: NoConversion
    type: System.Boolean
    description: True prohibits conversion to user units from system units, false does not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFace2.GetTessNorms
  - IFace2.GetTessTextures
  - IFace2.GetTessTriStripEdges
  - IFace2.GetTessTriStripNorms
  - IFace2.GetTessTriStripSize
  - IFace2.GetTessTriStrips
  - IFace2.GetTessTriangleCount
  - IFace2.IGetTessNorms
  - IFace2.IGetTessTextures
  - IFace2.IGetTessTriStripEdgeSize
  - IFace2.IGetTessTriStripEdges
  - IFace2.IGetTessTriStripNorms
  - IFace2.IGetTessTriStrips
  - IFace2.IGetTessTriangles
keywords:
  - tessellation
  - see
  - also
  - itessellation
  - faces
  - face
  - iface2
  - gettesstriangles
  - face2
  - tess
  - triangles
  - no
  - conversion
  - boolean
  - object
  - part
  - bounding
  - box
  - vba
---

# IFace2.GetTessTriangles

Gets the triangles that make up the shaded picture tessellation for this face.

## Signature

```csharp
System.Object GetTessTriangles( 
   System.Boolean
NoConversion
)
```
## Parameters

- `NoConversion` (System.Boolean): True prohibits conversion to user units from system units, false does not

## Return Value

Array (see Remarks )

## Remarks

These triangles are intended for graphics display purposes and do not represent a tessellation that can be used, for example, by a machining application. If you need the kind of accuracy associated with a machining product, traverse the body faces and extract the topology and geometry data to create your own faceting.
The format of the returned data is:
float x, y, z - First point in meters
float x, y, z - Second point in meters
float x, y, z - Third point in meters
where this data repeats itself for each of the triangles on this face.
The total size of the data is
[
9 x sizeof(float) x (number of triangles)
]
.

## Examples

- Get Part Bounding Box (VBA) (Get_Part_Bounding_Box_Example_VB.htm)

## See Also

- `IFace2.GetTessNorms`
- `IFace2.GetTessTextures`
- `IFace2.GetTessTriStripEdges`
- `IFace2.GetTessTriStripNorms`
- `IFace2.GetTessTriStripSize`
- `IFace2.GetTessTriStrips`
- `IFace2.GetTessTriangleCount`
- `IFace2.IGetTessNorms`
- `IFace2.IGetTessTextures`
- `IFace2.IGetTessTriStripEdgeSize`
- `IFace2.IGetTessTriStripEdges`
- `IFace2.IGetTessTriStripNorms`
- `IFace2.IGetTessTriStrips`
- `IFace2.IGetTessTriangles`