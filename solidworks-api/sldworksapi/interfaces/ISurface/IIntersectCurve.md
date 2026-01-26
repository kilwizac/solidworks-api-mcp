---
type: method
interface: ISurface
member: IIntersectCurve
returns: System.Boolean
parameters:
  -
    name: OtherCurve
    type: Curve
    description: 
  -
    name: CurveBound
    type: System.Double
    description: 
  -
    name: PointCount
    type: System.Int32
    description: 
  -
    name: PointArray
    type: System.Double
    description: 
  -
    name: TArray
    type: System.Double
    description: 
  -
    name: UvArray
    type: System.Double
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related: []
keywords:
  - iintersectcurve
  - isurface
  - surface
  - intersect
  - curve
  - other
  - bound
  - double
  - point
  - count
  - int32
  - array
  - uv
  - boolean
---

# ISurface.IIntersectCurve

Obsolete. Superseded by ISurface::IIntersectCurve2.

## Signature

```csharp
System.Boolean IIntersectCurve( 
   Curve
OtherCurve
,
   ref System.Double
CurveBound
,
   System.Int32
PointCount
,
   out System.Double
PointArray
,
   out System.Double
TArray
,
   out System.Double
UvArray
)
```
## Parameters

- `OtherCurve` (Curve): 
- `CurveBound` (System.Double): 
- `PointCount` (System.Int32): 
- `PointArray` (System.Double): 
- `TArray` (System.Double): 
- `UvArray` (System.Double): 

## Return Value

Unknown.