---
type: method
interface: IModelDoc2
member: SketchRectangle
returns: void
parameters:
  -
    name: Val1
    type: System.Double
    description: Upper-left x value in meters
  -
    name: Val2
    type: System.Double
    description: Upper-left y value in meters
  -
    name: Z1
    type: System.Double
    description: Upper-left z value in meters
  -
    name: Val3
    type: System.Double
    description: Lower-right x value in meters
  -
    name: Val4
    type: System.Double
    description: Lower-right y value in meters
  -
    name: Z2
    type: System.Double
    description: Lower-right z value in meters
  -
    name: Val5
    type: System.Boolean
    description: Not used
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - sketches
  - ui
related:
  - IModelDoc2.SketchRectangleAtAnyAngle
keywords:
  - sketchrectangle
  - imodeldoc2
  - model
  - doc2
  - sketch
  - rectangle
  - val1
  - double
  - val2
  - z1
  - val3
  - val4
  - z2
  - val5
  - boolean
  - void
  - create
  - revolve
  - features
  - vba
  - connect
  - solidworks
  - session
---

# IModelDoc2.SketchRectangle

Obsolete. Superseded by ISketchManager::CreateCornerRectangle.

## Signature

```csharp
void SketchRectangle( 
   System.Double
Val1
,
   System.Double
Val2
,
   System.Double
Z1
,
   System.Double
Val3
,
   System.Double
Val4
,
   System.Double
Z2
,
   System.Boolean
Val5
)
```
## Parameters

- `Val1` (System.Double): Upper-left x value in meters
- `Val2` (System.Double): Upper-left y value in meters
- `Z1` (System.Double): Upper-left z value in meters
- `Val3` (System.Double): Lower-right x value in meters
- `Val4` (System.Double): Lower-right y value in meters
- `Z2` (System.Double): Lower-right z value in meters
- `Val5` (System.Boolean): Not used

## Return Value

Unknown.

## Examples

- Create Revolve Features (VBA) (Create_Revolve_Features_Example_VB.htm)
- Connect to SOLIDWORKS Session (C#) (Connect_to_SOLIDWORKS_Session_CSharp.htm)

## See Also

- `IModelDoc2.SketchRectangleAtAnyAngle`