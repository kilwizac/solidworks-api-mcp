---
type: method
interface: IBody
member: ICreateRevolutionSurfaceDLL
returns: Surface
parameters:
  -
    name: ProfileCurve
    type: Curve
    description: 
  -
    name: AxisPoint
    type: System.Double
    description: 
  -
    name: AxisDirection
    type: System.Double
    description: 
  -
    name: ProfileEndPtParams
    type: System.Double
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - geometry
related: []
keywords:
  - icreaterevolutionsurfacedll
  - ibody
  - body
  - create
  - revolution
  - surface
  - dll
  - profile
  - curve
  - axis
  - point
  - double
  - direction
  - end
  - pt
  - params
---

# IBody.ICreateRevolutionSurfaceDLL

Obsolete. Superseded by IBody2::ICreateRevolutionSurfaceDLL.

## Signature

```csharp
Surface ICreateRevolutionSurfaceDLL( 
   Curve
ProfileCurve
,
   ref System.Double
AxisPoint
,
   ref System.Double
AxisDirection
,
   ref System.Double
ProfileEndPtParams
)
```
## Parameters

- `ProfileCurve` (Curve): 
- `AxisPoint` (System.Double): 
- `AxisDirection` (System.Double): 
- `ProfileEndPtParams` (System.Double): 

## Return Value

Unknown.