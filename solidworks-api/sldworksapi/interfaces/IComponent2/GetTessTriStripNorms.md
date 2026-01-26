---
type: method
interface: IComponent2
member: GetTessTriStripNorms
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.IGetTessTriStripNorms
keywords:
  - tessellation
  - see
  - also
  - itessellation
  - components
  - icomponent2
  - gettesstristripnorms
  - component2
  - tess
  - tri
  - strip
  - norms
  - object
---

# IComponent2.GetTessTriStripNorms

Gets the normal vector for each of the triangles, which make up the shaded picture tessellation for this component.

## Signature

```csharp
System.Object GetTessTriStripNorms()
```
## Parameters

None.

## Return Value

Array containing the tri-strip normals

## Remarks

Tessellation information is available only when the component is loaded as lightweight.

## See Also

- `IComponent2.IGetTessTriStripNorms`