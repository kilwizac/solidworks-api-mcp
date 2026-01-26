---
type: method
interface: IPartDoc
member: IGetTessTriangles
returns: System.Single
parameters:
  -
    name: NoConversion
    type: System.Boolean
    description: True to prohibit conversion to user units from system units , false to do so
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - parts
  - ui
related:
  - IPartDoc.GetTessNorms
  - IPartDoc.GetTessTriStripEdges
  - IPartDoc.GetTessTriStripNorms
  - IPartDoc.GetTessTriStripSize
  - IPartDoc.GetTessTriStrips
  - IPartDoc.GetTessTriangleCount
  - IPartDoc.GetTessTriangles
  - IPartDoc.IGetTessNorms
  - IPartDoc.IGetTessTriStripEdgeSize
  - IPartDoc.IGetTessTriStripEdges
  - IPartDoc.IGetTessTriStripNorms
  - IPartDoc.IGetTessTriStrips
  - ITessellation
keywords:
  - tessellation
  - see
  - also
  - itessellation
  - parts
  - ipartdoc
  - igettesstriangles
  - part
  - doc
  - tess
  - triangles
  - no
  - conversion
  - boolean
  - single
---

# IPartDoc.IGetTessTriangles

Gets the triangles that make up the shaded picture tessellation for this part.

## Signature

```csharp
System.Single IGetTessTriangles( 
   System.Boolean
NoConversion
)
```
## Parameters

- `NoConversion` (System.Boolean): True to prohibit conversion to user units from system units , false to do so

## Return Value

in-process, unmanaged C++: Pointer to an array of floats (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

These triangles are intended for graphics display purposes and do not represent a tessellation that could be used, for example, by a machining application. If you need the type of accuracy associated with a machining product, it is recommended that you traverse the body faces and extract the topology and geometry data to create your own faceting.
The total size of the data is:
[
9 x sizeof(float ) x (number of triangles)
]
.
The format of the data is:
float
x, y, z first point in meters
float
x, y, z second point in meters
float
x, y, z third point in meters
for the set of triangles for the part.

## See Also

- `IPartDoc.GetTessNorms`
- `IPartDoc.GetTessTriStripEdges`
- `IPartDoc.GetTessTriStripNorms`
- `IPartDoc.GetTessTriStripSize`
- `IPartDoc.GetTessTriStrips`
- `IPartDoc.GetTessTriangleCount`
- `IPartDoc.GetTessTriangles`
- `IPartDoc.IGetTessNorms`
- `IPartDoc.IGetTessTriStripEdgeSize`
- `IPartDoc.IGetTessTriStripEdges`
- `IPartDoc.IGetTessTriStripNorms`
- `IPartDoc.IGetTessTriStrips`
- `ITessellation`