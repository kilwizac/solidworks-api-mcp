---
type: method
interface: IFace2
member: GetUVBounds
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.GetProcessedBody2
  - IFace2.IGetUVBounds
keywords:
  - getuvbounds
  - iface2
  - face2
  - uv
  - bounds
  - object
  - create
  - trimmed
  - curve
  - vba
  - vb
  - net
---

# IFace2.GetUVBounds

Gets the values that describe the U, V bounds of this face.

## Signature

```csharp
System.Object GetUVBounds()
```
## Parameters

None.

## Return Value

Array (see Remarks )

## Remarks

The return values bound an area of the surface in which the face is defined. You can determine the surface U, V bounds using
ISurface::Parameterization
or
ISurface::IParameterization
.
The returned data is an array of 4 doubles arranged in the following order:
retval[0] - Minimum U parameter of this face
retval[1] - Maximum U parameter of this face
retval[2] - Minimum V parameter of this face
retval[3] - Maximum V parameter of this face
The minimum parameters are always less than the maximum parameters, and the range (for example, retval[1] - retval[0] and retval[3]-retval[2]) is always less than or equal to the U and V range of the underlying surface.
For surfaces with periodic parameters, the face parameter box can never be larger than the period of the corresponding surface parameter.
uRange[0] <= retval[0] < uRange[1]
vRange[0] <= retval[2] < vRange[1]
where uRange and vRange describe the UV range of the surface
Therefore, a face that straddles the boundary of a periodic parameter has an upper parameter value for the face that is greater than the upper parameter range of the surface.

## Examples

- Create Trimmed Curve (VBA) (Return_Untrimmed_Curve_Example_VB.htm)
- Create Trimmed Curve (VB.NET) (Return_Untrimmed_Curve_Example_VBNET.htm)
- Create Trimmed Curve (C#) (Return_Untrimmed_Curve_Example_CSharp.htm)

## See Also

- `IBody2.GetProcessedBody2`
- `IFace2.IGetUVBounds`