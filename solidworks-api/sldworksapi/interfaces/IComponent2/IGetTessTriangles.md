---
type: method
interface: IComponent2
member: IGetTessTriangles
returns: System.Single
parameters:
  -
    name: NoConversion
    type: System.Boolean
    description: True prohibits conversion to user units from system units, false does not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetTessTriangles
keywords:
  - tessellation
  - see
  - also
  - itessellation
  - components
  - icomponent2
  - igettesstriangles
  - component2
  - tess
  - triangles
  - no
  - conversion
  - boolean
  - single
---

# IComponent2.IGetTessTriangles

Gets the triangles that make up the shaded picture tessellation for this component.

## Signature

```csharp
System.Single IGetTessTriangles( 
   System.Boolean
NoConversion
)
```
## Parameters

- `NoConversion` (System.Boolean): True prohibits conversion to user units from system units, false does not

## Return Value

in-process, unmanaged C++: Pointer to array of floats (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Tessellation information is available only when the component is loaded as lightweight.
These triangles are intended for graphics display purposes and do not represent a
tessellation that could be used, for example, by a machining application. If you
need the type of accuracy associated with a machining product, we recommend that
you traverse the body faces and extract the topology and geometry data to create
your own faceting.
The format of the returned data is:
float x, y, z - first point in meters
float x, y, z - second point in meters
float x, y, z - third point in meters
for the set of triangles for the component.
The total size of the data is
[
9 x sizeof(
float)
x
(number of triangles)
]
.

## See Also

- `IComponent2.GetTessTriangles`