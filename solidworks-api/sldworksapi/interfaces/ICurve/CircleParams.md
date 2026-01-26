---
type: property
interface: ICurve
member: CircleParams
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.ICircleParams
  - ICurve.Identity
  - ICurve.IsCircle
keywords:
  - circleparams
  - icurve
  - curve
  - circle
  - params
  - object
  - entities
  - attached
  - cosmetic
  - thread
  - vba
readonly: true
---

# ICurve.CircleParams

Gets the parameters of a curve that is a circle.

## Signature

```csharp
System.Object CircleParams {get;}
```
## Parameters

None.

## Return Value

Array of doubles (see Remarks )

## Remarks

To determine if a circular edge is a complete circle or an arc, use
IEdge::GetCurveParams2
.
The return value is the following array of 7 double values:
[
center.x, center.y, center.z, axis.x, axis.y, axis.z, radius
]
Center and radius values are in meters.

## Examples

- Get Entities Attached to Cosmetic Thread (VBA) (Get_Entities_Attached_To_Cosmetic_Thread_Example_VB.htm)

## See Also

- `ICurve.ICircleParams`
- `ICurve.Identity`
- `ICurve.IsCircle`