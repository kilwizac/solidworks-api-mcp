---
type: method
interface: ISurface
member: MakeIsoCurve
returns: System.Object
parameters:
  -
    name: UorV
    type: System.Boolean
    description: True to specify v, false to specify u
  -
    name: UvValue
    type: System.Double
    description: U or v value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.IGetMakeIsoCurvesCount
  - ISurface.IMakeIsoCurve
  - ISurface.IMakeIsoCurves
  - ISurface.MakeIsoCurves
keywords:
  - makeisocurve
  - isurface
  - surface
  - make
  - iso
  - curve
  - uor
  - boolean
  - uv
  - value
  - double
  - object
---

# ISurface.MakeIsoCurve

Creates an untrimmed curve using the specified surface parameter.

## Signature

```csharp
System.Object MakeIsoCurve( 
   System.Boolean
UorV
,
   System.Double
UvValue
)
```
## Parameters

- `UorV` (System.Boolean): True to specify v, false to specify u
- `UvValue` (System.Double): U or v value

## Return Value

Curve

## See Also

- `ISurface.IGetMakeIsoCurvesCount`
- `ISurface.IMakeIsoCurve`
- `ISurface.IMakeIsoCurves`
- `ISurface.MakeIsoCurves`