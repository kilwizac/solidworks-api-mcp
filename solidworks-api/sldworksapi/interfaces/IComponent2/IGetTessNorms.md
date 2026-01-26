---
type: method
interface: IComponent2
member: IGetTessNorms
returns: System.Single
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetTessNorms
keywords:
  - tessellation
  - see
  - also
  - itessellation
  - components
  - icomponent2
  - igettessnorms
  - component2
  - tess
  - norms
  - single
---

# IComponent2.IGetTessNorms

Gets the normal vector for each of the triangles, which make up the shaded picture tessellation for the component.

## Signature

```csharp
System.Single IGetTessNorms()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of floats (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Tessellation information is available only when the component is loaded as lightweight.
The format of retval is:
float x, y, z - first point's unit normal
float x, y, z - second point's unit normal
float x, y, z - third point's unit normal
for the set of triangles for the component.
The total size of the data is
[
9 x sizeof(
float
) x (
number of triangles
)
]
.

## See Also

- `IComponent2.GetTessNorms`