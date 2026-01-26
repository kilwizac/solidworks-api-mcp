---
type: method
interface: IComponent2
member: IGetTessTriStripSize
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - tessellation
  - see
  - also
  - itessellation
  - components
  - icomponent2
  - igettesstristripsize
  - component2
  - tess
  - tri
  - strip
  - size
  - int32
---

# IComponent2.IGetTessTriStripSize

Gets the array size of floats required to contain the data returned when calling IComponent2::IGetTessTriStrips.

## Signature

```csharp
System.Int32 IGetTessTriStripSize()
```
## Parameters

None.

## Return Value

Size of the array

## Remarks

Tessellation information is available only when the component is loaded as lightweight.
SOLIDWORKS calculates this number as ( 3 + FaceCount + StripCount + 3 * VertexCount).