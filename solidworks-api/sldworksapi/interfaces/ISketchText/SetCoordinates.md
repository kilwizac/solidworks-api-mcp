---
type: method
interface: ISketchText
member: SetCoordinates
returns: System.Boolean
parameters:
  -
    name: X
    type: System.Double
    description: X coordinate of the sketch text position
  -
    name: Y
    type: System.Double
    description: Y coordinate of the sketch text position
  -
    name: Z
    type: System.Double
    description: Z coordinate of the sketch text position
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - setcoordinates
  - isketchtext
  - sketch
  - text
  - coordinates
  - double
  - boolean
---

# ISketchText.SetCoordinates

Sets the position of this sketch text.

## Signature

```csharp
System.Boolean SetCoordinates( 
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
)
```
## Parameters

- `X` (System.Double): X coordinate of the sketch text position
- `Y` (System.Double): Y coordinate of the sketch text position
- `Z` (System.Double): Z coordinate of the sketch text position

## Return Value

True if the sketch text position is successfully set, false if not

## Remarks

To set the sketch text position, you must be editing the sketch. See
IModelDoc2::EditSketch
or
ISketchManager::InsertSketch
.
To get the position of this sketch text, use
ISketchText::GetCoordinates
and
ISketchText::IGetCoordinates
.