---
type: method
interface: ISketchManager
member: CreateFillet
returns: SketchSegment
parameters:
  -
    name: Radius
    type: System.Double
    description: Radius of the fillet in meters
  -
    name: ConstrainedCorners
    type: System.Int32
    description: Action to take as defined in swConstrainedCornerAction_e (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - fillets
  - sketch
  - tools
  - fillet
  - see
  - also
  - isketch
  - createfillet
  - isketchmanager
  - manager
  - create
  - radius
  - double
  - constrained
  - corners
  - int32
  - segment
  - edit
  - radial
  - dimension
  - vb
  - net
  - vba
---

# ISketchManager.CreateFillet

Creates a sketch fillet using the selected sketch entities.

## Signature

```csharp
SketchSegment CreateFillet( 
   System.Double
Radius
,
   System.Int32
ConstrainedCorners
)
```
## Parameters

- `Radius` (System.Double): Radius of the fillet in meters
- `ConstrainedCorners` (System.Int32): Action to take as defined in swConstrainedCornerAction_e (see Remarks )

## Return Value

Sketch segment for the fillet

## Remarks

The ConstrainedCorners parameter indicates what action to take if the corner to fillet is constrained or dimensioned. If the corner is not constrained or dimensioned, then this parameter is ignored.

## Examples

- Edit Radial Dimension (C#) (Edit_Radial_Dimension_Example_CSharp.htm)
- Edit Radial Dimension (VB.NET) (Edit_Radial_Dimension_Example_VBNET.htm)
- Edit Radial Dimension (VBA) (Edit_Radial_Dimension_Example_VB.htm)