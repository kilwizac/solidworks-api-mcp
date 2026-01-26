---
type: method
interface: IModelDoc2
member: InsertHelix
returns: void
parameters:
  -
    name: Reversed
    type: System.Boolean
    description: True creates a constant-pitch helix or spiral in the opposite direction of the circle used to define the diameter, false creates a constant-pitch helix or spiral in the direction of the circle's normal vector; the normal vector of a circle, for example, would be off the screen if the circle were drawn in a counter-clockwise direction
  -
    name: Clockwised
    type: System.Boolean
    description: True for clockwise, false for counter-clockwise
  -
    name: Tapered
    type: System.Boolean
    description: True to taper the constant-pitch helix, false for no taper
  -
    name: Outward
    type: System.Boolean
    description: True to taper the constant-pitch helix outward, false for inward
  -
    name: Helixdef
    type: System.Int32
    description: Constant-pitch helix or spiral definition as defined by swHelixDefinedBy_e
  -
    name: Height
    type: System.Double
    description: Height of constant-pitch helix in meters
  -
    name: Pitch
    type: System.Double
    description: Constant-pitch helix or spiral pitch
  -
    name: Revolution
    type: System.Double
    description: Number of revolutions
  -
    name: TaperAngle
    type: System.Double
    description: Taper angle of constant-pitch helix
  -
    name: Startangle
    type: System.Double
    description: Start angle rotation from base axis in radians
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IFeatureManager.InsertVariablePitchHelix
  - IHelixFeatureData
keywords:
  - helix
  - see
  - ihelixfeaturedata
  - feature
  - also
  - ifeature
  - constant
  - pitch
  - spiral
  - taper
  - inserthelix
  - imodeldoc2
  - model
  - doc2
  - insert
  - reversed
  - boolean
  - clockwised
  - tapered
  - outward
  - helixdef
  - int32
  - height
  - double
  - revolution
  - angle
  - startangle
  - void
  - create
  - vb
  - net
  - vba
---

# IModelDoc2.InsertHelix

Creates a constant-pitch helix or spiral.

## Signature

```csharp
void InsertHelix( 
   System.Boolean
Reversed
,
   System.Boolean
Clockwised
,
   System.Boolean
Tapered
,
   System.Boolean
Outward
,
   System.Int32
Helixdef
,
   System.Double
Height
,
   System.Double
Pitch
,
   System.Double
Revolution
,
   System.Double
TaperAngle
,
   System.Double
Startangle
)
```
## Parameters

- `Reversed` (System.Boolean): True creates a constant-pitch helix or spiral in the opposite direction of the circle used to define the diameter, false creates a constant-pitch helix or spiral in the direction of the circle's normal vector; the normal vector of a circle, for example, would be off the screen if the circle were drawn in a counter-clockwise direction
- `Clockwised` (System.Boolean): True for clockwise, false for counter-clockwise
- `Tapered` (System.Boolean): True to taper the constant-pitch helix, false for no taper
- `Outward` (System.Boolean): True to taper the constant-pitch helix outward, false for inward
- `Helixdef` (System.Int32): Constant-pitch helix or spiral definition as defined by swHelixDefinedBy_e
- `Height` (System.Double): Height of constant-pitch helix in meters
- `Pitch` (System.Double): Constant-pitch helix or spiral pitch
- `Revolution` (System.Double): Number of revolutions
- `TaperAngle` (System.Double): Taper angle of constant-pitch helix
- `Startangle` (System.Double): Start angle rotation from base axis in radians

## Return Value

Unknown.

## Remarks

When creating a a spiral, you must specify the pitch and number of revolutions.

## Examples

- Create Spiral (C#) (Create_Spiral_Example_CSharp.htm)
- Create Spiral (VB.NET) (Create_Spiral_Example_VBNET.htm)
- Create Spiral (VBA) (Create_Spiral_Example_VB.htm)

## See Also

- `IFeatureManager.InsertVariablePitchHelix`
- `IHelixFeatureData`