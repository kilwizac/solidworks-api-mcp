---
type: method
interface: ISurface
member: MakeIsoCurve2
returns: Curve
parameters:
  -
    name: UorV
    type: System.Boolean
    description: True to specify the surface function's v parameter in UvValue, false to specify its u parameter
  -
    name: UvValue
    type: System.Double
    description: If UorV is... Then UvValue is the surface function's... True V parameter False U parameter
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.CreateTrimmedCurve2
  - ISurface.IGetMakeIsoCurvesCount
  - ISurface.IMakeIsoCurve
  - ISurface.IMakeIsoCurves
  - ISurface.MakeIsoCurves
keywords:
  - makeisocurve2
  - isurface
  - surface
  - make
  - iso
  - curve2
  - uor
  - boolean
  - uv
  - value
  - double
  - curve
  - create
  - trimmed
  - vba
  - vb
  - net
---

# ISurface.MakeIsoCurve2

Creates an untrimmed curve on a surface using the specified u or v surface function parameter.

## Signature

```csharp
Curve MakeIsoCurve2( 
   System.Boolean
UorV
,
   out System.Double
UvValue
)
```
## Parameters

- `UorV` (System.Boolean): True to specify the surface function's v parameter in UvValue, false to specify its u parameter
- `UvValue` (System.Double): If UorV is... Then UvValue is the surface function's... True V parameter False U parameter

## Return Value

Curve

## Remarks

This method supersedes the now obsolete ISurface::MakeIsoCurve by normalizing UvValue when it exceeds a specific value.

## Examples

- Create Trimmed Curve (VBA) (Return_Untrimmed_Curve_Example_VB.htm)
- Create Trimmed Curve (VB.NET) (Return_Untrimmed_Curve_Example_VBNET.htm)
- Create Trimmed Curve (C#) (Return_Untrimmed_Curve_Example_CSharp.htm)

## See Also

- `ICurve.CreateTrimmedCurve2`
- `ISurface.IGetMakeIsoCurvesCount`
- `ISurface.IMakeIsoCurve`
- `ISurface.IMakeIsoCurves`
- `ISurface.MakeIsoCurves`