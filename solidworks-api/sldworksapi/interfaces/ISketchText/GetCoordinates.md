---
type: method
interface: ISketchText
member: GetCoordinates
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchText.IGetCoordinates
keywords:
  - getcoordinates
  - isketchtext
  - sketch
  - text
  - coordinates
  - object
---

# ISketchText.GetCoordinates

Gets the position of this sketch text.

## Signature

```csharp
System.Object GetCoordinates()
```
## Parameters

None.

## Return Value

Array of 3 double values, the x,y,z coordinate of the sketch text

## Remarks

To set the position of this sketch text, use
ISketchText::SetCoordinates
.

## Examples

- ISketchText (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketchText)

## See Also

- `ISketchText.IGetCoordinates`