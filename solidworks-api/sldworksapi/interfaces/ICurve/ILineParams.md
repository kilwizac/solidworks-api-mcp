---
type: property
interface: ICurve
member: ILineParams
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.Identity
  - ICurve.IsLine
  - ICurve.LineParams
keywords:
  - ilineparams
  - icurve
  - curve
  - line
  - params
  - double
readonly: true
---

# ICurve.ILineParams

Gets the parameters of a curve that is a line.

## Signature

```csharp
System.Double ILineParams {get;}
```
## Parameters

None.

## Return Value

Pointer to an array of doubles (see Remarks )

## Remarks

The return value is an array of 6 double values:
[
rootPoint.x, rootPoint.y, rootPoint.z, direction.x, direction.y, direction.z
]
SOLIDWORKS stores
rootPoint
in meters.

## See Also

- `ICurve.Identity`
- `ICurve.IsLine`
- `ICurve.LineParams`