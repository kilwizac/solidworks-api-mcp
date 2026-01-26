---
type: property
interface: ISurface
member: ConeParams2
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.IsCone
keywords:
  - conical
  - surfaces
  - surface
  - see
  - also
  - isurface
  - coneparams2
  - cone
  - params2
  - object
  - parameters
  - vba
  - vb
  - net
readonly: true
---

# ISurface.ConeParams2

Gets the parameters of a conical surface.

## Signature

```csharp
System.Object ConeParams2 {get;}
```
## Parameters

None.

## Return Value

Array of doubles describing the parameters of a conical surface

## Remarks

Returns an array of 11 doubles:
origin.x
origin.y
origin.z
axis.x
axis.y
axis.z
radius
half angle
reference_direction.x
reference_direction.y
reference_direction.z
Half angle element is in radians. Origin, radius, and reference direction elements are in meters.

## Examples

- Get Parameters of Conical Surface (VBA) (Get_Parameters_of_Conical_Surface_Example_VB.htm)
- Get Parameters of Conical Surface (VB.NET) (Get_Parameters_of_Conical_Surface_Example_VBNET.htm)
- Get Parameters of Conical Surface (C#) (Get_Parameters_of_Conical_Surface_Example_CSharp.htm)

## See Also

- `ISurface.IsCone`