---
type: method
interface: IBody2
member: GetMeshBody
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - getmeshbody
  - ibody2
  - body2
  - mesh
  - body
  - object
  - ifacet
---

# IBody2.GetMeshBody

Gets the mesh body associated with this body.

## Signature

```csharp
System.Object GetMeshBody()
```
## Parameters

None.

## Return Value

IMeshBody

## Remarks

This method is valid only if
IBody2::IsMeshBody
is true.

## Examples

- IFacet (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFacet)