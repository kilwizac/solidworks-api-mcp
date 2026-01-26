---
type: method
interface: IDatumOrigin
member: SetAxisPoints
returns: System.Boolean
parameters:
  -
    name: PointData
    type: System.Object
    description: Array of 4 doubles (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDatumOrigin.GetAxisPoints2
  - IDatumOrigin.IGetAxisPoints2
  - IDatumOrigin.ISetAxisPoints
keywords:
  - axes
  - hole
  - table
  - datum
  - origin
  - setaxispoints
  - idatumorigin
  - axis
  - points
  - point
  - data
  - object
  - boolean
---

# IDatumOrigin.SetAxisPoints

Sets the points that define the geometry of this datum origin.

## Signature

```csharp
System.Boolean SetAxisPoints( 
   System.Object
PointData
)
```
## Parameters

- `PointData` (System.Object): Array of 4 doubles (see Remarks )

## Return Value

Unknown.

## Remarks

This method gives you control over the shape of the symbol.
The array of 4 doubles is 2 (X,Y) coordinates in drawing space:
The first coordinate (array items 0 and 1) is the tip of the arrowhead on the X leader portion of the symbol.
The second coordinate (array items 2 and 3) is the tip of the arrowhead on the Y leader portion of the symbol.
The interactive user has this control via the selection drag handles of the symbol.
This method returns a BOOLEAN indicating success or failure of the operation. The operation can fail if either of the coordinates is so close to the symbol origin that the symbol cannot be drawn properly.
There must be:
Room to draw the arrow at the end of the origin leaders
A gap between the symbol origin and the beginning of the first leader.
You can get:
Coordinates of the symbol origin using
IAnnotation::GetPosition
.
Arrowhead length using
IModelDocExtension::GetUserPreferenceDouble
- swDetailingArrowWidth
Gap using IModelDocExtension::GetUserPreferenceDouble - swDetailingWitnessLineGap

## See Also

- `IDatumOrigin.GetAxisPoints2`
- `IDatumOrigin.IGetAxisPoints2`
- `IDatumOrigin.ISetAxisPoints`