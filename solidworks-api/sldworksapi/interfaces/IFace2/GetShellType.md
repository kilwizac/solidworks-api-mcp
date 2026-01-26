---
type: method
interface: IFace2
member: GetShellType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - shell
  - see
  - also
  - ishellfeaturedata
  - faces
  - getshelltype
  - iface2
  - face2
  - type
  - int32
---

# IFace2.GetShellType

Gets the shell type for this face.

## Signature

```csharp
System.Int32 GetShellType()
```
## Parameters

None.

## Return Value

Shell type: 0 = Open shell. For example, a face that belongs to a sheet (surface) body or reference surface. 1 = Internal shell. For example, a face that belongs to a cavity. Face helps define an internal volume. 2 = External shell. For example, a typical face on a solid body (helps "hold in" the body mass). This includes all external faces (faces belonging to bosses, pockets, holes, and so on).