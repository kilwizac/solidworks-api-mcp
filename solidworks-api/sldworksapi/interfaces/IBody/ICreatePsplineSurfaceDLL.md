---
type: method
interface: IBody
member: ICreatePsplineSurfaceDLL
returns: Surface
parameters:
  -
    name: Dim
    type: System.Int32
    description: 
  -
    name: UOrder
    type: System.Int32
    description: 
  -
    name: VOrder
    type: System.Int32
    description: 
  -
    name: Ncol
    type: System.Int32
    description: 
  -
    name: Nrow
    type: System.Int32
    description: 
  -
    name: Coeffs
    type: System.Double
    description: 
  -
    name: Basis
    type: System.Int32
    description: 
  -
    name: Xform
    type: System.Double
    description: 
  -
    name: ScaleFactor
    type: System.Double
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - geometry
related: []
keywords:
  - icreatepsplinesurfacedll
  - ibody
  - body
  - create
  - pspline
  - surface
  - dll
  - dim
  - int32
  - order
  - ncol
  - nrow
  - coeffs
  - double
  - basis
  - xform
  - scale
  - factor
---

# IBody.ICreatePsplineSurfaceDLL

Obsolete. Superseded by IBody2::ICreatePsplineSurfaceDLL.

## Signature

```csharp
Surface ICreatePsplineSurfaceDLL( 
   System.Int32
Dim
,
   System.Int32
UOrder
,
   System.Int32
VOrder
,
   System.Int32
Ncol
,
   System.Int32
Nrow
,
   ref System.Double
Coeffs
,
   System.Int32
Basis
,
   ref System.Double
Xform
,
   System.Double
ScaleFactor
)
```
## Parameters

- `Dim` (System.Int32): 
- `UOrder` (System.Int32): 
- `VOrder` (System.Int32): 
- `Ncol` (System.Int32): 
- `Nrow` (System.Int32): 
- `Coeffs` (System.Double): 
- `Basis` (System.Int32): 
- `Xform` (System.Double): 
- `ScaleFactor` (System.Double): 

## Return Value

Unknown.