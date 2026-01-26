---
type: method
interface: ISurface
member: IsCone
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModeler.CreateConicalSurface2
  - IModeler.ICreateConicalSurface2
  - ISurface.ConeParams
  - ISurface.IConeParams
keywords:
  - surface
  - see
  - also
  - isurface
  - conical
  - surfaces
  - iscone
  - cone
  - boolean
  - locate
  - apex
  - face
  - vba
  - parameters
  - vb
  - net
---

# ISurface.IsCone

Gets whether the surface is a cone.

## Signature

```csharp
System.Boolean IsCone()
```
## Parameters

None.

## Return Value

True if surface is a cone, false if not

## Remarks

Closed cone faces that have an apex point do not have an edge or coedge at the apex.

## Examples

- Locate Apex of Conical Face (VBA) (Locate_Apex_of_Conical_Face_Example_VB.htm)
- Get Parameters of Conical Surface (VBA) (Get_Parameters_of_Conical_Surface_Example_VB.htm)
- Get Parameters of Conical Surface (VB.NET) (Get_Parameters_of_Conical_Surface_Example_VBNET.htm)
- Get Parameters of Conical Surface (C#) (Get_Parameters_of_Conical_Surface_Example_CSharp.htm)

## See Also

- `IModeler.CreateConicalSurface2`
- `IModeler.ICreateConicalSurface2`
- `ISurface.ConeParams`
- `ISurface.IConeParams`