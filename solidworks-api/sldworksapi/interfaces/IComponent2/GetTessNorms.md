---
type: method
interface: IComponent2
member: GetTessNorms
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.IGetTessNorms
keywords:
  - tessellation
  - see
  - also
  - itessellation
  - components
  - icomponent2
  - gettessnorms
  - component2
  - tess
  - norms
  - object
---

# IComponent2.GetTessNorms

Gets the normal vector for each of the triangles, which make up the shaded picture tessellation for the component.

## Signature

```csharp
System.Object GetTessNorms()
```
## Parameters

None.

## Return Value

Object of type SafeArray of floats (see Remarks )

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

- `IComponent2.IGetTessNorms`