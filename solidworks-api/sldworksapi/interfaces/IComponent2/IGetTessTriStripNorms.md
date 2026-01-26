---
type: method
interface: IComponent2
member: IGetTessTriStripNorms
returns: System.Single
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetTessTriStripNorms
keywords:
  - tessellation
  - see
  - also
  - itessellation
  - components
  - icomponent2
  - igettesstristripnorms
  - component2
  - tess
  - tri
  - strip
  - norms
  - single
---

# IComponent2.IGetTessTriStripNorms

Gets the normal vector for each of the triangles, which make up the shaded picture tessellation for this component.

## Signature

```csharp
System.Single IGetTessTriStripNorms()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of floats containing the tri-strip normals VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Tessellation information is available only when the component is loaded as lightweight.

## See Also

- `IComponent2.GetTessTriStripNorms`